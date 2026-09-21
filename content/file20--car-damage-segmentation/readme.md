<link rel="stylesheet" href="css/markdown.css">
<a href="https://github.com/Andy-Leo10/TP2-car-damage-segmentation" target="_blank"><strong> → GO TO GITHUB REPOSITORY</strong></a>

# Car Damage Segmentation

## Summary

Computer vision system for the **automatic inspection of vehicle damage**: given a photograph of a crashed car, the pipeline locates the relevant vehicle, segments the damaged areas and estimates the **percentage of severe damage** on the bodywork, issuing a verdict (minor damage / severe damage).

<img src="content/file20--car-damage-segmentation/pictures/result.png" alt="Car damage segmentation results: input photos with predicted damage masks and verdicts" width="100%"/>

## Objectives

- Compare instance segmentation (YOLOv11-seg) against semantic segmentation (DeepLabV3) for damage detection
- Train custom segmentation models on a real-world vehicle damage dataset
- Build an end-to-end inspection pipeline that works on external photos of arbitrary size

## Technical approach

- **Vehicle detection:** YOLOv11-seg provides instance masks used to detect the cars in the image
- **Damage segmentation:** DeepLabV3 trained from scratch (multi-class, 3 classes), reaching **mIoU ≈ 0.72** on validation; U-Net trained as a binary baseline (BCE + Dice loss)
- **Relevant vehicle selection:** the car with maximum overlap with the severe-damage mask is chosen as the subject of the inspection
- **Verdict:** severe damage percentage = (damage ∩ vehicle) / vehicle × 100, with a configurable threshold (default 5%)
- **Dataset:** Car-Damages-5 (Roboflow format), 640×640 images with semantic PNG masks, 502 train / 68 validation / 28 test

## Technologies

- Python, PyTorch (CUDA 12.8)
- Ultralytics YOLOv11-seg
- DeepLabV3, U-Net
- Data augmentation: horizontal/vertical flips + rot90
