angular.module('myApp', [])
.controller("indexController", function($scope){
  $scope.plz="plz";
  $scope.experience = [
    {
      name:"Penna Turnpike",
      image:"assets/img/Penna.jpg"
    },
    {
      name:"BNY Mellon",
      image:"assets/img/BNYM.jpg"
    },
    {
      name:"Penn State",
      image:"assets/img/psu.gif"
    }
  ];
});
