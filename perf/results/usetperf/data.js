window.BENCHMARK_DATA = {
  "lastUpdate": 1675339670067,
  "repoUrl": "https://github.com/mike-lischke/icu",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "0b3b83a80966f638fae1704a6a6042596af2a757",
          "message": "ICU-22100 Improve Japanese phrase breaking performance\n\nSee #2287",
          "timestamp": "2023-01-31T00:29:41-08:00",
          "tree_id": "aa9a9bdc146e2022b3285d78f1b6d0411cfff53c",
          "url": "https://github.com/mike-lischke/icu/commit/0b3b83a80966f638fae1704a6a6042596af2a757"
        },
        "date": 1675338494201,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 68953.2867,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 110807.6381,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4992,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.305,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.1088,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14045.8159,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 45043.0003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2448.5875,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "0b3b83a80966f638fae1704a6a6042596af2a757",
          "message": "ICU-22100 Improve Japanese phrase breaking performance\n\nSee #2287",
          "timestamp": "2023-01-31T00:29:41-08:00",
          "tree_id": "aa9a9bdc146e2022b3285d78f1b6d0411cfff53c",
          "url": "https://github.com/mike-lischke/icu/commit/0b3b83a80966f638fae1704a6a6042596af2a757"
        },
        "date": 1675339668254,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57806.6281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 101028.215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4664,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.6634,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.7933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11128.0532,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 35602.7298,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1918.6509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}