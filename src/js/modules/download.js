export default class Download {
	constructor(triggers) {
		this.btns = document.querySelectorAll(triggers)
		this.path = 'assets/img/mainbg.jpg'
	}

	downloadItem(path){
		const link = document.createElement('a')

		link.setAttribute('href', path)
		link.setAttribute('download', 'nice-pic')
		link.click()
	}

	init() {
		this.btns.forEach(btn => {
			btn.style.cursor = 'pointer'
			btn.addEventListener('click', (e) => {
				e.preventDefault()
				e.stopPropagation()
				this.downloadItem(this.path)
			})
		})
	}
}