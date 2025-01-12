---
id: dxScheduler.showAppointmentPopup(appointmentData, createNewAppointment, currentAppointmentData)
---
---
##### shortDescription
Shows the appointment details form.

##### param(appointmentData): dxSchedulerAppointment | undefined
The initial appointment.

##### param(createNewAppointment): Boolean | undefined
Specifies whether a new appointment is created when editing is finished.

##### param(currentAppointmentData): dxSchedulerAppointment | undefined
<!-- %field(model.targetedAppointmentData)% -->

---

If invoked without parameters, the method shows a new appointment window. Its start and end dates are prepopulated in accordance with the [currentDate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/currentDate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentDate') value. The default appointment duration is 30 minutes.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/ContextMenuIntegration/"
}

#####See Also#####
#include common-link-callmethods

<!-- import * from 'api-reference\10 UI Components\dxScheduler\1 Configuration\appointmentTemplate.md' -->