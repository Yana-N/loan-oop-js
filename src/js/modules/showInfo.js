export default class ShowInfo {
	constructor(triggers) {
		this.btns = document.querySelectorAll(triggers)
	}

	init() {
		this.btns.forEach(btn => {
			btn.style.cursor = 'pointer'
			btn.addEventListener('click', () => {
				const msg = btn.nextElementSibling
				msg.style.marginTop = '20px'
				msg.classList.toggle('msg')
			})
		})
	}
}