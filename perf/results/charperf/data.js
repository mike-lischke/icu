window.BENCHMARK_DATA = {
  "lastUpdate": 1675338575474,
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
        "date": 1675338574159,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestIsAlpha",
            "value": 3.9992,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsUpper",
            "value": 4.373,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsLower",
            "value": 4.3531,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsDigit",
            "value": 3.9987,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsSpace",
            "value": 5.1759,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsAlphaNumeric",
            "value": 3.999,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsPrint",
            "value": 4.3604,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsControl",
            "value": 4.373,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestToLower",
            "value": 5.199,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestToUpper",
            "value": 5.0095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsWhiteSpace",
            "value": 5.5775,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}