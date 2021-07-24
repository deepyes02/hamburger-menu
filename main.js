try {
	const outerBox = document.querySelector('#outer-box');
	const my_menu = document.querySelector('#menu');

outerBox.addEventListener('click', ()=>{
	my_menu.classList.toggle('slide_in_right');
	document.querySelector('body').classList.toggle('change_body');
})
} catch (error) {
	console.log(error)
}