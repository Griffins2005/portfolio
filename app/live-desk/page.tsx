"use client";

import { useCallback, useEffect, useState } from "react";
import { Loader2, Radio } from "lucide-react";
import type { LiveDeskItem } from "@/lib/github";

const POLL_MS = 45_000;

type ApiOk = {
  items: LiveDeskItem[];
  fetchedAt: number;
  username: string;
};

type ApiErr = { error: string };

function formatSyncAge(ms: number) {
  const secs = Math.floor((Date.now() - ms) / 1000);
  if (secs < 5) return "just now";
  if (secs < 60) return `${secs}s ago`;
  return `${Math.floor(secs / 60)}m ago`;
}

function formatTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return "now";
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h`;
  return `${Math.floor(hrs / 24)}d`;
}

export default function LiveDeskPage() {
  const [items, setItems] = useState<LiveDeskItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastFetchedAt, setLastFetchedAt] = useState<number | null>(null);

  const fetchFeed = useCallback(async (initial = false) => {
    if (!initial) setSyncing(true);
    try {
      const res = await fetch("/api/live-desk", { cache: "no-store" });
      const data = (await res.json()) as ApiOk | ApiErr;

      if (!res.ok || "error" in data) {
        setError(
          "error" in data ? data.error : "Could not load activity."
        );
        return;
      }

      setError(null);
      setLastFetchedAt(data.fetchedAt);
      setItems(data.items);
    } catch {
      setError("Could not load activity.");
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
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-gray-900 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
              Live Desk
            </h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-900 text-white text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              Live
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {syncing ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Syncing
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Radio className="w-4 h-4" />
                {lastFetchedAt
                  ? `Updated ${formatSyncAge(lastFetchedAt)}`
                  : "Connecting"}
              </span>
            )}
          </div>
        </div>

        {loading && (
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Loading…
          </p>
        )}

        {!loading && error && (
          <p className="text-sm text-gray-600">{error}</p>
        )}

        {!loading && !error && items.length === 0 && (
          <p className="text-sm text-gray-500">No recent activity.</p>
        )}

        {!loading && !error && items.length > 0 && (
          <ul className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory">
            {items.map((item) => {
              const isRedacted = item.visibility !== "public";

              return (
                <li
                  key={item.id}
                  className="snap-start shrink-0 w-[11.5rem] sm:w-[12.5rem] flex flex-col justify-between min-h-[7rem] p-3 rounded-xl border border-gray-200 bg-white hover:border-gray-400 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-xs text-gray-900 leading-snug line-clamp-3 flex-1">
                      {item.title}
                    </p>
                    <time
                      dateTime={item.createdAt}
                      className="text-[10px] text-gray-400 shrink-0 tabular-nums"
                    >
                      {formatTime(item.createdAt)}
                    </time>
                  </div>

                  <div className="mt-auto">
                    {isRedacted ? (
                      <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                        {item.visibility === "private"
                          ? "private"
                          : item.visibility === "external-private"
                            ? "private collaboration"
                            : "collaboration"}
                      </p>
                    ) : (
                      <>
                        {item.body && (
                          <p className="text-[11px] text-gray-500 line-clamp-2 mb-1">
                            {item.body}
                          </p>
                        )}
                        <p className="text-[10px] text-gray-400 font-mono truncate">
                          {item.repo.split("/")[1] ?? item.repo}
                        </p>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
