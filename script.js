const style = {
	width: '5px',
	height: '100%',
	'background-color': 'transparent',
	position: 'fixed',
	top: 0,
	right: 0,
	'z-index': 2,
	'pointer-event': 'none',
}
const styleBar = {
	'background-color': '#066B7A',
	width: '5px',
	height: '0px',
	'min-height': 'auto'
}

/* test start */
document.body.style.height = "200vh"
/* test end */

const scroll = document.createElement('div')
const bar = document.createElement('div')

if (!document.body.contains(document.querySelector('.scrollbar'))) {
	scroll.classList.add('scrollbar')
	bar.classList.add('bar')
	for (const index in style) {
		const value = style[index]
		scroll.style.setProperty(index, value, '')
	}
	for (const index in styleBar) {
		const value = styleBar[index]
		bar.style.setProperty(index, value, '')
	}

	scroll.appendChild(bar)
	document.body.appendChild(scroll)

function initScrollBar(e) {
	document
		.querySelector('.bar')
		.style.setProperty(
			'height',
			(window.innerHeight / (document.body.clientHeight - 950)) *
				window.scrollY +
				'px',
			''
		)
}}


window.addEventListener('scroll', initScrollBar, { passive: true })