
var app = angular.module('firstPageModule', []);
app.controller('firstPageController', function($scope) {
    $scope.email = "",
    $scope.password = ""
    $scope.repassword = "";
    $scope.registerUser = function(){
     			debugger;
     			alert("");
        jNorthPole.BASE_URL = 'https://json.northpole.ro/';
        jsonObject = {
            "api_key": $scope.email,
            "secret": $scope.password
        }
        jNorthPole.getStorage(jsonObject, registerResponseHandler);
	}
    
    
});
registerResponseHandler = function (data) {
            alert("success");
        };