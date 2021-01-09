+++
title = "Part x: AWS IoT"
chapter = true
weight = 30
+++

## AWS IoT

How to integrate AWS IoT

## Present

* Setup mock IoT telemetry to send to the guage - e.g. in an oil well -> mock the oil pressure, guage will represent the current state
  * Guage is virtual but runs seperately from other IT resources in the labs
  * Simulate no physical integration, only measuring the gauge levels in central dashboard from data in images

* Camera sends data to a central dashboard
  * Alerts if value goes over a range
  * Inference in cloud - Upload image to S3 triggers an update in the central dashboard
  * Inference at edge - edge device reads camera and sends MQTT message to central dashboard

## Future

* Expand to a server side Thing with TLS authentication
* Register an IoT Thing
* Download TLS certificates
* Device shadows

{{% children showhidden="false" %}}
