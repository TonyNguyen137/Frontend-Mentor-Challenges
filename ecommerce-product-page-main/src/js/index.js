import { $, $$ } from './helpers';
import icon from 'url:/src/assets/images/icon-delete.svg';
import image from 'url:/src/assets/images/image-product-1-thumbnail.jpg';

//nav
const menuBtn = $('.nav__menu-btn');

menuBtn.addEventListener('click', function () {
  const isOpen =
    menuBtn.getAttribute('aria-expanded') === 'false' ? true : false;
  const overlay = $('.overlay');
  this.setAttribute('aria-expanded', isOpen);
  overlay.classList.toggle('active');
  console.log(this);
});

//number of articles
const numberBtns = $$('.number-btn');
let articleNumEl = $('.product__number');
let articleNum = Number.parseInt(articleNumEl.textContent);
const MIN = 0;

numberBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    if (this.dataset.btn === 'decrease') {
      if (articleNum > MIN) {
        articleNum--;
        articleNumEl.textContent = articleNum;
      }
    } else {
      articleNum++;
      articleNumEl.textContent = articleNum;
    }
  });
});

//slider
const wrapper = $('.slider__wrapper');
const imgWidth = $('.slider__img').offsetWidth;
const imgArray = $$('.slider__img');

let currentX = 0;
const MAX_X = -(imgArray.length - 1) * imgWidth;

const sliderBtns = $$('.slider-btn-js');

sliderBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    if (this.dataset.sliderbtn === 'prev') {
      console.log(currentX);
      currentX = currentX != 0 ? currentX + imgWidth : 0;

      wrapper.style.transform = `translate(${currentX}px)`;
    } else {
      console.log('max: ', MAX_X);

      currentX = currentX != MAX_X ? currentX - imgWidth : currentX;
      console.log('after_', currentX);

      wrapper.style.transform = `translate(${currentX}px)`;
    }
  });
});

//show cart panel

const cartBtn = $('.cart__button');
const cartPanel = $('.cart-panel');

cartBtn.addEventListener('click', () => {
  const cartPanel = $('.cart-panel');
  cartPanel.classList.toggle('show');
});

//add item to cart
const addItemBtn = $('.product__add-to-cart');

addItemBtn.addEventListener('click', () => {
  const itemNumber = Number.parseInt($('.product__number').textContent);
  if (itemNumber === 0) return;
  const itemPrice = itemNumber * 125;
  const cartContainer = $('.cart-panel__body');
  const cartMessage = $('.cart-panel__message');
  const checkOutBtn = $('.checkout-btn');
  const cartItemCount = $('.cart__count');

  cartItemCount.textContent = itemNumber;
  console.log(itemNumber);

  const itemHTML = `
      <article class="cart-panel__item">
    <img
      class="cart-panel__img"
      src="${image}"
      alt="product img"
    />
    <div class="cart-panel__item-information">
      <span class="cart-panel__item-name"
        >Fall Limited Edition Sneakers</span
      >
      <p class="group">
        <span class="cart-panel__item-multiplication">$125.00 x ${itemNumber}</span>
        <span class="cart-panel__item-total-price">$${itemPrice.toFixed(
          2
        )}</span>
      </p>
    </div>
    <button class="delete-btn">
      <img
        src="${icon}";
        aria-hidden="true"
      />
    </button>
  </article>
  `;
  cartItemCount.classList.add('has-item');
  cartContainer.removeChild(cartMessage);
  cartContainer.insertAdjacentHTML('afterbegin', itemHTML);
  checkOutBtn.classList.add('show');
  const deleteBtn = $('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    $('.cart-panel__item').remove();
    checkOutBtn.classList.remove('show');
    cartItemCount.classList.remove('has-item');

    cartContainer.appendChild(cartMessage);
  });
});

if (window.innerWidth >= 1440) {
  const container = $('.slider__wrapper');
  const images = $$('.slider__img');
  images[0].classList.add('active');
  const clone = images[0].cloneNode(true);
  clone.classList.remove('active');
  clone.sizes = '(min-width:1440px) 1000w';

  container.prepend(clone);

  images.forEach((img) => {
    img.addEventListener('click', function () {
      const parent = img.closest('div');
      parent.querySelector('.active').classList.remove('active');
      img.classList.add('active');
      const clone = img.cloneNode(true);
      clone.classList.remove('active');
      clone.sizes = '(min-width:1440px) 1000w';
      container.removeChild(container.firstChild);
      container.prepend(clone);
    });
  });
}
