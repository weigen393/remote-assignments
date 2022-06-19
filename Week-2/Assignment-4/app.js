const msgBlock = document.querySelector('h1');
const btn = document.querySelector('.action');
const invContainer = document.querySelectorAll('#inv');
msgBlock.addEventListener('click', () => {
	msgBlock.textContent = 'Have a Good Time!';
});
btn.addEventListener('click', () => {
	invContainer[0].style.display = 'flex';
	invContainer[1].style.display = 'flex';
});