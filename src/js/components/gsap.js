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

//	//let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

//	//itemsL.forEach(item => {
//	//	gsap.fromTo(item, { opacity: 0, x: -50 }, {
//	//		opacity: 1, x: 0,
//	//		scrollTrigger: {
//	//			trigger: item,
//	//			start: '-850',
//	//			end: '-100',
//	//			scrub: true
//	//		}
//	//	})
//	//})

//	//let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

//	//itemsR.forEach(item => {
//	//	gsap.fromTo(item, { opacity: 0, x: 50 }, {
//	//		opacity: 1, x: 0,
//	//		scrollTrigger: {
//	//			trigger: item,
//	//			start: '-750',
//	//			end: 'top',
//	//			scrub: true
//	//		}
//	//	})
//	//})

//}

gsap.from('.header__content', { opacity: 0, duration: 1, y: - 50 });
gsap.from('.header .bb', { opacity: 0, duration: 1, width: 0 });
gsap.from('.main__block', {  duration: 3, y: - 50 });


