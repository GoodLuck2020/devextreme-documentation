---
default: 'Material'
acceptValues: 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office'
type: Array<String> | String
---
---
##### shortDescription
Specifies the palette to be used for colorizing ranges in the range container.

---
#include dataviz-ref-palette

#include common-ref-enum with {
    enum: "`VizPalette`",
    values: "`Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet`, and `GreenMist`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/PaletteForRanges/jQuery/Light/"
}

#####See Also#####
- [Palettes](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes')
- [paletteExtensionMode](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/rangeContainer/paletteExtensionMode.md '{basewidgetpath}/Configuration/rangeContainer/#paletteExtensionMode')
- **rangeContainer**.**ranges[]**.[color](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/rangeContainer/ranges/color.md '{basewidgetpath}/Configuration/rangeContainer/ranges/#color')