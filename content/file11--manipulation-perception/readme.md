<link rel="stylesheet" href="css/markdown.css">
<a href="https://github.com/Andy-Leo10/manipulation_project" target="_blank"><strong> → GO TO GITHUB REPOSITORY</strong></a>

# Manipulation and Perception

## Summary

Pick-and-place project with a **UR3e** robot arm in a simulated warehouse. The project has two stages: a fixed-position pick-and-place using Forward Kinematics (FK), and a perception-based version using Inverse Kinematics (IK) to detect objects with an RGBD camera and plan grasps dynamically.

## What I did

- Configured MoveIt2 for the UR3e arm.
- Integrated FK pick-and-place with predefined poses.
- Added RGBD perception to detect object positions.
- Integrated IK-based pick-and-place with dynamic grasp planning.

## Technologies

- ROS2
- MoveIt2
- UR3e manipulator
- RGBD camera
- Perception for object detection
- Python / C++

## Demonstration

<video width="100%" controls>
  <source src="https://github.com/Andy-Leo10/manipulation_project/assets/60716487/e5a08704-20b6-412d-92f0-49e8a993472b" type="video/mp4">
  Your browser does not support the video tag.
</video>

![Object perception with RGBD camera](content/file11--manipulation-perception/pictures/perception.png)

![Pick operation](content/file11--manipulation-perception/pictures/pick.png)

![Place operation](content/file11--manipulation-perception/pictures/place.png)

---

For launch commands and implementation details, see the [GitHub repository](https://github.com/Andy-Leo10/manipulation_project).
