import { NextResponse } from "next/server";
import {
  GITHUB_USERNAME,
  LIVE_DESK_ACTIVITY_LIMIT,
  parseGitHubEvents,
  type GitHubEvent,
  type LiveDeskItem,
} from "@/lib/github";
import { getPrivateRepoNames } from "@/lib/github-repos";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const CACHE_TTL_MS = 60_000;

let cache: { items: LiveDeskItem[]; fetchedAt: number } | null = null;

export async function GET() {
  const now = Date.now();

  if (cache && now - cache.fetchedAt < CACHE_TTL_MS) {
    return NextResponse.json({
      items: cache.items,
      fetchedAt: cache.fetchedAt,
      username: GITHUB_USERNAME,
      cached: true,
    });
  }

  const token = process.env.GITHUB_TOKEN?.trim();
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "portfolio-live-desk",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const eventsPath = token
      ? `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`
      : `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`;

    const res = await fetch(eventsPath, { headers, cache: "no-store" });

    if (!res.ok) {
      const message =
        res.status === 401
          ? "GitHub rejected GITHUB_TOKEN. Replace it in Vercel env vars."
          : res.status === 403
            ? "GitHub rate limit reached. Try again shortly or add GITHUB_TOKEN on Vercel."
            : `GitHub API error (${res.status})`;
      return NextResponse.json({ error: message }, { status: res.status });
    }

    const events = (await res.json()) as GitHubEvent[];
    const privateRepos = token
      ? await getPrivateRepoNames(
          events.map((e) => e.repo.name),
          headers
        )
      : new Set<string>();
    const items = parseGitHubEvents(events, {
      privateRepos,
      username: GITHUB_USERNAME,
    }).slice(0, LIVE_DESK_ACTIVITY_LIMIT);

    cache = { items, fetchedAt: now };

    return NextResponse.json({
      items,
      fetchedAt: now,
      username: GITHUB_USERNAME,
      cached: false,
    });
  } catch {
    return NextResponse.json(
      { error: "Could not reach GitHub. Check your connection." },
      { status: 502 }
    );
  }
}
