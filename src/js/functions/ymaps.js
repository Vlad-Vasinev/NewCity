

// initMap();

async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls, YMapMarker} = ymaps3;

    const mapEl = document.querySelector('.js-ymap')

    if(mapEl) {
      const map = new YMap(
        mapEl,
          {
            location: {
              center: [mapEl.dataset.longitude, mapEl.dataset.latitude],
              zoom: 16
            },
          },
          [
            new YMapDefaultFeaturesLayer({})
          ]
      );
  
      const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1')
      const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
      marker = new YMapDefaultMarker(
        {
          coordinates: [mapEl.dataset.longitude, mapEl.dataset.latitude], 
        }
      )
  
      map.setBehaviors(['drag', 'dblClick'])
      map.addChild(
        new YMapControls({position: 'right'})
          .addChild(new YMapZoomControl({}))
      );
  
      map.addChild(marker)
      map.addChild(new YMapDefaultSchemeLayer({}));
    }

    //second map 
    const mapElSecond = document.querySelector('.js-ymap-second')

    if(mapElSecond) {

      let zoomMap = 16
      if(isMobile()) {
        zoomMap = 15
      }

      const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

      const mapSecond = new YMap(
        mapElSecond,
          {
            location: {
              center: [mapElSecond.dataset.longitude, mapElSecond.dataset.latitude],
              zoom: zoomMap
            },
          },
          [
            new YMapDefaultFeaturesLayer({})
          ]
      );
  
      var markerEl1 = document.createElement('img')
      markerEl1.src = mapElSecond.dataset.iconMain
      markerEl1.className = 'icon-marker icon-marker-main'
  
      var markerEl2 = document.createElement('img')
      markerEl2.src = mapElSecond.dataset.iconCircle
      markerEl2.className = 'icon-marker icon-marker-circle'
      console.log(mapElSecond.dataset.iconCircle)
  
      let arrImages = []

      fetch('/api/map-images.json')
        .then((res) => {
          return res.json()
        })
        .then((result) => {
          result.forEach((el, index) => {
            let markerEl = document.createElement('img')
            markerEl.src = el.iconSrc
            markerEl.className = 'icon-marker'
            markerEl.setAttribute('data-icon-role', el.role);
      
          markerContact = new YMapMarker(
            {
              coordinates: [el.coordLongitude, el.coordLatitude], 
            },
            markerEl)
          mapSecond.addChild(markerContact)
          })
        })
  
      markerContact = new YMapMarker(
        {
          coordinates: ["36.57061787671144", "55.12903613960643"], 
        },
        markerEl1)
      markerContact2 = new YMapMarker(
        {
          coordinates: ["36.57061787671144", "55.12903613960643"], 
        },
        markerEl2)
  
      mapSecond.setBehaviors(['drag', 'dblClick'])
      mapSecond.addChild(
        new YMapControls({position: 'right'})
          .addChild(new YMapZoomControl({}))
      );  
  
      mapSecond.addChild(markerContact)
      mapSecond.addChild(markerContact2)
      mapSecond.addChild(new YMapDefaultSchemeLayer({}));
  
      YMapLocationRequest = {
        center: [37.623082, 55.75254], // starting position [lng, lat]
        zoom: 5 // starting zoom
      };
    }

    //mapElLf map 
    const mapElLf = document.querySelector('.js-ymap-lf')

    if(mapElLf) {

      let zoomMap = 16
      if(isMobile()) {
        zoomMap = 15
      }

      const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

      const mapElLffFirst = new YMap(
        mapElLf,
          {
            location: {
              center: [mapElLf.dataset.longitude, mapElLf.dataset.latitude],
              zoom: zoomMap
            },
          },
          [
            new YMapDefaultFeaturesLayer({})
          ]
      );
  
      mapElLffFirst.setBehaviors(['drag', 'dblClick'])
      mapElLffFirst.addChild(
        new YMapControls({position: 'right'})
          .addChild(new YMapZoomControl({}))
      );  
  
      mapElLffFirst.addChild(new YMapDefaultSchemeLayer({}));
  
      YMapLocationRequest = {
        center: [37.623082, 55.75254], // starting position [lng, lat]
        zoom: 5 // starting zoom
      };
    }

      //mapElLf-colorful map 
      const mapElLfColorful = document.querySelector('.js-ymap-lf-colorful')
      // let loadedElLfColorful = false

      // function isElementInViewport(el) {
      //   const rect = el.getBoundingClientRect();
      //   return (
      //       rect.top >= 0 &&
      //       rect.left >= 0 &&
      //       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      //   );
      // }
      // const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
      
      // function loadMap() {
      //   if (!loadedElLfColorful) {
      //     if(mapElLfColorful) {
  
      //       let zoomMap = 16
      //       if(isMobile()) {
      //         zoomMap = 15
      //       }
      
      //       // const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
      
      //       const mapElLfColor = new YMap(
      //         mapElLfColorful,
      //           {
      //             location: {
      //               center: [mapElLfColorful.dataset.longitude, mapElLfColorful.dataset.latitude],
      //               zoom: zoomMap
      //             },
      //           },
      //           [
      //             new YMapDefaultFeaturesLayer({})
      //           ]
      //       );
        
      //       var markerElColorful = document.createElement('img')
      //       markerElColorful.src = mapElLfColorful.dataset.iconSrc
      //       markerElColorful.className = 'icon-marker-colorful'
    
      //       markerColor = new YMapMarker(
      //         {
      //           coordinates: ["36.57061787671144", "55.12903613960643"], 
      //         },
      //       markerElColorful)
    
      //       const url = mapElLfColorful.dataset.action;
    
      //       fetch(url)
      //       .then((res) => {
      //         return res.json()
      //       })
      //       .then((result) => {
      //           const layer = new YMapDefaultSchemeLayer({
      //               customization: result
      //           });
      //           mapElLfColor.addChild(layer)
      //       })
    
      //       mapElLfColor.setBehaviors(['drag', 'dblClick'])
      //       mapElLfColor.addChild(
      //         new YMapControls({position: 'right'})
      //           .addChild(new YMapZoomControl({}))
      //       );  
        
      //       mapElLfColor.addChild(markerColor)
      //       mapElLfColor.addChild(new YMapDefaultSchemeLayer({}))
      //     }
      //     document.querySelector('.js-ymap-lf-colorful').style.display = 'block'
      //   }
      // }

      // window.addEventListener('scroll', function() {
      //   if (isElementInViewport(document.querySelector('.js-ymap-lf-colorful'))) {
      //     loadMap();
      //     window.removeEventListener('scroll', arguments.callee); // Удаляем обработчик после загрузки карты
      //   }
      // });

      // // Также проверяем, если карта уже видна при загрузке страницы
      // window.addEventListener('load', function() {
      //     if (isElementInViewport(document.querySelector('.js-ymap-lf-colorful'))) {
      //       loadMap();
      //     }
      // });

      if(mapElLfColorful) {
  
        let zoomMap = 16
        if(isMobile()) {
          zoomMap = 15
        }
  
        const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
  
        const mapElLfColor = new YMap(
          mapElLfColorful,
            {
              location: {
                center: [mapElLfColorful.dataset.longitude, mapElLfColorful.dataset.latitude],
                zoom: zoomMap
              },
            },
            [
              new YMapDefaultFeaturesLayer({})
            ]
        );
    
        var markerElColorful = document.createElement('img')
        markerElColorful.src = mapElLfColorful.dataset.iconSrc
        markerElColorful.className = 'icon-marker-colorful'

        markerColor = new YMapMarker(
          {
            coordinates: ["36.57061787671144", "55.12903613960643"], 
          },
        markerElColorful)

        const url = mapElLfColorful.dataset.action;

        fetch(url)
        .then((res) => {
          return res.json()
        })
        .then((result) => {
            const layer = new YMapDefaultSchemeLayer({
                customization: result
            });
            mapElLfColor.addChild(layer)
        })

        mapElLfColor.setBehaviors(['drag', 'dblClick'])
        mapElLfColor.addChild(
          new YMapControls({position: 'right'})
            .addChild(new YMapZoomControl({}))
        );  
    
        mapElLfColor.addChild(markerColor)
        mapElLfColor.addChild(new YMapDefaultSchemeLayer({}))
      }
}

async function fetchScript() {
  console.log('inside fetchFunc')
  return loadMapScript()
    .then(() => {

    })
}

function loadMapScript() {
  console.log('inside loadMapScript')
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/v3/?apikey=80d825c5-161d-4e34-93fd-4458214443eb&lang=ru_RU';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function setMap() {
  if(document.querySelector('.js-ymap') || document.querySelector('.js-ymap-lf') || document.querySelector('.js-ymap-second') || document.querySelector('.js-ymap-lf-colorful')) {
    fetchScript().then((res) => {
      if (res === 'error') return;
      initMap();
    })
  }
}

setMap()