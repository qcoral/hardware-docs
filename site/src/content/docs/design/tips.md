---
title: "Design tips"
---

## General

General / uncategorized tips!

- Round the corners on your PCBs! Not only do they make your PCBs look better, they also help you avoid getting cut by them!

| Rounded corners                                                                                                                                                   | Unounded corners                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.hackclub.com/019c6d97-18f2-72fa-b7ee-22e6db8c282e/image.png" alt="Unrounded corners" style="max-height: 35vh; width: auto; height: auto" /> | <img src="https://cdn.hackclub.com/019c6d98-dc58-7ecf-b45a-8c166a1c9a0f/image.png" alt="Rounded corners" style="max-height: 35vh; width: auto; height: auto" /> |

- Instead of taking a screenshot of the default onshape blue or fusion360 gray, render your project in [blender](https://www.blender.org/) instead!
- If you're stuck picking between a bunch of passives that are all functionally the same (i.e 30 different types of capacitors), start with the CAD and work backwards - it'll help you get an idea of which one would physically look the best.

## Designing for real life

There's a lot of stuff you need to watch out for when designing your project on the computer to make sure that you can actually build them in real life! Here are some of them:

- Add a ~0.2mm tolerances on any 3D printed part that makes contact with something else - this is to account for any inaccuracies in your printer, the filament, etc. Your parts WILL NOT fit otherwise.
- You can print out your PCBs on paper and see how large they'll be before actually ordering to get a good gauge for size.
- Frequently think about how your parts are actually going to be manufactured and whether or not it's realistic - intricate patterns may often not show up as well depending on your manufacturing method (3D printing, CNC milling, etc)
