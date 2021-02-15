export default class VideoPlayer {
	constructor(triggers, overlay) {
		this.btns = document.querySelectorAll(triggers)
		this.overlay = document.querySelector(overlay)
		this.close = this.overlay.querySelector('.close')
		this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
	}

	createPlayer(url) {
		this.player = new YT.Player('frame', {
			height: '100%',
			width: '100%',
			videoId: url,
			events: {
				'onStateChange': this.onPlayerStateChange,
			},
		})

		this.overlay.style.display = 'flex'
	}

	onPlayerStateChange(state) {
		try {
			const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling
			const playBtn = this.activeBtn.querySelector('svg').cloneNode(true)

			if (state.data === 0) {
				if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
					blockedElem.querySelector('.play__circle').classList.remove('closed')
					blockedElem.querySelector('svg').remove()
					blockedElem.querySelector('.play__circle').appendChild(playBtn)
					blockedElem.querySelector('.play__text').textContent = 'Play video'
					blockedElem.querySelector('.play__text').classList.remove('attention')
					blockedElem.style.cssText = `
					pointer-events: auto;
					opacity: 1;
					filter: none;
				`
				}
			}
		} catch (e) {
		}

	}

	bindCloseBtn() {
		this.close.addEventListener('click', () => {
			this.overlay.style.display = 'none'
			this.player.stopVideo()
		})
	}

	bindTriggers() {
		this.btns.forEach(btn => {
			try {
				const blockedElem = btn.closest('.module__video-item').nextElementSibling
				blockedElem.style.pointerEvents = 'none'
			} catch (e) {
			}

			btn.addEventListener('click', () => {
				this.activeBtn = btn

				if (document.querySelector('iframe#frame')) {
					this.overlay.style.display = 'flex'
					if (this.path !== btn.getAttribute('data-url')) {
						this.path = btn.getAttribute('data-url')
						this.player.loadVideoById({videoId: this.path})
					}
				} else {
					this.path = btn.getAttribute('data-url')
					this.createPlayer(this.path)
				}
			})
		})
	}

	init() {
		if (this.btns.length > 0) {
			const tag = document.createElement('script')

			tag.src = 'https://www.youtube.com/iframe_api'
			const firstScriptTag = document.getElementsByTagName('script')[0]
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

			this.bindTriggers()
			this.bindCloseBtn()
		}
	}
}