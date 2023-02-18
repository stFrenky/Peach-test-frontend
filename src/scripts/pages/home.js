import '/src/styles/pages/home.scss';

const businessItem = document.querySelector('.business-lines__item');
const businessTextBox = document.querySelector('.business-lines__text-box');
const businessText = document.querySelector('.business-lines__text');
const businessArrow = document.querySelector('.business-lines__arrow');

function toggleClass(btn, item) {
	btn.addEventListener('click', () => {
		item.classList.toggle('active');
	})
}

toggleClass(businessArrow, businessArrow)
toggleClass(businessArrow, businessTextBox)
toggleClass(businessArrow, businessText)
toggleClass(businessArrow, businessItem)