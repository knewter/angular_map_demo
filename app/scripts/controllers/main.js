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
    $scope.addMarker = function(){
      $scope.markers.push(new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(35, 35)
      }));
    };
    $scope.updateMarkers = function(){
      var returned = {
        people: [
          {
            name: null,
            imei: "351746052214411",
            lat: "36.1612292099744",
            long: "-86.7808193620294"
          },
          {
            name: null,
            imei: "353918051258594",
            lat: "33.47503485",
            long: "-86.82233522"
          }
        ]
      }
      $scope.markers = extractMarkersFromPeople(returned.people);
    };

    var extractMarkersFromPeople = function(people){
      return people.map(function(p){
        return new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(p.lat, p.long)
        });
      });
    };
  });
