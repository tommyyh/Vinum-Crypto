// Mission
const mission = gsap.timeline({
  scrollTrigger: {
    trigger: '.more',
    start: 'center bottom',
  },
});

mission.from('.more_r', { x: '88%', duration: 1, opacity: 0 });

// Concept
const concept = gsap.timeline({
  scrollTrigger: {
    trigger: '.concept',
    start: 'center bottom',
  },
});

concept.from('.concept_r', { x: '-88%', duration: 1, opacity: 0 });

// Wine
const wine = gsap.timeline({
  scrollTrigger: {
    trigger: '.wine',
    start: 'center bottom',
  },
});

wine.from('.wine_r', { x: '88%', duration: 1, opacity: 0 });

// Roadmap 1
const roadmap1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.roadmap_section1',
    start: 'center center',
  },
});

roadmap1.from('.roadmap_section1', { y: '32%', duration: 0.88, opacity: 0 });

// Roadmap 2
const roadmap2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.roadmap_section2',
    start: 'center center',
  },
});

roadmap2.from('.roadmap_section2', { y: '32%', duration: 0.88, opacity: 0 });

// Roadmap 3
const roadmap3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.roadmap_section3',
    start: 'center center',
  },
});

roadmap3.from('.roadmap_section3', { y: '32%', duration: 0.88, opacity: 0 });

// Roadmap 4
const roadmap4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.roadmap_section4',
    start: 'center center',
  },
});

roadmap4.from('.roadmap_section4', { y: '32%', duration: 0.88, opacity: 0 });

// Roadmap 5
const roadmap5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.roadmap_section5',
    start: 'center center',
  },
});

roadmap5.from('.roadmap_section5', { y: '32%', duration: 0.88, opacity: 0 });
