const REPO_CACHE_TTL_MS = 5 * 60_000;

const repoPrivacyCache = new Map<
  string,
  { isPrivate: boolean; fetchedAt: number }
>();

export async function getPrivateRepoNames(
  repoNames: string[],
  headers: HeadersInit
): Promise<Set<string>> {
  const privateRepos = new Set<string>();
  const unique = [...new Set(repoNames)];
  const now = Date.now();

  await Promise.all(
    unique.map(async (name) => {
      const cached = repoPrivacyCache.get(name);
      if (cached && now - cached.fetchedAt < REPO_CACHE_TTL_MS) {
        if (cached.isPrivate) privateRepos.add(name);
        return;
      }

      try {
        const res = await fetch(`https://api.github.com/repos/${name}`, {
          headers,
          cache: "no-store",
        });
        if (!res.ok) return;

        const repo = (await res.json()) as { private?: boolean };
        const isPrivate = Boolean(repo.private);
        repoPrivacyCache.set(name, { isPrivate, fetchedAt: now });
        if (isPrivate) privateRepos.add(name);
      } catch {
        /* ignore lookup failures */
      }
    })
  );

  return privateRepos;
}
