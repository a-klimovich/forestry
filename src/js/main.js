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
  ymaps.ready(init);
    function init(){
      let myMap = new ymaps.Map("map", {
        center: [52.227608372181884, 24.358953455256273],
        zoom: 10,
    });
  }
  // MAP INIT END
})()