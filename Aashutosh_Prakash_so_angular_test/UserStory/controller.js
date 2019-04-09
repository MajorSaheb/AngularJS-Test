var myapp = angular.module('myapp', []);

myapp.controller('MainCtrl', function ($scope, findNumber) {
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
        $scope.textFile = null;
    };
    $scope.fnConvert = function(){
        //console.log($scope.content.length);
        $scope.finalData = '';
		
        var a = 0;
        for (i=85; i<=$scope.content.length; i+=85){
			$scope.newData = '';
            $scope.lineData = $scope.content.slice(a,i);
            var firstLineIndex = 0;
            var secondLineIndex = 28;
            var thirdLineIndex = 56;
            for(j=3; j<=27; j+=3){
                $scope.digit = $scope.lineData.slice(firstLineIndex,firstLineIndex+=3);
                $scope.digit = $scope.digit + $scope.lineData.slice(secondLineIndex,secondLineIndex+=3);
                $scope.digit = $scope.digit + $scope.lineData.slice(thirdLineIndex,thirdLineIndex+=3);
                $scope.newData = $scope.newData + findNumber.numberValue($scope.digit);
                //console.log($scope.finalData);
            }
			
			if($scope.newData.indexOf('?') != -1){
				$scope.finalData = $scope.finalData + $scope.newData + ' Illegal' + '\n';
			}
			else {
            $scope.finalData = $scope.finalData + $scope.newData+ '\n';}
            //console.log($scope.lineData);
            //console.log($scope.lineData.length);
            var a = i;
        }
        $scope.fnDownloadURL();
    }
    $scope.fnDownloadURL = function(){
        $scope.downloadBtn = false;
        $scope.blob = new Blob([$scope.finalData], {
            type: "text/plain;charset=utf-8"
        });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) { //for IE browser
           $scope.textFile = window.navigator.msSaveOrOpenBlob($scope.blob, 'output_user_story_1.txt');
        }
        else {
            if ($scope.textFile !== null) {
                window.URL.revokeObjectURL($scope.textFile);
            }
            $scope.downloadBtn = true;
            $scope.textFile = window.URL.createObjectURL($scope.blob);
            console.log($scope.textFile);
        }
    }
  });

myapp.factory('findNumber',function(){
    return {
        numberValue: function(data) {
            switch(true) {
                case (" _ | ||_|" === data):
                  value = '0';
                  break;
                case ("     |  |" === data):
                  value = '1';
                  break;
                case (" _  _||_ " === data):
                  value = '2';
                  break;
                case (" _  _| _|" === data):
                  value = '3';
                  break;
                case ("   |_|  |" === data):
                  value = '4';
                  break;
                case (" _ |_  _|" === data):
                  value = '5';
                  break;
                case (" _ |_ |_|" === data):
                  value = '6';
                  break;
                case (" _   |  |" === data):
                  value = '7';
                  break;
                case (" _ |_||_|" === data):
                  value = '8';
                  break;
                case (" _ |_| _|" === data):
                  value = '9';
                  break;
                default:
                  value = '?';
            }
            return value
        }
    };
});

myapp.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);
            
			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
                
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};

				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
});
myapp.config(['$compileProvider',
    function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
}]);