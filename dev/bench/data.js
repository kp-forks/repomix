window.BENCHMARK_DATA = {
  "lastUpdate": 1775145617224,
  "repoUrl": "https://github.com/kp-forks/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "distinct": true,
          "id": "406194748f0acee935e832ea0bc9050d73c59af9",
          "message": "fix(ci): Fix git switch after orphan branch creation\n\ngit switch - fails after git switch --orphan because there is no\nprevious branch reference. Save the branch name explicitly instead.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-28T02:10:38+09:00",
          "tree_id": "3ebc767a4889903e9d95c98f1d48778691170d87",
          "url": "https://github.com/kp-forks/repomix/commit/406194748f0acee935e832ea0bc9050d73c59af9"
        },
        "date": 1774804084596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1668,
            "range": "±232",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1623ms, Q3: 1855ms\nAll times: 1589, 1609, 1612, 1612, 1620, 1623, 1628, 1638, 1638, 1644, 1668, 1671, 1679, 1700, 1773, 1855, 1860, 1871, 1904, 1924ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 3063,
            "range": "±69",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 3046ms, Q3: 3115ms\nAll times: 3039, 3046, 3046, 3057, 3058, 3063, 3065, 3115, 3357, 3525ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3823,
            "range": "±14",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 3812ms, Q3: 3826ms\nAll times: 3782, 3790, 3812, 3814, 3821, 3823, 3825, 3826, 3839, 3890ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81fc9ebd9e094c97882a893f766e898c70dc3b2d",
          "message": "Merge pull request #1354 from yamadashy/chore/pr-resolve-outdated-auto-reply\n\nchore(agents): Skip confirmation and auto-reply on pr-resolve-outdated",
          "timestamp": "2026-03-29T23:08:07+09:00",
          "tree_id": "887b25858afed1fd09c61ab878862e899fe6a885",
          "url": "https://github.com/kp-forks/repomix/commit/81fc9ebd9e094c97882a893f766e898c70dc3b2d"
        },
        "date": 1775145616867,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (Linux)",
            "value": 2507,
            "range": "±69",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2468ms, Q3: 2537ms\nAll times: 2429, 2437, 2441, 2449, 2466, 2468, 2472, 2494, 2497, 2506, 2507, 2518, 2523, 2531, 2533, 2537, 2540, 2553, 2571, 2639ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3339,
            "range": "±140",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 3291ms, Q3: 3431ms\nAll times: 3001, 3051, 3223, 3261, 3288, 3291, 3292, 3297, 3322, 3332, 3339, 3349, 3362, 3367, 3426, 3431, 3451, 3501, 3713, 4075ms"
          }
        ]
      }
    ]
  }
}