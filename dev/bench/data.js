window.BENCHMARK_DATA = {
  "lastUpdate": 1774804084871,
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
      }
    ]
  }
}