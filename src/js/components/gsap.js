gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

//if (ScrollTrigger.isTouch !== 1) {

//	ScrollSmoother.create({
//		wrapper: '.site-container',
//		content: '.block-container',
//		smooth: 1.5,
//		effects: true
//  })

//  console.log('lll')

//	gsap.fromTo('.header__content', { opacity: 1 }, {
//    opacity: 1,
//    x: 0,
//		scrollTrigger: {
//			trigger: '.header__content',
//			start: 'center',
//			end: '820',
//			scrub: true
//		}
//	})

//}


/*header+main*/

//! tlMain

const tlMain = gsap.timeline();
tlMain
  .to('.bb', { opacity: 1, duration: 0.6, width: '100%' })
  .to('.header__content', { opacity: 1, duration: 0.3, margin: 0})
  .to('.block__before', { duration: 2, rotation: -360 }, "=")
  .to('.main__block', { duration: 3, y: 0 }, '');

//! tlMainTitle

const tlMainTitle = gsap.timeline({delay: 1.5});
tlMainTitle
  .to('.block__item--left', { duration: 1, right: 0 }, "=")
  .to('.block__item--right', { duration: 1, left: 0 }, "=")
  .to('.line__el', { opacity: 1, height: '100%', duration: 0.6 }, "=")

const tlMainText = gsap.timeline();

//! tlButton
const tlButton = gsap.timeline({ delay: 1.5 });
tlButton
.to('.button-line', { duration: 0.3, scale: 1 }, "=-0.4")
.to('.button-line__before', { duration: 0.7, rotation: 360 },"=-0.3")
  .to('.button-line__text span', { duration: 0.7, opacity: 1 },"=-0.3")

//! tlBlockText
const tlBlockText = gsap.timeline({ delay: 1.5 });
tlBlockText
  .to('.main__text strong', { opacity: 1, x: 0, duration: 0.4, stagger: 0.1 }, "=")

/*End header+main*/

