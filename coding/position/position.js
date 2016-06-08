angular.module('ui.bootstrap.demo')
	.controller('PositionDemoCtrl', ['$scope', '$window', '$uibPosition', function($scope, $window, $uibPosition){
		$scope.elemVals = {};
		$scope.parentScrollable = true;
		$scope.parentRelative = true;

		$scope.getValues = function(){
			var divE1 = $window.document.querySelector('#posdemodiv');
			var btnE1 = $window.document.querySelector('#posdemobtn');

			var offsetParent = $uibPosition.offsetParent(divE1);
			$scope.elemVals.offsetParent = 'type: ' + offsetParent.tagName + ', id: ' + offsetParent.id;

			var scrollParent = $uibPosition.scrollParent(divE1);
			$scope.elemVals.scrollParent = 'type: ' + scrollParent.tagName + ', id: ' + scrollParent.id;

			$scope.scrollbarWidth = $uibPosition.scrollbarWidth();

			$scope.elemVals.position = $uibPosition.position(divE1);

			$scope.elemVals.offset   = $uibPosition.offset(divE1);

			$scope.elemVals.viewportOffset = $uibPosition.viewportOffset(divE1);

			$scope.elemVals.positionElements = $uibPosition.positionElements(btnE1, divE1, 'auto bottom-left');
		};
	}]);