angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function () {
    //check if a mothafucka is valid and display that shit
    if($scope.shortForm.$valid) {
      console.log('form is VALID!!');
    }
    Links.addOne($scope.link);
    $scope.link.url = '';
  };
});
