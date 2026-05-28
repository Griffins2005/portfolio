export const GITHUB_USERNAME =
  process.env.GITHUB_USERNAME?.trim() || "Griffins2005";

export type RepoVisibility =
  | "public"
  | "private"
  | "external"
  | "external-private";

export type LiveDeskItem = {
  id: string;
  type: string;
  title: string;
  body: string;
  repo: string;
  repoUrl: string;
  link?: string;
  linkLabel?: string;
  createdAt: string;
  visibility: RepoVisibility;
};

export type GitHubEvent = {
  id: string;
  type: string;
  created_at: string;
  /** False when the event occurred on a private repository (authenticated feed only). */
  public?: boolean;
  repo: { name: string; url: string };
  payload: Record<string, unknown>;
};

export const LIVE_DESK_ACTIVITY_LIMIT = 15;

const ACTION_LABELS: Record<string, string> = {
  opened: "Opened",
  closed: "Closed",
  reopened: "Reopened",
  merged: "Merged",
  synchronize: "Updated",
  edited: "Edited",
  deleted: "Deleted",
  created: "Created",
  published: "Published",
  prereleased: "Pre-released",
  released: "Released",
  submitted: "Submitted",
  dismissed: "Dismissed",
  added: "Added",
  removed: "Removed",
  started: "Started",
  unassigned: "Unassigned",
  assigned: "Assigned",
  labeled: "Labeled",
  unlabeled: "Unlabeled",
};

function repoHtmlUrl(name: string) {
  return `https://github.com/${name}`;
}

function repoOwner(repoName: string): string {
  return repoName.split("/")[0]?.toLowerCase() ?? "";
}

function branchFromRef(ref: unknown): string | null {
  if (typeof ref !== "string" || !ref.startsWith("refs/heads/")) return null;
  return ref.replace("refs/heads/", "");
}

function formatAction(action: string | undefined, fallback = "Updated"): string {
  if (!action) return fallback;
  return ACTION_LABELS[action] ?? action.charAt(0).toUpperCase() + action.slice(1);
}

function pushCommitCount(payload: Record<string, unknown>): number {
  const commits = payload.commits;
  if (Array.isArray(commits) && commits.length > 0) return commits.length;
  if (typeof payload.size === "number" && payload.size > 0) return payload.size;
  if (typeof payload.distinct_size === "number" && payload.distinct_size > 0) {
    return payload.distinct_size;
  }
  return 1;
}

type RedactedVisibility = Exclude<RepoVisibility, "public">;

function wherePhrase(visibility: RedactedVisibility): string {
  switch (visibility) {
    case "private":
      return "a private repo";
    case "external":
      return "another person's repo";
    case "external-private":
      return "another person's private repo";
  }
}

function redactedRepoLabel(visibility: RedactedVisibility): string {
  switch (visibility) {
    case "private":
      return "Private";
    case "external":
      return "Collaboration";
    case "external-private":
      return "Private collaboration";
  }
}

function reviewStateLabel(state: string | undefined): string {
  switch (state) {
    case "approved":
      return "approved";
    case "changes_requested":
      return "requested changes on";
    case "commented":
      return "commented on";
    default:
      return "reviewed";
  }
}

export function getRepoVisibility(
  event: GitHubEvent,
  privateRepos: Set<string>,
  username: string
): RepoVisibility {
  const isPrivate =
    event.public === false || privateRepos.has(event.repo.name);
  const isExternal =
    repoOwner(event.repo.name) !== username.toLowerCase();

  if (isPrivate && isExternal) return "external-private";
  if (isPrivate) return "private";
  if (isExternal) return "external";
  return "public";
}

