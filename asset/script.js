const toggle = document.querySelector('.toggler');
const collapse = document.querySelector('.nav-collapse');

toggle.addEventListener('click', ()=>{
	collapse.classList.toggle('show')
});