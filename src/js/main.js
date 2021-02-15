import MainSlider from './modules/slider/slider-main'
import MiniSlider from './modules/slider/slider-mini'
import VideoPlayer from './modules/playVideo'
import Differance from './modules/differance'
import Form from './modules/form'
import ShowInfo from './modules/showInfo'
import Download from './modules/download'

window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	const slider = new MainSlider({container: '.page', btns: '.next'})
	slider.render()

	const modulePageSlider = new MainSlider({
		container: '.moduleapp',
		btns: '.next',
		nextBtnModule: '.nextmodule',
		prevBtnModule: '.prevmodule'
	})
	modulePageSlider.render()

	const showUpSlider = new MiniSlider({
		container: '.showup__content-slider',
		prev: '.showup__prev',
		next: '.showup__next',
		activeClass: 'card-active',
		animate: true,
	})
	showUpSlider.init()

	const modulesSlider = new MiniSlider({
		container: '.modules__content-slider',
		prev: '.modules__info-btns .slick-prev',
		next: '.modules__info-btns .slick-next',
		activeClass: 'card-active',
		animate: true,
		autoplay: true,
	})
	modulesSlider.init()

	const feedSlider = new MiniSlider({
		container: '.feed__slider',
		prev: '.feed .slick-prev',
		next: '.feed .slick-next',
		activeClass: 'feed__item-active',
	})
	feedSlider.init()

	new VideoPlayer('.showup .play', '.overlay').init()
	new VideoPlayer('.module__video-item .play', '.overlay').init()

	new Differance('.officerold', '.officernew', '.officer__card-item').init()
	new Form('.form').init()
	new ShowInfo('.module__info-show').init()
	new Download('.download').init()
})