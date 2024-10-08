<link rel="stylesheet" href="css/markdown.css">

# Tortoisebot webapp


Here is a video demonstration of the project:
<video width="100%" controls>
  <source src="https://github.com/Andy-Leo10/tortoisebot_webapp/assets/60716487/37e2f51c-58f5-4955-ba0d-88c2424027c9" type="video/mp4">
  Your browser does not support the video tag.
</video>


## terminal 1 - simulation

    source ~/simulation_ws/devel/setup.bash
    roslaunch tortoisebot_gazebo tortoisebot_docking.launch

## terminal 2 - http server

    cd ~/webpage_ws/tortoisebot_webapp
    python -m http.server 7000

## terminal 3 - launch (if local ws/)
    source ~/simulation_ws/devel/setup.bash
    roslaunch my_package main.launch

**terminal 3 - bridge**

    source ~/simulation_ws/devel/setup.bash
    roslaunch course_web_dev_ros web.launch

**terminal 4 - mapping**

    source ~/simulation_ws/devel/setup.bash
    roslaunch tortoisebot_slam mapping.launch

**terminal 5 - action server**

    source ~/simulation_ws/devel/setup.bash
    rosrun course_web_dev_ros tortoisebot_action_server.py

**terminal 6 - tf data**

    source ~/simulation_ws/devel/setup.bash
    roslaunch course_web_dev_ros tf2_web.launch

## terminal 7 - others

Check action server

    rostopic type /tortoisebot_as/goal
    rosmsg show course_web_dev_ros/WaypointActionActionGoal
    rostopic pub /tortoisebot_as/goal course_web_dev_ros/WaypointActionActionGoal "

Run robot

    rosrun teleop_twist_keyboard teleop_twist_keyboard.py

Links for application

    webvideo_address
    rosbridge_address
    webpage_address

![imagen](https://github.com/Andy-Leo10/tortoisebot_webapp/assets/60716487/0f8ba472-e645-44ea-a49a-7f1c5b3f983e)

