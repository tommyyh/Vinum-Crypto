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

// Video
const videos = document.querySelectorAll('.videos');

videos.forEach((video) => {
  video.addEventListener('click', () => {
    if (video.paused === false) {
      video.pause();
      video.firstChild.nodeValue = 'Play';
    } else {
      video.play();
      video.firstChild.nodeValue = 'Pause';
    }
  });
});

// Slideshow
const arrow_left = document.querySelector('.arrow_cont');
const arrow_right = document.querySelector('.arrow_cont2');
const videos_first = document.querySelector('.videos_first');
const videos_last = document.querySelector('.videos_last');
let counter = 0;

if (window.innerWidth > 1025) {
  arrow_right.addEventListener('click', () => {
    if (counter < 5) {
      counter = counter + 1;
      videos_first.style.marginLeft = `-${counter * 37.2}rem`;
    }
  });

  arrow_left.addEventListener('click', () => {
    if (counter !== 0) {
      counter = counter - 1;
      videos_first.style.marginLeft = `-${counter * 37.2}rem`;
    }
  });
} else {
  const width = document.querySelector('body').clientWidth;
  const gap = 0.4 * 16;
  const width_rem = (width + gap) / 16;
 
  arrow_right.addEventListener('click', () => {
    if (counter < 9) {
      counter = counter + 1;
      videos_first.style.marginLeft = `-${counter * width_rem}rem`;
    }
  });

  arrow_left.addEventListener('click', () => {
    if (counter !== 0) {
      counter = counter - 1;
      videos_first.style.marginLeft = `-${counter * width_rem}rem`;
    }
  });
}
