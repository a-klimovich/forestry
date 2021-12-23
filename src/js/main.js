(function () {
  // NAVIGATION MENU 
  const headerMenuListItems = document.querySelectorAll("nav .navbar li")
  const mobileMenuBtn = document.querySelector('#mobileNavMenuBtn')
  const navBar = document.querySelector("nav > .navbar")

  headerMenuListItems.forEach(item => {
    const NavItem = item.querySelector('.dropdown-list')
    const NavBtn = item.querySelector('.dropbtn')

    item.addEventListener('click', () => {
      const DropList = document.querySelectorAll('.navbar .dropdown-list.active')
      const DropBtn = document.querySelectorAll('.navbar .dropbtn.active')

      if (DropList.length > 0 && DropBtn.length > 0) {
        DropList.forEach(i => {
          i.classList.toggle('active')
        })
        DropBtn.forEach(i => {
          i.classList.toggle('active')
        })
      }
      
      if (NavItem !== null) {
        NavItem.classList.toggle('active')
        NavBtn.classList.toggle('active')
      }
    })
  })

  window.addEventListener('click', e => {
    const target = e.target
    const menuDropdownList = document.querySelectorAll('.dropdown-list')
    if (!target.closest('nav') && !target.closest('.dropdown-list')) {
      menuDropdownList.forEach(i => i.classList.remove('active'))
      document.querySelector('.navbar button.dropbtn.active').removeClass('active')
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
  if (document.querySelector('#map')) {
    ymaps.ready(init);
      function init(){
        let myMap = new ymaps.Map("map", {
          center: [52.227608372181884, 24.358953455256273],
          zoom: 10,
      });
    }
  }
  // MAP INIT END

  // GALERY
  baguetteBox.run('.baguetteBoxGalery');

  baguetteBox.run('.baguetteBoxSoloItem', {
    captions: function(element) {
        return element.getElementsByTagName('img')[0].alt;
    }
  });
  // GALERY END
})()