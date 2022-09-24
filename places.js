window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           name: 'conejo',
           location: {
               lat: 7.7681343,
               lng: -72.2321226,
           }
       },

       
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `simulateLatitude: 7.7681343; simulateLongitude: -72.2321226;`);
       model.setAttribute('gltf-model', 'assets/conejo.gltf');
       model.setAttribute('rotation', '0 270 0');
       model.setAttribute("position", "9 0.1 0");
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '.3 .3 .3');
       

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}