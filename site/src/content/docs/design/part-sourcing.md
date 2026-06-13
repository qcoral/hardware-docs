---
title: "Sourcing parts"
---

Welcome to part sourcing! Here's a ton of tips for you to optimize your part selection & costs!

If you're ever unsure of your BOM, send it in #highway! People can definitely help you pick better parts and make better decisions.

_author's note: this guide is slightly catered towards Hack Club specific things in some parts, notably on the "don't" section and just general frugality. I think if you're buying parts solo its good to just get extra things to play around with, but do that on your own money!_

## Overview

When picking parts, PLEASE be resourceful! Make the most out of every dollar and don't take the entire budget just because you can. Every dollar you save goes towards the next program

#### Do's

- Lots of research into what parts to use!
- Ask in differnet communities for advice on picking parts!

#### Don'ts

- Buy a $100 Oscilloscope
- Buy extra parts for "later projects"
- Buy a $40 module on amazon instead of waiting 2 weeks to get it for $5 instead

At the end, everything should be in a BOM with links to specific parts.

## Specific parts

### General

Generally speaking, try to reference parts off of other projects since you'll eliminate more unknowns with the hardware. If you can find a verified hardware setup, that saves you the headache of whether or not its a faulty parts combo vs something else with the hardware.

I find modules from suppliers like Adafruit and Sparkfun are really good for this, since they'll design the accompanying circuitry and leave you with clean i2c/SPI/etc interfaces!

### Modules (TP4056, LED matrices, etc)

Almost always the cheapest option to get these parts is from from AliExpress; the only downside is that shipping _may_ take awhile - usually a 2-3 week buffer is safe.

If you're in a pinch, Amazon actually has OK prices all things considered. I would avoid it though, unless you're going to miss a specific deadline.

### SBCs (Raspberry Pi, Orange Pi, etc)

Raspberry Pi sorting varies depending on region, so please do your own research. Micro Center sometimes has good deals on the Pi Zero 2w, depending on your location

A good alternative is the Orange Pi series of SBCs, which are generally pretty performant and are readily available from AliExpress.

One thing to consider is that depending on your application, you can also repurpose old laptops, desktops, and even smartphones for your project if you don't have a specific space requirement! It's a great way to save money, time, and also repurpose old hardware

### Microcontrollers (arduino, RP2040, etc)

AliExpress is still usually your go-to for this!

### PCBs

- If you're in India, use [SEEED Studio's Fusion Service](https://www.seeedstudio.com/fusion_pcb.html). They take HCB cards and are by far the cheapest option
- If you're from another country, use JLCPCB, they offer PCBs for under $6 shipped as long as its under 100x100mm
- ENIG is not allowed unless you have golden fingers (on-PCB USB-C contacts etc. and this is also subject to a case by case approval, please also mention it to your reviewer).
- Edge plating isn't allowed if it is only for the looks.

### 3D prints

If you need a 3D printed part, use [Printing Legion](https://printlegion.hackclub.com)! It's an international network of teenagers with 3D printers who will print any part submitted for a [Hack Club YSWS](https://ysws.hackclub.com) for free. Hack Club covers 100% of the filament costs, you need only need to pay for the shipping cost with your hardware grant.

## Tips for specific vendors

### AliExpress

Aliexpress is one of the highest skill ceiling stores out there - there's a ton of optimisation you can do. Here's some tips:

- The welcome deal only works once when you make your account, so don't budget off of that - you will be hit by significantly higher prices afterwards.
- Pay attention to the estimate shipment date. This will vary by region, but generally speaking it's actually fairly reliable
- Also pay attention to the shipping cost! Usually items that don't have free shipping but a lower initial price actually end up being more expensive when you tally the costs
- There's specific vendors that are useful:
    - AITXEM ROBOT: Any microcontroller you can think of
    - Trianglelab: 3D printer parts!

## Other resources

COMING SOON!

<!-- ### VORON Sourcing guide

### ANNEX ENGINEERING Sourcing guide -->

## Country Specific Notes

### Egypt:

#### Parts

- Egypt has a store called RAM Electronics, which holds a certificate from Cytron, and it offers products at a significantly lower price. ([link](https://www.ram-e-shop.com/))
- Additionally, there is Flux Electronics, which offers a wide range of 3D printer Parts and a vast selection of electronics. ([link](https://fluxelectronix.com/))

### India:

- Most vendors do not take international cards [cards issued outside India], which unfortunately, HCB falls into the category of. Contact your local vendors to try to get that changed!
- Here are some vendors that are documented to work with HCB cards currently, segregated into categories
    - Electronic parts (RPIs, modules, power supplies and the like)
        - [Silverline Electronics](https://www.silverlineelectronics.in/)
        - [RoboSap](https://robosap.in/)
        - [RoboticsDNA](https://roboticsdna.in/)
        - [EBhoot](https://ebhoot.in/)
        - [Electronicscomp](https://www.electronicscomp.com/)
        - [Sharvi Electronics](https://sharvielectronics.com/)
        - [Novo3D](https://novo3d.in/)
