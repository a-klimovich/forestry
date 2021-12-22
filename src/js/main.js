(function () {
  const headerMenuListItems = document.querySelectorAll("nav .navbar li")
  const mobileMenuBtn = document.querySelector('#mobileNavMenuBtn')
  const navBar = document.querySelector("nav > .navbar")
  // NAVIGATION MENU 
  headerMenuListItems.forEach(item => {
    const NavItem = item.querySelector('.dropdown-list')
    item.addEventListener('click', () => {
      NavItem !== null
      ? NavItem.classList.toggle('active')
      : false
    })
  })

  window.addEventListener('click', e => {
    const target = e.target
    const menuDropdownList = document.querySelectorAll('.dropdown-list')
    if (!target.closest('nav') && !target.closest('.dropbtn')) {
      menuDropdownList.forEach(i => i.classList.remove('active'))
      mobileMenuBtn.classList.remove('active')
      navBar.classList.remove('active')
    }
  })

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active')
    navBar.classList.toggle('active')
  })
  // NAVIGATION MENU END

  // MAP INIT
  if ($('#map').length) {
    ymaps.ready(init);
      function init(){
        let myMap = new ymaps.Map("map", {
          center: [52.227608372181884, 24.358953455256273],
          zoom: 10,
      });
    }
  } else {
    console.log('Something wrong "YandexMap"');
  }
  // MAP INIT END

  // SLIDER
  $(document).ready(function(){
    const $overlay = $(`<div class="overlay"><div>`)
    const $sliderCloser = $('#close-button')
    const $sliderMain = $('.galery-slider')
    const $tourismGalery = document.querySelectorAll('.tourism-and-rest-page__galery .galery-iamge')
    const $animalGalery = document.querySelectorAll('.animal-item-page__galery .galery-iamge')
    const $newsItemGalery = document.querySelectorAll('.news-item-page__galery .galery-image')
    
    let arr = [$tourismGalery, $animalGalery, $newsItemGalery]
    let arrGalleryImage = []

    arr.map((item) => {
      return item.length > 0 ? arrGalleryImage.push(...item) : []
    })
    
    let isShownSlider = false

    $sliderMain.slick({
      slidesToShow: 1,
      variableWidth: true,
      centerMode: true,
      adaptiveHeight: true,
      prevArrow: `<button type="button" id="previous-button" aria-label="Previous" class="baguetteBox-button"><svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4" stroke-linecap="butt" fill="none" stroke-linejoin="round"></polyline></svg></button>`,
      nextArrow: `<button type="button" id="next-button" aria-label="Next" class="baguetteBox-button"><svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4" stroke-linecap="butt" fill="none" stroke-linejoin="round"></polyline></svg></button>`,
    })

    arrGalleryImage.forEach((item, idx) => {
      item.addEventListener('click', () => {
        isShownSlider = !isShownSlider

        SliderShown(isShownSlider, idx)
      })
    })

    function SliderShown (isShown, currentSlide) {
      if (isShown === true ) {
        $overlay.appendTo(document.body);
        $('body').css('overflow-y', 'hidden')
        $sliderCloser.css("display", "block")
        $sliderMain.css("display", "block")
        $sliderMain.slick('slickGoTo', currentSlide);
      } else {
        $overlay.remove()
        $('body').css('overflow-y', 'auto')
        $sliderCloser.css("display", "none")
        $sliderMain.css("display", "none")
      }
    }

    $sliderCloser.on('click', () => {
      SliderShown(isShownSlider = false)
    })
  });
  // SLIDER END
})()