<link rel="stylesheet" href="css/markdown.css">
<a href="https://github.com/Andy-Leo10/warehouse_project" target="_blank"><strong> → GO TO GITHUB REPOSITORY</strong></a>

# Warehouse Pick & Place

## Summary

Autonomous warehouse navigation project with an **RB1** robot in a Gazebo simulation. The robot performs a complete pick-and-place task: map the environment, localize itself, navigate to a shelf, pick it up and transport it to a shipping area.

## What I did

- Built the warehouse simulation map using Cartographer.
- Integrated AMCL-based localization on the generated map.
- Configured Nav2 for autonomous navigation and obstacle avoidance.
- Developed the RB1 application to move the shelf from point A to point B.
- Bridged ROS1 simulation with ROS2 nodes using the ros1_bridge.

## Technologies

- ROS2 Galactic
- Nav2
- Cartographer
- AMCL
- RB1 robot simulation
- ros1_bridge
- Python

## Demonstration

<video width="100%" controls>
  <source src="https://github.com/Andy-Leo10/warehouse_project/assets/60716487/4628aa23-c77a-4e4f-ab95-7df550ce822a" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

For launch commands and the full workflow, see the [GitHub repository](https://github.com/Andy-Leo10/warehouse_project).
