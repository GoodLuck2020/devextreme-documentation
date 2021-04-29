---
type: eventType
---
---
##### shortDescription
Raised when the "pull to refresh" gesture is performed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
Main article: [onPullRefresh](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onPullRefresh.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onPullRefresh')

#####See Also#####
- [List - Touch-Screen Gestures](/concepts/05%20Widgets/List/45%20End-User%20Interaction/01%20Touch-Screen%20Gestures.md '/Documentation/Guide/Widgets/List/End-User_Interaction/Touch-Screen_Gestures/')
#include common-link-handleevents