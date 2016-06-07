angular.module('ui.bootstrap.demo')
	.controller('CarouselDemoCtrl', function($scope){
		$scope.myInterval = 5000;
		$scope.noWrapSlides = false;
		$scope.active = 0;

		var slides = $scope.slides =[];
		var currIndex = 0;

		$scope.addSlide = function(){
			var newWidth = 600 + slides.length + 1;
			slides.push({
				image: 'http://lorempixel.com/' + newWidth + '/300',
				text:['Nice image','Awesome photograph', 'That is so cool','I love it'][slides.length % 4],
				id: currIndex++
			});
		};

		$scope.randomize = function(){
			var indexs = generateIndexArray();
			assignNewIndexesToSlides(indexs);
		};

		for (var i = 0; i < 4; i++) {
			$scope.addSlide();
		}

		function assignNewIndexesToSlides(indexs){
			for (var i = 0; i < slides.length; i++) {
				slides[i].id = indexs.pop();
			}
		}

		function generateIndexArray(){
			var indexes = [];
			for (var i = 0; i < currIndex; ++i) {
				indexes[i] = i;
			}
			return shuffle(indexes);
		}

		function shuffle(array){
			var tmp, current, top=array.length;

			if(top){
				while(--top){
					current = Math.floor(Math.random()*(top+1));
					tmp = array[current];
					array[current] = array[top];
					array[top] = tmp;
				}
			}

			return array;
		}
	});