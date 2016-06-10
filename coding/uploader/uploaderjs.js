angular.module('demo', ['ui.uploader'])
	.controller('uploaderCtrl', ['$scope', '$log', 'uiUploader', function($scope, $log, uiUploader){

		$scope.btn_remove = function(file){
			$log.info('deleting=' + file);
			uiUploader.removeFile(file);
		};

		$scope.btn_clean = function(){
			uiUploader.removeFile();
		};

		$scope.btn_upload = function(){
			$log.info('uploading...');
			uiUploader.startUpload({
				url: 'demo.html',
				concurrency: 2,
				onProgress: function(file){
					$log.info(file.name + '=' + file.humanSize);
					$scope.$apply();
				},
				onCompleted: function(file, response){
					$log.info(file + 'response' + response);
				}
			});
		};

		$scope.files = [];
		var element = document.getElementById('file1');
		element.addEventListener('change', function(e){
			var files = e.target.files;
			uiUploader.addFiles(files);
			$scope.files = uiUploader.getFiles();
			$scope.$apply();
		});

	}]);