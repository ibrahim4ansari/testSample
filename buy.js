var app = angular.module("myBuyingList", []);

	app.filter('priceFilter', function() {
		return function(objects, criteria) {
			var filterResult = new Array();
			if (!criteria)
				return objects;
			for (index in objects) {
				//console.log(objects[index].price > criteria.priceMin);
				if (typeof criteria.priceMin != undefined) {
					if (objects[index].price >= criteria.priceMin) {
						filterResult.push(objects[index]);
					}
				}
				if (typeof criteria.priceMax != undefined) {
					if (objects[index].price <= criteria.priceMax) {
						filterResult.push(objects[index]);
					}
				}
				if (typeof criteria.addr != undefined) {
					var addro = objects[index].addr.toLowerCase();
					var cityo = objects[index].city.toLowerCase();
					var counto = objects[index].county.toLowerCase();
					var stateo = objects[index].state;
					var zipo = objects[index].zip;
					var crit = criteria.addr;
					if (addro.search(crit) > -1 || cityo.search(crit) > -1
							|| counto.search(crit) > -1
							|| stateo.search(crit) > -1
							|| zipo.search(crit) > -1) {
						filterResult.push(objects[index]);
					}
				}
				if (criteria.bed == "") {
					filterResult.push(objects[index]);
				} else if (criteria.bed == objects[index].bed) {
					filterResult.push(objects[index]);
				}
				if (criteria.bath == "") {
					filterResult.push(objects[index]);
				} else if (criteria.bath == objects[index].bath) {
					filterResult.push(objects[index]);
				}
			}
			console.log(filterResult);
			return filterResult;
		}
	});

	app.controller("myCtrl", function($scope) {
		$scope.myFunction = function() {

			var name = angular.element($('#criteria-location-input')).val();
			console.log(name);
			var $el = $('.' + name).fadeIn(450);
			console.log($el);
			$('.porto > div').not($el).hide();

		}
		$scope.addrs = [ {
			id : 1,
			addr : "Washington Road",
			city : "Atlanta",
			county : "Atlanta",
			state : "GA",
			zip : "1122",
			image : "pexels-photo-164516.jpeg",
			bed : "1",
			price : "100",
			bath : "1"
		}, {
			id : 2,
			addr : "Headland Drive",
			city : "Atlanta",
			county : "East Point",
			zip : "1123",
			state : "GA",
			image : "pexels-photo-164539.jpeg",
			bed : "1",
			price : "200",
			bath : "1"
		}, {
			id : 3,
			addr : "River Valley Road",
			city : "Sandy Springs",
			county : "Sandy Springs",
			zip : "1129",
			state : "GA",
			image : "pexels-photo-106399.jpeg",
			bath : "1",
			price : "160",
			bed : "2"
		}, {
			id : 4,
			addr : "Roswell St",
			city : "Marietta",
			county : "Marietta",
			zip : "1127",
			state : "GA",
			image : "pexels-photo-164522.jpeg",
			bath : "2",
			price : "100",
			bed : "2"
		}, {
			id : 5,
			addr : "Westside parkway",
			city : "Alphaertta",
			county : "Alphaertta",
			zip : "1129",
			state : "GA",
			image : "pexels-photo-164516.jpeg",
			bath : "2",
			price : "100",
			bed : "3"
		} ];

	});