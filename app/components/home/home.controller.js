angular.module('myApp', [])
.controller("indexController", function($scope){
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

  $scope.bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc felis, aliquam et posuere quis, ullamcorper ac metus. Fusce magna diam, lacinia vitae ipsum a, porta vehicula felis. Vivamus tincidunt elit erat, id aliquam dolor pretium a. Curabitur lacinia semper laoreet. Aenean tristique neque ac lorem gravida gravida. Nulla sed diam nec velit faucibus eleifend at et mauris. Ut est magna, imperdiet ut leo a, viverra luctus risus. Cras non condimentum sapien, ac mattis neque. Vivamus non molestie sem, sed tempus nunc. Ut ornare purus ut ex auctor, nec consectetur tellus congue. Suspendisse potenti. Nullam id orci lacus. Vivamus fringilla laoreet facilisis. Nam commodo mauris sit amet felis ultrices sodales. Cras convallis auctor nisi, ac tincidunt enim. Nam tempor, lacus id tincidunt consectetur, magna dui accumsan nunc, vitae rhoncus purus odio ut lacus. Maecenas at laoreet lacus. Cras id fermentum dui. Duis malesuada cursus arcu nec vestibulum. Duis in nisl mollis, semper leo quis, consequat metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum in diam sit amet metus aliquam sagittis laoreet ac libero.";

  $scope.isClickedPenna = false;
  $scope.isClickedBNY = false;
  $scope.isClickedPSU = false;
});
