/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger */ "./src/js/components/burger.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/components/dropdown.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gsap */ "./src/js/components/gsap.js");
/* harmony import */ var _components_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_gsap__WEBPACK_IMPORTED_MODULE_2__);

//import './components/accordion';
//import './components/slider';
//import './components/modal';
//import './components/mouse-effect';
//import './components/btn-up';

//import './components/show-more';
//import './components/scroll';
//import './components/search-button';


/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_fslightbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/fslightbox.js */ "./src/js/vendor/fslightbox.js");
/* harmony import */ var _vendor_fslightbox_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_fslightbox_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_gsap_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/gsap.min.js */ "./src/js/vendor/gsap.min.js");
/* harmony import */ var _vendor_gsap_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_gsap_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_ScrollTrigger_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/ScrollTrigger.min.js */ "./src/js/vendor/ScrollTrigger.min.js");
/* harmony import */ var _vendor_ScrollTrigger_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_ScrollTrigger_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vendor_ScrollSmoother_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/ScrollSmoother.min.js */ "./src/js/vendor/ScrollSmoother.min.js");
/* harmony import */ var _vendor_ScrollSmoother_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendor_ScrollSmoother_min_js__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/burger */ "./src/js/functions/burger.js");
// Реализация бургер-меню


/***/ }),

/***/ "./src/js/components/dropdown.js":
/*!***************************************!*\
  !*** ./src/js/components/dropdown.js ***!
  \***************************************/
/***/ (() => {

//! dropdown
document.querySelectorAll('.dropdown').forEach(function (dropdownWrapper) {
  //! Переменные
  const dropdownListItem = dropdownWrapper.querySelectorAll('.dropdown__list-item');
  const inputElement = dropdownWrapper.querySelector('.dropdown__input-hidden');
  const dropdownButton = dropdownWrapper.querySelector('.dropdown__button span');
  const dropdownList = dropdownWrapper.querySelector('.dropdown__list');

  //! Добавление класса visible dropdown. И кнопки класса active
  dropdownButton.addEventListener('click', function () {
    dropdownList.classList.toggle('visible');
    this.classList.toggle('active');
  });

  //! Выбор элемента списка. Передача выбранного значение и закрытие dropdown
  dropdownListItem.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownButton.innerText = this.innerText;
      dropdownButton.focus();
      inputElement.value = this.dataset.value;
      dropdownList.classList.remove('visible');
      dropdownButton.classList.remove('active');
      dropdownButton.classList.add('icon');
    });
  });

  //! Закрытие dropdown по клику на любой элемент
  document.addEventListener('click', function (e) {
    if (e.target !== dropdownButton) {
      dropdownList.classList.remove('visible');
      dropdownButton.classList.remove('active');
    }
  });

  //! Закрытие dropdown по кнопке tab или escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropdownList.classList.remove('visible');
      dropdownButton.classList.remove('active');
    }
  });
});

/***/ }),

/***/ "./src/js/components/gsap.js":
/*!***********************************!*\
  !*** ./src/js/components/gsap.js ***!
  \***********************************/