function redactEvent(
  event: GitHubEvent,
  visibility: RedactedVisibility
): LiveDeskItem {
  const where = wherePhrase(visibility);
  const payload = event.payload;
  const base: LiveDeskItem = {
    id: String(event.id),
    type: event.type,
    title: "",
    body: "",
    repo: redactedRepoLabel(visibility),
    repoUrl: "",
    createdAt: event.created_at,
    visibility,
  };

  switch (event.type) {
    case "PushEvent": {
      const n = pushCommitCount(payload);
      return {
        ...base,
        title: `Pushed ${n} commit${n === 1 ? "" : "s"} to ${where}`,
      };
    }
    case "CreateEvent": {
      const refType = payload.ref_type as string | undefined;
      if (refType === "repository") {
        return { ...base, title: `Created ${where}` };
      }
      if (refType === "branch") {
        return { ...base, title: `Created a branch on ${where}` };
      }
      if (refType === "tag") {
        return { ...base, title: `Created a tag on ${where}` };
      }
      return { ...base, title: `Created a resource on ${where}` };
    }
    case "DeleteEvent": {
      const refType = payload.ref_type as string | undefined;
      return {
        ...base,
        title: `Deleted a ${refType ?? "reference"} on ${where}`,
      };
    }
    case "PullRequestEvent":
      return {
        ...base,
        title: `${formatAction(payload.action as string)} a pull request on ${where}`,
      };
    case "PullRequestReviewEvent": {
      const review = payload.review as { state?: string } | undefined;
      const verb = reviewStateLabel(review?.state);
      return {
        ...base,
        title: `${verb.charAt(0).toUpperCase() + verb.slice(1)} a pull request on ${where}`,
      };
    }
    case "PullRequestReviewCommentEvent":
      return {
        ...base,
        title: `Commented on a pull request review on ${where}`,
      };
    case "IssuesEvent":
      return {
        ...base,
        title: `${formatAction(payload.action as string)} an issue on ${where}`,
      };
    case "IssueCommentEvent":
      return {
        ...base,
        title: `Commented on an issue on ${where}`,
      };
    case "CommitCommentEvent":
      return {
        ...base,
        title: `Commented on a commit on ${where}`,
      };
    case "ReleaseEvent":
      return {
        ...base,
        title: `${formatAction(payload.action as string)} a release on ${where}`,
      };
    case "WatchEvent":
      return { ...base, title: `Starred ${where}` };
    case "ForkEvent":
      return { ...base, title: `Forked ${where}` };
    case "PublicEvent":
      return { ...base, title: `Made ${where} public` };
    case "MemberEvent":
      return {
        ...base,
        title: `${formatAction(payload.action as string, "Updated")} a collaborator on ${where}`,
      };
    case "GollumEvent":
      return { ...base, title: `Updated the wiki on ${where}` };
    case "DiscussionEvent":
      return {
        ...base,
        title: `${formatAction(payload.action as string)} a discussion on ${where}`,
      };
    default:
      return {
        ...base,
        title: `${event.type.replace(/Event$/, "")} on ${where}`,
      };
  }
}

export function parseGitHubEvents(
  events: GitHubEvent[],
  options: { privateRepos?: Set<string>; username?: string } = {}
): LiveDeskItem[] {
  const { privateRepos = new Set(), username = GITHUB_USERNAME } = options;

  return events
    .map((event) => {
      const visibility = getRepoVisibility(event, privateRepos, username);
      if (visibility !== "public") {
        return redactEvent(event, visibility);
      }
      const item = parseEvent(event);
      if (!item) return null;
      return item;
    })
    .filter((item): item is LiveDeskItem => item !== null);
}

