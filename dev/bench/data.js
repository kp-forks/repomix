window.BENCHMARK_DATA = {
  "lastUpdate": 1777819271936,
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
          "id": "eca9ad78cdcb222c8e545b60953bbbc4930c231d",
          "message": "Merge pull request #1419 from yamadashy/chore/website-update-repomix-dep\n\nchore(website): Update repomix dependency to latest main",
          "timestamp": "2026-04-06T18:44:45+09:00",
          "tree_id": "93d21cb9f6190905ac9414a7c8422dbe0c0497fb",
          "url": "https://github.com/kp-forks/repomix/commit/eca9ad78cdcb222c8e545b60953bbbc4930c231d"
        },
        "date": 1775657361249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1608,
            "range": "±216",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1540ms, Q3: 1756ms\nAll times: 1340, 1413, 1431, 1483, 1488, 1504, 1540, 1540, 1547, 1547, 1554, 1559, 1565, 1589, 1600, 1608, 1613, 1666, 1667, 1688, 1698, 1728, 1756, 1797, 1799, 1872, 1910, 1950, 2149, 2280ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1924,
            "range": "±52",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1904ms, Q3: 1956ms\nAll times: 1879, 1884, 1885, 1898, 1900, 1904, 1912, 1920, 1922, 1924, 1924, 1938, 1943, 1943, 1955, 1956, 1962, 2058, 2186, 2329ms"
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
          "id": "eafa70a7ca875f6737a86349397d3233c2d9fa13",
          "message": "Merge pull request #1430 from yamadashy/dependabot/npm_and_yarn/npm_and_yarn-8578f1e909\n\nchore(deps): Bump the npm_and_yarn group across 3 directories with 3 updates",
          "timestamp": "2026-04-08T22:37:37+09:00",
          "tree_id": "3d87db94a20a0f2feff45bacc1f036810046d91c",
          "url": "https://github.com/kp-forks/repomix/commit/eafa70a7ca875f6737a86349397d3233c2d9fa13"
        },
        "date": 1776000816588,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1367,
            "range": "±187",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1264ms, Q3: 1451ms\nAll times: 1141, 1169, 1225, 1231, 1235, 1245, 1256, 1264, 1275, 1278, 1299, 1321, 1321, 1348, 1359, 1367, 1368, 1386, 1387, 1395, 1397, 1438, 1451, 1454, 1463, 1475, 1488, 1502, 1577, 1740ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2458,
            "range": "±201",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2420ms, Q3: 2621ms\nAll times: 2380, 2388, 2400, 2408, 2408, 2420, 2424, 2430, 2441, 2445, 2458, 2465, 2480, 2570, 2590, 2621, 2707, 3017, 3093, 3245ms"
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
          "id": "9b8a46fa135972fcf81eee7784e121fea21fa909",
          "message": "Merge pull request #1456 from yamadashy/perf/security-neutralize-profiler-via-perf-hooks\n\nperf(security): Patch perf_hooks.performance.mark to neutralize duplicate @secretlint/profiler singletons",
          "timestamp": "2026-04-12T14:32:33+09:00",
          "tree_id": "60517fe20d1566b026620d79c20c15600ec69698",
          "url": "https://github.com/kp-forks/repomix/commit/9b8a46fa135972fcf81eee7784e121fea21fa909"
        },
        "date": 1776162958661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1449,
            "range": "±423",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1281ms, Q3: 1704ms\nAll times: 1129, 1166, 1178, 1189, 1205, 1235, 1256, 1281, 1290, 1321, 1338, 1343, 1354, 1372, 1424, 1449, 1458, 1540, 1573, 1577, 1585, 1627, 1704, 1938, 1946, 1958, 1967, 1972, 1981, 2389ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1870,
            "range": "±26",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1864ms, Q3: 1890ms\nAll times: 1824, 1827, 1830, 1852, 1855, 1864, 1865, 1865, 1867, 1869, 1870, 1871, 1877, 1884, 1890, 1890, 1890, 1894, 1901, 1908ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2659,
            "range": "±590",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2161ms, Q3: 2751ms\nAll times: 2140, 2143, 2144, 2146, 2149, 2161, 2162, 2169, 2216, 2227, 2659, 2665, 2705, 2709, 2712, 2751, 2773, 2774, 2807, 2862ms"
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
          "id": "c55528df3718b5adb0952da0a72efcb7772cc482",
          "message": "Merge pull request #1469 from yamadashy/perf/reduce-module-overhead\n\nperf(core): Remove redundant minimatch and parallelize wrapper tokenization",
          "timestamp": "2026-04-15T22:24:43+09:00",
          "tree_id": "435703feb2ba6845db791f74a54749dcaf047bb4",
          "url": "https://github.com/kp-forks/repomix/commit/c55528df3718b5adb0952da0a72efcb7772cc482"
        },
        "date": 1776506285744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 893,
            "range": "±69",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 882ms, Q3: 951ms\nAll times: 853, 862, 864, 865, 866, 873, 878, 882, 882, 883, 884, 885, 887, 887, 892, 893, 904, 906, 910, 939, 944, 946, 951, 960, 980, 988, 1052, 1065, 1070, 1079ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1508,
            "range": "±36",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1495ms, Q3: 1531ms\nAll times: 1480, 1485, 1486, 1488, 1490, 1495, 1498, 1500, 1500, 1507, 1508, 1509, 1509, 1514, 1516, 1531, 1567, 1604, 1764, 1846ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1465,
            "range": "±299",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1454ms, Q3: 1753ms\nAll times: 1437, 1442, 1442, 1450, 1451, 1454, 1454, 1459, 1462, 1462, 1465, 1473, 1478, 1695, 1743, 1753, 1773, 1777, 1783, 1790ms"
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
          "id": "99ea7d2de7a5730498cac249c70f520e485cd92a",
          "message": "Merge pull request #1505 from yamadashy/chore/temp-disable-website-auto-pack\n\nchore(website): Temporarily disable auto-pack on repo query param",
          "timestamp": "2026-04-24T00:44:21+09:00",
          "tree_id": "87a8740ca2718ea06aada55e42ae49584c201325",
          "url": "https://github.com/kp-forks/repomix/commit/99ea7d2de7a5730498cac249c70f520e485cd92a"
        },
        "date": 1777137323269,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1392,
            "range": "±108",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1362ms, Q3: 1470ms\nAll times: 1246, 1280, 1290, 1308, 1324, 1334, 1361, 1362, 1365, 1369, 1372, 1376, 1379, 1385, 1390, 1392, 1398, 1405, 1409, 1413, 1434, 1462, 1470, 1476, 1493, 1495, 1504, 1540, 1557, 1670ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1486,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1478ms, Q3: 1501ms\nAll times: 1452, 1455, 1455, 1470, 1475, 1478, 1479, 1479, 1484, 1485, 1486, 1486, 1489, 1493, 1495, 1501, 1506, 1506, 1521, 1521ms"
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
          "id": "3ea06cb1080fa18ad421b4886f7e5deba06998cb",
          "message": "Merge pull request #1513 from yamadashy/dependabot/npm_and_yarn/browser/npm_and_yarn-87d6b5a2fd\n\nchore(deps): Bump the npm_and_yarn group across 2 directories with 1 update",
          "timestamp": "2026-04-25T20:07:33+09:00",
          "tree_id": "d387086ba4496e01b616543a304cfa0fd133a83f",
          "url": "https://github.com/kp-forks/repomix/commit/3ea06cb1080fa18ad421b4886f7e5deba06998cb"
        },
        "date": 1777308385920,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 954,
            "range": "±112",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 936ms, Q3: 1048ms\nAll times: 870, 879, 909, 925, 926, 929, 933, 936, 936, 940, 944, 946, 948, 948, 952, 954, 956, 961, 969, 972, 974, 1005, 1048, 1082, 1091, 1155, 1433, 1460, 1483, 1619ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2372,
            "range": "±73",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2331ms, Q3: 2404ms\nAll times: 2302, 2323, 2329, 2330, 2331, 2331, 2340, 2340, 2351, 2357, 2372, 2374, 2376, 2395, 2396, 2404, 2405, 2406, 2407, 2407ms"
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
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "distinct": true,
          "id": "7dfd2b96657cc88ff60b8ec1fd88b467aa1f8aba",
          "message": "1.14.0",
          "timestamp": "2026-04-26T23:04:36+09:00",
          "tree_id": "32caaa33ce128e019313d6503d78fe49367f33c5",
          "url": "https://github.com/kp-forks/repomix/commit/7dfd2b96657cc88ff60b8ec1fd88b467aa1f8aba"
        },
        "date": 1777479311972,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 914,
            "range": "±89",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 856ms, Q3: 945ms\nAll times: 832, 833, 834, 837, 838, 840, 853, 856, 858, 879, 885, 890, 906, 909, 911, 914, 917, 924, 924, 931, 935, 937, 945, 958, 967, 993, 1017, 1061, 1187, 1418ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1407,
            "range": "±39",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1392ms, Q3: 1431ms\nAll times: 1378, 1379, 1388, 1389, 1392, 1392, 1394, 1397, 1397, 1405, 1407, 1413, 1419, 1420, 1427, 1431, 1431, 1433, 1450, 1479ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1743,
            "range": "±46",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 1713ms, Q3: 1759ms\nAll times: 1703, 1709, 1710, 1712, 1713, 1722, 1733, 1734, 1741, 1743, 1746, 1750, 1751, 1754, 1759, 1768, 1771, 1773, 1796ms"
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
          "id": "758ab51bac0bbca668e073982f3eef423173a8f0",
          "message": "Merge pull request #1521 from yamadashy/claude/sleepy-tesla-LdYQq\n\nperf(core): Automated performance tuning by Claude",
          "timestamp": "2026-04-30T00:46:07+09:00",
          "tree_id": "5a02c96a3f72c02f459aaf39b1f5b2e46979fb50",
          "url": "https://github.com/kp-forks/repomix/commit/758ab51bac0bbca668e073982f3eef423173a8f0"
        },
        "date": 1777656209913,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1235,
            "range": "±148",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1181ms, Q3: 1329ms\nAll times: 1109, 1123, 1125, 1154, 1161, 1175, 1181, 1181, 1183, 1184, 1186, 1198, 1202, 1203, 1209, 1235, 1246, 1250, 1251, 1288, 1325, 1328, 1329, 1334, 1339, 1348, 1349, 1392, 1476, 1479ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1378,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1367ms, Q3: 1384ms\nAll times: 1336, 1360, 1361, 1362, 1364, 1367, 1368, 1372, 1374, 1376, 1378, 1380, 1382, 1383, 1383, 1384, 1385, 1388, 1392, 1412ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1808,
            "range": "±27",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1790ms, Q3: 1817ms\nAll times: 1764, 1777, 1782, 1787, 1788, 1790, 1794, 1798, 1804, 1807, 1808, 1811, 1812, 1813, 1815, 1817, 1832, 1834, 1838, 1845ms"
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
          "id": "253b95fba5a7117ebfbee5147a4861746459aad6",
          "message": "Merge pull request #1525 from yamadashy/feat/nix-flake-devshell\n\nfeat(nix): Add Nix flake with development shell",
          "timestamp": "2026-05-01T00:41:32+09:00",
          "tree_id": "d94fd2a6bab89f43b201cc6132c3dc7ddf64894c",
          "url": "https://github.com/kp-forks/repomix/commit/253b95fba5a7117ebfbee5147a4861746459aad6"
        },
        "date": 1777819270750,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 807,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 787ms, Q3: 816ms\nAll times: 761, 770, 773, 777, 781, 782, 783, 787, 789, 790, 794, 796, 798, 799, 800, 807, 808, 810, 810, 813, 813, 815, 816, 821, 827, 839, 876, 880, 989, 1013ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1390,
            "range": "±31",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1373ms, Q3: 1404ms\nAll times: 1359, 1360, 1364, 1365, 1368, 1373, 1375, 1380, 1384, 1389, 1390, 1393, 1393, 1398, 1401, 1404, 1406, 1407, 1413, 1416ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1840,
            "range": "±92",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 1790ms, Q3: 1882ms\nAll times: 1776, 1776, 1785, 1788, 1790, 1798, 1814, 1814, 1816, 1840, 1850, 1856, 1863, 1870, 1882, 1893, 1894, 1902, 1909ms"
          }
        ]
      }
    ]
  }
}