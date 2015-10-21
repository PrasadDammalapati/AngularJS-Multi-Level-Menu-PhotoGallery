var myApp = angular.module("myApp", ["ngRoute", 'photogallery']);
myApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
    .when("/", { templateUrl: 'views/mygallery.html', controller: 'myCtrl' })
    .otherwise('/');
}]);

myApp.controller("myCtrl", function ($scope, $document) {
    $scope.images = [
      { thumb: 'images/thumbs/1.jpg', img: 'images/1.jpg', description: 'Beautiful Houses' },
          { thumb: 'images/thumbs/2.jpg', img: 'images/2.jpg', description: 'Bed' },
          { thumb: 'images/thumbs/3.jpg', img: 'images/3.jpg', description: 'Nature' },
          { thumb: 'images/thumbs/4.jpg', img: 'images/4.jpg', description: 'Traditional Hall' },
          { thumb: 'images/thumbs/5.jpg', img: 'images/5.jpg', description: 'New Model Bed' },
          { thumb: 'images/thumbs/6.jpg', img: 'images/6.jpg', description: 'Way of life' }
    ];
});