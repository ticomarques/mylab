app.controller('MainController', function($scope, $http) {

    $http.get("http://proud.debugninja.com/api/get_recent_posts/")
    .then(function(response) {
        $scope.seriados = response.data.posts;
        console.log($scope.seriados);
    }, function(response) {
        console.log("Erro ao obter os dados!");
    });
  
});