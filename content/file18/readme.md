<link rel="stylesheet" href="css/markdown.css">

# Agricultural Robot — UPAO Swerve-Drive

## Summary

Developed a ROS2-based simulation of a **swerve-drive robot** for autonomous navigation in blueberry crop fields, as part of the PROCIENCIA research project **N° PE501086701-2024** in collaboration with Universidad Privada Antenor Orrego (UPAO) and the Peruvian state.

## Objectives

- Simulate a swerve-drive robot in Gazebo Ignition for structured agricultural environments
- Implement autonomous navigation suitable for crop row traversal
- Validate localization and odometry for outdoor-like terrain

## Technical approach

- **Simulator:** Gazebo Ignition (Gazebo Sim)
- **Navigation stack:** Nav2 (path planning, obstacle avoidance, recovery behaviors)
- **Localization:** Extended Kalman Filter (EKF) fusing wheel odometry and IMU data
- **Custom teleop:** keyboard-based teleoperation for manual testing and benchmarking
- **Environment:** custom Gazebo world modelling a blueberry crop field with row structure

## Technologies

- ROS2
- Gazebo Ignition / Gazebo Sim
- Nav2
- robot_localization (EKF)
- URDF / robot modelling
- Python, C++

## Context

This project was part of a state-funded research initiative aimed at introducing autonomous mobile robots into Peruvian agricultural operations to improve efficiency and reduce physical labour in fruit harvesting environments.
