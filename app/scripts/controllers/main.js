'use strict';

angular.module('angularMapDemoApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
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
      $http.jsonp('http://perlocmain.heroku.com/locate.js?callback=JSON_CALLBACK').
        success(function(data){
          $scope.markers = extractMarkersFromPeople(data.people);
        })
    };

    var updateWithTimeout = function(){
      $timeout(function(){
        $scope.updateMarkers();
        updateWithTimeout();
      }, 5000);
    };

    updateWithTimeout();

    var extractMarkersFromPeople = function(people){
      return people.map(function(p){
        return new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(p.lat, p.long)
        });
      });
    };
  });
