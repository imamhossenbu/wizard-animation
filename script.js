function page1Animation() {
    var tl=gsap.timeline();


tl.from("nav h1,nav h4,nav button",{
    duration: 0.6,
    y: -100,
    opacity: 0,
    ease: "power2.out",
    delay:0.5,
    stagger: 0.15
})



tl.from(".center-part-1 h1",{
    x:-100,
    opacity: 0,
    duration: 0.9,  
},"-=0.5")


tl.from(".center-part-1 p",{
    x:-100,
    opacity: 0,
    duration: 1,
},"-=0.5")

tl.from(".center-part-1 button",{
    opacity: 0,
    duration: 1,
})
tl.from(".center-part-2 img",{
    scale: 0.5,
    duration: 1,
    opacity: 0,
},"-=1.5")



tl.from(".section1-bottom img",{
    duration: 0.5,
    scale: 0.5,
    opacity: 0,
    stagger: 0.2,
    y:30
},"-=0.5")


}

page1Animation();

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top -50%",
        scrub:1,
        markers:true,
    }
})
tl2.from(".section2 h3",{
    y:-100,
    duration:0.5,
    opacity: 0,
})
tl2.from(".section2 p",{
    y:-100,
    duration:0.5,
    opacity: 0,
},"-=0.5")

tl2.from(".card.white.left",{
    x:-300,
    duration:1,
    opacity: 0,
},"anim")

tl2.from(".card.black.right",{
    x:300,
    duration:1,
    opacity: 0,
},"anim")

tl2.from(".card.black.left",{
    x:-300,
    duration:1,
    opacity: 0,
},"denim")

tl2.from(".card.white.right",{
    x:300,
    duration:1,
    opacity: 0,
},"denim")

