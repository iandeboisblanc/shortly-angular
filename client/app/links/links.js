angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.nameContains = function (link) {
    var text = $scope.filterInput;
    var title = link.title;
    var url = link.url;
    console.log(text);
    return (title.indexOf(text) >= 0 || url.indexOf(text) >= 0 || text.length === 0);
  };
  $scope.data = {};
  Links.getAll().then(function (links) {
    $scope.data.links = links;
  });
});
