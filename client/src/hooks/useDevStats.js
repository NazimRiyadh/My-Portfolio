import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'NazimRiyadh';

// Codeforces & LeetCode public APIs need CORS proxies in browser context.
// GitHub REST API is CORS-friendly and returns live data.
// CF/LC stats below are real/verified values - update manually when they change.
const STATIC_STATS = {
  codeforces: { rating: 1480, rank: 'Specialist', handle: 'nazim.riyadh' },
  leetcode: { solved: 450, handle: 'NazimRiyadh' },
};

export function useDevStats() {
  const [stats, setStats] = useState({
    github: {
      repos: null,
      followers: null,
      stars: null,
      loading: true,
      error: null,
    },
    codeforces: STATIC_STATS.codeforces,
    leetcode: STATIC_STATS.leetcode,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchGitHub() {
      try {
        // Fetch user profile
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        );
        if (!userRes.ok) throw new Error(`GitHub API: ${userRes.status}`);
        const user = await userRes.json();

        // Fetch repos to count total stars
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        );
        if (!reposRes.ok) throw new Error(`GitHub repos API: ${reposRes.status}`);
        const repos = await reposRes.json();
        const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);

        if (!cancelled) {
          setStats(prev => ({
            ...prev,
            github: {
              repos: user.public_repos,
              followers: user.followers,
              stars: totalStars,
              loading: false,
              error: null,
            },
          }));
        }
      } catch (err) {
        if (!cancelled) {
          setStats(prev => ({
            ...prev,
            github: {
              repos: null, followers: null, stars: null,
              loading: false,
              error: err.message,
            },
          }));
        }
      }
    }

    fetchGitHub();
    return () => { cancelled = true; };
  }, []);

  return stats;
}
