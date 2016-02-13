angular.module('shortly.shorten', ['shortly.services'])
.controller('ShortenController', function ($scope, $location, Links, Auth) {
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
  $scope.signout = Auth.signout;
});
