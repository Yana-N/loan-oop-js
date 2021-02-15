export default class Slider {
	constructor({
								container = null,
								btns = null,
								next = null,
								prev = null,
								nextBtnModule = null,
								prevBtnModule = null,
								activeClass = '',
								animate,
								autoplay,
							} = {}) {
		this.container = document.querySelector(container)
		try {
			this.slides = this.container.children
		} catch (e) {
		}
		this.btns = document.querySelectorAll(btns)
		this.prev = document.querySelector(prev)
		this.next = document.querySelector(next)
		this.nextBtnModule = document.querySelectorAll(nextBtnModule)
		this.prevBtnModule = document.querySelectorAll(prevBtnModule)
		this.activeClass = activeClass
		this.animate = animate
		this.autoplay = autoplay
		this.slideIndex = 1
	}


}