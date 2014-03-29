/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap esta listo
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
       
          var punto = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                var config = {
                    zoom:16,
                    center:punto,
                    mapTypeId: google.maps.MapTypeId.ROADMAP 
                };
         
                var mapa = new google.maps.Map($('#mapa')[0],config);
                var marker = {
                    position: punto,
                    titulo:"mi ubicación",
                    map: mapa,
                    animation: google.maps.Animation.DROP,
                    draggable:false
                };
                var marcador = new google.maps.Marker(marker);
                marcador.setMap(mapa);
    }

    // La función 'callback' onError recibe un objeto `PositionError`.
    //
    function onError(error) {
        alert('código: '    + error.code    + '\n' +
              'mensaje: ' + error.message + '\n');
    }

