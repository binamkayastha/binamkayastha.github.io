---
title: "Sonar for the Blind"
description: "Echolocation for your surroundings via a Microsoft Hololens Headset. HoloHacks: Best use of spacial sound winner"
heroImage: "/sonar-for-blind.webp"
priority: 1
---

HoloHacks: Best use of spacial sound winner

I recall being an awe-stricken youngster when I first watched a blind man, Daniel Kish, on youtube ride his bike on the street using only his [tongue clicks as echolocation](https://www.youtube.com/watch?v=lAtVOK04XvA). I'd often close my eyes myself and try to enable my hidden power only to run into my table, trip over wires, and step on my legos. Turns out, it is quite difficult.

All humans are actually pretty good at telling when a sound is close or near, and where it's coming from. Just take a listen at this [virtual barber, and you can easily follow which side the barber is snipping your hair from](https://www.youtube.com/watch?v=IUDTlvagjJA) (Make sure you are wearing headphones on stereo mode). It's pretty freaking cool!

The difficulty with echolocation is that the origin of the sound comes from your mouth, and you have to rely on the sound _returning_ bouncing back from walls, which is significantly more difficult. So at HoloHacks when Microsoft showed how the Hololens can 3d map the room and put it in the Unity Game Engine, I instantly knew I could make a tech assisted echolocation.

It works by have three rays casted from around the center of your head, one in the front, one on the left, and one on the right. Each ray creates a beeping sound, which get exponentially larger as the length of the ray gets shorter. Add two "microphones" in the virtual Unity world and let Unity Physics magic ✨ handle the rest.

<video class="mb-0" controls>
    <source src="/sonar-for-blind-pov.mp4" type="video/mp4">
    Browser does not support HTML5 video.
</video>
<div class="grid place-content-center"><i>I wish this video was longer but alas, younger me did not film it.</i></div>


To use it was quite simple - you put on a complex AR Hololens device that projects amazing 3d holographic images in your eyes, then close your eyes. Here's a video of my sister not bumping into stuff with her eyes shut: (I think her right hand was up because she was afraid of bumping into something accidentally, having the hand up there is not required)

<video controls>
    <source src="/sonar-for-blind.mp4" type="video/mp4">
    Browser does not support HTML5 video.
</video>


As you can see the end result was amazing! With this device, blind folks can feel if something is in front of them, just like with a... walking stick.... Did I mention this device only works indoors? Jokes aside, it was an awesome project and I'm so happy I got the chance to play around with a Hololens!

