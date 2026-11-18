// VIC1 publicly deployed configuration. The index.html also contains safe URL fallbacks.
// Both normal and ?edit=1 use this same configuration.
window.VIC1_CONFIG = {
  title: 'VIC1 · HMS Victory',
  subtitle: 'Explore surface details, interactive RTI and internal micro-CT.',
  objUrl: 'https://pub-e39fee6f3f244227a4840cf2fb01d645.r2.dev/Model_3.obj',
  rtiViewerUrl: 'https://vic1-rti-viewer.vercel.app/',
  ctViewerUrl: 'https://historic-timber-ct-viewer-j4m8.vercel.app/',
  hotspots: [
  {
    "title": "Historic surface coating",
    "note": "A dark surface layer was observed on part of VIC1; its composition matches a historic protective coating.",
    "imageUrl": "",
    "imageCaption": "",
    "media": "RTI_5",
    "position": [
      0.3164853,
      1.1652185,
      1.0185013
    ],
    "anchor": {
      "meshIndex": 0,
      "localPosition": [
        81.1739731,
        116.3544251,
        99.0967304
      ]
    },
    "normal": [
      -0.29481,
      0.06129,
      0.95359
    ]
  },
  {
    "title": "Internal deterioration",
    "note": "Micro-CT reveals internal cracks, voids and material loss, particularly near the upper timber interface where moisture may have accumulated and drying was restricted. Fungal and deathwatch beetles are likely to have contributed to the deterioration of the wood.",
    "imageUrl": "",
    "imageCaption": "",
    "media": "CT",
    "position": [
      -0.4289544,
      0.8653357,
      -0.8680323
    ],
    "anchor": {
      "meshIndex": 0,
      "localPosition": [
        55.2730881,
        105.9347616,
        33.5476478
      ]
    },
    "normal": [
      -0.68861,
      0.50407,
      -0.52128
    ]
  },
  {
    "title": "Better-preserved wood",
    "note": "This region retained a more continuous internal structure than the heavily deteriorated area nearby. This difference suggests that deterioration was unevenly distributed within the same timber due to the water ingress pathway.",
    "imageUrl": "",
    "imageCaption": "",
    "media": "RTI_2",
    "position": [
      0.1876793,
      -0.6983966,
      -1.4367983
    ],
    "anchor": {
      "meshIndex": 0,
      "localPosition": [
        76.6985099,
        51.601662,
        13.7854269
      ]
    },
    "normal": [
      0.0569,
      0.01482,
      -0.99827
    ]
  }
]
};
