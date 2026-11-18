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
   
    ]
  }
    [
  {
    "title": "Historic surface coating",
    "note": "A dark surface layer was observed on part of VIC1. Its composition may match a historic protective coating. Reflectance Transformation Imaging allows the surface texture and boundaries of this layer to be examined under adjustable lighting.",
    "media": "RTI_5",
    "position": [
      0.23629,
      1.26704,
      1.0063
    ]
  },
  {
    "title": "Internal deterioration",
    "note": "Micro-CT reveals internal cracks, voids and areas of material loss that are not fully apparent from the timber surface, showing how damage extends beyond the exposed surface.\nThe RTI of cross-section reveals this deterioration extending into the timber. Micro-CT provides a more detailed view of internal cracks and material loss,",
    "media": "RTI_2",
    "position": [
      -0.52076,
      1.07052,
      -1.18112
    ]
  },
  {
    "title": "Better-preserved wood",
    "note": "This region retained a more continuous internal structure than the heavily deteriorated area nearby.",
    "imageUrl": "",
    "imageCaption": "",
    "media": "RTI_2",
    "position": [
      0.2459919,
      -0.5599996,
      -1.4396023
    ],
    "anchor": {
      "meshIndex": 0,
      "localPosition": [
        78.7246269,
        56.4103729,
        13.6880028
      ]
    },
    "normal": [
      -0.13034,
      -0.02311,
      -0.9912
    ]
  }
]
};
