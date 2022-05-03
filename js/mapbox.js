(function(){
    "use strict";
    mapboxgl.accessToken = MAPBOX_KEY;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5387208, 40.6971812], // starting position [lng, lat]    //  San Antonio
        zoom: 7 // starting zoom
    });

    var statueOfLiberty = new mapboxgl.Marker({color: "green"})
        .setLngLat([-74.0466837, 40.6892534])
        .setDraggable(true)
        .addTo(map);

    var popup = new mapboxgl.Popup()
        .setLngLat(statueOfLiberty.getLngLat())
        .setHTML('<h3 style="color: darkblue">Statue of Liberty</h3>')
        .addTo(map);

    statueOfLiberty.on('dragend', function(){
        // $.querySelector('#newCoordinates').append(statueOfLiberty.getLngLat());
        $('#newCoordinates').append(statueOfLiberty.getLngLat());
    })
})();