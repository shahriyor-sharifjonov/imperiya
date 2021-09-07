var keys = {37: 1, 38: 1, 39: 1, 40: 1};
function preventDefault(e) {
  e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
// Header Menu
const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__menu");
let menuOpened = false;
function checkMenu(){
  if(menuOpened){
    disableScroll()
  }else{
    enableScroll()
  }
}
const menuToggle = () => {
  menuOpened = !menuOpened;
  checkMenu()
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};
headerButton.onclick = menuToggle;
window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};
if(document.querySelector('.sponsors__body')){
  $('.sponsors__body').slick({
    slidesToShow: 5,
    centerMode: false,
    variableWidth: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          infinite: true,
          centerPadding: '0px',
          centerMode: true,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          dots: true,
          // variableWidth: true,
          infinite: true,
          centerPadding: '0px',
          centerMode: true,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          dots: true,
          // variableWidth: true,
          infinite: true,
          centerPadding: '0px',
          centerMode: true,
          slidesToScroll: 1,
        }
      },
    ]
  });
}
if(document.querySelector('.catering__slider')){
  $('.catering__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 992,
        settings: {

        }
      },
    ]
  });
}
if(document.querySelector('.prods__cats')){
  $('.prods__cats').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
        }
      },
    ]
  });
}

function addActive(el){
  el.classList.toggle('active');
}