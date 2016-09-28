angular.module('myApp', [])
.controller("indexController", function($scope, $location, $anchorScroll){
  $scope.plz="plz";
  $scope.experience = [
    {
      name:"Penna Turnpike",
      image:"app/assets/img/Penna.jpg"
    },
    {
      name:"BNY Mellon",
      image:"app/assets/img/BNYM.jpg"
    },
    {
      name:"Penn State",
      image:"app/assets/img/psu.gif"
    }
  ];

  $scope.bio = "I am originally from Central Pennsylvania where I attended Cedar Crest High School. I currently attend The Pennsylvania State University in State College, PA. I am studying Computer Science and am expected to graduate in May 2018. During high school I was an active member of scouting. I received the rank of Eagle Scout and spent time at Florida Sea Base and Philmont Scout Ranch. The summer after my freshman year of college,I worked for the Pennsylvania Turnpike Commission for two years. I recently finished up an internship with BNY Mellon in Client Technology Services. Click the images below to learn more about my past experiences.";

  $scope.isClickedPenna = false;
  $scope.isClickedBNY = false;
  $scope.isClickedPSU = false;

  $scope.showPenna = function(){
    $scope.isClickedPenna = !$scope.isClickedPenna;
    $scope.isClickedBNY = false;
    $scope.isClickedPSU = false;
  }
  $scope.showBNY = function(){
    $scope.isClickedPenna = false;
    $scope.isClickedBNY = !$scope.isClickedBNY;
    $scope.isClickedPSU = false;
  }
  $scope.showPSU = function(){
    $scope.isClickedPenna = false;
    $scope.isClickedBNY = false;
    $scope.isClickedPSU = !$scope.isClickedPSU;
  }
  $scope.gotoAnchor = function() {
    $location.hash('anchor');
    $anchorScroll();
  };
});
