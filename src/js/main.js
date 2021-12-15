(function () {
  document.querySelectorAll("nav.navbar li").forEach(item => {
    item.onmouseover = item.onmouseout = handler;

    function handler(event) {
      if (event.type == 'mouseover') {
        item.querySelector('.dropdown-list') !== null 
        ? item.querySelector('.dropdown-list').style.display = 'block'
        : false
      }

      if (event.type == 'mouseout') {
        item.querySelector('.dropdown-list') !== null 
        ? item.querySelector('.dropdown-list').style.display = 'none'
        : false
      }
    }
  })
})()