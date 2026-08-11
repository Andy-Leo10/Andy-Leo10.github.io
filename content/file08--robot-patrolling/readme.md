<link rel="stylesheet" href="css/markdown.css">
<a href="https://github.com/Andy-Leo10/citylab_project" target="_blank"><strong> → GO TO GITHUB REPOSITORY</strong></a>

# Citylab Project — Robot Patrol

## Summary

ROS2 implementation of a patrolling behavior for a **TurtleBot3** robot. The robot patrols an area by choosing the next direction (left, right or forward) based on sensor readings, avoiding collisions while covering the terrain.

## What I did

- Designed a patrol behavior using ROS2 topics, services and actions.
- Implemented decision logic to choose the next movement direction.
- Created service and action interfaces for modular control.
- Tested in a simulated CityLab environment.

## Technologies

- ROS2
- TurtleBot3
- Python
- Gazebo simulation

## Demonstration

![Robot patrol movement](https://github.com/Andy-Leo10/citylab_project/assets/60716487/360d1818-d246-4f7a-9884-0c85564c95d6)

![ROS2 service interface](https://github.com/Andy-Leo10/citylab_project/assets/60716487/19c19b71-4201-4d0a-be95-561ace8e2cc3)

![Patrol main state machine](https://github.com/Andy-Leo10/citylab_project/assets/60716487/a2d702a2-c327-4f82-afe8-53b372142159)

---

For launch commands and implementation details, see the [GitHub repository](https://github.com/Andy-Leo10/citylab_project).
