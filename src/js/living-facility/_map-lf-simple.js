

// initMap();

// async function initMap() {
//     await ymaps3.ready;

//     const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls, YMapMarker} = ymaps3;

//     const mapEl = document.querySelector('.js-ymap-lf')

//     if(mapEl) {
//       const map = new YMap(
//         mapEl,
//           {
//             location: {
//               center: [mapEl.dataset.longitude, mapEl.dataset.latitude],
//               zoom: 16
//             },
//           },
//           [
//             new YMapDefaultFeaturesLayer({})
//           ]
//       );
  
//       const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1')
//       const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
//       marker = new YMapDefaultMarker(
//         {
//           coordinates: [mapEl.dataset.longitude, mapEl.dataset.latitude], 
//         }
//       )
  
//       map.setBehaviors(['drag', 'dblClick'])
//       map.addChild(
//         new YMapControls({position: 'right'})
//           .addChild(new YMapZoomControl({}))
//       );
  
//       map.addChild(marker)
//       map.addChild(new YMapDefaultSchemeLayer({}));
//     }
//   }