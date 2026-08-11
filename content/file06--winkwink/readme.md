<link rel="stylesheet" href="css/markdown.css">

# WinkWink

## Summary

WinkWink is an assistive technology prototype designed to prevent and alleviate Dry Eye Syndrome (DES) in people who spend long hours in front of electronic devices. The device combines real-time blink detection with visual and sound feedback to promote healthier blinking habits and reduce tear evaporation.

## What I did

- Designed a portable spherical device with a 6 cm radius.
- Implemented blink detection using an RGB camera and computer vision algorithms.
- Developed a feedback system with OLED screens, a buzzer and a touch sensor.
- Programmed two operation modes: concentration and companion.
- Prototyped the electronics around a Raspberry Pi.

## Features

- Detects blinks in the range of 12 to 15 per minute, with durations between 100 ms and 400 ms.
- Operating range: 30 cm to 2 m.
- Animated eye expressions on an OLED display.
- Visual tips and blink reports every 15 minutes.
- Active pause reminder after 1 hour of continuous use.
- **Concentration mode:** shows tips without disturbing the user.
- **Companion mode:** counts blinks, reports blink rate every 15 minutes and suggests breaks.

## Technologies

- Raspberry Pi
- RGB camera
- OpenCV / computer vision
- Python
- OLED displays
- Buzzer
- Touch sensor

## Demonstration

![WinkWink prototype](content/file06--winkwink/pictures/zippo-view.png)

![WinkWink desktop application](content/file06--winkwink/pictures/zippo-desktop.png)

![WinkWink exploded view](content/file06--winkwink/pictures/zippo-exploded-view.png)