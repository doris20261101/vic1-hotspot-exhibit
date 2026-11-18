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
  }
]
};
