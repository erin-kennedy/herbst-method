gsap.registerPlugin(ScrollTrigger);

gsap.to('.background-section', {
  backgroundColor: "#070022",
  scrollTrigger: {
  	trigger: ".m-section-2",
    start: "top bottom",
    end: "top top",
    toggleActions: "restart none none none",
    scrub: 1,
    markers: true
  }
})

const tl = gsap.timeline({
	scrollTrigger: {
        trigger: ".m-section-2",
        start: "top top",
        end: "bottom top",
        toggleActions: "restart none none none",
        pin: true,
        scrub: 1
    }
});

tl.from(".circle-container-1", {x: -200, duration: 2})
.from(".circle-container-2", {x: -400, duration: 2})