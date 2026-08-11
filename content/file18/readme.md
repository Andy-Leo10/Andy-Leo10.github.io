<link rel="stylesheet" href="css/markdown.css">

# Agricultural Robot — UPAO Swerve-Drive

## Summary

Developed a ROS2-based simulation of a **swerve-drive robot** for autonomous navigation in blueberry crop fields, as part of the PROCIENCIA research project **N° PE501086701-2024** in collaboration with Universidad Privada Antenor Orrego (UPAO) and the Peruvian state.

<img src="content/file18/pictures/robot.png" alt="UPAO agricultural robot" width="100%"/>

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

## Publication

This work resulted in a paper published at **Ubiquitous Robotics (UR 2026)**, Osaka, Japan.

- **Paper:** *Integrated Opposite-Phase Kinematics, Hybrid-A* Planning, and MPPI Control for Autonomous Navigation in Agricultural Environment*
- **Conference:** Ubiquitous Robotics (UR 2026), Osaka, Japan
- **Link:** [IEEE Xplore](https://ieeexplore.ieee.org/document/11626756)

### Abstract

This paper presents a simulation framework for autonomous navigation of a swerve-drive mobile robot in structured agricultural environments, specifically blueberry crop fields. The proposed approach combines opposite-phase kinematics for the swerve-drive mechanism, Hybrid-A* path planning, and Model Predictive Path Integral (MPPI) control to achieve robust trajectory following. Localization is handled through an Extended Kalman Filter (EKF) fusing wheel odometry and IMU data. The system was validated in Gazebo Ignition, demonstrating reliable navigation along crop rows and laying the groundwork for future deployment in real Peruvian agricultural operations.

## Context

This project was part of a state-funded research initiative aimed at introducing autonomous mobile robots into Peruvian agricultural operations to improve efficiency and reduce physical labour in fruit harvesting environments.
