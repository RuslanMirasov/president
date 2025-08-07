ymaps.ready(init);

function init() {
  const zoom = window.innerWidth <= 767 ? 11 : 12;

  const map = new ymaps.Map('map', {
    center: [54.989347, 73.368221],
    zoom,
    controls: ['zoomControl'],
  });

  const addressElements = document.querySelectorAll('[data-adress]');
  const placemarks = [];

  addressElements.forEach(el => {
    const lat = el.dataset.lat;
    const lng = el.dataset.lng;

    if (lat && lng) {
      const coords = [parseFloat(lat), parseFloat(lng)];

      const placemark = new ymaps.Placemark(
        coords,
        {
          balloonContent: el.textContent.trim(),
        },
        {
          iconLayout: 'default#image',
          iconImageHref: '../assets/img/svg/pin.svg',
          iconImageSize: [30, 40],
          iconImageOffset: [-15, -40],
        }
      );

      map.geoObjects.add(placemark);
      placemarks.push({ el, placemark });

      el.addEventListener('click', () => {
        map.setCenter(coords, 16, { duration: 0 });
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // плавный скролл
        });
      });
    }
  });
}
