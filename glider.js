window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
      setting-name: setting-value
    })
  })

  new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 5.5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });