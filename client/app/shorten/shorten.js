angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function () {
    if ($scope.shortForm.$valid) {
      console.log('form is VALID!!');
    }
    Links.addOne($scope.link);
    $scope.link.url = '';
  };
});
