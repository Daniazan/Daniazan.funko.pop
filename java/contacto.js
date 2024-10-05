let options ={
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    );

}else{
    alert("Geolocalizator"); 
}



function success(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map',{
        center:[latitude, longitude],
        zoom: 16
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'My OpenStreeMap'}).addTo(map)

        let start = L.icon({
            iconUrl:'../imagenes/pin2.png',
            shadowUrl:'../imagenes/pinshad.png',
            iconSize:[30, 40],
            shadowSize:[40, 60],
            iconAnchor: [17, 44],
            shadowAnchor: [4, 62],
            popupAnchor: [-2, -45]
        })

        let finish = L.icon({
            iconUrl:'../imagenes/pin.png',
            shadowUrl:'../imagenes/pinshad.png',
            iconSize:[30, 40],
            shadowSize:[40, 60],
            iconAnchor: [17, 44],
            shadowAnchor: [4, 62],
            popupAnchor: [-2, -45]
        })

        let between = L.icon({
            iconUrl:'../imagenes/pin3.png',
            shadowUrl:'../imagenes/pinshad.png',
            iconSize:[30, 40],
            shadowSize:[40, 60],
            iconAnchor: [17, 44],
            shadowAnchor: [4, 62],
            popupAnchor: [-2, -45]
        })


    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(40.415380, -3.692465)
        ],
        language: 'es',
        createMarker:function(i, wp, nWps){
            switch(i){
                case 0:
                    return L.marker(wp.latLng,{icon:start, draggable: true}).bindPopup("Inicio de la ruta");
                case nWps-1:
                    return L.marker(wp.latLng,{icon:finish, draggable: true}).bindPopup("Final de la ruta");
                default:
                    return L.marker(wp.latLng,{icon:between, draggable: true}).bindPopup("Parada");
            }
        }

    }).addTo(map);
}

function error(){
    let map = L.map('map',{
        center:[40.415380, -3.692465],
        zoom: 10
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'My OpenStreeMap'}).addTo(map)
}