/***/ (() => {

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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

gsap.from('.header__content', {
  opacity: 0,
  duration: 1,
  y: -50
});
gsap.from('.header .bb', {
  opacity: 0,
  duration: 1,
  width: 0
});
gsap.from('.main__block', {
  duration: 3,
  y: -50
});

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./src/js/functions/enable-scroll.js");


(function () {
  const burger = document?.querySelector("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");
  burger?.addEventListener("click", e => {
    burger?.classList.toggle("burger--active");
    menu?.classList.toggle("menu--active");
    if (menu?.classList.contains("menu--active")) {
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");
      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems?.forEach(el => {
    el.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableScroll": () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth}px`;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = `-${pagePosition}px`;
};

/***/ }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableScroll": () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

/***/ }),

/***/ "./src/js/vendor/ScrollSmoother.min.js":
/*!*********************************************!*\
  !*** ./src/js/vendor/ScrollSmoother.min.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports) {

!function (e, t) {
   true ? t(exports) : 0;
}(this, function (e) {
  "use strict";

  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function p() {
    return "undefined" != typeof window;
  }
  function q() {
    return P || p() && (P = window.gsap) && P.registerPlugin && P;
  }
  var P,
    k,
    R,
    _,
    C,
    H,
    M,
    A,
    F,
    B,
    I,
    U,
    t = (ScrollSmoother.register = function register(e) {
      return k || (P = e || q(), p() && window.document && (R = window, _ = document, C = _.documentElement, H = _.body), P && (M = P.utils.toArray, A = P.utils.clamp, I = P.parseEase("expo"), F = P.core.globals().ScrollTrigger, P.core.globals("ScrollSmoother", ScrollSmoother), H && F && (U = F.core._getVelocityProp, k = 1))), k;
    }, function _createClass(e, t, r) {
      return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
    }(ScrollSmoother, [{
      key: "progress",
      get: function get() {
        return this.scrollTrigger.animation._time / 100;
      }
    }]), ScrollSmoother);
  function ScrollSmoother(e) {
    var o = this;
    k || ScrollSmoother.register(P) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, B && B.kill(), B = this;
    function ja() {
      return T.update(-g);
    }
    function la() {
      return r.style.overflow = "visible";
    }
    function na(e) {
      var t = e.getTween();
      t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), u = !1, e.animation.progress(e.progress, !0);
    }
    function oa(e, t) {
      (e !== g && !l || t) && (d && (r.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)"), w = e - g, g = e, F.isUpdating || F.update());
    }
    function pa(e) {
      return arguments.length ? (l && (g = -e), x.y = -e, u = !0, h(e), this) : -g;
    }
    function ra(e) {
      v.scrollTop = 0, F.isInViewport(e.target) || e.target === f || o.scrollTo(e.target, !1, "center center"), f = e.target;
    }
    function sa(e) {
      var r, n, o, i;
      b.forEach(function (t) {
        r = t.pins, i = t.markers, e.forEach(function (e) {
          e.trigger !== t.trigger && e.pinnedContainer !== t.trigger || t === e || (n = e.start, o = (n - t.start - t.offset) / t.ratio - (n - t.start), r.forEach(function (e) {
            return o -= e.distance / t.ratio - e.distance;
          }), e.setPositions(n + o, e.end + o), e.markerStart && i.push(P.quickSetter([e.markerStart, e.markerEnd], "y", "px")), e.pin && 0 < e.end && (o = e.end - e.start, r.push({
            start: e.start,
            end: e.end,
            distance: o,
            trig: e
          }), t.setPositions(t.start, t.end + o), t.vars.onRefresh(t)));
        });
      });
    }
    function ta() {
      la(), requestAnimationFrame(la), b && (b.forEach(function (e) {
        var t = e.start,
          r = e.auto ? Math.min(F.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio,
          n = (r - e.end) / 2;
        t -= n, r -= n, e.offset = n || 1e-4, e.pins.length = 0, e.setPositions(Math.min(t, r), Math.max(t, r)), e.vars.onRefresh(e);
      }), sa(F.sort())), T.reset();
    }
    function ua() {
      return b && b.forEach(function (e) {
        return e.vars.onRefresh(e);
      });
    }
    function va() {
      return b && b.forEach(function (e) {
        return e.vars.onRefreshInit(e);
      }), ua;
    }
    function wa(t, r, n, o) {
      return function () {
        var e = "function" == typeof r ? r(n, o) : r;
        return e || 0 === e || (e = o.getAttribute("data-" + t) || ("speed" === t ? 1 : 0)), o.setAttribute("data-" + t, e), "auto" === e ? e : parseFloat(e);
      };
    }
    function xa(r, e, t, n) {
      function lb() {
        e = a(), t = f(), o = parseFloat(e) || 1, c = (s = "auto" === e) ? 0 : .5, l && l.kill(), l = t && P.to(r, {
          ease: I,
          overwrite: !1,
          y: "+=0",
          duration: t
        }), i && (i.ratio = o, i.autoSpeed = s);
      }
      function mb() {
        d.y = h + "px", d.renderTransform(1), lb();
      }
      function qb(e) {
        if (s) {
          mb();
          var t = function _autoDistance(e, t) {
            var r,
              n,
              o = e.parentNode || C,
              i = e.getBoundingClientRect(),
              a = o.getBoundingClientRect(),
              s = a.top - i.top,
              l = a.bottom - i.bottom,
              c = (Math.abs(s) > Math.abs(l) ? s : l) / (1 - t),
              u = -c * t;
            return 0 < c && (u += -(n = .5 == (r = a.height / (R.innerHeight + a.height)) ? 2 * a.height : 2 * Math.min(a.height, -c * r / (2 * r - 1))) / 2, c += n), {
              change: c,
              offset: u
            };
          }(r, A(0, 1, -e.start / (e.end - e.start)));
          m = t.change, u = t.offset;
        } else m = (e.end - e.start) * (1 - o), u = 0;
        g.forEach(function (e) {
          return m -= e.distance * (1 - o);
        }), e.vars.onUpdate(e), l && l.progress(1);
      }
      var o,
        i,
        s,
        l,
        c,
        u,
        a = wa("speed", e, n, r),
        f = wa("lag", t, n, r),
        h = P.getProperty(r, "y"),
        d = r._gsap,
        g = [],
        p = [],
        m = 0;
      return lb(), (1 !== o || s || l) && (qb(i = F.create({
        trigger: s ? r.parentNode : r,
        scroller: v,
        scrub: !0,
        refreshPriority: -999,
        onRefreshInit: mb,
        onRefresh: qb,
        onKill: function onKill(e) {
          var t = b.indexOf(e);
          0 <= t && b.splice(t, 1);
        },
        onUpdate: function onUpdate(e) {
          var t,
            r,
            n,
            o = h + m * (e.progress - c),
            i = g.length,
            a = 0;
          if (e.offset) {
            if (i) {
              for (r = -x.y, n = e.end; i--;) {
                if ((t = g[i]).trig.isActive || r >= t.start && r <= t.end) return void (l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(d.y), -w, !0), S && l.progress(1)));
                r > t.end && (a += t.distance), n -= t.distance;
              }
              o = h + a + m * ((P.utils.clamp(e.start, e.end, r) - e.start - a) / (n - e.start) - c);
            }
            o = function _round(e) {
              return Math.round(1e5 * e) / 1e5 || 0;
            }(o + u), p.length && !s && p.forEach(function (e) {
              return e(o - a);
            }), l ? (l.resetTo("y", o, -w, !0), S && l.progress(1)) : (d.y = o + "px", d.renderTransform(1));
          }
        }
      })), P.core.getCache(i.trigger).stRevert = va, i.startY = h, i.pins = g, i.markers = p, i.ratio = o, i.autoSpeed = s, r.style.willChange = "transform"), i;
    }
    var r,
      v,
      t,
      n,
      b,
      i,
      a,
      s,
      l,
      c,
      u,
      f,
      h = F.getScrollFunc(R),
      d = 1 === F.isTouch ? !0 === e.smoothTouch ? .8 : parseFloat(e.smoothTouch) || 0 : 0 === e.smooth || !1 === e.smooth ? 0 : parseFloat(e.smooth) || .8,
      g = 0,
      w = 0,
      S = 1,
      p = e.onUpdate,
      m = e.onStop,
      T = U(0),
      x = {
        y: 0
      };
    function refreshHeight() {
      return t = r.clientHeight, r.style.overflow = "visible", H.style.height = t + "px", t - R.innerHeight;
    }
    F.addEventListener("refresh", ta), P.delayedCall(.5, function () {
      return S = 0;
    }), this.scrollTop = pa, this.scrollTo = function (e, t, r) {
      var n = P.utils.clamp(0, F.maxScroll(R), isNaN(e) ? o.offset(e, r) : +e);
      t ? l ? P.to(o, {
        duration: d,
        scrollTop: n,
        overwrite: "auto",
        ease: I
      }) : h(n) : pa(n);
    }, this.offset = function (e, t) {
      e = M(e)[0];
      var r,
        n = P.getProperty(e, "y"),
        o = F.create({
          trigger: e,
          start: t || "top top"
        });
      return b && sa([o]), r = o.start, o.kill(!1), P.set(e, {
        y: n
      }), r;
    }, this.content = function (e) {
      return arguments.length ? (r = M(e || "#smooth-content")[0] || H.children[0], s = r.getAttribute("style") || "", P.set(r, {
        overflow: "visible",
        width: "100%"
      }), this) : r;
    }, this.wrapper = function (e) {
      return arguments.length ? (v = M(e || "#smooth-wrapper")[0] || function _wrap(e) {
        var t = _.createElement("div");
        return t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e), t;
      }(r), a = v.getAttribute("style") || "", refreshHeight(), P.set(v, d ? {
        overflow: "hidden",
        position: "fixed",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      } : {
        overflow: "visible",
        position: "relative",
        width: "100%",
        height: "auto",
        top: "auto",
        bottom: "auto",
        left: "auto",
        right: "auto"
      }), this) : v;
    }, this.effects = function (e, t) {
      if (b = b || [], !e) return b.slice(0);
      (e = M(e)).forEach(function (e) {
        for (var t = b.length; t--;) b[t].trigger === e && (b[t].kill(), b.splice(t, 1));
      });
      t = t || {};
      var r,
        n,
        o = t.speed,
        i = t.lag,
        a = [];
      for (r = 0; r < e.length; r++) (n = xa(e[r], o, i, r)) && a.push(n);
      return b.push.apply(b, a), a;
    }, this.content(e.content), this.wrapper(e.wrapper), this.render = function (e) {
      return oa(e || 0 === e ? e : g);
    }, this.getVelocity = function () {
      return T.getVelocity(-g);
    }, F.scrollerProxy(v, {
      scrollTop: pa,
      scrollHeight: function scrollHeight() {
        return H.scrollHeight;
      },
      fixedMarkers: !1 !== e.fixedMarkers && !!d,
      content: r,
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: R.innerWidth,
          height: R.innerHeight
        };
      }
    }), F.defaults({
      scroller: v
    });
    var E = F.getAll().filter(function (e) {
      return e.scroller === R || e.scroller === v;
    });
    E.forEach(function (e) {
      return e.revert(!0);
    }), n = F.create({
      animation: P.to(x, {
        y: function y() {
          return R.innerHeight - t;
        },
        ease: "none",
        data: "ScrollSmoother",
        duration: 100,
        onUpdate: function onUpdate() {
          var e = u;
          e && (x.y = g, na(n)), oa(x.y, e), ja(), p && !l && p(o);
        }
      }),
      onRefreshInit: function onRefreshInit() {
        return x.y = 0;
      },
      id: "ScrollSmoother",
      scroller: R,
      invalidateOnRefresh: !0,
      start: 0,
      refreshPriority: -9999,
      end: refreshHeight,
      onScrubComplete: function onScrubComplete() {
        T.reset(), m && m(o);
      },
      scrub: d || !0,
      onRefresh: function onRefresh(e) {
        na(e), oa(x.y);
      }
    }), this.smooth = function (e) {
      return d = e, arguments.length ? n.scrubDuration(e) : n.getTween() ? n.getTween().duration() : 0;
    }, n.getTween() && (n.getTween().vars.ease = e.ease || I), this.scrollTrigger = n, e.effects && this.effects(!0 === e.effects ? "[data-speed], [data-lag]" : e.effects, {}), E.forEach(function (e) {
      e.vars.scroller = v, e.init(e.vars, e.animation);
    }), this.paused = function (e) {
      return arguments.length ? (!!l !== e && (e ? (n.getTween() && n.getTween().pause(), h(-g), T.reset(), (c = F.normalizeScroll()) && c.disable(), l = F.observe({
        preventDefault: !0,
        type: "wheel,touch,scroll",
        debounce: !1,
        onChangeY: function onChangeY() {
          return pa(-g);
        }
      })) : (l.kill(), l = 0, c && c.enable(), n.progress = (-g - n.start) / (n.end - n.start), na(n))), this) : !!l;
    }, this.kill = function () {
      o.paused(!1), na(n), n.kill();
      for (var e = b ? b.length : 0; e--;) b[e].kill();
      F.scrollerProxy(v), F.removeEventListener("refresh", ta), v.style.cssText = a, r.style.cssText = s;
      var t = F.defaults({});
      t && t.scroller === v && F.defaults({
        scroller: R
      }), o.observer && F.normalizeScroll(!1), clearInterval(i), B = null, R.removeEventListener("focusin", ra);
    }, e.normalizeScroll && (this.observer = F.normalizeScroll({
      debounce: !0
    })), F.config(e), "overscrollBehavior" in R.getComputedStyle(H) && P.set(H, {
      overscrollBehavior: "none"
    }), R.addEventListener("focusin", ra), i = setInterval(ja, 250), "loading" === _.readyState || requestAnimationFrame(function () {
      return F.refresh();
    });
  }
  t.version = "3.10.2", t.create = function (e) {
    return B && e && B.content() === M(e.content)[0] ? B : new t(e);
  }, t.get = function () {
    return B;
  }, q() && P.registerPlugin(t), e.ScrollSmoother = t, e.default = t;
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});

/***/ }),

/***/ "./src/js/vendor/ScrollTrigger.min.js":
/*!********************************************!*\
  !*** ./src/js/vendor/ScrollTrigger.min.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {

!function (e, t) {
   true ? t(exports) : 0;
}(this, function (e) {
  "use strict";

  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function q() {
    return we || "undefined" != typeof window && (we = window.gsap) && we.registerPlugin && we;
  }
  function y(e, t) {
    return ~He.indexOf(e) && He[He.indexOf(e) + 1][t];
  }
  function z(e) {
    return !!~t.indexOf(e);
  }
  function A(e, t, r, n, i) {
    return e.addEventListener(t, r, {
      passive: !n,
      capture: !!i
    });
  }
  function B(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function E() {
    return De && De.isPressed || k.cache++;
  }
  function F(r, n) {
    function Pc(e) {
      if (e || 0 === e) {
        i && (ke.history.scrollRestoration = "manual");
        var t = De && De.isPressed;
        e = Pc.v = Math.round(e) || (De && De.iOS ? 1 : 0), r(e), Pc.cacheID = k.cache, t && o("ss", e);
      } else (n || k.cache !== Pc.cacheID || o("ref")) && (Pc.cacheID = k.cache, Pc.v = r());
      return Pc.v + Pc.offset;
    }
    return Pc.offset = 0, r && Pc;
  }
  function I(e) {
    return we.utils.toArray(e)[0] || ("string" == typeof e && !1 !== we.config().nullTargetWarn ? console.warn("Element not found:", e) : null);
  }
  function J(t, e) {
    var r = e.s,
      n = e.sc,
      i = k.indexOf(t),
      o = n === je.sc ? 1 : 2;
    return ~i || (i = k.push(t) - 1), k[i + o] || t.addEventListener("scroll", E), k[i + o] || (k[i + o] = F(y(t, r), !0) || (z(t) ? n : F(function (e) {
      return arguments.length ? t[r] = e : t[r];
    })));
  }
  function K(e, t, i) {
    function jd(e, t) {
      var r = Fe();
      t || n < r - s ? (a = o, o = e, l = s, s = r) : i ? o += e : o = a + (e - a) / (r - l) * (s - l);
    }
    var o = e,
      a = e,
      s = Fe(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: jd,
      reset: function reset() {
        a = o = i ? 0 : o, l = s = 0;
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = Fe();
        return !e && 0 !== e || e === o || jd(e), s === l || c < n - l ? 0 : (o + (i ? r : -r)) / ((i ? n : s) - t) * 1e3;
      }
    };
  }
  function L(e, t) {
    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
  }
  function M(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function N() {
    (Be = we.core.globals().ScrollTrigger) && Be.core && function _integrate() {
      var e = Be.core,
        r = e.bridge || {},
        t = e._scrollers,
        n = e._proxies;
      t.push.apply(t, k), n.push.apply(n, He), k = t, He = n, o = function _bridge(e, t) {
        return r[e](t);
      };
    }();
  }
  function O(e) {
    return (we = e || q()) && "undefined" != typeof document && document.body && (ke = window, Me = (Ee = document).documentElement, Ae = Ee.body, t = [ke, Ee, Me, Ae], we.utils.clamp, Ie = "onpointerenter" in Ae ? "pointer" : "mouse", Ce = P.isTouch = ke.matchMedia && ke.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ke || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, ze = P.eventTypes = ("ontouchstart" in Me ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Me ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
      return i = 0;
    }, 500), N(), _e = 1), _e;
  }
  var we,
    _e,
    ke,
    Ee,
    Me,
    Ae,
    Ce,
    Ie,
    Be,
    t,
    De,
    ze,
    i = 1,
    Re = [],
    k = [],
    He = [],
    Fe = Date.now,
    o = function _bridge(e, t) {
      return t;
    },
    r = "scrollLeft",
    n = "scrollTop",
    Je = {
      s: r,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: F(function (e) {
        return arguments.length ? ke.scrollTo(e, je.sc()) : ke.pageXOffset || Ee[r] || Me[r] || Ae[r] || 0;
      })
    },
    je = {
      s: n,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Je,
      sc: F(function (e) {
        return arguments.length ? ke.scrollTo(Je.sc(), e) : ke.pageYOffset || Ee[n] || Me[n] || Ae[n] || 0;
      })
    };
  Je.op = je, k.cache = 0;
  var P = (Observer.prototype.init = function init(e) {
    _e || O(we) || console.warn("Please gsap.registerPlugin(Observer)"), Be || N();
    var i = e.tolerance,
      a = e.dragMinimum,
      t = e.type,
      n = e.target,
      r = e.lineHeight,
      o = e.debounce,
      s = e.preventDefault,
      l = e.onStop,
      c = e.onStopDelay,
      u = e.ignore,
      f = e.wheelSpeed,
      d = e.event,
      p = e.onDragStart,
      g = e.onDragEnd,
      h = e.onDrag,
      b = e.onPress,
      v = e.onRelease,
      m = e.onRight,
      y = e.onLeft,
      x = e.onUp,
      w = e.onDown,
      S = e.onChangeX,
      _ = e.onChangeY,
      T = e.onChange,
      k = e.onToggleX,
      P = e.onToggleY,
      C = e.onHover,
      D = e.onHoverEnd,
      X = e.onMove,
      Y = e.ignoreCheck,
      R = e.isNormalizer,
      H = e.onGestureStart,
      F = e.onGestureEnd,
      W = e.onWheel,
      j = e.onEnable,
      V = e.onDisable,
      G = e.onClick,
      U = e.scrollSpeed,
      q = e.capture,
      $ = e.allowClicks,
      Q = e.lockAxis,
      Z = e.onLockAxis;
    function Ke() {
      return ye = Fe();
    }
    function Le(e, t) {
      return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || Y && Y(e, t);
    }
    function Ne() {
      var e = se.deltaX = M(ve),
        t = se.deltaY = M(me),
        r = Math.abs(e) >= i,
        n = Math.abs(t) >= i;
      T && (r || n) && T(se, e, t, ve, me), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), S && S(se), k && se.deltaX < 0 != le < 0 && k(se), le = se.deltaX, ve[0] = ve[1] = ve[2] = 0), n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), _ && _(se), P && se.deltaY < 0 != ce < 0 && P(se), ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne || re) && (X && X(se), re && (h(se), re = !1), ne = !1), oe && !(oe = !1) && Z && Z(se), ie && (W(se), ie = !1), ee = 0;
    }
    function Oe(e, t, r) {
      ve[r] += e, me[r] += t, se._vx.update(e), se._vy.update(t), o ? ee = ee || requestAnimationFrame(Ne) : Ne();
    }
    function Pe(e, t) {
      Q && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", oe = !0), "y" !== ae && (ve[2] += e, se._vx.update(e, !0)), "x" !== ae && (me[2] += t, se._vy.update(t, !0)), o ? ee = ee || requestAnimationFrame(Ne) : Ne();
    }
    function Qe(e) {
      if (!Le(e, 1)) {
        var t = (e = L(e, s)).clientX,
          r = e.clientY,
          n = t - se.x,
          i = r - se.y,
          o = se.isDragging;
        se.x = t, se.y = r, (o || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), o || (se.isDragging = !0), Pe(n, i), o || p && p(se));
      }
    }
    function Se(t) {
      if (!Le(t, 1)) {
        B(R ? n : be, ze[1], Qe, !0);
        var e = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
          r = L(t);
        e || (se._vx.reset(), se._vy.reset(), s && $ && we.delayedCall(.08, function () {
          if (300 < Fe() - ye && !t.defaultPrevented) if (t.target.click) t.target.click();else if (be.createEvent) {
            var e = be.createEvent("MouseEvents");
            e.initMouseEvent("click", !0, !0, ke, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e);
          }
        })), se.isDragging = se.isGesturing = se.isPressed = !1, l && !R && te.restart(!0), g && e && g(se), v && v(se, e);
      }
    }
    function Te(e) {
      return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && H(e, se.isDragging);
    }
    function Ue() {
      return (se.isGesturing = !1) || F(se);
    }
    function Ve(e) {
      if (!Le(e)) {
        var t = ue(),
          r = fe();
        Oe((t - de) * U, (r - pe) * U, 1), de = t, pe = r, l && te.restart(!0);
      }
    }
    function We(e) {
      if (!Le(e)) {
        e = L(e, s), W && (ie = !0);
        var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? ke.innerHeight : 1) * f;
        Oe(e.deltaX * t, e.deltaY * t, 0), l && !R && te.restart(!0);
      }
    }
    function Xe(e) {
      if (!Le(e)) {
        var t = e.clientX,
          r = e.clientY,
          n = t - se.x,
          i = r - se.y;
        se.x = t, se.y = r, ne = !0, (n || i) && Pe(n, i);
      }
    }
    function Ye(e) {
      se.event = e, C(se);
    }
    function Ze(e) {
      se.event = e, D(se);
    }
    function $e(e) {
      return Le(e) || L(e, s) && G(se);
    }
    this.target = n = I(n) || Me, this.vars = e, u = u && we.utils.toArray(u), i = i || 1e-9, a = a || 0, f = f || 1, U = U || 1, t = t || "wheel,touch,pointer", o = !1 !== o, r = r || parseFloat(ke.getComputedStyle(Ae).lineHeight) || 22;
    var ee,
      te,
      re,
      ne,
      ie,
      oe,
      ae,
      se = this,
      le = 0,
      ce = 0,
      ue = J(n, Je),
      fe = J(n, je),
      de = ue(),
      pe = fe(),
      ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === ze[0],
      he = z(n),
      be = n.ownerDocument || Ee,
      ve = [0, 0, 0],
      me = [0, 0, 0],
      ye = 0,
      xe = se.onPress = function (e) {
        Le(e, 1) || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = L(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), A(R ? n : be, ze[1], Qe, s, !0), se.deltaX = se.deltaY = 0, b && b(se));
      };
    te = se._dc = we.delayedCall(c || .25, function onStopFunc() {
      se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
    }).pause(), se.deltaX = se.deltaY = 0, se._vx = K(0, 50, !0), se._vy = K(0, 50, !0), se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = !1, se.enable = function (e) {
      return se.isEnabled || (A(he ? be : n, "scroll", E), 0 <= t.indexOf("scroll") && A(he ? be : n, "scroll", Ve, s, q), 0 <= t.indexOf("wheel") && A(n, "wheel", We, s, q), (0 <= t.indexOf("touch") && Ce || 0 <= t.indexOf("pointer")) && (A(n, ze[0], xe, s, q), A(be, ze[2], Se), A(be, ze[3], Se), $ && A(n, "click", Ke, !1, !0), G && A(n, "click", $e), H && A(be, "gesturestart", Te), F && A(be, "gestureend", Ue), C && A(n, Ie + "enter", Ye), D && A(n, Ie + "leave", Ze), X && A(n, Ie + "move", Xe)), se.isEnabled = !0, e && e.type && xe(e), j && j(se)), se;
    }, se.disable = function () {
      se.isEnabled && (Re.filter(function (e) {
        return e !== se && z(e.target);
      }).length || B(he ? be : n, "scroll", E), se.isPressed && (se._vx.reset(), se._vy.reset(), B(R ? n : be, ze[1], Qe, !0)), B(he ? be : n, "scroll", Ve, q), B(n, "wheel", We, q), B(n, ze[0], xe, q), B(be, ze[2], Se), B(be, ze[3], Se), B(n, "click", Ke, !0), B(n, "click", $e), B(be, "gesturestart", Te), B(be, "gestureend", Ue), B(n, Ie + "enter", Ye), B(n, Ie + "leave", Ze), B(n, Ie + "move", Xe), se.isEnabled = se.isPressed = se.isDragging = !1, V && V(se));
    }, se.kill = function () {
      se.disable();
      var e = Re.indexOf(se);
      0 <= e && Re.splice(e, 1), De === se && (De = 0);
    }, Re.push(se), R && z(n) && (De = se), se.enable(d);
  }, function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
  }(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]), Observer);
  function Observer(e) {
    this.init(e);
  }
  P.version = "3.11.2", P.create = function (e) {
    return new P(e);
  }, P.register = O, P.getAll = function () {
    return Re.slice();
  }, P.getById = function (t) {
    return Re.filter(function (e) {
      return e.vars.id === t;
    })[0];
  }, q() && we.registerPlugin(P);
  function wa() {
    return st = 1;
  }
  function xa() {
    return st = 0;
  }
  function ya(e) {
    return e;
  }
  function za(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Aa() {
    return "undefined" != typeof window;
  }
  function Ba() {
    return Ge || Aa() && (Ge = window.gsap) && Ge.registerPlugin && Ge;
  }
  function Ca(e) {
    return !!~s.indexOf(e);
  }
  function Da(e) {
    return y(e, "getBoundingClientRect") || (Ca(e) ? function () {
      return Xt.width = qe.innerWidth, Xt.height = qe.innerHeight, Xt;
    } : function () {
      return Ct(e);
    });
  }
  function Ga(e, t) {
    var r = t.s,
      n = t.d2,
      i = t.d,
      o = t.a;
    return (r = "scroll" + n) && (o = y(e, r)) ? o() - Da(e)()[i] : Ca(e) ? (tt[r] || rt[r]) - (qe["inner" + n] || tt["client" + n] || rt["client" + n]) : e[r] - e["offset" + n];
  }
  function Ha(e, t) {
    for (var r = 0; r < p.length; r += 3) t && !~t.indexOf(p[r + 1]) || e(p[r], p[r + 1], p[r + 2]);
  }
  function Ia(e) {
    return "string" == typeof e;
  }
  function Ja(e) {
    return "function" == typeof e;
  }
  function Ka(e) {
    return "number" == typeof e;
  }
  function La(e) {
    return "object" == typeof e;
  }
  function Ma(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Na(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function cb(e) {
    return qe.getComputedStyle(e);
  }
  function eb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function gb(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function hb(e) {
    var t,
      r = [],
      n = e.labels,
      i = e.duration();
    for (t in n) r.push(n[t] / i);
    return r;
  }
  function jb(i) {
    var o = Ge.utils.snap(i),
      a = Array.isArray(i) && i.slice(0).sort(function (e, t) {
        return e - t;
      });
    return a ? function (e, t, r) {
      var n;
      if (void 0 === r && (r = .001), !t) return o(e);
      if (0 < t) {
        for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
        return a[n - 1];
      }
      for (n = a.length, e += r; n--;) if (a[n] <= e) return a[n];
      return a[0];
    } : function (e, t, r) {
      void 0 === r && (r = .001);
      var n = o(e);
      return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : o(t < 0 ? e - i : e + i);
    };
  }
  function lb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function mb(e, t, r, n, i) {
    return e.addEventListener(t, r, {
      passive: !n,
      capture: !!i
    });
  }
  function nb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function ob(e, t, r) {
    return r && r.wheelHandler && e(t, "wheel", r);
  }
  function sb(e, t) {
    if (Ia(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in D ? D[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
    }
    return e;
  }
  function tb(e, t, r, n, i, o, a, s) {
    var l = i.startColor,
      c = i.endColor,
      u = i.fontSize,
      f = i.indent,
      d = i.fontWeight,
      p = et.createElement("div"),
      g = Ca(r) || "fixed" === y(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      b = g ? rt : r,
      v = -1 !== e.indexOf("start"),
      m = v ? l : c,
      x = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return x += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (x += (n === je ? S : _) + ":" + (o + parseFloat(f)) + "px;"), a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = x, p.innerText = t || 0 === t ? e + "-" + t : e, b.children[0] ? b.insertBefore(p, b.children[0]) : b.appendChild(p), p._offset = p["offset" + n.op.d2], X(p, 0, n, v), p;
  }
  function yb() {
    return 34 < bt() - vt && U();
  }
  function zb() {
    h && h.isPressed && !(h.startX > rt.clientWidth) || (k.cache++, x = x || requestAnimationFrame(U), vt || H("scrollStart"), vt = bt());
  }
  function Ab() {
    m = qe.innerWidth, v = qe.innerHeight;
  }
  function Bb() {
    k.cache++, at || g || et.fullscreenElement || et.webkitFullscreenElement || b && m === qe.innerWidth && !(Math.abs(qe.innerHeight - v) > .25 * qe.innerHeight) || l.restart(!0);
  }
  function Eb() {
    return nb(te, "scrollEnd", Eb) || V(!0);
  }
  function Hb(e) {
    for (var t = 0; t < W.length; t += 5) (!e || W[t + 4] && W[t + 4].query === e) && (W[t].style.cssText = W[t + 1], W[t].getBBox && W[t].setAttribute("transform", W[t + 2] || ""), W[t + 3].uncache = 1);
  }
  function Ib(e, t) {
    var r;
    for (lt = 0; lt < Bt.length; lt++) !(r = Bt[lt]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
    t && Hb(t), t || H("revert");
  }
  function Jb() {
    return k.cache++ && k.forEach(function (e) {
      return Ja(e) && (e.rec = 0);
    });
  }
  function Ub(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var i, o = $.length, a = t.style, s = e.style; o--;) a[i = $[o]] = r[i];
      a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[_] = s[S] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[xt] = gb(e, Je) + At, a[wt] = gb(e, je) + At, a[Et] = s[Pt] = s.top = s.left = "0", Lt(n), s[xt] = s.maxWidth = r[xt], s[wt] = s.maxHeight = r[wt], s[Et] = r[Et], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
    }
  }
  function Xb(e) {
    for (var t = Q.length, r = e.style, n = [], i = 0; i < t; i++) n.push(Q[i], r[Q[i]]);
    return n.t = e, n;
  }
  function $b(e, t, r, n, i, o, a, s, l, c, u, f, d) {
    Ja(e) && (e = e(s)), Ia(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? sb("0" + e.substr(3), r) : 0));
    var p,
      g,
      h,
      b = d ? d.time() : 0;
    if (d && d.seek(0), Ka(e)) a && X(a, r, n, !0);else {
      Ja(t) && (t = t(s));
      var v,
        m,
        y,
        x,
        w = (e || "0").split(" ");
      h = I(t) || rt, (v = Ct(h) || {}) && (v.left || v.top) || "none" !== cb(h).display || (x = h.style.display, h.style.display = "block", v = Ct(h), x ? h.style.display = x : h.style.removeProperty("display")), m = sb(w[0], v[n.d]), y = sb(w[1] || "0", r), e = v[n.p] - l[n.p] - c + m + i - y, a && X(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y;
    }
    if (o) {
      var S = e + r,
        _ = o._isStart;
      p = "scroll" + n.d2, X(o, S, n, _ && 20 < S || !_ && (u ? Math.max(rt[p], tt[p]) : o.parentNode[p]) <= S + 1), u && (l = Ct(a), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + At));
    }
    return d && h && (p = Ct(h), d.seek(f), g = Ct(h), d._caScrollDist = p[n.p] - g[n.p], e = e / d._caScrollDist * f), d && d.seek(b), d ? e : Math.round(e);
  }
  function ac(e, t, r, n) {
    if (e.parentNode !== t) {
      var i,
        o,
        a = e.style;
      if (t === rt) {
        for (i in e._stOrig = a.cssText, o = cb(e)) +i || ee.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
        a.top = r, a.left = n;
      } else a.cssText = e._stOrig;
      Ge.core.getCache(e).uncache = 1, t.appendChild(e);
    }
  }
  function bc(l, e) {
    function Ej(e, t, r, n, i) {
      var o = Ej.tween,
        a = t.onComplete,
        s = {};
      return r = r || f(), i = n && i || 0, n = n || e - r, o && o.kill(), c = Math.round(r), t[d] = e, (t.modifiers = s)[d] = function (e) {
        return (e = Math.round(f())) !== c && e !== u && 3 < Math.abs(e - c) && 3 < Math.abs(e - u) ? (o.kill(), Ej.tween = 0) : e = r + n * o.ratio + i * o.ratio * o.ratio, u = c, c = Math.round(e);
      }, t.onComplete = function () {
        Ej.tween = 0, a && a.call(o);
      }, o = Ej.tween = Ge.to(l, t);
    }
    var c,
      u,
      f = J(l, e),
      d = "_scroll" + e.p2;
    return (l[d] = f).wheelHandler = function () {
      return Ej.tween && Ej.tween.kill() && (Ej.tween = 0);
    }, mb(l, "wheel", f.wheelHandler), Ej;
  }
  var Ge,
    a,
    qe,
    et,
    tt,
    rt,
    s,
    l,
    nt,
    it,
    ot,
    c,
    at,
    st,
    u,
    lt,
    f,
    d,
    p,
    ct,
    ut,
    g,
    h,
    b,
    v,
    m,
    C,
    ft,
    dt,
    x,
    pt,
    gt,
    ht = 1,
    bt = Date.now,
    w = bt(),
    vt = 0,
    mt = 0,
    yt = Math.abs,
    S = "right",
    _ = "bottom",
    xt = "width",
    wt = "height",
    St = "Right",
    _t = "Left",
    Tt = "Top",
    kt = "Bottom",
    Et = "padding",
    Pt = "margin",
    Mt = "Width",
    T = "Height",
    At = "px",
    Ct = function _getBounds(e, t) {
      var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== cb(e)[u] && Ge.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
        }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    It = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    },
    Ot = {
      toggleActions: "play",
      anticipatePin: 0
    },
    D = {
      top: 0,
      left: 0,
      center: .5,
      bottom: 1,
      right: 1
    },
    X = function _positionMarker(e, t, r, n) {
      var i = {
          display: "block"
        },
        o = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + Mt] = 1, i["border" + a + Mt] = 0, i[r.p] = t + "px", Ge.set(e, i);
    },
    Bt = [],
    Dt = {},
    Y = {},
    R = [],
    H = function _dispatch(e) {
      return Y[e] && Y[e].map(function (e) {
        return e();
      }) || R;
    },
    W = [],
    j = 0,
    V = function _refreshAll(e, t) {
      if (!vt || e) {
        pt = !0, k.forEach(function (e) {
          return Ja(e) && e.cacheID++;
        });
        var r = H("refreshInit");
        ct && te.sort(), t || Ib(), Bt.slice(0).forEach(function (e) {
          return e.refresh();
        }), Bt.forEach(function (e) {
          return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, Ga(e.scroller, e._dir)));
        }), r.forEach(function (e) {
          return e && e.render && e.render(-1);
        }), k.forEach(function (e) {
          return Ja(e) && e(e.rec);
        }), Jb(), l.pause(), j++, U(2), pt = !1, H("refresh");
      } else mb(te, "scrollEnd", Eb);
    },
    G = 0,
    zt = 1,
    U = function _updateAll(e) {
      if (!pt || 2 === e) {
        te.isUpdating = !0, gt && gt.update(0);
        var t = Bt.length,
          r = bt(),
          n = 50 <= r - w,
          i = t && Bt[0].scroll();
        if (zt = i < G ? -1 : 1, G = i, n && (vt && !st && 200 < r - vt && (vt = 0, H("scrollEnd")), ot = w, w = r), zt < 0) {
          for (lt = t; 0 < lt--;) Bt[lt] && Bt[lt].update(0, n);
          zt = 1;
        } else for (lt = 0; lt < t; lt++) Bt[lt] && Bt[lt].update(0, n);
        te.isUpdating = !1;
      }
      x = 0;
    },
    $ = ["left", "top", _, S, Pt + kt, Pt + St, Pt + Tt, Pt + _t, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Q = $.concat([xt, wt, "boxSizing", "max" + Mt, "max" + T, "position", Pt, Et, Et + Tt, Et + St, Et + kt, Et + _t]),
    Z = /([A-Z])/g,
    Lt = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          i = e.length,
          o = 0;
        for ((e.t._gsap || Ge.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Z, "-$1").toLowerCase());
      }
    },
    Xt = {
      left: 0,
      top: 0
    },
    ee = /(webkit|moz|length|cssText|inset)/i,
    te = (ScrollTrigger.prototype.init = function init(_, T) {
      if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), mt) {
        var k,
          n,
          p,
          E,
          P,
          M,
          A,
          C,
          O,
          B,
          D,
          e,
          z,
          L,
          X,
          Y,
          R,
          t,
          N,
          v,
          H,
          F,
          m,
          W,
          x,
          w,
          r,
          S,
          j,
          V,
          i,
          g,
          G,
          K,
          U,
          q,
          $,
          o,
          Q = (_ = eb(Ia(_) || Ka(_) || _.nodeType ? {
            trigger: _
          } : _, Ot)).onUpdate,
          Z = _.toggleClass,
          a = _.id,
          ee = _.onToggle,
          te = _.onRefresh,
          re = _.scrub,
          ne = _.trigger,
          ie = _.pin,
          oe = _.pinSpacing,
          ae = _.invalidateOnRefresh,
          se = _.anticipatePin,
          s = _.onScrubComplete,
          h = _.onSnapComplete,
          le = _.once,
          ce = _.snap,
          ue = _.pinReparent,
          l = _.pinSpacer,
          fe = _.containerAnimation,
          de = _.fastScrollEnd,
          pe = _.preventOverlaps,
          ge = _.horizontal || _.containerAnimation && !1 !== _.horizontal ? Je : je,
          he = !re && 0 !== re,
          be = I(_.scroller || qe),
          c = Ge.core.getCache(be),
          ve = Ca(be),
          me = "fixed" === ("pinType" in _ ? _.pinType : y(be, "pinType") || ve && "fixed"),
          ye = [_.onEnter, _.onLeave, _.onEnterBack, _.onLeaveBack],
          xe = he && _.toggleActions.split(" "),
          u = "markers" in _ ? _.markers : Ot.markers,
          we = ve ? 0 : parseFloat(cb(be)["border" + ge.p2 + Mt]) || 0,
          Se = this,
          _e = _.onRefreshInit && function () {
            return _.onRefreshInit(Se);
          },
          Te = function _getSizeFunc(e, t, r) {
            var n = r.d,
              i = r.d2,
              o = r.a;
            return (o = y(e, "getBoundingClientRect")) ? function () {
              return o()[n];
            } : function () {
              return (t ? qe["inner" + i] : e["client" + i]) || 0;
            };
          }(be, ve, ge),
          ke = function _getOffsetsFunc(e, t) {
            return !t || ~He.indexOf(e) ? Da(e) : function () {
              return Xt;
            };
          }(be, ve),
          Ee = 0,
          Pe = 0,
          Me = J(be, ge);
        if (ft(Se), Se._dir = ge, se *= 45, Se.scroller = be, Se.scroll = fe ? fe.time.bind(fe) : Me, E = Me(), Se.vars = _, T = T || _.animation, "refreshPriority" in _ && (ct = 1, -9999 === _.refreshPriority && (gt = Se)), c.tweenScroll = c.tweenScroll || {
          top: bc(be, je),
          left: bc(be, Je)
        }, Se.tweenTo = k = c.tweenScroll[ge.p], Se.scrubDuration = function (e) {
          (i = Ka(e) && e) ? V ? V.duration(e) : V = Ge.to(T, {
            ease: "expo",
            totalProgress: "+=0.001",
            duration: i,
            paused: !0,
            onComplete: function onComplete() {
              return s && s(Se);
            }
          }) : (V && V.progress(1).kill(), V = 0);
        }, T && (T.vars.lazy = !1, T._initted || !1 !== T.vars.immediateRender && !1 !== _.immediateRender && T.render(0, !0, !0), Se.animation = T.pause(), (T.scrollTrigger = Se).scrubDuration(re), S = 0, a = a || T.vars.id), Bt.push(Se), ce && (La(ce) && !ce.push || (ce = {
          snapTo: ce
        }), "scrollBehavior" in rt.style && Ge.set(ve ? [rt, tt] : be, {
          scrollBehavior: "auto"
        }), p = Ja(ce.snapTo) ? ce.snapTo : "labels" === ce.snapTo ? function _getClosestLabel(t) {
          return function (e) {
            return Ge.utils.snap(hb(t), e);
          };
        }(T) : "labelsDirectional" === ce.snapTo ? function _getLabelAtDirection(r) {
          return function (e, t) {
            return jb(hb(r))(e, t.direction);
          };
        }(T) : !1 !== ce.directional ? function (e, t) {
          return jb(ce.snapTo)(e, bt() - Pe < 500 ? 0 : t.direction);
        } : Ge.utils.snap(ce.snapTo), g = ce.duration || {
          min: .1,
          max: 2
        }, g = La(g) ? it(g.min, g.max) : it(g, g), G = Ge.delayedCall(ce.delay || i / 2 || .1, function () {
          var e = Me(),
            t = bt() - Pe < 500,
            r = k.tween;
          if (!(t || Math.abs(Se.getVelocity()) < 10) || r || st || Ee === e) Se.isActive && Ee !== e && G.restart(!0);else {
            var n = (e - M) / z,
              i = T && !he ? T.totalProgress() : n,
              o = t ? 0 : (i - j) / (bt() - ot) * 1e3 || 0,
              a = Ge.utils.clamp(-n, 1 - n, yt(o / 2) * o / .185),
              s = n + (!1 === ce.inertia ? 0 : a),
              l = it(0, 1, p(s, Se)),
              c = Math.round(M + l * z),
              u = ce.onStart,
              f = ce.onInterrupt,
              d = ce.onComplete;
            if (e <= A && M <= e && c !== e) {
              if (r && !r._initted && r.data <= yt(c - e)) return;
              !1 === ce.inertia && (a = l - n), k(c, {
                duration: g(yt(.185 * Math.max(yt(s - i), yt(l - i)) / o / .05 || 0)),
                ease: ce.ease || "power3",
                data: yt(c - e),
                onInterrupt: function onInterrupt() {
                  return G.restart(!0) && f && f(Se);
                },
                onComplete: function onComplete() {
                  Se.update(), Ee = Me(), S = j = T && !he ? T.totalProgress() : Se.progress, h && h(Se), d && d(Se);
                }
              }, e, a * z, c - e - a * z), u && u(Se, k.tween);
            }
          }
        }).pause()), a && (Dt[a] = Se), o = (o = (ne = Se.trigger = I(ne || ie)) && ne._gsap && ne._gsap.stRevert) && o(Se), ie = !0 === ie ? ne : I(ie), Ia(Z) && (Z = {
          targets: ne,
          className: Z
        }), ie && (!1 === oe || oe === Pt || (oe = !(!oe && "flex" === cb(ie.parentNode).display) && Et), Se.pin = ie, !1 !== _.force3D && Ge.set(ie, {
          force3D: !0
        }), (n = Ge.core.getCache(ie)).spacer ? L = n.pinState : (l && ((l = I(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = Xb(l))), n.spacer = R = l || et.createElement("div"), R.classList.add("pin-spacer"), a && R.classList.add("pin-spacer-" + a), n.pinState = L = Xb(ie)), Se.spacer = R = n.spacer, r = cb(ie), m = r[oe + ge.os2], N = Ge.getProperty(ie), v = Ge.quickSetter(ie, ge.a, At), Ub(ie, R, r), Y = Xb(ie)), u) {
          e = La(u) ? eb(u, It) : It, B = tb("scroller-start", a, be, ge, e, 0), D = tb("scroller-end", a, be, ge, e, 0, B), t = B["offset" + ge.op.d2];
          var f = I(y(be, "content") || be);
          C = this.markerStart = tb("start", a, f, ge, e, t, 0, fe), O = this.markerEnd = tb("end", a, f, ge, e, t, 0, fe), fe && ($ = Ge.quickSetter([C, O], ge.a, At)), me || He.length && !0 === y(be, "fixedMarkers") || (function _makePositionable(e) {
            var t = cb(e).position;
            e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
          }(ve ? rt : be), Ge.set([B, D], {
            force3D: !0
          }), x = Ge.quickSetter(B, ge.a, At), w = Ge.quickSetter(D, ge.a, At));
        }
        if (fe) {
          var d = fe.vars.onUpdate,
            b = fe.vars.onUpdateParams;
          fe.eventCallback("onUpdate", function () {
            Se.update(0, 0, 1), d && d.apply(b || []);
          });
        }
        Se.previous = function () {
          return Bt[Bt.indexOf(Se) - 1];
        }, Se.next = function () {
          return Bt[Bt.indexOf(Se) + 1];
        }, Se.revert = function (e, t) {
          if (!t) return Se.kill(!0);
          var r = !1 !== e || !Se.enabled,
            n = at;
          r !== Se.isReverted && (r && (Se.scroll.rec || !at && !pt || (Se.scroll.rec = Me(), pt && Me(0)), U = Math.max(Me(), Se.scroll.rec || 0), K = Se.progress, q = T && T.progress()), C && [C, O, B, D].forEach(function (e) {
            return e.style.display = r ? "none" : "block";
          }), r && (at = 1), Se.update(r), at = n, ie && (r ? function _swapPinOut(e, t, r) {
            Lt(r);
            var n = e._gsap;
            if (n.spacerIsNative) Lt(n.spacerState);else if (e._gsap.swappedIn) {
              var i = t.parentNode;
              i && (i.insertBefore(e, t), i.removeChild(t));
            }
            e._gsap.swappedIn = !1;
          }(ie, R, L) : ue && Se.isActive || Ub(ie, R, cb(ie), W)), Se.isReverted = r);
        }, Se.refresh = function (e, t) {
          if (!at && Se.enabled || t) if (ie && e && vt) mb(ScrollTrigger, "scrollEnd", Eb);else {
            !pt && _e && _e(Se), at = 1, Pe = bt(), k.tween && (k.tween.kill(), k.tween = 0), V && V.pause(), ae && T && T.revert().invalidate(), Se.isReverted || Se.revert(!0, !0);
            for (var r, n, i, o, a, s, l, c, u, f, d = Te(), p = ke(), g = fe ? fe.duration() : Ga(be, ge), h = 0, b = 0, v = _.end, m = _.endTrigger || ne, y = _.start || (0 !== _.start && ne ? ie ? "0 0" : "0 100%" : 0), x = Se.pinnedContainer = _.pinnedContainer && I(_.pinnedContainer), w = ne && Math.max(0, Bt.indexOf(Se)) || 0, S = w; S--;) (s = Bt[S]).end || s.refresh(0, 1) || (at = 1), !(l = s.pin) || l !== ne && l !== ie || s.isReverted || ((f = f || []).unshift(s), s.revert(!0, !0)), s !== Bt[S] && (w--, S--);
            for (Ja(y) && (y = y(Se)), M = $b(y, ne, d, ge, Me(), C, B, Se, p, we, me, g, fe) || (ie ? -.001 : 0), Ja(v) && (v = v(Se)), Ia(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (Ia(y) ? y.split(" ")[0] : "") + v : (h = sb(v.substr(2), d), v = Ia(y) ? y : M + h, m = ne)), A = Math.max(M, $b(v || (m ? "100% 0" : g), m, d, ge, Me() + h, O, D, Se, p, we, me, g, fe)) || -.001, z = A - M || (M -= .01) && .001, h = 0, S = w; S--;) (l = (s = Bt[S]).pin) && s.start - s._pinPush < M && !fe && 0 < s.end && (r = s.end - s.start, l !== ne && l !== x || Ka(y) || (h += r * (1 - s.progress)), l === ie && (b += r));
            if (M += h, A += h, Se._pinPush = b, C && h && ((r = {})[ge.a] = "+=" + h, x && (r[ge.p] = "-=" + Me()), Ge.set([C, O], r)), ie) r = cb(ie), o = ge === je, i = Me(), H = parseFloat(N(ge.a)) + b, !g && 1 < A && ((ve ? rt : be).style["overflow-" + ge.a] = "scroll"), Ub(ie, R, r), Y = Xb(ie), n = Ct(ie, !0), c = me && J(be, o ? Je : je)(), oe && ((W = [oe + ge.os2, z + b + At]).t = R, (S = oe === Et ? gb(ie, ge) + z + b : 0) && W.push(ge.d, S + At), Lt(W), me && Me(U)), me && ((a = {
              top: n.top + (o ? i - M : c) + At,
              left: n.left + (o ? c : i - M) + At,
              boxSizing: "border-box",
              position: "fixed"
            })[xt] = a.maxWidth = Math.ceil(n.width) + At, a[wt] = a.maxHeight = Math.ceil(n.height) + At, a[Pt] = a[Pt + Tt] = a[Pt + St] = a[Pt + kt] = a[Pt + _t] = "0", a[Et] = r[Et], a[Et + Tt] = r[Et + Tt], a[Et + St] = r[Et + St], a[Et + kt] = r[Et + kt], a[Et + _t] = r[Et + _t], X = function _copyState(e, t, r) {
              for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
              return i.t = e.t, i;
            }(L, a, ue), pt && Me(0)), T ? (u = T._initted, ut(1), T.render(T.duration(), !0, !0), F = N(ge.a) - H + z + b, z !== F && me && X.splice(X.length - 2, 2), T.render(0, !0, !0), u || T.invalidate(), ut(0)) : F = z;else if (ne && Me() && !fe) for (n = ne.parentNode; n && n !== rt;) n._pinOffset && (M -= n._pinOffset, A -= n._pinOffset), n = n.parentNode;
            f && f.forEach(function (e) {
              return e.revert(!1, !0);
            }), Se.start = M, Se.end = A, E = P = Me(), fe || pt || (E < U && Me(U), Se.scroll.rec = 0), Se.revert(!1, !0), G && (Ee = -1, Se.isActive && Me(M + z * K), G.restart(!0)), at = 0, T && he && (T._initted || q) && T.progress() !== q && T.progress(q, !0).render(T.time(), !0, !0), K === Se.progress && !fe || (T && !he && T.totalProgress(K, !0), Se.progress = (E - M) / z === K ? 0 : K), ie && oe && (R._pinOffset = Math.round(Se.progress * F)), te && te(Se);
          }
        }, Se.getVelocity = function () {
          return (Me() - P) / (bt() - ot) * 1e3 || 0;
        }, Se.endAnimation = function () {
          Ma(Se.callbackAnimation), T && (V ? V.progress(1) : T.paused() ? he || Ma(T, Se.direction < 0, 1) : Ma(T, T.reversed()));
        }, Se.labelToScroll = function (e) {
          return T && T.labels && (M || Se.refresh() || M) + T.labels[e] / T.duration() * z || 0;
        }, Se.getTrailing = function (t) {
          var e = Bt.indexOf(Se),
            r = 0 < Se.direction ? Bt.slice(0, e).reverse() : Bt.slice(e + 1);
          return (Ia(t) ? r.filter(function (e) {
            return e.vars.preventOverlaps === t;
          }) : r).filter(function (e) {
            return 0 < Se.direction ? e.end <= M : e.start >= A;
          });
        }, Se.update = function (e, t, r) {
          if (!fe || r || e) {
            var n,
              i,
              o,
              a,
              s,
              l,
              c,
              u = Se.scroll(),
              f = e ? 0 : (u - M) / z,
              d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
              p = Se.progress;
            if (t && (P = E, E = fe ? Me() : u, ce && (j = S, S = T && !he ? T.totalProgress() : d)), se && !d && ie && !at && !ht && vt && M < u + (u - P) / (bt() - ot) * se && (d = 1e-4), d !== p && Se.enabled) {
              if (a = (s = (n = Se.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p, Se.direction = p < d ? 1 : -1, Se.progress = d, a && !at && (i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3, he && (o = !s && "none" !== xe[i + 1] && xe[i + 1] || xe[i], c = T && ("complete" === o || "reset" === o || o in T))), pe && (s || c) && (c || re || !T) && (Ja(pe) ? pe(Se) : Se.getTrailing(pe).forEach(function (e) {
                return e.endAnimation();
              })), he || (!V || at || ht ? T && T.totalProgress(d, !!at) : ((fe || gt && gt !== Se) && V.render(V._dp._time - V._start), V.resetTo ? V.resetTo("totalProgress", d, T._tTime / T._tDur) : (V.vars.totalProgress = d, V.invalidate().restart()))), ie) if (e && oe && (R.style[oe + ge.os2] = m), me) {
                if (a) {
                  if (l = !e && p < d && u < A + 1 && u + 1 >= Ga(be, ge), ue) if (e || !n && !l) ac(ie, R);else {
                    var g = Ct(ie, !0),
                      h = u - M;
                    ac(ie, rt, g.top + (ge === je ? h : 0) + At, g.left + (ge === je ? 0 : h) + At);
                  }
                  Lt(n || l ? X : Y), F !== z && d < 1 && n || v(H + (1 !== d || l ? 0 : F));
                }
              } else v(za(H + F * d));
              !ce || k.tween || at || ht || G.restart(!0), Z && (s || le && d && (d < 1 || !dt)) && nt(Z.targets).forEach(function (e) {
                return e.classList[n || le ? "add" : "remove"](Z.className);
              }), !Q || he || e || Q(Se), a && !at ? (he && (c && ("complete" === o ? T.pause().totalProgress(1) : "reset" === o ? T.restart(!0).pause() : "restart" === o ? T.restart(!0) : T[o]()), Q && Q(Se)), !s && dt || (ee && s && Na(Se, ee), ye[i] && Na(Se, ye[i]), le && (1 === d ? Se.kill(!1, 1) : ye[i] = 0), s || ye[i = 1 === d ? 1 : 3] && Na(Se, ye[i])), de && !n && Math.abs(Se.getVelocity()) > (Ka(de) ? de : 2500) && (Ma(Se.callbackAnimation), V ? V.progress(1) : Ma(T, "reverse" === o ? 1 : !d, 1))) : he && Q && !at && Q(Se);
            }
            if (w) {
              var b = fe ? u / fe.duration() * (fe._caScrollDist || 0) : u;
              x(b + (B._isFlipped ? 1 : 0)), w(b);
            }
            $ && $(-u / fe.duration() * (fe._caScrollDist || 0));
          }
        }, Se.enable = function (e, t) {
          Se.enabled || (Se.enabled = !0, mb(be, "resize", Bb), mb(ve ? et : be, "scroll", zb), _e && mb(ScrollTrigger, "refreshInit", _e), !1 !== e && (Se.progress = K = 0, E = P = Ee = Me()), !1 !== t && Se.refresh());
        }, Se.getTween = function (e) {
          return e && k ? k.tween : V;
        }, Se.setPositions = function (e, t) {
          ie && (H += e - M, F += t - e - z), Se.start = M = e, Se.end = A = t, z = t - e, Se.update();
        }, Se.disable = function (e, t) {
          if (Se.enabled && (!1 !== e && Se.revert(!0, !0), Se.enabled = Se.isActive = !1, t || V && V.pause(), U = 0, n && (n.uncache = 1), _e && nb(ScrollTrigger, "refreshInit", _e), G && (G.pause(), k.tween && k.tween.kill() && (k.tween = 0)), !ve)) {
            for (var r = Bt.length; r--;) if (Bt[r].scroller === be && Bt[r] !== Se) return;
            nb(be, "resize", Bb), nb(be, "scroll", zb);
          }
        }, Se.kill = function (e, t) {
          Se.disable(e, t), V && !t && V.kill(), a && delete Dt[a];
          var r = Bt.indexOf(Se);
          0 <= r && Bt.splice(r, 1), r === lt && 0 < zt && lt--, r = 0, Bt.forEach(function (e) {
            return e.scroller === Se.scroller && (r = 1);
          }), r || pt || (Se.scroll.rec = 0), T && (T.scrollTrigger = null, e && T.render(-1), t || T.kill()), C && [C, O, B, D].forEach(function (e) {
            return e.parentNode && e.parentNode.removeChild(e);
          }), gt === Se && (gt = 0), ie && (n && (n.uncache = 1), r = 0, Bt.forEach(function (e) {
            return e.pin === ie && r++;
          }), r || (n.spacer = 0)), _.onKill && _.onKill(Se);
        }, Se.enable(!1, !1), o && o(Se), T && T.add && !z ? Ge.delayedCall(.01, function () {
          return M || A || Se.refresh();
        }) && (z = .01) && (M = A = 0) : Se.refresh();
      } else this.update = this.refresh = this.kill = ya;
    }, ScrollTrigger.register = function register(e) {
      return a || (Ge = e || Ba(), Aa() && window.document && ScrollTrigger.enable(), a = mt), a;
    }, ScrollTrigger.defaults = function defaults(e) {
      if (e) for (var t in e) Ot[t] = e[t];
      return Ot;
    }, ScrollTrigger.disable = function disable(t, r) {
      mt = 0, Bt.forEach(function (e) {
        return e[r ? "kill" : "disable"](t);
      }), nb(qe, "wheel", zb), nb(et, "scroll", zb), clearInterval(c), nb(et, "touchcancel", ya), nb(rt, "touchstart", ya), lb(nb, et, "pointerdown,touchstart,mousedown", wa), lb(nb, et, "pointerup,touchend,mouseup", xa), l.kill(), Ha(nb);
      for (var e = 0; e < k.length; e += 3) ob(nb, k[e], k[e + 1]), ob(nb, k[e], k[e + 2]);
    }, ScrollTrigger.enable = function enable() {
      if (qe = window, et = document, tt = et.documentElement, rt = et.body, Ge && (nt = Ge.utils.toArray, it = Ge.utils.clamp, ft = Ge.core.context || ya, ut = Ge.core.suppressOverwrites || ya, Ge.core.globals("ScrollTrigger", ScrollTrigger), rt)) {
        mt = 1, P.register(Ge), ScrollTrigger.isTouch = P.isTouch, C = P.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), mb(qe, "wheel", zb), s = [qe, et, tt, rt], Ge.matchMedia ? (ScrollTrigger.matchMedia = function (e) {
          var t,
            r = Ge.matchMedia();
          for (t in e) r.add(t, e[t]);
          return r;
        }, Ge.addEventListener("matchMediaInit", function () {
          return Ib();
        }), Ge.addEventListener("matchMediaRevert", function () {
          return Hb();
        }), Ge.addEventListener("matchMedia", function () {
          V(0, 1), H("matchMedia");
        }), Ge.matchMedia("(orientation: portrait)", function () {
          return Ab(), Ab;
        })) : console.warn("Requires GSAP 3.11.0 or later"), mb(et, "scroll", zb);
        var e,
          t,
          r = rt.style,
          n = r.borderTopStyle,
          i = Ge.core.Animation.prototype;
        for (i.revert || Object.defineProperty(i, "revert", {
          value: function value() {
            return this.time(-.01, !0);
          }
        }), r.borderTopStyle = "solid", e = Ct(rt), je.m = Math.round(e.top + je.sc()) || 0, Je.m = Math.round(e.left + Je.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), c = setInterval(yb, 250), Ge.delayedCall(.5, function () {
          return ht = 0;
        }), mb(et, "touchcancel", ya), mb(rt, "touchstart", ya), lb(mb, et, "pointerdown,touchstart,mousedown", wa), lb(mb, et, "pointerup,touchend,mouseup", xa), u = Ge.utils.checkPrefix("transform"), Q.push(u), a = bt(), l = Ge.delayedCall(.2, V).pause(), p = [et, "visibilitychange", function () {
          var e = qe.innerWidth,
            t = qe.innerHeight;
          et.hidden ? (f = e, d = t) : f === e && d === t || Bb();
        }, et, "DOMContentLoaded", V, qe, "load", V, qe, "resize", Bb], Ha(mb), Bt.forEach(function (e) {
          return e.enable(0, 1);
        }), t = 0; t < k.length; t += 3) ob(nb, k[t], k[t + 1]), ob(nb, k[t], k[t + 2]);
      }
    }, ScrollTrigger.config = function config(e) {
      "limitCallbacks" in e && (dt = !!e.limitCallbacks);
      var t = e.syncInterval;
      t && clearInterval(c) || (c = t) && setInterval(yb, t), "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ha(nb) || Ha(mb, e.autoRefreshEvents || "none"), g = -1 === (e.autoRefreshEvents + "").indexOf("resize"));
    }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
      var r = I(e),
        n = k.indexOf(r),
        i = Ca(r);
      ~n && k.splice(n, i ? 6 : 2), t && (i ? He.unshift(qe, t, rt, t, tt, t) : He.unshift(r, t));
    }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
      Bt.forEach(function (e) {
        return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
      });
    }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
      var n = (Ia(e) ? I(e) : e).getBoundingClientRect(),
        i = n[r ? xt : wt] * t || 0;
      return r ? 0 < n.right - i && n.left + i < qe.innerWidth : 0 < n.bottom - i && n.top + i < qe.innerHeight;
    }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
      Ia(e) && (e = I(e));
      var n = e.getBoundingClientRect(),
        i = n[r ? xt : wt],
        o = null == t ? i / 2 : t in D ? D[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
      return r ? (n.left + o) / qe.innerWidth : (n.top + o) / qe.innerHeight;
    }, ScrollTrigger.killAll = function killAll(e) {
      if (Bt.forEach(function (e) {
        return "ScrollSmoother" !== e.vars.id && e.kill();
      }), !0 !== e) {
        var t = Y.killAll || [];
        Y = {}, t.forEach(function (e) {
          return e();
        });
      }
    }, ScrollTrigger);
  function ScrollTrigger(e, t) {
    a || ScrollTrigger.register(Ge) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t);
  }
  te.version = "3.11.2", te.saveStyles = function (e) {
    return e ? nt(e).forEach(function (e) {
      if (e && e.style) {
        var t = W.indexOf(e);
        0 <= t && W.splice(t, 5), W.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Ge.core.getCache(e), ft());
      }
    }) : W;
  }, te.revert = function (e, t) {
    return Ib(!e, t);
  }, te.create = function (e, t) {
    return new te(e, t);
  }, te.refresh = function (e) {
    return e ? Bb() : (a || te.register()) && V(!0);
  }, te.update = U, te.clearScrollMemory = Jb, te.maxScroll = function (e, t) {
    return Ga(e, t ? Je : je);
  }, te.getScrollFunc = function (e, t) {
    return J(I(e), t ? Je : je);
  }, te.getById = function (e) {
    return Dt[e];
  }, te.getAll = function () {
    return Bt.filter(function (e) {
      return "ScrollSmoother" !== e.vars.id;
    });
  }, te.isScrolling = function () {
    return !!vt;
  }, te.snapDirectional = jb, te.addEventListener = function (e, t) {
    var r = Y[e] || (Y[e] = []);
    ~r.indexOf(t) || r.push(t);
  }, te.removeEventListener = function (e, t) {
    var r = Y[e],
      n = r && r.indexOf(t);
    0 <= n && r.splice(n, 1);
  }, te.batch = function (e, t) {
    function lo(e, t) {
      var r = [],
        n = [],
        i = Ge.delayedCall(o, function () {
          t(r, n), r = [], n = [];
        }).pause();
      return function (e) {
        r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1);
      };
    }
    var r,
      n = [],
      i = {},
      o = t.interval || .016,
      a = t.batchMax || 1e9;
    for (r in t) i[r] = "on" === r.substr(0, 2) && Ja(t[r]) && "onRefreshInit" !== r ? lo(0, t[r]) : t[r];
    return Ja(a) && (a = a(), mb(te, "refresh", function () {
      return a = t.batchMax();
    })), nt(e).forEach(function (e) {
      var t = {};
      for (r in i) t[r] = i[r];
      t.trigger = e, n.push(te.create(t));
    }), n;
  };
  function dc(e, t, r, n) {
    return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1;
  }
  function ec(e, t) {
    !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (P.isTouch ? " pinch-zoom" : "") : "none", e === tt && ec(rt, t);
  }
  function gc(e) {
    var t,
      r = e.event,
      n = e.target,
      i = e.axis,
      o = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = o._gsap || Ge.core.getCache(o),
      s = bt();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (; o && o.scrollHeight <= o.clientHeight;) o = o.parentNode;
      a._isScroll = o && !Ca(o) && o !== n && (ne[(t = cb(o)).overflowY] || ne[t.overflowX]), a._isScrollT = s;
    }
    !a._isScroll && "x" !== i || (r.stopPropagation(), r._gsapAllow = !0);
  }
  function hc(e, t, r, n) {
    return P.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: n = n && gc,
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && mb(et, P.eventTypes[0], oe, !1, !0);
      },
      onDisable: function onDisable() {
        return nb(et, P.eventTypes[0], oe, !0);
      }
    });
  }
  function lc(e) {
    function hp() {
      return i = !1;
    }
    function kp() {
      o = Ga(d, je), T = it(C ? 1 : 0, o), f && (_ = it(0, Ga(d, Je))), l = j;
    }
    function lp() {
      h._gsap.y = za(parseFloat(h._gsap.y) + b.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0;
    }
    function rp() {
      kp(), a.isActive() && a.vars.scrollY > o && (b() > o ? a.progress(1) && b(o) : a.resetTo("scrollY", o));
    }
    La(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
    var n,
      o,
      l,
      i,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = I(e.target) || tt,
      p = Ge.core.globals().ScrollSmoother,
      g = p && p.get(),
      h = C && (e.content && I(e.content) || g && !1 !== e.content && !g.smooth() && g.content()),
      b = J(d, je),
      v = J(d, Je),
      m = 1,
      y = (P.isTouch && qe.visualViewport ? qe.visualViewport.scale * qe.visualViewport.width : qe.outerWidth) / qe.innerWidth,
      x = 0,
      w = Ja(t) ? function () {
        return t(n);
      } : function () {
        return t || 2.8;
      },
      S = hc(d, e.type, !0, r),
      _ = ya,
      T = ya;
    return h && Ge.set(h, {
      y: "+=0"
    }), e.ignoreCheck = function (e) {
      return C && "touchmove" === e.type && function ignoreDrag() {
        if (i) {
          requestAnimationFrame(hp);
          var e = za(n.deltaY / 2),
            t = T(b.v - e);
          if (h && t !== b.v + b.offset) {
            b.offset = t - b.v;
            var r = za((parseFloat(h && h._gsap.y) || 0) - b.offset);
            h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", h._gsap.y = r + "px", b.cacheID = k.cache, U();
          }
          return !0;
        }
        b.offset && lp(), i = !0;
      }() || 1.05 < m && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length;
    }, e.onPress = function () {
      var e = m;
      m = za((qe.visualViewport && qe.visualViewport.scale || 1) / y), a.pause(), e !== m && ec(d, 1.01 < m || !f && "x"), c = v(), u = b(), kp(), l = j;
    }, e.onRelease = e.onGestureStart = function (e, t) {
      if (b.offset && lp(), t) {
        k.cache++;
        var r,
          n,
          i = w();
        f && (n = (r = v()) + .05 * i * -e.velocityX / .227, i *= dc(v, r, n, Ga(d, Je)), a.vars.scrollX = _(n)), n = (r = b()) + .05 * i * -e.velocityY / .227, i *= dc(b, r, n, Ga(d, je)), a.vars.scrollY = T(n), a.invalidate().duration(i).play(.01), (C && a.vars.scrollY >= o || o - 1 <= r) && Ge.to({}, {
          onUpdate: rp,
          duration: i
        });
      } else s.restart(!0);
    }, e.onWheel = function () {
      a._ts && a.pause(), 1e3 < bt() - x && (l = 0, x = bt());
    }, e.onChange = function (e, t, r, n, i) {
      if (j !== l && kp(), t && f && v(_(n[2] === t ? c + (e.startX - e.x) : v() + t - n[1])), r) {
        b.offset && lp();
        var o = i[2] === r,
          a = o ? u + e.startY - e.y : b() + r - i[1],
          s = T(a);
        o && a !== s && (u += s - a), b(s);
      }
      (r || t) && U();
    }, e.onEnable = function () {
      ec(d, !f && "x"), mb(qe, "resize", rp), S.enable();
    }, e.onDisable = function () {
      ec(d, !0), nb(qe, "resize", rp), S.kill();
    }, e.lockAxis = !1 !== e.lockAxis, ((n = new P(e)).iOS = C) && !b() && b(1), C && Ge.ticker.add(ya), s = n._dc, a = Ge.to(n, {
      ease: "power4",
      paused: !0,
      scrollX: f ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      onComplete: s.vars.onComplete
    }), n;
  }
  var re,
    ne = {
      auto: 1,
      scroll: 1
    },
    ie = /(input|label|select|textarea)/i,
    oe = function _captureInputs(e) {
      var t = ie.test(e.target.tagName);
      (t || re) && (e._gsapAllow = !0, re = t);
    };
  te.sort = function (e) {
    return Bt.sort(e || function (e, t) {
      return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
    });
  }, te.observe = function (e) {
    return new P(e);
  }, te.normalizeScroll = function (e) {
    if (void 0 === e) return h;
    if (!0 === e && h) return h.enable();
    if (!1 === e) return h && h.kill();
    var t = e instanceof P ? e : lc(e);
    return h && h.target === t.target && h.kill(), Ca(t.target) && (h = t), t;
  }, te.core = {
    _getVelocityProp: K,
    _inputObserver: hc,
    _scrollers: k,
    _proxies: He,
    bridge: {
      ss: function ss() {
        vt || H("scrollStart"), vt = bt();
      },
      ref: function ref() {
        return at;
      }
    }
  }, Ba() && Ge.registerPlugin(te), e.ScrollTrigger = te, e.default = te;
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }
  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;
  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }
  window.dispatchEvent(event);
}
if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./src/js/vendor/fslightbox.js":
/*!*************************************!*\
  !*** ./src/js/vendor/fslightbox.js ***!
  \*************************************/
/***/ ((module) => {

!function (e, t) {
  if (true) module.exports = t();else { var o, n; }
}(window, function () {
  return function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var r = t[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }
    return n.m = e, n.c = t, n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: o
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var r in e) n.d(o, r, function (t) {
        return e[t];
      }.bind(null, r));
      return o;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    "use strict";

    n.r(t);
    var o,
      r = "fslightbox-",
      i = "".concat(r, "styles"),
      s = "".concat(r, "cursor-grabbing"),
      c = "".concat(r, "full-dimension"),
      a = "".concat(r, "flex-centered"),
      l = "".concat(r, "open"),
      u = "".concat(r, "transform-transition"),
      d = "".concat(r, "absoluted"),
      p = "".concat(r, "slide-btn"),
      f = "".concat(p, "-container"),
      h = "".concat(r, "fade-in"),
      m = "".concat(r, "fade-out"),
      g = h + "-strong",
      v = m + "-strong",
      b = "".concat(r, "opacity-"),
      x = "".concat(b, "1"),
      y = "".concat(r, "source");
    function S(e) {
      return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    "object" === ("undefined" == typeof document ? "undefined" : S(document)) && ((o = document.createElement("style")).className = i, o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(o));
    function w(e) {
      var t,
        n = e.props,
        o = 0,
        r = {};
      this.getSourceTypeFromLocalStorageByUrl = function (e) {
        return t[e] ? t[e] : i(e);
      }, this.handleReceivedSourceTypeForUrl = function (e, n) {
        !1 === r[n] && (o--, "invalid" !== e ? r[n] = e : delete r[n], 0 === o && (!function (e, t) {
          for (var n in t) e[n] = t[n];
        }(t, r), localStorage.setItem("fslightbox-types", JSON.stringify(t))));
      };
      var i = function (e) {
        o++, r[e] = !1;
      };
      n.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function () {}, this.handleReceivedSourceTypeForUrl = function () {}) : (t = JSON.parse(localStorage.getItem("fslightbox-types"))) || (t = {}, this.getSourceTypeFromLocalStorageByUrl = i);
    }
    function L(e, t, n, o) {
      var r = e.data,
        i = e.elements.sources,
        s = n / o,
        c = 0;
      this.adjustSize = function () {
        if ((c = r.maxSourceWidth / s) < r.maxSourceHeight) return n < r.maxSourceWidth && (c = o), a();
        c = o > r.maxSourceHeight ? r.maxSourceHeight : o, a();
      };
      var a = function () {
        i[t].style.width = c * s + "px", i[t].style.height = c + "px";
      };
    }
    function C(e, t) {
      var n = this,
        o = e.collections.sourceSizers,
        r = e.elements,
        i = r.sourceAnimationWrappers,
        s = r.sourceMainWrappers,
        c = r.sources,
        a = e.resolve;
      function l(e, n) {
        o[t] = a(L, [t, e, n]), o[t].adjustSize();
      }
      this.runActions = function (e, o) {
        c[t].classList.add(x), i[t].classList.add(g), s[t].removeChild(s[t].firstChild), l(e, o), n.runActions = l;
      };
    }
    function F(e, t) {
      var n,
        o = this,
        r = e.elements.sources,
        i = e.props,
        s = (0, e.resolve)(C, [t]);
      this.handleImageLoad = function (e) {
        var t = e.target,
          n = t.naturalWidth,
          o = t.naturalHeight;
        s.runActions(n, o);
      }, this.handleVideoLoad = function (e) {
        var t = e.target,
          o = t.videoWidth,
          r = t.videoHeight;
        n = !0, s.runActions(o, r);
      }, this.handleNotMetaDatedVideoLoad = function () {
        n || o.handleYoutubeLoad();
      }, this.handleYoutubeLoad = function () {
        var e = 1920,
          t = 1080;
        i.maxYoutubeDimensions && (e = i.maxYoutubeDimensions.width, t = i.maxYoutubeDimensions.height), s.runActions(e, t);
      }, this.handleCustomLoad = function () {
        setTimeout(function () {
          var e = r[t];
          s.runActions(e.offsetWidth, e.offsetHeight);
        });
      };
    }
    function A(e, t, n) {
      var o = e.elements.sources,
        r = e.props.customClasses,
        i = r[t] ? r[t] : "";
      o[t].className = n + " " + i;
    }
    function I(e, t) {
      var n = e.elements.sources,
        o = e.props.customAttributes;
      for (var r in o[t]) n[t].setAttribute(r, o[t][r]);
    }
    function T(e, t) {
      var n = e.collections.sourceLoadHandlers,
        o = e.elements,
        r = o.sources,
        i = o.sourceAnimationWrappers,
        s = e.props.sources;
      r[t] = document.createElement("img"), A(e, t, y), r[t].src = s[t], r[t].onload = n[t].handleImageLoad, I(e, t), i[t].appendChild(r[t]);
    }
    function E(e, t) {
      var n = e.collections.sourceLoadHandlers,
        o = e.elements,
        r = o.sources,
        i = o.sourceAnimationWrappers,
        s = e.props,
        c = s.sources,
        a = s.videosPosters;
      r[t] = document.createElement("video"), A(e, t, y), r[t].src = c[t], r[t].onloadedmetadata = function (e) {
        n[t].handleVideoLoad(e);
      }, r[t].controls = !0, I(e, t), a[t] && (r[t].poster = a[t]);
      var l = document.createElement("source");
      l.src = c[t], r[t].appendChild(l), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), i[t].appendChild(r[t]);
    }
    function N(e, t) {
      var n = e.collections.sourceLoadHandlers,
        o = e.elements,
        i = o.sources,
        s = o.sourceAnimationWrappers,
        c = e.props.sources;
      i[t] = document.createElement("iframe"), A(e, t, "".concat(y, " ").concat(r, "youtube-iframe")), i[t].src = "https://www.youtube.com/embed/".concat(c[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?enablejsapi=1"), i[t].allowFullscreen = !0, I(e, t), s[t].appendChild(i[t]), n[t].handleYoutubeLoad();
    }
    function W(e, t) {
      var n = e.collections.sourceLoadHandlers,
        o = e.elements,
        r = o.sources,
        i = o.sourceAnimationWrappers,
        s = e.props.sources;
      r[t] = s[t], A(e, t, "".concat(r[t].className, " ").concat(y)), i[t].appendChild(r[t]), n[t].handleCustomLoad();
    }
    function z(e, t) {
      var n = e.elements,
        o = n.sources,
        i = n.sourceAnimationWrappers,
        s = n.sourceMainWrappers;
      e.props.sources;
      o[t] = document.createElement("div"), o[t].className = "".concat(r, "invalid-file-wrapper ").concat(a), o[t].innerHTML = "Invalid source", i[t].classList.add(g), i[t].appendChild(o[t]), s[t].removeChild(s[t].firstChild);
    }
    function M(e) {
      var t = e.collections,
        n = t.sourceLoadHandlers,
        o = t.sourcesRenderFunctions,
        r = e.core.sourceDisplayFacade,
        i = e.resolve;
      this.runActionsForSourceTypeAndIndex = function (t, s) {
        var c;
        switch ("invalid" !== t && (n[s] = i(F, [s])), t) {
          case "image":
            c = T;
            break;
          case "video":
            c = E;
            break;
          case "youtube":
            c = N;
            break;
          case "custom":
            c = W;
            break;
          default:
            c = z;
        }
        o[s] = function () {
          return c(e, s);
        }, r.displaySourcesWhichShouldBeDisplayed();
      };
    }
    function P() {
      var e,
        t,
        n,
        o = {
          isUrlYoutubeOne: function (e) {
            var t = document.createElement("a");
            return t.href = e, "www.youtube.com" === t.hostname;
          },
          getTypeFromResponseContentType: function (e) {
            return e.slice(0, e.indexOf("/"));
          }
        };
      function r() {
        if (4 !== n.readyState) {
          if (2 === n.readyState) {
            var e;
            switch (o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))) {
              case "image":
                e = "image";
                break;
              case "video":
                e = "video";
                break;
              default:
                e = "invalid";
            }
            n.onreadystatechange = null, n.abort(), t(e);
          }
        } else t("invalid");
      }
      this.setUrlToCheck = function (t) {
        e = t;
      }, this.getSourceType = function (i) {
        if (o.isUrlYoutubeOne(e)) return i("youtube");
        t = i, (n = new XMLHttpRequest()).onreadystatechange = r, n.open("GET", e, !0), n.send();
      };
    }
    function H(e, t, n) {
      var o = e.props,
        r = o.types,
        i = o.type,
        s = o.sources,
        c = e.resolve;
      this.getTypeSetByClientForIndex = function (e) {
        var t;
        return r && r[e] ? t = r[e] : i && (t = i), t;
      }, this.retrieveTypeWithXhrForIndex = function (e) {
        var o = c(P);
        o.setUrlToCheck(s[e]), o.getSourceType(function (o) {
          t.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e);
        });
      };
    }
    function k(e, t) {
      var n = e.componentsServices.hideSourceLoaderIfNotYetCollection,
        o = e.elements,
        r = o.sourceWrappersContainer,
        i = o.sourceMainWrappers;
      i[t] = document.createElement("div"), i[t].className = "".concat(d, " ").concat(c, " ").concat(a), i[t].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>';
      var s = i[t].firstChild;
      n[t] = function () {
        i[t].contains(s) && i[t].removeChild(s);
      }, r.appendChild(i[t]), function (e, t) {
        var n = e.elements,
          o = n.sourceMainWrappers,
          r = n.sourceAnimationWrappers;
        r[t] = document.createElement("div"), o[t].appendChild(r[t]);
      }(e, t);
    }
    function O(e, t, n, o) {
      var i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      i.setAttributeNS(null, "width", t), i.setAttributeNS(null, "height", t), i.setAttributeNS(null, "viewBox", n);
      var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
      return s.setAttributeNS(null, "class", "".concat(r, "svg-path")), s.setAttributeNS(null, "d", o), i.appendChild(s), e.appendChild(i), i;
    }
    function R(e, t) {
      var n = document.createElement("div");
      return n.className = "".concat(r, "toolbar-button ").concat(a), n.title = t, e.appendChild(n), n;
    }
    function D(e, t) {
      var n = document.createElement("div");
      n.className = "".concat(r, "toolbar"), t.appendChild(n), function (e, t) {
        var n = e.componentsServices,
          o = e.core.fullscreenToggler,
          r = e.data,
          i = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
          s = R(t);
        s.title = "Enter fullscreen";
        var c = O(s, "20px", "0 0 18 18", i);
        n.enterFullscreen = function () {
          r.isFullscreenOpen = !0, s.title = "Exit fullscreen", c.setAttributeNS(null, "width", "24px"), c.setAttributeNS(null, "height", "24px"), c.setAttributeNS(null, "viewBox", "0 0 950 1024"), c.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z");
        }, n.exitFullscreen = function () {
          r.isFullscreenOpen = !1, s.title = "Enter fullscreen", c.setAttributeNS(null, "width", "20px"), c.setAttributeNS(null, "height", "20px"), c.setAttributeNS(null, "viewBox", "0 0 18 18"), c.firstChild.setAttributeNS(null, "d", i);
        }, s.onclick = function () {
          r.isFullscreenOpen ? o.exitFullscreen() : o.enterFullscreen();
        };
      }(e, n), function (e, t) {
        var n = R(t, "Close");
        n.onclick = e.core.lightboxCloser.closeLightbox, O(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z");
      }(e, n);
    }
    function j(e) {
      var t = e.props.sources,
        n = e.elements.container,
        o = document.createElement("div");
      o.className = "".concat(r, "nav"), n.appendChild(o), D(e, o), t.length > 1 && function (e, t) {
        var n = e.componentsServices,
          o = e.props.sources,
          i = (e.stageIndexes, document.createElement("div"));
        i.className = "".concat(r, "slide-number-container");
        var s = document.createElement("div");
        s.className = a;
        var c = document.createElement("span");
        n.setSlideNumber = function (e) {
          return c.innerHTML = e;
        };
        var l = document.createElement("span");
        l.className = "".concat(r, "slash");
        var u = document.createElement("div");
        u.innerHTML = o.length, i.appendChild(s), s.appendChild(c), s.appendChild(l), s.appendChild(u), t.appendChild(i), setTimeout(function () {
          s.offsetWidth > 55 && (i.style.justifyContent = "flex-start");
        });
      }(e, o);
    }
    function X(e, t) {
      var n = this,
        o = e.elements.sourceMainWrappers,
        r = e.props,
        i = 0;
      this.byValue = function (e) {
        return i = e, n;
      }, this.negative = function () {
        s(-c());
      }, this.zero = function () {
        s(0);
      }, this.positive = function () {
        s(c());
      };
      var s = function (e) {
          o[t].style.transform = "translateX(".concat(e + i, "px)"), i = 0;
        },
        c = function () {
          return (1 + r.slideDistance) * innerWidth;
        };
    }
    function B(e, t, n, o) {
      var r = e.elements.container,
        i = n.charAt(0).toUpperCase() + n.slice(1),
        s = document.createElement("div");
      s.className = "".concat(f, " ").concat(f, "-").concat(n), s.title = "".concat(i, " slide"), s.onclick = t, function (e, t) {
        var n = document.createElement("div");
        n.className = "".concat(p, " ").concat(a), O(n, "20px", "0 0 20 20", t), e.appendChild(n);
      }(s, o), r.appendChild(s);
    }
    function U(e, t) {
      var n = e.classList;
      n.contains(t) && n.remove(t);
    }
    function V(e) {
      var t = this,
        n = e.core,
        o = n.eventsDispatcher,
        r = n.fullscreenToggler,
        i = n.globalEventsController,
        s = n.scrollbarRecompensor,
        c = e.data,
        a = e.elements,
        u = e.props,
        d = e.sourcePointerProps;
      this.isLightboxFadingOut = !1, this.runActions = function () {
        t.isLightboxFadingOut = !0, a.container.classList.add(v), i.removeListeners(), u.exitFullscreenOnClose && c.isFullscreenOpen && r.exitFullscreen(), setTimeout(function () {
          t.isLightboxFadingOut = !1, d.isPointering = !1, a.container.classList.remove(v), document.documentElement.classList.remove(l), s.removeRecompense(), document.body.removeChild(a.container), o.dispatch("onClose");
        }, 270);
      };
    }
    function Y(e) {
      var t,
        n,
        o,
        r = e.collections.sourceMainWrappersTransformers,
        i = e.componentsServices,
        s = e.core,
        c = s.classFacade,
        a = s.slideIndexChanger,
        l = s.sourceDisplayFacade,
        d = s.stageManager,
        p = e.elements.sourceAnimationWrappers,
        f = e.stageIndexes,
        v = (t = function () {
          c.removeFromEachElementClassIfContains("sourceAnimationWrappers", m);
        }, n = 300, o = [], function () {
          o.push(!0), setTimeout(function () {
            o.pop(), o.length || t();
          }, n);
        });
      a.changeTo = function (e) {
        f.current = e, d.updateStageIndexes(), i.setSlideNumber(e + 1), l.displaySourcesWhichShouldBeDisplayed();
      }, a.jumpTo = function (e) {
        var t = f.current;
        a.changeTo(e), c.removeFromEachElementClassIfContains("sourceMainWrappers", u), U(p[t], g), U(p[t], h), p[t].classList.add(m), U(p[e], g), U(p[e], m), p[e].classList.add(h), v(), r[e].zero(), setTimeout(function () {
          t !== f.current && r[t].negative();
        }, 270);
      };
    }
    function _(e) {
      var t = e.core,
        n = t.lightboxCloser,
        o = t.fullscreenToggler,
        r = t.slideChangeFacade;
      this.listener = function (e) {
        switch (e.key) {
          case "Escape":
            n.closeLightbox();
            break;
          case "ArrowLeft":
            r.changeToPrevious();
            break;
          case "ArrowRight":
            r.changeToNext();
            break;
          case "F11":
            e.preventDefault(), o.enterFullscreen();
        }
      };
    }
    function q(e) {
      var t = e.collections.sourceMainWrappersTransformers,
        n = e.elements,
        o = e.sourcePointerProps,
        r = e.stageIndexes;
      function i(e, n) {
        t[e].byValue(o.swipedX)[n]();
      }
      this.runActionsForEvent = function (e) {
        var t, c, a;
        n.container.contains(n.slideSwipingHoverer) || n.container.appendChild(n.slideSwipingHoverer), t = n.container, c = s, (a = t.classList).contains(c) || a.add(c), o.swipedX = e.screenX - o.downScreenX, i(r.current, "zero"), void 0 !== r.previous && o.swipedX > 0 ? i(r.previous, "negative") : void 0 !== r.next && o.swipedX < 0 && i(r.next, "positive");
      };
    }
    function J(e) {
      var t = e.props.sources,
        n = e.resolve,
        o = e.sourcePointerProps,
        r = n(q);
      1 === t.length ? this.listener = function () {
        o.swipedX = 1;
      } : this.listener = function (e) {
        o.isPointering && r.runActionsForEvent(e);
      };
    }
    function G(e) {
      var t = e.collections.sourceMainWrappersTransformers,
        n = e.core.slideIndexChanger,
        o = e.elements.sourceMainWrappers,
        r = e.stageIndexes;
      this.runPositiveSwipedXActions = function () {
        void 0 === r.previous || (i("positive"), n.changeTo(r.previous)), i("zero");
      }, this.runNegativeSwipedXActions = function () {
        void 0 === r.next || (i("negative"), n.changeTo(r.next)), i("zero");
      };
      var i = function (e) {
        o[r.current].classList.add(u), t[r.current][e]();
      };
    }
    function $(e, t) {
      e.contains(t) && e.removeChild(t);
    }
    function K(e) {
      var t = e.core.lightboxCloser,
        n = e.elements,
        o = e.resolve,
        r = e.sourcePointerProps,
        i = o(G);
      this.runNoSwipeActions = function () {
        $(n.container, n.slideSwipingHoverer), r.isSourceDownEventTarget || t.closeLightbox(), r.isPointering = !1;
      }, this.runActions = function () {
        r.swipedX > 0 ? i.runPositiveSwipedXActions() : i.runNegativeSwipedXActions(), $(n.container, n.slideSwipingHoverer), n.container.classList.remove(s), r.isPointering = !1;
      };
    }
    function Q(e) {
      var t = e.resolve,
        n = e.sourcePointerProps,
        o = t(K);
      this.listener = function () {
        n.isPointering && (n.swipedX ? o.runActions() : o.runNoSwipeActions());
      };
    }
    function Z(e) {
      var t, n, o;
      n = (t = e).core.classFacade, o = t.elements, n.removeFromEachElementClassIfContains = function (e, t) {
        for (var n = 0; n < o[e].length; n++) U(o[e][n], t);
      }, function (e) {
        var t = e.core.eventsDispatcher,
          n = e.props;
        t.dispatch = function (e) {
          n[e] && n[e]();
        };
      }(e), function (e) {
        var t = e.componentsServices,
          n = e.core.fullscreenToggler;
        n.enterFullscreen = function () {
          t.enterFullscreen();
          var e = document.documentElement;
          e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
        }, n.exitFullscreen = function () {
          t.exitFullscreen(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
        };
      }(e), function (e) {
        var t = e.core,
          n = t.globalEventsController,
          o = t.windowResizeActioner,
          r = e.resolve,
          i = r(_),
          s = r(J),
          c = r(Q);
        n.attachListeners = function () {
          document.addEventListener("pointermove", s.listener), document.addEventListener("pointerup", c.listener), addEventListener("resize", o.runActions), document.addEventListener("keydown", i.listener);
        }, n.removeListeners = function () {
          document.removeEventListener("pointermove", s.listener), document.removeEventListener("pointerup", c.listener), removeEventListener("resize", o.runActions), document.removeEventListener("keydown", i.listener);
        };
      }(e), function (e) {
        var t = e.core.lightboxCloser,
          n = (0, e.resolve)(V);
        t.closeLightbox = function () {
          n.isLightboxFadingOut || n.runActions();
        };
      }(e), ne(e), function (e) {
        var t = e.data,
          n = e.core.scrollbarRecompensor;
        function o() {
          document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px");
        }
        n.addRecompense = function () {
          "complete" === document.readyState ? o() : addEventListener("load", function () {
            o(), n.addRecompense = o;
          });
        }, n.removeRecompense = function () {
          document.body.style.removeProperty("margin-right");
        };
      }(e), function (e) {
        var t = e.core,
          n = t.slideChangeFacade,
          o = t.slideIndexChanger,
          r = t.stageManager;
        e.props.sources.length > 1 ? (n.changeToPrevious = function () {
          o.jumpTo(r.getPreviousSlideIndex());
        }, n.changeToNext = function () {
          o.jumpTo(r.getNextSlideIndex());
        }) : (n.changeToPrevious = function () {}, n.changeToNext = function () {});
      }(e), Y(e), function (e) {
        var t = e.core,
          n = t.classFacade,
          o = t.sourcesPointerDown,
          r = e.elements.sources,
          i = e.sourcePointerProps,
          s = e.stageIndexes;
        o.listener = function (e) {
          "VIDEO" !== e.target.tagName && e.preventDefault(), i.isPointering = !0, i.downScreenX = e.screenX, i.swipedX = 0;
          var t = r[s.current];
          t && t.contains(e.target) ? i.isSourceDownEventTarget = !0 : i.isSourceDownEventTarget = !1, n.removeFromEachElementClassIfContains("sourceMainWrappers", u);
        };
      }(e), function (e) {
        var t = e.collections.sourcesRenderFunctions,
          n = e.core.sourceDisplayFacade,
          o = e.props,
          r = e.stageIndexes;
        function i(e) {
          t[e] && (t[e](), delete t[e]);
        }
        n.displaySourcesWhichShouldBeDisplayed = function () {
          if (o.loadOnlyCurrentSource) i(r.current);else for (var e in r) i(r[e]);
        };
      }(e), function (e) {
        var t = e.stageIndexes,
          n = e.core.stageManager,
          o = e.props.sources.length - 1;
        n.getPreviousSlideIndex = function () {
          return 0 === t.current ? o : t.current - 1;
        }, n.getNextSlideIndex = function () {
          return t.current === o ? 0 : t.current + 1;
        }, n.updateStageIndexes = 0 === o ? function () {} : 1 === o ? function () {
          0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next);
        } : function () {
          t.previous = n.getPreviousSlideIndex(), t.next = n.getNextSlideIndex();
        }, n.isSourceInStage = o <= 2 ? function () {
          return !0;
        } : function (e) {
          var n = t.current;
          if (0 === n && e === o || n === o && 0 === e) return !0;
          var r = n - e;
          return -1 === r || 0 === r || 1 === r;
        };
      }(e), function (e) {
        var t = e.collections,
          n = t.sourceMainWrappersTransformers,
          o = t.sourceSizers,
          r = e.core.windowResizeActioner,
          i = e.data,
          s = e.elements.sourceMainWrappers,
          c = e.props,
          a = e.stageIndexes;
        r.runActions = function () {
          innerWidth < 992 ? i.maxSourceWidth = innerWidth : i.maxSourceWidth = .9 * innerWidth, i.maxSourceHeight = .9 * innerHeight;
          for (var e = 0; e < c.sources.length; e++) U(s[e], u), e !== a.current && n[e].negative(), o[e] && o[e].adjustSize();
        };
      }(e);
    }
    function ee(e) {
      var t = e.props.disableLocalStorage;
      if (!t) {
        var n = localStorage.getItem("fslightbox-scrollbar-width");
        if (n) return n;
      }
      var o = function () {
          var e = document.createElement("div"),
            t = e.style;
          return t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", e;
        }(),
        r = function () {
          var e = document.createElement("div");
          return e.style.width = "100%", e;
        }();
      document.body.appendChild(o);
      var i = o.offsetWidth;
      o.appendChild(r);
      var s = r.offsetWidth;
      document.body.removeChild(o);
      var c = i - s;
      return t || localStorage.setItem("fslightbox-scrollbar-width", c.toString()), c;
    }
    function te(e) {
      var t = e.core.eventsDispatcher,
        n = e.data,
        o = e.elements,
        i = e.props.sources;
      n.isInitialized = !0, n.scrollbarWidth = ee(e), function (e) {
        for (var t = e.collections.sourceMainWrappersTransformers, n = e.props.sources, o = e.resolve, r = 0; r < n.length; r++) t[r] = o(X, [r]);
      }(e), Z(e), o.container = document.createElement("div"), o.container.className = "".concat(r, "container ").concat(c, " ").concat(g), function (e) {
        var t = e.elements;
        t.slideSwipingHoverer = document.createElement("div"), t.slideSwipingHoverer.className = "".concat(r, "slide-swiping-hoverer ").concat(c, " ").concat(d);
      }(e), j(e), function (e) {
        var t = e.core.sourcesPointerDown,
          n = e.elements,
          o = e.props.sources,
          r = document.createElement("div");
        r.className = "".concat(d, " ").concat(c), n.container.appendChild(r), r.addEventListener("pointerdown", t.listener), n.sourceWrappersContainer = r;
        for (var i = 0; i < o.length; i++) k(e, i);
      }(e), i.length > 1 && function (e) {
        var t = e.core.slideChangeFacade;
        B(e, t.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), B(e, t.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z");
      }(e), function (e) {
        for (var t = e.props.sources, n = e.resolve, o = n(w), r = n(M), i = n(H, [o, r]), s = 0; s < t.length; s++) if ("string" == typeof t[s]) {
          var c = i.getTypeSetByClientForIndex(s);
          if (c) r.runActionsForSourceTypeAndIndex(c, s);else {
            var a = o.getSourceTypeFromLocalStorageByUrl(t[s]);
            a ? r.runActionsForSourceTypeAndIndex(a, s) : i.retrieveTypeWithXhrForIndex(s);
          }
        } else r.runActionsForSourceTypeAndIndex("custom", s);
      }(e), t.dispatch("onInit");
    }
    function ne(e) {
      var t = e.collections.sourceMainWrappersTransformers,
        n = e.componentsServices,
        o = e.core,
        r = o.eventsDispatcher,
        i = o.lightboxOpener,
        s = o.globalEventsController,
        c = o.scrollbarRecompensor,
        a = o.sourceDisplayFacade,
        u = o.stageManager,
        d = o.windowResizeActioner,
        p = e.data,
        f = e.elements,
        h = e.stageIndexes;
      i.open = function () {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        h.current = o, p.isInitialized ? r.dispatch("onShow") : te(e), u.updateStageIndexes(), a.displaySourcesWhichShouldBeDisplayed(), n.setSlideNumber(o + 1), document.body.appendChild(f.container), document.documentElement.classList.add(l), c.addRecompense(), s.attachListeners(), d.runActions(), t[h.current].zero(), r.dispatch("onOpen");
      };
    }
    function oe(e, t, n) {
      return (oe = re() ? Reflect.construct : function (e, t, n) {
        var o = [null];
        o.push.apply(o, t);
        var r = new (Function.bind.apply(e, o))();
        return n && ie(r, n.prototype), r;
      }).apply(null, arguments);
    }
    function re() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }
    function ie(e, t) {
      return (ie = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function se(e) {
      return function (e) {
        if (Array.isArray(e)) return ce(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return ce(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function ce(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    function ae() {
      for (var e = document.getElementsByTagName("a"), t = function (t) {
          if (!e[t].hasAttribute("data-fslightbox")) return "continue";
          var n = e[t].getAttribute("data-fslightbox"),
            o = e[t].getAttribute("href");
          fsLightboxInstances[n] || (fsLightboxInstances[n] = new FsLightbox());
          var r = null;
          "#" === o.charAt(0) ? (r = document.getElementById(o.substring(1)).cloneNode(!0)).removeAttribute("id") : r = o, fsLightboxInstances[n].props.sources.push(r), fsLightboxInstances[n].elements.a.push(e[t]);
          var i = fsLightboxInstances[n].props.sources.length - 1;
          e[t].onclick = function (e) {
            e.preventDefault(), fsLightboxInstances[n].open(i);
          }, d("types", "data-type"), d("videosPosters", "data-video-poster"), d("customClasses", "data-class"), d("customClasses", "data-custom-class");
          for (var s = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], c = e[t].attributes, a = fsLightboxInstances[n].props.customAttributes, l = 0; l < c.length; l++) if (-1 === s.indexOf(c[l].name) && "data-" === c[l].name.substr(0, 5)) {
            a[i] || (a[i] = {});
            var u = c[l].name.substr(5);
            a[i][u] = c[l].value;
          }
          function d(o, r) {
            e[t].hasAttribute(r) && (fsLightboxInstances[n].props[o][i] = e[t].getAttribute(r));
          }
        }, n = 0; n < e.length; n++) t(n);
      var o = Object.keys(fsLightboxInstances);
      window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
    }
    window.FsLightbox = function () {
      var e = this;
      this.props = {
        sources: [],
        customAttributes: [],
        customClasses: [],
        types: [],
        videosPosters: [],
        slideDistance: .3
      }, this.data = {
        isInitialized: !1,
        isFullscreenOpen: !1,
        maxSourceWidth: 0,
        maxSourceHeight: 0,
        scrollbarWidth: 0
      }, this.sourcePointerProps = {
        downScreenX: null,
        isPointering: !1,
        isSourceDownEventTarget: !1,
        swipedX: 0
      }, this.stageIndexes = {}, this.elements = {
        a: [],
        container: null,
        slideSwipingHoverer: null,
        sourceWrappersContainer: null,
        sources: [],
        sourceMainWrappers: [],
        sourceAnimationWrappers: []
      }, this.componentsServices = {
        enterFullscreen: null,
        exitFullscreen: null,
        hideSourceLoaderIfNotYetCollection: [],
        setSlideNumber: function () {}
      }, this.resolve = function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return n.unshift(e), oe(t, se(n));
      }, this.collections = {
        sourceMainWrappersTransformers: [],
        sourceLoadHandlers: [],
        sourcesRenderFunctions: [],
        sourceSizers: []
      }, this.core = {
        classFacade: {},
        eventsDispatcher: {},
        fullscreenToggler: {},
        globalEventsController: {},
        lightboxCloser: {},
        lightboxOpener: {},
        lightboxUpdater: {},
        scrollbarRecompensor: {},
        slideChangeFacade: {},
        slideIndexChanger: {},
        sourcesPointerDown: {},
        sourceDisplayFacade: {},
        stageManager: {},
        windowResizeActioner: {}
      }, ne(this), this.open = function (t) {
        return e.core.lightboxOpener.open(t);
      }, this.close = function () {
        return e.core.lightboxCloser.closeLightbox();
      };
    }, window.fsLightboxInstances = {}, ae(), window.refreshFsLightbox = function () {
      for (var e in fsLightboxInstances) {
        var t = fsLightboxInstances[e].props;
        fsLightboxInstances[e] = new FsLightbox(), fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = [];
      }
      ae();
    };
  }]);
});

/***/ }),

/***/ "./src/js/vendor/gsap.min.js":
/*!***********************************!*\
  !*** ./src/js/vendor/gsap.min.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {

!function (t, e) {
   true ? e(exports) : 0;
}(this, function (e) {
  "use strict";

  function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
  }
  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function r(t) {
    return "string" == typeof t;
  }
  function s(t) {
    return "function" == typeof t;
  }
  function t(t) {
    return "number" == typeof t;
  }
  function u(t) {
    return void 0 === t;
  }
  function v(t) {
    return "object" == typeof t;
  }
  function w(t) {
    return !1 !== t;
  }
  function x() {
    return "undefined" != typeof window;
  }
  function y(t) {
    return s(t) || r(t);
  }
  function P(t) {
    return (i = vt(t, ot)) && Ce;
  }
  function Q(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }
  function R(t, e) {
    return !e && console.warn(t);
  }
  function S(t, e) {
    return t && (ot[t] = e) && i && (i[t] = e) || ot;
  }
  function T() {
    return 0;
  }
  function da(t) {
    var e,
      r,
      i = t[0];
    if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
      for (r = mt.length; r-- && !mt[r].targetTest(i););
      e = mt[r];
    }
    for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Yt(t[r], e))) || t.splice(r, 1);
    return t;
  }
  function ea(t) {
    return t._gsap || da(Ot(t))[0]._gsap;
  }
  function fa(t, e, r) {
    return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r;
  }
  function ga(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function ha(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function ia(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }
  function ja(t, e) {
    var r = e.charAt(0),
      i = parseFloat(e.substr(2));
    return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i;
  }
  function ka(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
    return i < r;
  }
  function la() {
    var t,
      e,
      r = ft.length,
      i = ft.slice(0);
    for (ct = {}, t = ft.length = 0; t < r; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function ma(t, e, r, i) {
    ft.length && la(), t.render(e, r, i || I), ft.length && la();
  }
  function na(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t;
  }
  function oa(t) {
    return t;
  }
  function pa(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function sa(t, e) {
    for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? sa(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t;
  }
  function ta(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function ua(t) {
    var e = t.parent || B,
      r = t.keyframes ? function _setKeyframeDefaults(i) {
        return function (t, e) {
          for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r]);
        };
      }(K(t.keyframes)) : pa;
    if (w(t.inherit)) for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
    return t;
  }
  function wa(t, e, r, i, n) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var a,
      s = t[i];
    if (n) for (a = e[n]; s && s[n] > a;) s = s._prev;
    return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e;
  }
  function xa(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
  }
  function ya(t, e) {
    !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
  }
  function za(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r;) r._dirty = 1, r = r.parent;
    return t;
  }
  function Ba(t, e, r, i) {
    return t._startAt && (I ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
  }
  function Da(t) {
    return t._repeat ? yt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  }
  function Fa(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }
  function Ga(t) {
    return t._end = ia(t._start + (t._tDur / Math.abs(t._ts || t._rts || q) || 0));
  }
  function Ha(t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = ia(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ga(t), r._dirty || za(r, t)), t;
  }
  function Ia(t, e) {
    var r;
    if ((e._time || e._initted && !e._dur) && (r = Fa(t.rawTime(), e), (!e._dur || xt(0, e.totalDuration(), r) - e._tTime > q) && e.render(r, !0)), za(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
      t._zTime = -q;
    }
  }
  function Ja(e, r, i, n) {
    return r.parent && ya(r), r._start = ia((t(i) ? i : i || e !== B ? wt(e, i, r) : e._time) + r._delay), r._end = ia(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), wa(e, r, "_first", "_last", e._sort ? "_start" : 0), Tt(r) || (e._recent = r), n || Ia(e, r), e._ts < 0 && Ha(e, e._tTime), e;
  }
  function Ka(t, e) {
    return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
  }
  function La(t, e, r, i) {
    return jt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== zt.frame ? (ft.push(t), t._lazy = [e, i], 1) : void 0 : 1;
  }
  function Qa(t, e, r, i) {
    var n = t._repeat,
      a = ia(e) || 0,
      s = t._tTime / t._tDur;
    return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ia(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i ? Ha(t, t._tTime = t._tDur * s) : t.parent && Ga(t), r || za(t.parent, t), t;
  }
  function Ra(t) {
    return t instanceof Qt ? za(t) : Qa(t, t._dur);
  }
  function Ua(e, r, i) {
    var n,
      a,
      s = t(r[1]),
      o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
      u = r[o];
    if (s && (u.duration = r[1]), u.parent = i, e) {
      for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
      u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1];
    }
    return new $t(r[0], u, r[1 + o]);
  }
  function Va(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Xa(t, e) {
    return r(t) && (e = st.exec(t)) ? e[1] : "";
  }
  function $a(t, e) {
    return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h;
  }
  function bb(r) {
    return r = Ot(r)[0] || R("Invalid scope") || {}, function (t) {
      var e = r.current || r.nativeElement || r;
      return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r);
    };
  }
  function cb(t) {
    return t.sort(function () {
      return .5 - Math.random();
    });
  }
  function db(t) {
    if (s(t)) return t;
    var p = v(t) ? t : {
        each: t
      },
      _ = Lt(p.ease),
      m = p.from || 0,
      g = parseFloat(p.base) || 0,
      y = {},
      e = 0 < m && m < 1,
      T = isNaN(m) || e,
      b = p.axis,
      w = m,
      x = m;
    return r(m) ? w = x = {
      center: .5,
      edges: .5,
      end: 1
    }[m] || 0 : !e && T && (w = m[0], x = m[1]), function (t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c = (r || p).length,
        d = y[c];
      if (!d) {
        if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, N])[1])) {
          for (h = -N; h < (h = r[f++].getBoundingClientRect().left) && f < c;);
          f--;
        }
        for (d = y[c] = [], i = T ? Math.min(f, c) * w - .5 : m % f, n = f === N ? 0 : T ? c * x / f - .5 : m / f | 0, l = N, u = h = 0; u < c; u++) a = u % f - i, s = n - (u / f | 0), d[u] = o = b ? Math.abs("y" === b ? s : a) : H(a * a + s * s), h < o && (h = o), o < l && (l = o);
        "random" === m && cb(d), d.max = h - l, d.min = l, d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1), d.b = c < 0 ? g - c : g, d.u = Xa(p.amount || p.each) || 0, _ = _ && c < 0 ? Bt(_) : _;
      }
      return c = (d[t] - d.min) / d.max || 0, ia(d.b + (_ ? _(c) : c) * d.v) + d.u;
    };
  }
  function eb(i) {
    var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
    return function (e) {
      var r = ia(Math.round(parseFloat(e) / i) * i * n);
      return (r - r % 1) / n + (t(e) ? 0 : Xa(e));
    };
  }
  function fb(h, e) {
    var l,
      f,
      r = K(h);
    return !r && v(h) && (l = r = h.radius || N, h.values ? (h = Ot(h.values), (f = !t(h[0])) && (l *= l)) : h = eb(h.increment)), Va(e, r ? s(h) ? function (t) {
      return f = h(t), Math.abs(f - t) <= l ? f : t;
    } : function (e) {
      for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = N, o = 0, u = h.length; u--;) (r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
      return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Xa(e);
    } : eb(h));
  }
  function gb(t, e, r, i) {
    return Va(K(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return K(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i;
    });
  }
  function kb(e, r, t) {
    return Va(t, function (t) {
      return e[~~r(t)];
    });
  }
  function nb(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + gb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
    return s + t.substr(a, t.length - a);
  }
  function qb(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = N;
    for (i in s) (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
    return a;
  }
  function sb(t) {
    return ya(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Pt(t, "onInterrupt"), t;
  }
  function xb(t, e, r) {
    return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Ct + .5 | 0;
  }
  function yb(e, r, i) {
    var n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      c,
      d,
      p = e ? t(e) ? [e >> 16, e >> 8 & Ct, e & Ct] : 0 : St.black;
    if (!p) {
      if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), St[e]) p = St[e];else if ("#" === e.charAt(0)) {
        if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & Ct, p & Ct, parseInt(e.substr(7), 16) / 255];
        p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & Ct, e & Ct];
      } else if ("hsl" === e.substr(0, 3)) {
        if (p = d = e.match(tt), r) {
          if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p;
        } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = xb(o + 1 / 3, n, a), p[1] = xb(o, n, a), p[2] = xb(o - 1 / 3, n, a);
      } else p = e.match(tt) || St.transparent;
      p = p.map(Number);
    }
    return r && !d && (n = p[0] / Ct, a = p[1] / Ct, s = p[2] / Ct, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (c = l - f, u = .5 < h ? c / (2 - l - f) : c / (l + f), o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p;
  }
  function zb(t) {
    var r = [],
      i = [],
      n = -1;
    return t.split(At).forEach(function (t) {
      var e = t.match(rt) || [];
      r.push.apply(r, e), i.push(n += e.length + 1);
    }), r.c = i, r;
  }
  function Ab(t, e, r) {
    var i,
      n,
      a,
      s,
      o = "",
      u = (t + o).match(At),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (u = u.map(function (t) {
      return (t = yb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
    }), r && (a = zb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(At, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(At)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function Db(t) {
    var e,
      r = t.join(" ");
    if (At.lastIndex = 0, At.test(r)) return e = Dt.test(r), t[1] = Ab(t[1], e), t[0] = Ab(t[0], e, zb(t[1])), !0;
  }
  function Mb(t) {
    var e = (t + "").split("("),
      r = Et[e[0]];
    return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
      for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(It, "").trim() : +i, s = r.substr(e + 1).trim();
      return n;
    }(e[1])] : function _valueInParentheses(t) {
      var e = t.indexOf("(") + 1,
        r = t.indexOf(")"),
        i = t.indexOf("(", e);
      return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
    }(t).split(",").map(na)) : Et._CE && Ft.test(t) ? Et._CE("", t) : r;
  }
  function Ob(t, e) {
    for (var r, i = t._first; i;) i instanceof Qt ? Ob(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Ob(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
  }
  function Qb(t, e, r, i) {
    void 0 === r && (r = function easeOut(t) {
      return 1 - e(1 - t);
    }), void 0 === i && (i = function easeInOut(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
    });
    var n,
      a = {
        easeIn: e,
        easeOut: r,
        easeInOut: i
      };
    return ga(t, function (t) {
      for (var e in Et[t] = ot[t] = a, Et[n = t.toLowerCase()] = r, a) Et[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Et[t + "." + e] = a[e];
    }), a;
  }
  function Rb(e) {
    return function (t) {
      return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
    };
  }
  function Sb(r, t, e) {
    function Fm(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * W((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
      a = n / j * (Math.asin(1 / i) || 0),
      s = "out" === r ? Fm : "in" === r ? function (t) {
        return 1 - Fm(1 - t);
      } : Rb(Fm);
    return n = j / n, s.config = function (t, e) {
      return Sb(r, t, e);
    }, s;
  }
  function Tb(e, r) {
    function Nm(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t = "out" === e ? Nm : "in" === e ? function (t) {
      return 1 - Nm(1 - t);
    } : Rb(Nm);
    return t.config = function (t) {
      return Tb(e, t);
    }, t;
  }
  var F,
    I,
    l,
    B,
    h,
    n,
    a,
    i,
    o,
    f,
    c,
    d,
    p,
    _,
    m,
    g,
    b,
    M,
    O,
    k,
    C,
    A,
    D,
    z,
    E,
    L,
    X,
    Y,
    V = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
    U = {
      duration: .5,
      overwrite: !1,
      delay: 0
    },
    N = 1e8,
    q = 1 / N,
    j = 2 * Math.PI,
    G = j / 4,
    J = 0,
    H = Math.sqrt,
    $ = Math.cos,
    W = Math.sin,
    Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
    K = Array.isArray,
    tt = /(?:-?\.?\d|\.)+/gi,
    et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    nt = /[+-]=-?[.\d]+/,
    at = /[^,'"\[\]\s]+/gi,
    st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ot = {},
    ut = {
      suppressEvents: !0,
      isStart: !0
    },
    ht = {
      suppressEvents: !0
    },
    lt = {},
    ft = [],
    ct = {},
    dt = {},
    pt = {},
    _t = 30,
    mt = [],
    gt = "",
    vt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    yt = function _animationCycle(t, e) {
      var r = Math.floor(t /= e);
      return t && r === t ? r - 1 : r;
    },
    Tt = function _isFromOrFromStart(t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    bt = {
      _start: 0,
      endTime: T,
      totalDuration: T
    },
    wt = function _parsePosition(t, e, i) {
      var n,
        a,
        s,
        o = t.labels,
        u = t._recent || bt,
        h = t.duration() >= N ? u.endTime(!1) : t._dur;
      return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * (K(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e;
    },
    xt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    Mt = [].slice,
    Ot = function toArray(t, e, i) {
      return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && Rt() ? K(t) ? function _flatten(t, e, i) {
        return void 0 === i && (i = []), t.forEach(function (t) {
          return r(t) && !e || $a(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t);
        }) || i;
      }(t, i) : $a(t) ? Mt.call(t, 0) : t ? [t] : [] : Mt.call((e || a).querySelectorAll(t), 0);
    },
    kt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Va(n, function (t) {
        return r + ((t - e) / a * s || 0);
      });
    },
    Pt = function _callback(t, e, r) {
      var i,
        n,
        a,
        s = t.vars,
        o = s[e],
        u = l,
        h = t._ctx;
      if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && ft.length && la(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a;
    },
    Ct = 255,
    St = {
      aqua: [0, Ct, Ct],
      lime: [0, Ct, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Ct],
      navy: [0, 0, 128],
      white: [Ct, Ct, Ct],
      olive: [128, 128, 0],
      yellow: [Ct, Ct, 0],
      orange: [Ct, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Ct, 0, 0],
      pink: [Ct, 192, 203],
      cyan: [0, Ct, Ct],
      transparent: [Ct, Ct, Ct, 0]
    },
    At = function () {
      var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in St) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    }(),
    Dt = /hsl[a]?\(/,
    zt = (O = Date.now, k = 500, C = 33, A = O(), D = A, E = z = 1e3 / 240, g = {
      time: 0,
      frame: 0,
      tick: function tick() {
        ul(!0);
      },
      deltaRatio: function deltaRatio(t) {
        return b / (1e3 / (t || 60));
      },
      wake: function wake() {
        o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = Ce, (h.gsapVersions || (h.gsapVersions = [])).push(Ce.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), m = h.requestAnimationFrame), p && g.sleep(), _ = m || function (t) {
          return setTimeout(t, E - 1e3 * g.time + 1 | 0);
        }, d = 1, ul(2));
      },
      sleep: function sleep() {
        (m ? h.cancelAnimationFrame : clearTimeout)(p), d = 0, _ = T;
      },
      lagSmoothing: function lagSmoothing(t, e) {
        k = t || 1e8, C = Math.min(e, k, 0);
      },
      fps: function fps(t) {
        z = 1e3 / (t || 240), E = 1e3 * g.time + z;
      },
      add: function add(n, t, e) {
        var a = t ? function (t, e, r, i) {
          n(t, e, r, i), g.remove(a);
        } : n;
        return g.remove(n), L[e ? "unshift" : "push"](a), Rt(), a;
      },
      remove: function remove(t, e) {
        ~(e = L.indexOf(t)) && L.splice(e, 1) && e <= M && M--;
      },
      _listeners: L = []
    }),
    Rt = function _wake() {
      return !d && zt.wake();
    },
    Et = {},
    Ft = /^[\d.\-M][\d.\-,\s]/,
    It = /["']/g,
    Bt = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Lt = function _parseEase(t, e) {
      return t && (s(t) ? t : Et[t] || Mb(t)) || e;
    };
  function ul(t) {
    var e,
      r,
      i,
      n,
      a = O() - D,
      s = !0 === t;
    if (k < a && (A += a - C), (0 < (e = (i = (D += a) - A) - E) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, E += e + (z <= e ? 4 : z - e), r = 1), s || (p = _(ul)), r) for (M = 0; M < L.length; M++) L[M](i, b, n, t);
  }
  function cn(t) {
    return t < Y ? X * t * t : t < .7272727272727273 ? X * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? X * (t -= 2.25 / 2.75) * t + .9375 : X * Math.pow(t - 2.625 / 2.75, 2) + .984375;
  }
  ga("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Qb(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, r);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
    });
  }), Et.Linear.easeNone = Et.none = Et.Linear.easeIn, Qb("Elastic", Sb("in"), Sb("out"), Sb()), X = 7.5625, Y = 1 / 2.75, Qb("Bounce", function (t) {
    return 1 - cn(1 - t);
  }, cn), Qb("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }), Qb("Circ", function (t) {
    return -(H(1 - t * t) - 1);
  }), Qb("Sine", function (t) {
    return 1 === t ? 1 : 1 - $(t * G);
  }), Qb("Back", Tb("in"), Tb("out"), Tb()), Et.SteppedEase = Et.steps = ot.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
        i = t + (e ? 0 : 1),
        n = e ? 1 : 0;
      return function (t) {
        return ((i * xt(0, .99999999, t) | 0) + n) * r;
      };
    }
  }, U.ease = Et["quad.out"], ga("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return gt += t + "," + t + "Params,";
  });
  var Xt,
    Yt = function GSCache(t, e) {
      this.id = J++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : fa, this.set = e ? e.getSetter : ee;
    },
    Vt = ((Xt = Animation.prototype).delay = function delay(t) {
      return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
    }, Xt.duration = function duration(t) {
      return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
    }, Xt.totalDuration = function totalDuration(t) {
      return arguments.length ? (this._dirty = 0, Qa(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, Xt.totalTime = function totalTime(t, e) {
      if (Rt(), !arguments.length) return this._tTime;
      var r = this._dp;
      if (r && r.smoothChildTiming && this._ts) {
        for (Ha(this, t), !r._dp || r.parent || Ia(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
        !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ja(this._dp, this, this._start - this._delay);
      }
      return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === q || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ma(this, t, e)), this;
    }, Xt.time = function time(t, e) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Da(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
    }, Xt.totalProgress = function totalProgress(t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    }, Xt.progress = function progress(t, e) {
      return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Da(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    }, Xt.iteration = function iteration(t, e) {
      var r = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? yt(this._tTime, r) + 1 : 1;
    }, Xt.timeScale = function timeScale(t) {
      if (!arguments.length) return this._rts === -q ? 0 : this._rts;
      if (this._rts === t) return this;
      var e = this.parent && this._ts ? Fa(this.parent._time, this) : this._tTime;
      return this._rts = +t || 0, this._ts = this._ps || t === -q ? 0 : this._rts, this.totalTime(xt(-this._delay, this._tDur, e), !0), Ga(this), function _recacheAncestors(t) {
        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
        return t;
      }(this);
    }, Xt.paused = function paused(t) {
      return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Rt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== q && (this._tTime -= q)))), this) : this._ps;
    }, Xt.startTime = function startTime(t) {
      if (arguments.length) {
        this._start = t;
        var e = this.parent || this._dp;
        return !e || !e._sort && this.parent || Ja(e, this, t - this._delay), this;
      }
      return this._start;
    }, Xt.endTime = function endTime(t) {
      return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    }, Xt.rawTime = function rawTime(t) {
      var e = this.parent || this._dp;
      return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Fa(e.rawTime(t), this) : this._tTime : this._tTime;
    }, Xt.revert = function revert(t) {
      void 0 === t && (t = ht);
      var e = I;
      return I = t, this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents), "nested" !== this.data && ya(this), I = e, this;
    }, Xt.globalTime = function globalTime(t) {
      for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
      return !this.parent && this.vars.immediateRender ? -1 : r;
    }, Xt.repeat = function repeat(t) {
      return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ra(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
    }, Xt.repeatDelay = function repeatDelay(t) {
      if (arguments.length) {
        var e = this._time;
        return this._rDelay = t, Ra(this), e ? this.time(e) : this;
      }
      return this._rDelay;
    }, Xt.yoyo = function yoyo(t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, Xt.seek = function seek(t, e) {
      return this.totalTime(wt(this, t), w(e));
    }, Xt.restart = function restart(t, e) {
      return this.play().totalTime(t ? -this._delay : 0, w(e));
    }, Xt.play = function play(t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, Xt.reverse = function reverse(t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, Xt.pause = function pause(t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
    }, Xt.resume = function resume() {
      return this.paused(!1);
    }, Xt.reversed = function reversed(t) {
      return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -q : 0)), this) : this._rts < 0;
    }, Xt.invalidate = function invalidate() {
      return this._initted = this._act = 0, this._zTime = -q, this;
    }, Xt.isActive = function isActive() {
      var t,
        e = this.parent || this._dp,
        r = this._start;
      return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - q));
    }, Xt.eventCallback = function eventCallback(t, e, r) {
      var i = this.vars;
      return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
    }, Xt.then = function then(t) {
      var i = this;
      return new Promise(function (e) {
        function xo() {
          var t = i.then;
          i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
        }
        var r = s(t) ? t : oa;
        i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? xo() : i._prom = xo;
      });
    }, Xt.kill = function kill() {
      sb(this);
    }, Animation);
  function Animation(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Qa(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), d || zt.wake();
  }
  pa(Vt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -q,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });
  var Qt = function (i) {
    function Timeline(t, e) {
      var r;
      return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), B && Ja(t.parent || B, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && Ka(_assertThisInitialized(r), t.scrollTrigger), r;
    }
    _inheritsLoose(Timeline, i);
    var e = Timeline.prototype;
    return e.to = function to(t, e, r) {
      return Ua(0, arguments, this), this;
    }, e.from = function from(t, e, r) {
      return Ua(1, arguments, this), this;
    }, e.fromTo = function fromTo(t, e, r, i) {
      return Ua(2, arguments, this), this;
    }, e.set = function set(t, e, r) {
      return e.duration = 0, e.parent = this, ua(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new $t(t, e, wt(this, r), 1), this;
    }, e.call = function call(t, e, r) {
      return Ja(this, $t.delayedCall(0, t, e), r);
    }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new $t(t, r, wt(this, n)), this;
    }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
      return r.runBackwards = 1, ua(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s);
    }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
      return i.startAt = r, ua(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o);
    }, e.render = function render(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _ = this._time,
        m = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        v = t <= 0 ? 0 : ia(t),
        y = this._zTime < 0 != t < 0 && (this._initted || !g);
      if (this !== B && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
        if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
          if (d = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
          if (i = ia(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), c = yt(this._tTime, o), !_ && this._tTime && c !== s && (c = s), d && 1 & s && (i = g - i, p = 1), s !== c && !this._lock) {
            var T = d && 1 & c,
              b = T === (d && 1 & s);
            if (s < c && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ia(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Pt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
            Ob(this, p);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
          var i;
          if (e < r) for (i = t._first; i && i._start <= r;) {
            if ("isPause" === i.data && i._start > e) return i;
            i = i._next;
          } else for (i = t._last; i && i._start >= r;) {
            if ("isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
        }(this, ia(_), ia(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && (Pt(this, "onStart"), this._tTime !== v)) return this;
        if (_ <= i && 0 <= t) for (n = this._first; n;) {
          if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
            if (n.parent !== this) return this.render(t, e, r);
            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
              h = 0, a && (v += this._zTime = -q);
              break;
            }
          }
          n = a;
        } else {
          r = r || I, n = this._last;
          for (var w = t < 0 ? t : i; n;) {
            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);
              if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = w ? -q : q);
                break;
              }
            }
            n = a;
          }
        }
        if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -q)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ga(this), this.render(t, e, r);
        this._onUpdate && !e && Pt(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || ya(this, 1), e || t < 0 && !_ || !v && !_ && m || (Pt(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));
      }
      return this;
    }, e.add = function add(e, i) {
      var n = this;
      if (t(i) || (i = wt(this, i, e)), !(e instanceof Vt)) {
        if (K(e)) return e.forEach(function (t) {
          return n.add(t, i);
        }), this;
        if (r(e)) return this.addLabel(e, i);
        if (!s(e)) return this;
        e = $t.delayedCall(0, e);
      }
      return this !== e ? Ja(this, e, i) : this;
    }, e.getChildren = function getChildren(t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -N);
      for (var n = [], a = this._first; a;) a._start >= i && (a instanceof $t ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
      return n;
    }, e.getById = function getById(t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) if (e[r].vars.id === t) return e[r];
    }, e.remove = function remove(t) {
      return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (xa(this, t), t === this._recent && (this._recent = this._last), za(this));
    }, e.totalTime = function totalTime(t, e) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ia(zt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
    }, e.addLabel = function addLabel(t, e) {
      return this.labels[t] = wt(this, e), this;
    }, e.removeLabel = function removeLabel(t) {
      return delete this.labels[t], this;
    }, e.addPause = function addPause(t, e, r) {
      var i = $t.delayedCall(0, e || T, r);
      return i.data = "isPause", this._hasPause = 1, Ja(this, i, wt(this, t));
    }, e.removePause = function removePause(t) {
      var e = this._first;
      for (t = wt(this, t); e;) e._start === t && "isPause" === e.data && ya(e), e = e._next;
    }, e.killTweensOf = function killTweensOf(t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) Ut !== i[n] && i[n].kill(t, e);
      return this;
    }, e.getTweensOf = function getTweensOf(e, r) {
      for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s;) s instanceof $t ? ka(s._targets, a) && (o ? (!Ut || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
      return n;
    }, e.tweenTo = function tweenTo(t, e) {
      e = e || {};
      var r,
        i = this,
        n = wt(i, t),
        a = e.startAt,
        s = e.onStart,
        o = e.onStartParams,
        u = e.immediateRender,
        h = $t.to(i, pa({
          ease: e.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: n,
          overwrite: "auto",
          duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || q,
          onStart: function onStart() {
            if (i.pause(), !r) {
              var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
              h._dur !== t && Qa(h, t, 0, 1).render(h._time, !0, !0), r = 1;
            }
            s && s.apply(h, o || []);
          }
        }, e));
      return u ? h.render(0) : h;
    }, e.tweenFromTo = function tweenFromTo(t, e, r) {
      return this.tweenTo(e, pa({
        startAt: {
          time: wt(this, t)
        }
      }, r));
    }, e.recent = function recent() {
      return this._recent;
    }, e.nextLabel = function nextLabel(t) {
      return void 0 === t && (t = this._time), qb(this, wt(this, t));
    }, e.previousLabel = function previousLabel(t) {
      return void 0 === t && (t = this._time), qb(this, wt(this, t), 1);
    }, e.currentLabel = function currentLabel(t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + q);
    }, e.shiftChildren = function shiftChildren(t, e, r) {
      void 0 === r && (r = 0);
      for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
      if (e) for (i in a) a[i] >= r && (a[i] += t);
      return za(this);
    }, e.invalidate = function invalidate() {
      var t = this._first;
      for (this._lock = 0; t;) t.invalidate(), t = t._next;
      return i.prototype.invalidate.call(this);
    }, e.clear = function clear(t) {
      void 0 === t && (t = !0);
      for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), za(this);
    }, e.totalDuration = function totalDuration(t) {
      var e,
        r,
        i,
        n = 0,
        a = this,
        s = a._last,
        o = N;
      if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
      if (a._dirty) {
        for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ja(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
        Qa(a, a === B && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
      }
      return a._tDur;
    }, Timeline.updateRoot = function updateRoot(t) {
      if (B._ts && (ma(B, Fa(t, B)), f = zt.frame), zt.frame >= _t) {
        _t += V.autoSleep || 120;
        var e = B._first;
        if ((!e || !e._ts) && V.autoSleep && zt._listeners.length < 2) {
          for (; e && !e._ts;) e = e._next;
          e || zt.sleep();
        }
      }
    }, Timeline;
  }(Vt);
  pa(Qt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  function $b(t, e, i, n, a, o) {
    var u, h, l, f;
    if (dt[t] && !1 !== (u = new dt[t]()).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
      if (s(t) && (t = Gt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || K(t) || Z(t)) return r(t) ? Gt(t, a, e, i, n) : t;
      var o,
        u = {};
      for (o in t) u[o] = Gt(t[o], a, e, i, n);
      return u;
    }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new me(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== c)) for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
    return u;
  }
  function ec(t, r, e, i) {
    var n,
      a,
      s = r.ease || i || "power1.inOut";
    if (K(r)) a = e[t] || (e[t] = []), r.forEach(function (t, e) {
      return a.push({
        t: e / (r.length - 1) * 100,
        v: t,
        e: s
      });
    });else for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
      t: parseFloat(t),
      v: r[n],
      e: s
    });
  }
  var Ut,
    Nt,
    qt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
      s(n) && (n = n(a || 0, t, o));
      var c,
        d = t[e],
        p = "get" !== i ? i : s(d) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
        _ = s(d) ? l ? Kt : Zt : Wt;
      if (r(n) && (~n.indexOf("random(") && (n = nb(n)), "=" === n.charAt(1) && (!(c = ja(p, n) + (Xa(p) || 0)) && 0 !== c || (n = c))), !f || p !== n || Nt) return isNaN(p * n) || "" === n ? (d || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
        var o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _ = new me(this._pt, t, e, 0, 1, oe, null, n),
          m = 0,
          g = 0;
        for (_.b = r, _.e = i, r += "", (d = ~(i += "").indexOf("random(")) && (i = nb(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
          _next: _._pt,
          p: f || 1 === g ? f : ",",
          s: c,
          c: "=" === l.charAt(1) ? ja(c, l) - c : parseFloat(l) - c,
          m: h && h < 4 ? Math.round : 0
        }, m = it.lastIndex);
        return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || d) && (_.e = 0), this._pt = _;
      }.call(this, t, e, p, n, _, h || V.stringFilter, l)) : (c = new me(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? ne : re, 0, _), l && (c.fp = l), u && c.modifier(u, this, t), this._pt = c);
    },
    jt = function _initTween(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _ = t.vars,
        m = _.ease,
        g = _.startAt,
        v = _.immediateRender,
        y = _.lazy,
        T = _.onUpdate,
        b = _.onUpdateParams,
        x = _.callbackScope,
        M = _.runBackwards,
        O = _.yoyoEase,
        k = _.keyframes,
        P = _.autoRevert,
        C = t._dur,
        S = t._startAt,
        A = t._targets,
        D = t.parent,
        z = D && "nested" === D.data ? D.vars.targets : A,
        R = "auto" === t._overwrite && !F,
        E = t.timeline;
      if (!E || k && m || (m = "none"), t._ease = Lt(m, U.ease), t._yEase = O ? Bt(Lt(!0 === O ? m : O, U.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !E && !!_.runBackwards, !E || k && !_.stagger) {
        if (d = (h = A[0] ? ea(A[0]).harness : 0) && _[h.prop], r = ta(_, lt), S && (e < 0 && M && v && !P ? S.render(-1, !0) : S.revert(M && C ? ht : ut), S._lazy = 0), g) {
          if (ya(t._startAt = $t.set(A, pa({
            data: "isStart",
            overwrite: !1,
            parent: D,
            immediateRender: !0,
            lazy: w(y),
            startAt: null,
            delay: 0,
            onUpdate: T,
            onUpdateParams: b,
            callbackScope: x,
            stagger: 0
          }, g))), e < 0 && (I || !v && !P) && t._startAt.revert(ht), v && C && e <= 0) return void (e && (t._zTime = e));
        } else if (M && C && !S) if (e && (v = !1), n = pa({
          overwrite: !1,
          data: "isFromStart",
          lazy: v && w(y),
          immediateRender: v,
          stagger: 0,
          parent: D
        }, r), d && (n[h.prop] = d), ya(t._startAt = $t.set(A, n)), e < 0 && (I ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, v) {
          if (!e) return;
        } else _initTween(t._startAt, q);
        for (t._pt = t._ptCache = 0, y = C && w(y) || y && !C, i = 0; i < A.length; i++) {
          if (u = (s = A[i])._gsap || da(A)[i]._gsap, t._ptLookup[i] = f = {}, ct[u.id] && ft.length && la(), c = z === A ? i : z.indexOf(s), h && !1 !== (l = new h()).init(s, d || r, t, c, z) && (t._pt = a = new me(t._pt, s, l.name, 0, 1, l.render, l, 0, l.priority), l._props.forEach(function (t) {
            f[t] = a;
          }), l.priority && (o = 1)), !h || d) for (n in r) dt[n] && (l = $b(n, r, t, c, s, z)) ? l.priority && (o = 1) : f[n] = a = qt.call(t, s, n, "get", r[n], c, z, 0, _.stringFilter);
          t._op && t._op[i] && t.kill(s, t._op[i]), R && t._pt && (Ut = t, B.killTweensOf(s, f, t.globalTime(e)), p = !t.parent, Ut = 0), t._pt && y && (ct[u.id] = 1);
        }
        o && _e(t), t._onInit && t._onInit(t);
      }
      t._onUpdate = T, t._initted = (!t._op || t._pt) && !p, k && e <= 0 && E.render(N, !0, !0);
    },
    Gt = function _parseFuncOrString(t, e, i, n, a) {
      return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? nb(t) : t;
    },
    Jt = gt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Ht = {};
  ga(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return Ht[t] = 1;
  });
  var $t = function (E) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && (i.duration = r, r = i, i = null);
      var s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p = (a = E.call(this, n ? r : ua(r)) || this).vars,
        _ = p.duration,
        m = p.delay,
        g = p.immediateRender,
        T = p.stagger,
        b = p.overwrite,
        x = p.keyframes,
        M = p.defaults,
        O = p.scrollTrigger,
        k = p.yoyoEase,
        P = r.parent || B,
        C = (K(e) || Z(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);
      if (a._targets = C.length ? da(C) : R("GSAP target " + e + " not found. https://greensock.com", !V.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
        if (r = a.vars, (s = a.timeline = new Qt({
          data: "nested",
          defaults: M || {},
          targets: P && "nested" === P.data ? P.vars.targets : C
        })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
          if (h = C.length, c = T && db(T), v(T)) for (l in T) ~Jt.indexOf(l) && ((d = d || {})[l] = T[l]);
          for (o = 0; o < h; o++) (u = ta(r, Ht)).stagger = 0, k && (u.yoyoEase = k), d && vt(u, d), f = C[o], u.duration = +Gt(_, _assertThisInitialized(a), o, f, C), u.delay = (+Gt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, c ? c(o, f, C) : 0), s._ease = Et.none;
          s.duration() ? _ = m = 0 : a.timeline = 0;
        } else if (x) {
          ua(pa(s.vars.defaults, {
            ease: "none"
          })), s._ease = Lt(x.ease || r.ease || "none");
          var S,
            A,
            D,
            z = 0;
          if (K(x)) x.forEach(function (t) {
            return s.to(C, t, ">");
          }), s.duration();else {
            for (l in u = {}, x) "ease" === l || "easeEach" === l || ec(l, x[l], u, x.easeEach);
            for (l in u) for (S = u[l].sort(function (t, e) {
              return t.t - e.t;
            }), o = z = 0; o < S.length; o++) (D = {
              ease: (A = S[o]).e,
              duration: (A.t - (o ? S[o - 1].t : 0)) / 100 * _
            })[l] = A.v, s.to(C, D, z), z += D.duration;
            s.duration() < _ && s.to({}, {
              duration: _ - s.duration()
            });
          }
        }
        _ || a.duration(_ = s.duration());
      } else a.timeline = 0;
      return !0 !== b || F || (Ut = _assertThisInitialized(a), B.killTweensOf(C), Ut = 0), Ja(P, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ia(P._time) && w(g) && function _hasNoPausedAncestors(t) {
        return !t || t._ts && _hasNoPausedAncestors(t.parent);
      }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -q, a.render(Math.max(0, -m))), O && Ka(_assertThisInitialized(a), O), a;
    }
    _inheritsLoose(Tween, E);
    var e = Tween.prototype;
    return e.render = function render(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c = this._time,
        d = this._tDur,
        p = this._dur,
        _ = t < 0,
        m = d - q < t && !_ ? d : t < q ? 0 : t;
      if (p) {
        if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
          if (i = m, l = this.timeline, this._repeat) {
            if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
            if (i = ia(m % s), m === d ? (a = this._repeat, i = p) : ((a = ~~(m / s)) && a === m / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = yt(this._tTime, s), i === c && !r && this._initted) return this._tTime = m, this;
            a !== o && (l && this._yEase && Ob(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ia(s * a), !0).invalidate()._lock = 0));
          }
          if (!this._initted) {
            if (La(this, _ ? t : i, r, e)) return this._tTime = 0, this;
            if (c !== this._time) return this;
            if (p !== this._dur) return this.render(t, e, r);
          }
          if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !c && !e && (Pt(this, "onStart"), this._tTime !== m)) return this;
          for (n = this._pt; n;) n.r(h, n.d), n = n._next;
          l && l.render(t < 0 ? t : !i && u ? -q : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ba(this, t, 0, r), Pt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Pt(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ba(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || ya(this, 1), e || _ && !c || !m && !c || (Pt(this, m === d ? "onComplete" : "onReverseComplete", !0), !this._prom || m < d && 0 < this.timeScale() || this._prom()));
        }
      } else !function _renderZeroDurationTween(t, e, r, i) {
        var n,
          a,
          s,
          o = t.ratio,
          u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
            var e = t.parent;
            return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e));
          }(t) && (t._initted || !Tt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Tt(t)) ? 0 : 1,
          h = t._rDelay,
          l = 0;
        if (h && t._repeat && (l = xt(0, t._tDur, e), a = yt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== yt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || I || i || t._zTime === q || !e && t._zTime) {
          if (!t._initted && La(t, e, i, r)) return;
          for (s = t._zTime, t._zTime = e || (r ? q : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
          e < 0 && Ba(t, e, 0, !0), t._onUpdate && !r && Pt(t, "onUpdate"), l && t._repeat && !r && t.parent && Pt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && ya(t, 1), r || I || (Pt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        } else t._zTime || (t._zTime = e);
      }(this, t, e, r);
      return this;
    }, e.targets = function targets() {
      return this._targets;
    }, e.invalidate = function invalidate() {
      return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), E.prototype.invalidate.call(this);
    }, e.resetTo = function resetTo(t, e, r, i) {
      d || zt.wake(), this._ts || this.play();
      var n,
        a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return this._initted || jt(this, a), n = this._ease(a / this._dur), function _updatePropTweens(t, e, r, i, n, a, s) {
        var o,
          u,
          h,
          l,
          f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
        if (!f) for (f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length; l--;) {
          if ((o = h[l][e]) && o.d && o.d._pt) for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
          if (!o) return Nt = 1, t.vars[e] = "+=0", jt(t, s), Nt = 0, 1;
          f.push(o);
        }
        for (l = f.length; l--;) (o = (u = f[l])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, u.e && (u.e = ha(r) + Xa(u.e)), u.b && (u.b = o.s + Xa(u.b));
      }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ha(this, 0), this.parent || wa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, e.kill = function kill(t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? sb(this) : this;
      if (this.timeline) {
        var i = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, Ut && !0 !== Ut.vars.overwrite)._first || sb(this), this.parent && i !== this.timeline.totalDuration() && Qa(this, this._dur * this.timeline._tDur / i, 0, 1), this;
      }
      var n,
        a,
        s,
        o,
        u,
        h,
        l,
        f = this._targets,
        c = t ? Ot(t) : f,
        d = this._ptLookup,
        p = this._pt;
      if ((!e || "all" === e) && function _arraysMatch(t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
        return r < 0;
      }(f, c)) return "all" === e && (this._pt = 0), sb(this);
      for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ga(e, function (t) {
        return u[t] = 1;
      }), e = u), e = function _addAliasesToVars(t, e) {
        var r,
          i,
          n,
          a,
          s = t[0] ? ea(t[0]).harness : 0,
          o = s && s.aliases;
        if (!o) return e;
        for (i in r = vt({}, e), o) if ((i in r)) for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
        return r;
      }(f, e)), l = f.length; l--;) if (~c.indexOf(f[l])) for (u in a = d[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o) (h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || xa(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
      return this._initted && !this._pt && p && sb(this), this;
    }, Tween.to = function to(t, e, r) {
      return new Tween(t, e, r);
    }, Tween.from = function from(t, e) {
      return Ua(1, arguments);
    }, Tween.delayedCall = function delayedCall(t, e, r, i) {
      return new Tween(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i
      });
    }, Tween.fromTo = function fromTo(t, e, r) {
      return Ua(2, arguments);
    }, Tween.set = function set(t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
    }, Tween.killTweensOf = function killTweensOf(t, e, r) {
      return B.killTweensOf(t, e, r);
    }, Tween;
  }(Vt);
  pa($t.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), ga("staggerTo,staggerFrom,staggerFromTo", function (r) {
    $t[r] = function () {
      var t = new Qt(),
        e = Mt.call(arguments, 0);
      return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
    };
  });
  function mc(t, e, r) {
    return t.setAttribute(e, r);
  }
  function uc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var Wt = function _setterPlain(t, e, r) {
      return t[e] = r;
    },
    Zt = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    Kt = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    ee = function _getSetter(t, e) {
      return s(t[e]) ? Zt : u(t[e]) && t.setAttribute ? mc : Wt;
    },
    re = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    ne = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    oe = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {
        for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    ce = function _renderPropTweens(t, e) {
      for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
    },
    de = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n;
    },
    pe = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? xa(this, i, "_pt") : i.dep || (e = 1), i = r;
      return !e;
    },
    _e = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a;) {
        for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
        (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
      }
      t._pt = i;
    },
    me = (PropTween.prototype.modifier = function modifier(t, e, r) {
      this.mSet = this.mSet || this.set, this.set = uc, this.m = t, this.mt = r, this.tween = e;
    }, PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || re, this.d = s || this, this.set = o || Wt, this.pr = u || 0, (this._next = t) && (t._prev = this);
  }
  ga(gt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return lt[t] = 1;
  }), ot.TweenMax = ot.TweenLite = $t, ot.TimelineLite = ot.TimelineMax = Qt, B = new Qt({
    sortChildren: !1,
    defaults: U,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), V.stringFilter = Db;
  function Bc(t) {
    return (Te[t] || we).map(function (t) {
      return t();
    });
  }
  function Cc() {
    var t = Date.now(),
      o = [];
    2 < t - xe && (Bc("matchMediaInit"), ye.forEach(function (t) {
      var e,
        r,
        i,
        n,
        a = t.queries,
        s = t.conditions;
      for (r in a) (e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
      n && (t.revert(), i && o.push(t));
    }), Bc("matchMediaRevert"), o.forEach(function (t) {
      return t.onMatch(t);
    }), xe = t, Bc("matchMedia"));
  }
  var ve,
    ye = [],
    Te = {},
    we = [],
    xe = 0,
    Me = ((ve = Context.prototype).add = function add(t, i, n) {
      function xw() {
        var t,
          e = l,
          r = a.selector;
        return e && e !== a && e.data.push(a), n && (a.selector = bb(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t;
      }
      s(t) && (n = i, i = t, t = s);
      var a = this;
      return a.last = xw, t === s ? xw(a) : t ? a[t] = xw : xw;
    }, ve.ignore = function ignore(t) {
      var e = l;
      l = null, t(this), l = e;
    }, ve.getTweens = function getTweens() {
      var e = [];
      return this.data.forEach(function (t) {
        return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof $t && e.push(t);
      }), e;
    }, ve.clear = function clear() {
      this._r.length = this.data.length = 0;
    }, ve.kill = function kill(e, t) {
      var r = this;
      if (e ? (this.getTweens().map(function (t) {
        return {
          g: t.globalTime(0),
          t: t
        };
      }).sort(function (t, e) {
        return e.g - t.g || -1;
      }).forEach(function (t) {
        return t.t.revert(e);
      }), this.data.forEach(function (t) {
        return !(t instanceof Vt) && t.revert && t.revert(e);
      }), this._r.forEach(function (t) {
        return t(e, r);
      }), this.isReverted = !0) : this.data.forEach(function (t) {
        return t.kill && t.kill();
      }), this.clear(), t) {
        var i = ye.indexOf(this);
        ~i && ye.splice(i, 1);
      }
    }, ve.revert = function revert(t) {
      this.kill(t || {});
    }, Context);
  function Context(t, e) {
    this.selector = e && bb(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t);
  }
  var Oe,
    ke = ((Oe = MatchMedia.prototype).add = function add(t, e, r) {
      v(t) || (t = {
        matches: t
      });
      var i,
        n,
        a,
        s = new Me(0, r || this.scope),
        o = s.conditions = {};
      for (n in this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (ye.indexOf(s) < 0 && ye.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Cc) : i.addEventListener("change", Cc));
      return a && e(s), this;
    }, Oe.revert = function revert(t) {
      this.kill(t || {});
    }, Oe.kill = function kill(e) {
      this.contexts.forEach(function (t) {
        return t.kill(e, !0);
      });
    }, MatchMedia);
  function MatchMedia(t) {
    this.contexts = [], this.scope = t;
  }
  var Pe = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      e.forEach(function (t) {
        return function _createPlugin(t) {
          var e = (t = !t.name && t.default || t).name,
            r = s(t),
            i = e && !r && t.init ? function () {
              this._props = [];
            } : t,
            n = {
              init: T,
              render: ce,
              add: qt,
              kill: pe,
              modifier: de,
              rawVars: 0
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: ee,
              aliases: {},
              register: 0
            };
          if (Rt(), t !== i) {
            if (dt[e]) return;
            pa(i, pa(ta(t, n), a)), vt(i.prototype, vt(n, ta(t, a))), dt[i.prop = e] = i, t.targetTest && (mt.push(i), lt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
          }
          S(e, i), t.register && t.register(Ce, i, me);
        }(t);
      });
    },
    timeline: function timeline(t) {
      return new Qt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return B.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, n) {
      r(i) && (i = Ot(i)[0]);
      var a = ea(i || {}).get,
        s = e ? oa : na;
      return "native" === e && (e = ""), i ? t ? s((dt[t] && dt[t].get || a)(i, t, e, n)) : function (t, e, r) {
        return s((dt[t] && dt[t].get || a)(i, t, e, r));
      } : i;
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = Ot(r)).length) {
        var n = r.map(function (t) {
            return Ce.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--;) n[e](t);
        };
      }
      r = r[0] || {};
      var s = dt[e],
        o = ea(r),
        u = o.harness && (o.harness.aliases || {})[e] || e,
        h = s ? function (t) {
          var e = new s();
          c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && ce(1, c);
        } : o.set(r, u);
      return s ? h : function (t) {
        return h(r, u, i ? t + i : t, o, 1);
      };
    },
    quickTo: function quickTo(t, i, e) {
      function Mx(t, e, r) {
        return n.resetTo(i, t, e, r);
      }
      var r,
        n = Ce.to(t, vt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
      return Mx.tween = n, Mx;
    },
    isTweening: function isTweening(t) {
      return 0 < B.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Lt(t.ease, U.ease)), sa(U, t || {});
    },
    config: function config(t) {
      return sa(V, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !dt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.");
      }), pt[i] = function (t, e, r) {
        return n(Ot(t), pa(e || {}, a), r);
      }, r && (Qt.prototype[i] = function (t, e, r) {
        return this.add(pt[i](t, v(e) ? e : (r = e) && {}, this), r);
      });
    },
    registerEase: function registerEase(t, e) {
      Et[t] = Lt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Lt(t, e) : Et;
    },
    getById: function getById(t) {
      return B.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Qt(t);
      for (n.smoothChildTiming = w(t.smoothChildTiming), B.remove(n), n._dp = 0, n._time = n._tTime = B._time, r = B._first; r;) i = r._next, !e && !r._dur && r instanceof $t && r.vars.onComplete === r._targets[0] || Ja(n, r, r._start - r._delay), r = i;
      return Ja(B, n, 0), n;
    },
    context: function context(t, e) {
      return t ? new Me(t, e) : l;
    },
    matchMedia: function matchMedia(t) {
      return new ke(t);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return ye.forEach(function (t) {
        var e,
          r,
          i = t.conditions;
        for (r in i) i[r] && (i[r] = !1, e = 1);
        e && t.revert();
      }) || Cc();
    },
    addEventListener: function addEventListener(t, e) {
      var r = Te[t] || (Te[t] = []);
      ~r.indexOf(e) || r.push(e);
    },
    removeEventListener: function removeEventListener(t, e) {
      var r = Te[t],
        i = r && r.indexOf(e);
      0 <= i && r.splice(i, 1);
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return K(e) ? kb(e, wrap(0, e.length), t) : Va(r, function (t) {
          return (i + (t - e) % i) % i + e;
        });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return K(e) ? kb(e, wrapYoyo(0, e.length - 1), t) : Va(r, function (t) {
          return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);
        });
      },
      distribute: db,
      random: gb,
      snap: fb,
      normalize: function normalize(t, e, r) {
        return kt(t, e, 0, 1, r);
      },
      getUnit: Xa,
      clamp: function clamp(e, r, t) {
        return Va(t, function (t) {
          return xt(e, r, t);
        });
      },
      splitColor: yb,
      toArray: Ot,
      selector: bb,
      mapRange: kt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Xa(t));
        };
      },
      interpolate: function interpolate(e, i, t, n) {
        var a = isNaN(e + i) ? 0 : function (t) {
          return (1 - t) * e + t * i;
        };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = r(e),
            c = {};
          if (!0 === t && (n = 1) && (t = null), f) e = {
            p: e
          }, i = {
            p: i
          };else if (K(e) && !K(i)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
            h--, a = function func(t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }, t = i;
          } else n || (e = vt(K(e) ? [] : {}, e));
          if (!u) {
            for (s in i) qt.call(c, e, s, "get", i[s]);
            a = function func(t) {
              return ce(t, c) || (f ? e.p : e);
            };
          }
        }
        return Va(t, a);
      },
      shuffle: cb
    },
    install: P,
    effects: pt,
    ticker: zt,
    updateRoot: Qt.updateRoot,
    plugins: dt,
    globalTimeline: B,
    core: {
      PropTween: me,
      globals: S,
      Tween: $t,
      Timeline: Qt,
      Animation: Vt,
      getCache: ea,
      _removeLinkedListItem: xa,
      reverting: function reverting() {
        return I;
      },
      context: function context(t) {
        return t && l && (l.data.push(t), t._ctx = l), l;
      },
      suppressOverwrites: function suppressOverwrites(t) {
        return F = t;
      }
    }
  };
  ga("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return Pe[t] = $t[t];
  }), zt.add(Qt.updateRoot), c = Pe.to({}, {
    duration: 0
  });
  function Gc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
    return r;
  }
  function Ic(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, n, e) {
        e._onInit = function (t) {
          var e, i;
          if (r(n) && (e = {}, ga(n, function (t) {
            return e[t] = 1;
          }), n = e), a) {
            for (i in e = {}, n) e[i] = a(n[i]);
            n = e;
          }
          !function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e) for (i = a.length; i--;) (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Gc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
          }(t, n);
        };
      }
    };
  }
  var Ce = Pe.registerPlugin({
    name: "attr",
    init: function init(t, e, r, i, n) {
      var a, s, o;
      for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a);
    },
    render: function render(t, e) {
      for (var r = e._pt; r;) I ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
    }
  }, Ic("roundProps", eb), Ic("modifiers"), Ic("snap", fb)) || Pe;
  $t.version = Qt.version = Ce.version = "3.11.1", o = 1, x() && Rt();
  function sd(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function td(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function ud(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }
  function vd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
  }
  function wd(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function xd(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function yd(t, e, r) {
    return t.style[e] = r;
  }
  function zd(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function Ad(t, e, r) {
    return t._gsap[e] = r;
  }
  function Bd(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r;
  }
  function Cd(t, e, r, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = r, a.renderTransform(n, a);
  }
  function Dd(t, e, r, i, n) {
    var a = t._gsap;
    a[e] = r, a.renderTransform(n, a);
  }
  function Gd(t) {
    var e = this,
      r = this.target,
      i = r.style;
    if (t in er) {
      if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = ur[t] || t).indexOf(",") ? t.split(",").forEach(function (t) {
        return e.tfm[t] = _r(r, t);
      }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : _r(r, t)), 0 <= this.props.indexOf(hr)) return;
      r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(lr, "")), t = hr;
    }
    i && this.props.push(t, i[t]);
  }
  function Hd(t) {
    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
  }
  function Id() {
    var t,
      e,
      r = this.props,
      i = this.target,
      n = i.style,
      a = i._gsap;
    for (t = 0; t < r.length; t += 2) r[t + 1] ? n[r[t]] = r[t + 1] : n.removeProperty(r[t].replace(ar, "-$1").toLowerCase());
    if (this.tfm) {
      for (e in this.tfm) a[e] = this.tfm[e];
      a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), !(t = Fe()) || t.isStart || n[hr] || (Hd(n), a.uncache = 1);
    }
  }
  function Jd(t, e) {
    var r = {
      target: t,
      props: [],
      revert: Id,
      save: Gd
    };
    return e && e.split(",").forEach(function (t) {
      return r.save(t);
    }), r;
  }
  function Ld(t, e) {
    var r = Ae.createElementNS ? Ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ae.createElement(t);
    return r.style ? r : Ae.createElement(t);
  }
  function Md(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(ar, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Md(t, cr(e) || e, 1) || "";
  }
  function Pd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() && window.document && (Se = window, Ae = Se.document, De = Ae.documentElement, Re = Ld("div") || {
      style: {}
    }, Ld("div"), hr = cr(hr), lr = hr + "Origin", Re.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ie = !!cr("perspective"), Fe = Ce.core.reverting, ze = 1);
  }
  function Qd(t) {
    var e,
      r = Ld("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if (De.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
      e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Qd;
    } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), De.removeChild(r), this.style.cssText = a, e;
  }
  function Rd(t, e) {
    for (var r = e.length; r--;) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function Sd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = Qd.call(e, !0);
    }
    return r && (r.width || r.height) || e.getBBox === Qd || (r = Qd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
      x: +Rd(e, ["x", "cx", "x1"]) || 0,
      y: +Rd(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  }
  function Td(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Sd(t));
  }
  function Ud(t, e) {
    if (e) {
      var r = t.style;
      e in er && e !== lr && (e = hr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(ar, "-$1").toLowerCase())) : r.removeAttribute(e);
    }
  }
  function Vd(t, e, r, i, n, a) {
    var s = new me(t._pt, e, r, 0, 1, a ? xd : wd);
    return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
  }
  function Yd(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = Re.style,
      f = sr.test(e),
      c = "svg" === t.tagName.toLowerCase(),
      d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
      p = "px" === i,
      _ = "%" === i;
    return i === h || !u || dr[i] || dr[h] ? u : ("px" === h || p || (u = Yd(t, e, r, "px")), o = t.getCTM && Td(t), !_ && "%" !== h || !er[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Ae && a.appendChild || (a = Ae.body), (s = a._gsap) && _ && s.width && f && s.time === zt.time && !s.uncache ? ha(u / s.width * 100) : (!_ && "%" !== h || pr[Md(a, "display")] || (l.position = Md(t, "position")), a === t && (l.position = "static"), a.appendChild(Re), n = Re[d], a.removeChild(Re), l.position = "absolute", f && _ && ((s = ea(a)).time = zt.time, s.width = a[d]), ha(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[d], ha(_ ? u / n * 100 : u / 100 * n)));
  }
  function $d(t, e, r, i) {
    if (!r || "none" === r) {
      var n = cr(e, t, 1),
        a = n && Md(t, n, 1);
      a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Md(t, "borderTopColor"));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      c,
      d,
      p,
      _,
      m,
      g = new me(this._pt, t.style, e, 0, 1, oe),
      v = 0,
      y = 0;
    if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = Md(t, e) || i, t.style[e] = r), Db(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
      for (; o = rt.exec(i);) c = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), c !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = ja(h, c) + m), d = parseFloat(c), _ = c.substr((d + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || V.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = Yd(t, e, f, _) || 0), g._pt = {
        _next: g._pt,
        p: p || 1 === y ? p : ",",
        s: h,
        c: d - h,
        m: l && l < 4 || "zIndex" === e ? Math.round : 0
      });
      g.c = v < i.length ? i.substring(v, i.length) : "";
    } else g.r = "display" === e && "none" === i ? xd : wd;
    return nt.test(i) && (g.e = 0), this._pt = g;
  }
  function ae(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = mr[r] || r, e[1] = mr[i] || i, e.join(" ");
  }
  function be(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) s.cssText = "", i = 1;else for (n = (o = o.split(",")).length; -1 < --n;) r = o[n], er[r] && (i = 1, r = "transformOrigin" === r ? lr : hr), Ud(a, r);
      i && (Ud(a, hr), u && (u.svg && a.removeAttribute("transform"), Tr(a, 1), u.uncache = 1, Hd(s)));
    }
  }
  function fe(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function ge(t) {
    var e = Md(t, hr);
    return fe(e) ? vr : e.substr(7).match(et).map(ha);
  }
  function he(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || ea(t),
      o = t.style,
      u = ge(t);
    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? vr : u : (u !== vr || t.offsetParent || t === De || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, De.appendChild(t)), u = ge(t), n ? o.display = n : Ud(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : De.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function ie(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || he(t, !0),
      f = h.xOrigin || 0,
      c = h.yOrigin || 0,
      d = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r ? l !== vr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Sd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - c, h.xOffset = d + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[lr] = "0px 0px", a && (Vd(a, h, "xOrigin", f, w), Vd(a, h, "yOrigin", c, x), Vd(a, h, "xOffset", d, h.xOffset), Vd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
  }
  function le(t, e, r) {
    var i = Xa(e);
    return ha(parseFloat(e) + parseFloat(Yd(t, "x", r + "px", i))) + i;
  }
  function se(t, e, i, n, a) {
    var s,
      o,
      u = 360,
      h = r(a),
      l = parseFloat(a) * (h && ~a.indexOf("rad") ? rr : 1) - n,
      f = n + l + "deg";
    return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new me(t._pt, e, i, n, l, td), o.e = f, o.u = "deg", t._props.push(i), o;
  }
  function te(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function ue(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = te({}, r._gsap),
      f = r.style;
    for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[hr] = e, i = Tr(r, 1), Ud(r, hr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[hr], f[hr] = e, i = Tr(r, 1), f[hr] = a), er) (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Xa(a) !== (h = Xa(s)) ? Yd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new me(t._pt, i, n, o, u - o, sd), t._pt.u = h || 0, t._props.push(n));
    te(i, l);
  }
  var Se,
    Ae,
    De,
    ze,
    Re,
    Ee,
    Fe,
    Ie,
    Be = Et.Power0,
    Le = Et.Power1,
    Xe = Et.Power2,
    Ye = Et.Power3,
    Ve = Et.Power4,
    Qe = Et.Linear,
    Ue = Et.Quad,
    Ne = Et.Cubic,
    qe = Et.Quart,
    je = Et.Quint,
    Ge = Et.Strong,
    Je = Et.Elastic,
    He = Et.Back,
    $e = Et.SteppedEase,
    We = Et.Bounce,
    Ze = Et.Sine,
    Ke = Et.Expo,
    tr = Et.Circ,
    er = {},
    rr = 180 / Math.PI,
    ir = Math.PI / 180,
    nr = Math.atan2,
    ar = /([A-Z])/g,
    sr = /(left|right|width|margin|padding|x)/i,
    or = /[\s,\(]\S/,
    ur = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
    hr = "transform",
    lr = hr + "Origin",
    fr = "O,Moz,ms,Ms,Webkit".split(","),
    cr = function _checkPropPrefix(t, e, r) {
      var i = (e || Re).style,
        n = 5;
      if (t in i && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(fr[n] + t in i););
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? fr[n] : "") + t;
    },
    dr = {
      deg: 1,
      rad: 1,
      turn: 1
    },
    pr = {
      grid: 1,
      flex: 1
    },
    _r = function _get(t, e, r, i) {
      var n;
      return ze || Pd(), e in ur && "transform" !== e && ~(e = ur[e]).indexOf(",") && (e = e.split(",")[0]), er[e] && "transform" !== e ? (n = Tr(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : br(Md(t, lr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = gr[e] && gr[e](t, e, r) || Md(t, e) || fa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Yd(t, e, n, r) + r : n;
    },
    mr = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
    gr = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = t._pt = new me(t._pt, e, r, 0, 0, be);
          return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
        }
      }
    },
    vr = [1, 0, 0, 1, 0, 0],
    yr = {},
    Tr = function _parseTransform(t, e) {
      var r = t._gsap || new Yt(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        M,
        O,
        k,
        P,
        C,
        S,
        A,
        D,
        z,
        R,
        E,
        F = t.style,
        I = r.scaleX < 0,
        B = "deg",
        L = getComputedStyle(t),
        X = Md(t, lr) || "0";
      return i = n = a = u = h = l = f = c = d = 0, s = o = 1, r.svg = !(!t.getCTM || !Td(t)), L.translate && ("none" === L.translate && "none" === L.scale && "none" === L.rotate || (F[hr] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + L[hr]), F.scale = F.rotate = F.translate = "none"), m = he(t, r.svg), r.svg && (k = r.uncache ? (P = t.getBBox(), X = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), ie(t, k || X, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== vr && (T = m[0], b = m[1], w = m[2], x = m[3], i = M = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? nr(b, T) * rr : 0, (f = w || x ? nr(w, x) * rr + u : 0) && (o *= Math.abs(Math.cos(f * ir))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (E = m[6], z = m[7], S = m[8], A = m[9], D = m[10], R = m[11], i = m[12], n = m[13], a = m[14], h = (g = nr(E, D)) * rr, g && (k = M * (v = Math.cos(-g)) + S * (y = Math.sin(-g)), P = O * v + A * y, C = E * v + D * y, S = M * -y + S * v, A = O * -y + A * v, D = E * -y + D * v, R = z * -y + R * v, M = k, O = P, E = C), l = (g = nr(-w, D)) * rr, g && (v = Math.cos(-g), R = x * (y = Math.sin(-g)) + R * v, T = k = T * v - S * y, b = P = b * v - A * y, w = C = w * v - D * y), u = (g = nr(b, T)) * rr, g && (k = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = M * v + O * y, b = b * v - T * y, O = O * v - M * y, T = k, M = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ha(Math.sqrt(T * T + b * b + w * w)), o = ha(Math.sqrt(O * O + E * E)), g = nr(M, O), f = 2e-4 < Math.abs(g) ? g * rr : 0, d = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !fe(Md(t, hr)), k && t.setAttribute("transform", k))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ha(s), r.scaleY = ha(o), r.rotation = ha(u) + B, r.rotationX = ha(h) + B, r.rotationY = ha(l) + B, r.skewX = f + B, r.skewY = c + B, r.transformPerspective = d + "px", (r.zOrigin = parseFloat(X.split(" ")[2]) || 0) && (F[lr] = br(X)), r.xOffset = r.yOffset = 0, r.force3D = V.force3D, r.renderTransform = r.svg ? Pr : Ie ? kr : wr, r.uncache = 0, r;
    },
    br = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    wr = function _renderNon3DTransforms(t, e) {
      e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, kr(t, e);
    },
    xr = "0deg",
    Mr = "0px",
    Or = ") ",
    kr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        c = r.skewY,
        d = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = "auto" === m && t && 1 !== t || !0 === m;
      if (v && (l !== xr || h !== xr)) {
        var b,
          w = parseFloat(h) * ir,
          x = Math.sin(w),
          M = Math.cos(w);
        w = parseFloat(l) * ir, b = Math.cos(w), a = le(g, a, x * b * -v), s = le(g, s, -Math.sin(w) * -v), o = le(g, o, M * b * -v + v);
      }
      _ !== Mr && (y += "perspective(" + _ + Or), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Mr && s === Mr && o === Mr || (y += o !== Mr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Or), u !== xr && (y += "rotate(" + u + Or), h !== xr && (y += "rotateY(" + h + Or), l !== xr && (y += "rotateX(" + l + Or), f === xr && c === xr || (y += "skew(" + f + ", " + c + Or), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + Or), g.style[hr] = y || "translate(0, 0)";
    },
    Pr = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        c = o.rotation,
        d = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        M = parseFloat(f);
      c = parseFloat(c), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), c += p), c || d ? (c *= ir, d *= ir, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - d) * -m, a = Math.cos(c - d) * m, d && (p *= ir, s = Math.tan(d - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ha(r), i = ha(i), n = ha(n), a = ha(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || M && !~(f + "").indexOf("px")) && (x = Yd(g, "x", l, "px"), M = Yd(g, "y", f, "px")), (v || y || T || b) && (x = ha(x + v - (v * r + y * n) + T), M = ha(M + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ha(x + u / 100 * s.width), M = ha(M + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + M + ")", g.setAttribute("transform", s), w && (g.style[hr] = s);
    };
  ga("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
        return r < 2 ? e + t : "border" + t + e;
      });
    gr[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4) return a = o.map(function (t) {
        return _r(e, t, r);
      }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
      a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
        return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
      }), e.init(t, s, n);
    };
  });
  var Cr,
    Sr,
    Ar,
    Dr = {
      name: "css",
      register: Pd,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, i, n, a) {
        var s,
          o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _,
          m,
          g,
          v,
          y,
          T,
          b,
          w = this._props,
          x = t.style,
          M = i.vars.startAt;
        for (c in ze || Pd(), this.styles = this.styles || Jd(t), b = this.styles.props, this.tween = i, e) if ("autoRound" !== c && (o = e[c], !dt[c] || !$b(c, e, i, n, t, a))) if (l = typeof o, f = gr[c], "function" === l && (l = typeof (o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = nb(o)), f) f(this, t, c, o, i) && (T = 1);else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", At.lastIndex = 0, At.test(s) || (d = Xa(s), p = Xa(o)), p ? d !== p && (s = Yd(t, c, s, p) + p) : d && (o += d), this.add(x, "setProperty", s, o, n, a, 0, 0, c), w.push(c), b.push(c, x[c]);else if ("undefined" !== l) {
          if (M && c in M ? (s = "function" == typeof M[c] ? M[c].call(i, n, t, a) : M[c], r(s) && ~s.indexOf("random(") && (s = nb(s)), Xa(s + "") || (s += V.units[c] || Xa(_r(t, c)) || ""), "=" === (s + "").charAt(1) && (s = _r(t, c))) : s = _r(t, c), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), c in ur && ("autoAlpha" === c && (1 === h && "hidden" === _r(t, "visibility") && u && (h = 0), b.push("visibility", x.visibility), Vd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== c && "transform" !== c && ~(c = ur[c]).indexOf(",") && (c = c.split(",")[0])), m = c in er) {
            if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || Tr(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new me(this._pt, x, hr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new me(this._pt, v, "scaleY", v.scaleY, (_ ? ja(v.scaleY, _ + u) : u) - v.scaleY || 0, sd), this._pt.u = 0, w.push("scaleY", c), c += "X";else {
              if ("transformOrigin" === c) {
                b.push(lr, x[lr]), o = ae(o), v.svg ? ie(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Vd(this, v, "zOrigin", v.zOrigin, p), Vd(this, x, c, br(s), br(o)));
                continue;
              }
              if ("svgOrigin" === c) {
                ie(t, o, 1, y, 0, this);
                continue;
              }
              if (c in yr) {
                se(this, v, c, h, _ ? ja(h, _ + o) : o);
                continue;
              }
              if ("smoothOrigin" === c) {
                Vd(this, v, "smooth", v.smooth, o);
                continue;
              }
              if ("force3D" === c) {
                v[c] = o;
                continue;
              }
              if ("transform" === c) {
                ue(this, o, t);
                continue;
              }
            }
          } else c in x || (c = cr(c) || c);
          if (m || (u || 0 === u) && (h || 0 === h) && !or.test(o) && c in x) u = u || 0, (d = (s + "").substr((h + "").length)) !== (p = Xa(o) || (c in V.units ? V.units[c] : d)) && (h = Yd(t, c, s, p)), this._pt = new me(this._pt, m ? v : x, c, h, (_ ? ja(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? sd : vd), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = ud);else if (c in x) $d.call(this, t, c, s, _ ? _ + o : o);else {
            if (!(c in t)) {
              Q(c, o);
              continue;
            }
            this.add(t, c, s || t[c], _ ? _ + o : o, n, a);
          }
          m || b.push(c, x[c]), w.push(c);
        }
        T && _e(this);
      },
      render: function render(t, e) {
        if (e.tween._time || !Fe()) for (var r = e._pt; r;) r.r(t, r.d), r = r._next;else e.styles.revert();
      },
      get: _r,
      aliases: ur,
      getSetter: function getSetter(t, e, r) {
        var i = ur[e];
        return i && i.indexOf(",") < 0 && (e = i), e in er && e !== lr && (t._gsap.x || _r(t, "x")) ? r && Ee === r ? "scale" === e ? Bd : Ad : (Ee = r || {}) && ("scale" === e ? Cd : Dd) : t.style && !u(t.style[e]) ? yd : ~e.indexOf("-") ? zd : ee(t, e);
      },
      core: {
        _removeProperty: Ud,
        _getMatrix: he
      }
    };
  Ce.utils.checkPrefix = cr, Ce.core.getStyleSaver = Jd, Ar = ga((Cr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Sr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    er[t] = 1;
  }), ga(Sr, function (t) {
    V.units[t] = "deg", yr[t] = 1;
  }), ur[Ar[13]] = Cr + "," + Sr, ga("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    ur[e[1]] = Ar[e[0]];
  }), ga("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    V.units[t] = "px";
  }), Ce.registerPlugin(Dr);
  var zr = Ce.registerPlugin(Dr) || Ce,
    Rr = zr.core.Tween;
  e.Back = He, e.Bounce = We, e.CSSPlugin = Dr, e.Circ = tr, e.Cubic = Ne, e.Elastic = Je, e.Expo = Ke, e.Linear = Qe, e.Power0 = Be, e.Power1 = Le, e.Power2 = Xe, e.Power3 = Ye, e.Power4 = Ve, e.Quad = Ue, e.Quart = qe, e.Quint = je, e.Sine = Ze, e.SteppedEase = $e, e.Strong = Ge, e.TimelineLite = Qt, e.TimelineMax = Qt, e.TweenLite = $t, e.TweenMax = Rr, e.default = zr, e.gsap = zr;
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map