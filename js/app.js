let btn = document.querySelector('#addbtn');
let txt = document.querySelector('.text');


btn.addEventListener('click', function() {
  txt.innerText = 'javascript';
});

var vm = new Vue({
	el: '#app',
	data: {
		msg: 'hello!'
	}
})