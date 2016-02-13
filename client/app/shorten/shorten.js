angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.shouldShow = false;
  $scope.createdLink = {};
  $scope.addLink = function () {
    Links.addOne($scope.link, function (data) {
      $scope.createdLink = data;
      $scope.shouldShow = true;
    });
    $scope.link.url = '';
  };
});
