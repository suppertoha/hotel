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

const tlMain = gsap.timeline();

tlMain
  .to('.header .bb', { opacity: 1, duration: 0.6, width: '100%' })
  .to('.header__content', { opacity: 1, duration: 0.3, y: 0 })
  .to('.block__before', { duration: 2,  rotation: -360},"=")
  .to('.main__block', { duration: 3, y: 0 }, '')
  .to('.block__item--left', { duration: 1, right: 0 }, '')
  .to('.block__item--right', { duration: 1, left: 0 }, '')

  .fromTo('.main__text strong', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.3, ease: 'power2.out', })
  .to('.button-line', { duration: 1, scale: 1 })
  .from('.button-line__before', { duration: 1,  rotation: 360 })

  //.to(".main-map", { opacity: 1, duration: 0.4, ease: "sine.out" }),"=-0.6";

  ;

  //
