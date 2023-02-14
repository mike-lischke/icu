window.BENCHMARK_DATA = {
  "lastUpdate": 1676389579875,
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
        "date": 1675337610100,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.808440099181786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.4922973669810375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6791904555954895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.5785391366598036,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.1718566196608173,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 2.313672853202689,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.1691258163956464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.585026685999927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.4018818126180502,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.528289657435329,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.9998806285005406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.6401403559731116,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.155060339505773,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.175737062295675,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.917212319464668,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9539902308958874,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.970881821008871,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.5906152988646862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.578189227370208,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.5783045534927709,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.3068767785127395,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.1655814706808765,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.738299050182274,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.6117959748639543,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.5503799725364047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.5798696467298365,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.9347245545081013,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.1650895666382883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.973039461706797,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 5.6371457103528835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.5788498320110103,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.9304842391735977,
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
        "date": 1675338683214,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.5927090196897637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.7163707732681206,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6790698845073544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.4839793591527313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.806968605507602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 2.240899053467353,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.1813102719467636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5772748460262596,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.40199138686179464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.329224264010781,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.931856694520027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.4850214112500857,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.807947435143137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.1721166928199236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.8082799415662096,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9512177572906856,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.416527991872197,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.5204444225017113,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.4980803976773476,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.4883343395678017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.2546353953512597,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.9213141829215146,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.7998226315771846,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.4854856026078793,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.5475743064117786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.4873567586435485,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.8086039639226987,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.807828420690512,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.133836744045464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 5.406174100288543,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.5040041510025062,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.163954323228205,
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
        "date": 1676389578651,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.762829539890035,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.5750163908902246,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6793583578508235,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.5823400448769425,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.142254749279242,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 2.2848444129055476,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.1804525296284516,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5408088069741988,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.40198198631744514,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.431857638888889,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.9870843207060616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.6777801904355927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.808192132765211,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.1199339140974702,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0177482211970696,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9546950550417801,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.74137713458087,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.5404433784120752,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.5763806217466463,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.6524544674302941,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.3133341717126723,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.90970858255973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.7417165930654175,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.5775301697528865,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.5815294296637559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.6543530778299242,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.8082799415662096,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.808014722877684,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.1878181656219953,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 5.667954793928637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.6491322919159397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.181052835036403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}