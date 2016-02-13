angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.nameContains = function (link) {
    var text = $scope.filterInput;
    var title = link.title;
    var url = link.url;
    console.log(text);
    return true;
  };
  $scope.data = {};
  Links.getAll().then(function (links) {
    $scope.data.links = links;
  });
});
