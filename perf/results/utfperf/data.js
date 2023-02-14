window.BENCHMARK_DATA = {
  "lastUpdate": 1676388409811,
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
        "date": 1675338165515,
        "tool": "ndjson",
        "benches": [
          {
            "name": "Roundtrip",
            "value": 12.6512,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "FromUnicode",
            "value": 4.9414,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "FromUTF8",
            "value": 2.7923,
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
        "date": 1675339374770,
        "tool": "ndjson",
        "benches": [
          {
            "name": "Roundtrip",
            "value": 12.0793,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "FromUnicode",
            "value": 4.3096,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "FromUTF8",
            "value": 3.3351,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "c91c2fbdc5c20fbbb62e4aeca24e887a074b2c6b",
          "message": "ICU-22257 BRS doc: J with little-endian data automatic since ICU 70",
          "timestamp": "2023-02-13T17:12:04-08:00",
          "tree_id": "218d2e4d87b573bb862b9bed78e6b77905949e88",
          "url": "https://github.com/mike-lischke/icu/commit/c91c2fbdc5c20fbbb62e4aeca24e887a074b2c6b"
        },
        "date": 1676388407892,
        "tool": "ndjson",
        "benches": [
          {
            "name": "Roundtrip",
            "value": 11.717,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "FromUnicode",
            "value": 4.7594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "FromUTF8",
            "value": 2.669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}