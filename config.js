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
    "note": "A dark surface layer was observed on part of VIC1. Its composition may match a historic protective coating. Reflectance Transformation Imaging allows the surface texture and boundaries of this layer to be examined under adjustable lighting.",
    "media": "RTI_5",
    "position": [
      0.58994,
      1.22229,
      1.01252
    ]
  },
  {
    "title": "Internal deterioration",
    "note": "Internal cracks, voids and material loss show how damage extends beyond the exposed surface.",
    "imageUrl": "",
    "imageCaption": "",
    "media": "CT",
    "position": [
      -0.33832,
      1.28266,
      -1.34197
    ],
    "normal": [
      0.88703,
      -0.1429,
      -0.43904
    ]
  }
]
};
