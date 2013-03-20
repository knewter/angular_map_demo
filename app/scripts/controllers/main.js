'use strict';

angular.module('angularMapDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.markers = [
    ];
    $scope.mapOptions = {
      center: new google.maps.LatLng(35.784, -78.670),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.addMarker = function($event){
      $scope.markers.push(new google.maps.Marker({
        map: $scope.map,
        positon: $event.latlng
      }));
    };
  });