function parseEvent(event: GitHubEvent): LiveDeskItem | null {
  const base = {
    id: String(event.id),
    type: event.type,
    repo: event.repo.name,
    repoUrl: repoHtmlUrl(event.repo.name),
    createdAt: event.created_at,
    visibility: "public" as const,
  };

  const payload = event.payload;

  switch (event.type) {
    case "PushEvent": {
      const commits = Array.isArray(payload.commits)
        ? (payload.commits as { sha?: string; message?: string }[])
        : [];
      const branch = branchFromRef(payload.ref);
      const head =
        typeof payload.head === "string" ? payload.head : commits[0]?.sha;
      const count = pushCommitCount(payload);
      const preview =
        commits[0]?.message?.split("\n")[0]?.slice(0, 120) ||
        (count > 1
          ? `${count} commits pushed`
          : "Repository updated");
      const more =
        count > 1 && commits.length > 1
          ? ` (+${Math.min(count, commits.length) - 1} more)`
          : "";

      return {
        ...base,
        title: branch
          ? `Pushed ${count} commit${count === 1 ? "" : "s"} to ${branch}`
          : `Pushed ${count} commit${count === 1 ? "" : "s"}`,
        body: `${preview}${more}`,
        link: head ? `${base.repoUrl}/commit/${head}` : base.repoUrl,
        linkLabel: head ? "View commit" : "View repo",
      };
    }

    case "CreateEvent": {
      const refType = payload.ref_type as string | undefined;
      const ref = payload.ref as string | undefined;
      if (refType === "repository") {
        return {
          ...base,
          title: "Created repository",
          body: event.repo.name.split("/")[1] ?? event.repo.name,
          link: base.repoUrl,
          linkLabel: "Open repo",
        };
      }
      if (refType === "branch" && ref) {
        return {
          ...base,
          title: `Created branch ${ref}`,
          body: event.repo.name,
          link: `${base.repoUrl}/tree/${ref}`,
          linkLabel: "View branch",
        };
      }
      if (refType === "tag" && ref) {
        return {
          ...base,
          title: `Created tag ${ref}`,
          body: event.repo.name,
          link: `${base.repoUrl}/releases/tag/${ref}`,
          linkLabel: "View tag",
        };
      }
      return null;
    }

    case "DeleteEvent": {
      const refType = payload.ref_type as string | undefined;
      const ref = payload.ref as string | undefined;
      const label =
        refType === "branch"
          ? "branch"
          : refType === "tag"
            ? "tag"
            : (refType ?? "reference");
      return {
        ...base,
        title: `Deleted ${label}${ref ? ` ${ref}` : ""}`,
        body: event.repo.name,
        link: base.repoUrl,
        linkLabel: "View repo",
      };
    }

    case "PullRequestEvent": {
      const pr = payload.pull_request as
        | {
            title?: string;
            html_url?: string;
            number?: number;
            merged?: boolean;
          }
        | undefined;
      const action = payload.action as string | undefined;
      if (!pr) return null;
      const merged = action === "closed" && pr.merged === true;
      const title = merged
        ? `Merged pull request #${pr.number ?? ""}`.trim()
        : `${formatAction(action)} pull request #${pr.number ?? ""}`.trim();
      return {
        ...base,
        title,
        body: pr.title ?? "",
        link: pr.html_url,
        linkLabel: pr.number ? `PR #${pr.number}` : "View PR",
      };
    }

    case "PullRequestReviewEvent": {
      const pr = payload.pull_request as
        | { title?: string; html_url?: string; number?: number }
        | undefined;
      const review = payload.review as { state?: string; html_url?: string } | undefined;
      const action = payload.action as string | undefined;
      if (!pr) return null;
      const state = review?.state;
      let title: string;
      if (action === "dismissed") {
        title = `Dismissed a review on PR #${pr.number ?? ""}`.trim();
      } else if (state === "approved") {
        title = `Approved PR #${pr.number ?? ""}`.trim();
      } else if (state === "changes_requested") {
        title = `Requested changes on PR #${pr.number ?? ""}`.trim();
      } else if (state === "commented") {
        title = `Reviewed PR #${pr.number ?? ""}`.trim();
      } else {
        title = `Submitted a review on PR #${pr.number ?? ""}`.trim();
      }
      return {
        ...base,
        title,
        body: pr.title ?? "",
        link: review?.html_url ?? pr.html_url,
        linkLabel: "View review",
      };
    }

    case "PullRequestReviewCommentEvent": {
      const pr = payload.pull_request as
        | { title?: string; html_url?: string; number?: number }
        | undefined;
      const comment = payload.comment as { html_url?: string } | undefined;
      if (!pr) return null;
      return {
        ...base,
        title: `Commented on PR #${pr.number ?? ""}`.trim(),
        body: pr.title ?? "Pull request review comment",
        link: comment?.html_url ?? pr.html_url,
        linkLabel: "View comment",
      };
    }

    case "IssuesEvent": {
      const issue = payload.issue as
        | { title?: string; html_url?: string; number?: number }
        | undefined;
      const action = payload.action as string | undefined;
      if (!issue) return null;
      return {
        ...base,
        title: `${formatAction(action)} issue #${issue.number ?? ""}`.trim(),
        body: issue.title ?? "",
        link: issue.html_url,
        linkLabel: issue.number ? `Issue #${issue.number}` : "View issue",
      };
    }

    case "IssueCommentEvent": {
      const issue = payload.issue as
        | { title?: string; html_url?: string; number?: number }
        | undefined;
      const comment = payload.comment as { html_url?: string } | undefined;
      if (!issue) return null;
      return {
        ...base,
        title: `Commented on issue #${issue.number ?? ""}`.trim(),
        body: issue.title ?? "Issue comment",
        link: comment?.html_url ?? issue.html_url,
        linkLabel: "View comment",
      };
    }

    case "CommitCommentEvent": {
      const comment = payload.comment as
        | { html_url?: string; commit_id?: string }
        | undefined;
      return {
        ...base,
        title: "Commented on a commit",
        body: event.repo.name,
        link: comment?.html_url,
        linkLabel: "View comment",
      };
    }

    case "WatchEvent":
      return {
        ...base,
        title: "Starred repository",
        body: event.repo.name,
        link: base.repoUrl,
        linkLabel: "View repo",
      };

    case "ForkEvent": {
      const fork = payload.forkee as { html_url?: string; full_name?: string } | undefined;
      return {
        ...base,
        title: "Forked repository",
        body: fork?.full_name ?? event.repo.name,
        link: fork?.html_url ?? base.repoUrl,
        linkLabel: "View fork",
      };
    }

    case "ReleaseEvent": {
      const release = payload.release as
        | { name?: string; tag_name?: string; html_url?: string }
        | undefined;
      const action = payload.action as string | undefined;
      return {
        ...base,
        title: `${formatAction(action)} release`,
        body:
          release?.name ||
          release?.tag_name ||
          event.repo.name,
        link: release?.html_url ?? base.repoUrl,
        linkLabel: release?.tag_name ?? "View release",
      };
    }

    case "PublicEvent":
      return {
        ...base,
        title: "Published repository",
        body: event.repo.name,
        link: base.repoUrl,
        linkLabel: "View repo",
      };

    case "MemberEvent": {
      const action = payload.action as string | undefined;
      const member = payload.member as { login?: string; html_url?: string } | undefined;
      const login = member?.login ?? "a collaborator";
      return {
        ...base,
        title:
          action === "added"
            ? `Added ${login} as collaborator`
            : action === "removed"
              ? `Removed ${login} from collaborators`
              : `Updated collaborators`,
        body: event.repo.name,
        link: member?.html_url ?? base.repoUrl,
        linkLabel: member?.login ? `@${member.login}` : "View repo",
      };
    }

    case "GollumEvent": {
      const pages = Array.isArray(payload.pages)
        ? (payload.pages as { page_name?: string; action?: string }[])
        : [];
      const page = pages[0];
      const pageAction = page?.action
        ? formatAction(page.action, "Updated")
        : "Updated";
      return {
        ...base,
        title: `${pageAction} wiki`,
        body: page?.page_name
          ? `${page.page_name} · ${event.repo.name}`
          : event.repo.name,
        link: `${base.repoUrl}/wiki`,
        linkLabel: "View wiki",
      };
    }

    case "DiscussionEvent": {
      const discussion = payload.discussion as
        | { title?: string; html_url?: string }
        | undefined;
      const action = payload.action as string | undefined;
      if (!discussion) return null;
      return {
        ...base,
        title: `${formatAction(action)} discussion`,
        body: discussion.title ?? event.repo.name,
        link: discussion.html_url,
        linkLabel: "View discussion",
      };
    }

    default:
      return {
        ...base,
        title: event.type.replace(/([A-Z])/g, " $1").replace(/Event$/, "").trim(),
        body: event.repo.name,
        link: base.repoUrl,
        linkLabel: "View on GitHub",
      };
  }
}
