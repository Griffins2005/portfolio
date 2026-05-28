"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Github,
  Loader2,
  Lock,
  MessageSquare,
  Radio,
  Star,
  Tag,
  Trash2,
  Users,
} from "lucide-react";
import type { LiveDeskItem } from "@/lib/github";

const POLL_MS = 45_000;

type ApiOk = {
  items: LiveDeskItem[];
  fetchedAt: number;
  username: string;
  cached?: boolean;
};

type ApiErr = { error: string };

function formatSyncAge(ms: number) {
  const secs = Math.floor((Date.now() - ms) / 1000);
  if (secs < 5) return "just now";
  if (secs < 60) return `${secs}s ago`;
  return `${Math.floor(secs / 60)}m ago`;
}

function formatTime(iso: string) {
  const date = new Date(iso);
  const diff = Date.now() - date.getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function eventIcon(type: string) {
  switch (type) {
    case "PushEvent":
    case "CommitCommentEvent":
      return GitCommit;
    case "CreateEvent":
      return GitBranch;
    case "PullRequestEvent":
    case "PullRequestReviewEvent":
    case "PullRequestReviewCommentEvent":
      return GitPullRequest;
    case "IssuesEvent":
    case "IssueCommentEvent":
    case "DiscussionEvent":
      return MessageSquare;
    case "WatchEvent":
      return Star;
    case "ReleaseEvent":
      return Tag;
    case "DeleteEvent":
      return Trash2;
    case "MemberEvent":
      return Users;
    default:
      return Github;
  }
}

function visibilityBadge(item: LiveDeskItem) {
  if (item.visibility === "private") {
    return (
      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide rounded-full bg-gray-200 text-gray-700">
        Private
      </span>
    );
  }
  if (item.visibility === "external") {
    return (
      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide rounded-full border border-gray-300 text-gray-600">
        Collaboration
      </span>
    );
  }
  return null;
}

export default function LiveDeskPage() {
  const [items, setItems] = useState<LiveDeskItem[]>([]);
  const [username, setUsername] = useState("Griffins2005");
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastFetchedAt, setLastFetchedAt] = useState<number | null>(null);
  const [newIds, setNewIds] = useState<Set<string>>(new Set());
  const knownIds = useRef<Set<string>>(new Set());

  const fetchFeed = useCallback(async (initial = false) => {
    if (!initial) setSyncing(true);
    try {
      const res = await fetch("/api/live-desk", { cache: "no-store" });
      const data = (await res.json()) as ApiOk | ApiErr;

      if (!res.ok || "error" in data) {
        setError(
          "error" in data ? data.error : "Something went wrong loading activity."
        );
        return;
      }

      setError(null);
      setUsername(data.username);
      setLastFetchedAt(data.fetchedAt);

      const incoming = new Set<string>();
      const fresh: string[] = [];
      for (const item of data.items) {
        incoming.add(item.id);
        if (!knownIds.current.has(item.id)) fresh.push(item.id);
      }

      if (!initial && fresh.length > 0) {
        setNewIds(new Set(fresh));
        setTimeout(() => setNewIds(new Set()), 4000);
      }

      knownIds.current = incoming;
      setItems(data.items);
    } catch {
      setError("Could not sync with Live Desk.");
    } finally {
      setLoading(false);
      setSyncing(false);
    }
  }, []);

  useEffect(() => {
    fetchFeed(true);
    const interval = setInterval(() => fetchFeed(false), POLL_MS);
    return () => clearInterval(interval);
  }, [fetchFeed]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b-2 border-gray-900 pb-4 gap-4 sm:gap-0">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3 sm:mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
                Live Desk
              </h1>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                Live
              </span>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
              A live stream of my GitHub work. Public repos show full context; private
              and collaboration activity stays anonymous.
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2 text-sm text-gray-500">
            {syncing ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Syncing…
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Radio className="w-4 h-4" />
                {lastFetchedAt
                  ? `Updated ${formatSyncAge(lastFetchedAt)}`
                  : "Connecting…"}
              </span>
            )}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-gray-900 hover:underline"
            >
              @{username}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center space-x-3 sm:space-x-4 mb-8 sm:mb-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-sm sm:text-base">
            ↻
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Activity stream
          </h2>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 gap-3 border-2 border-gray-200 rounded-2xl bg-white">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            <p className="text-sm">Loading activity…</p>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
            {error}
          </div>
        )}

        {!loading && !error && items.length === 0 && (
          <div className="rounded-2xl border-2 border-gray-200 bg-white px-6 py-16 text-center text-gray-500 text-sm">
            No recent activity. Push a commit or open a PR on GitHub to populate this
            feed.
          </div>
        )}

        <div className="space-y-6">
          <AnimatePresence initial={false}>
            {!loading &&
              !error &&
              items.map((item) => {
                const Icon =
                  item.visibility !== "public" ? Lock : eventIcon(item.type);
                const isNew = newIds.has(item.id);
                const isRedacted = item.visibility !== "public";

                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`border-l-2 pl-6 sm:pl-8 ${
                      isNew ? "border-gray-900" : "border-gray-200"
                    }`}
                  >
                    <div
                      className={`p-5 sm:p-6 rounded-2xl border-2 transition-colors ${
                        isNew
                          ? "border-gray-900 bg-white shadow-sm"
                          : "border-gray-200 bg-white hover:border-gray-400"
                      }`}
                    >
                      <div className="flex gap-4">
                        <div
                          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                            isRedacted
                              ? "bg-gray-100 text-gray-600"
                              : "bg-gray-900 text-white"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                              {item.title}
                            </h3>
                            {visibilityBadge(item)}
                            {isNew && (
                              <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded">
                                New
                              </span>
                            )}
                            <time
                              dateTime={item.createdAt}
                              className="text-xs text-gray-500 sm:ml-auto"
                            >
                              {formatTime(item.createdAt)}
                            </time>
                          </div>

                          {item.body && (
                            <p
                              className={`text-sm leading-relaxed ${
                                isRedacted ? "text-gray-500" : "text-gray-600"
                              }`}
                            >
                              {item.body}
                            </p>
                          )}

                          <p className="text-xs text-gray-500 mt-2 font-mono truncate">
                            {item.repo}
                          </p>

                          {item.link && !isRedacted && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-gray-900 hover:underline"
                            >
                              {item.linkLabel ?? "View on GitHub"}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
          </AnimatePresence>
        </div>

        <p className="mt-10 text-xs text-gray-500 max-w-2xl leading-relaxed">
          Refreshes every {POLL_MS / 1000} seconds. Without a GitHub token, only{" "}
          <strong className="font-medium text-gray-700">public</strong> repo events
          appear here — private pushes never show up at all. With{" "}
          <code className="bg-gray-100 px-1 rounded text-gray-700">GITHUB_TOKEN</code>{" "}
          on Vercel, private work appears as redacted lines (e.g. “Pushed 3 commits to a
          private repo”) so visitors see you&apos;re active without seeing names or code.
          The token also raises API rate limits.
        </p>
      </section>
    </div>
  );
}
