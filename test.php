<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="./MyStyles.css">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
</head>
<body ng-app="myHouseList" ng-controller="myCtrl">
<header> <?php include_once 'head.html';?></header>
<div class="col-md-3 img-portfolio" ng-repeat="x in props | limitTo:4 "> 
				<a href="under.html"> <img
					class="img-responsive img-hover" style="min-height:200px;" src="./images/{{  x.img }}.jpeg "
					alt="">
				</a>
				<h3>{{x.addr}}
				
				</h3>
				<p>{{x.price}} </p>
				
			</div>
<!-- <div class= "col-md-5"> -->
<!-- <ul> -->
<!--   <li ng-repeat="x in props "> -->
<!--     {{ x.img}} -->
<!--   </li> -->
<!-- </ul> -->
<!-- </div> -->
<script >
var myapp = angular.module("myHouseList",[]);
myapp.controller("myCtrl",function($scope,$http){
	$http.get("connect.php").then(function(response){
		console.log(response.data);
		 $scope.props=response.data;
		 
		 console.log($scope.props);
	})
});
</script>
</body>
</html>

