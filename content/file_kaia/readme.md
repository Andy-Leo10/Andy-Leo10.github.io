<link rel="stylesheet" href="css/markdown.css">
<a href="https://github.com/Andy-Leo10/kaia-LDS" target="_blank"><strong> → GO TO GITHUB REPOSITORY</strong></a>

# Open Source Contribution — kaia.ai / Maker's Pet

## Summary

Added support for the **LDROBOT LD19P / D500 LiDAR sensor** across the full open-source stack of the [kaia.ai](https://kaia.ai/) / Maker's Pet project — a low-cost open-source robotics platform — complementing the educational robotics kit developed at Kalman Robotics.

**Date:** November 2025

## What was done

- **Arduino firmware** — integrated the LD19P/D500 driver into the robot's embedded firmware
- **LDS (Laser Distance Sensor) library** — added sensor model, calibration and communication protocol
- **ROS2 telemetry** — verified the full data pipeline from sensor to ROS2 `LaserScan` topic

## Technologies

- ROS2
- Arduino / C++ (embedded)
- LDROBOT LD19P / D500 LiDAR
- micro-ROS ecosystem

## Context

The kaia.ai / Maker's Pet platform is a community-driven project for building affordable, capable robots. This contribution makes the LD19P/D500 — a low-cost LiDAR — fully compatible with the platform, enabling autonomous navigation features for makers and students with limited budgets.