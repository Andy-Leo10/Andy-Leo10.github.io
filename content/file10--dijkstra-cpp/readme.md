<link rel="stylesheet" href="css/markdown.css">
<a href="https://github.com/Andy-Leo10/Dijkstra-Planner" target="_blank"><strong> → GO TO GITHUB REPOSITORY</strong></a>

# Dijkstra Planner Plugin

## Summary

Custom global planner plugin for **Nav2** in ROS2 that implements Dijkstra's shortest-path algorithm over the costmap. The plugin follows the `nav2_core::GlobalPlanner` interface and was developed to understand the internals of Nav2 planners by replacing the default planner with a custom implementation.

## What I did

- Implemented a Dijkstra global planner in C++ as a Nav2 plugin.
- Integrated the planner into the ROS2 Navigation2 stack.
- Validated path planning in simulation with the Neobotix MP-400 robot.
- Compared behavior against the default planner using custom maps and obstacles.

## Technologies

- ROS2
- Nav2
- C++
- Neobotix MP-400 simulation

## Demonstration

Here is a video demonstration of the project:

<video width="100%" controls>
  <source src="https://github.com/Andy-Leo10/Dijkstra-Planner/assets/60716487/c2fc5522-587a-4077-b94a-963932a01219" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

For detailed implementation notes, launch commands and class structure, see the [GitHub repository](https://github.com/Andy-Leo10/Dijkstra-Planner).
