import Slider from './slider';

export default class MainSlider extends Slider{
  constructor(btns){
    super(btns);
    this.prevModule = document.querySelectorAll('.prevmodule');
    this.nextModule = document.querySelectorAll('.nextmodule');
  }

  toggleButtons(btn, n) {
    btn.forEach(btnItem => {
      btnItem.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(n);
       });
     });
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    try {
      this.hanson.style.opacity = "0";
      if (n === 3) {
        this.hanson.classList.add("animated");
        setTimeout(() => {
          this.hanson.style.opacity = "1";
          this.hanson.classList.add('slideInUp');
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp');
      }
    }
    catch (e) { }

    this.slides.forEach(slide => {
      slide.style.display = "none";
    });
    this.slides[this.slideIndex - 1].style.display = "block";
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  bindTriggers() {
    //меням слайд нажатием на кнопку
    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });
//переходим к первому слайду нажатием на логотип
      item.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.toggleButtons(this.prevModule, -1);
    this.toggleButtons(this.nextModule, 1);
  }

  render() {
    if(this.container) {
      try {
        this.hanson = document.querySelector('.hanson');
      } catch (e) { }

      this.showSlides(this.slideIndex);
      this.bindTriggers();
   }
  }
}