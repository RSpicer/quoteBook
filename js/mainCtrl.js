app.controller('mainCtrl', function($scope, dataService) {
	$scope.quotes = dataService.getData();
	$scope.addData = function(quoteText, quoteAuthor){
		var quoteObj = {};
		quoteObj.text=quoteText;
		quoteObj.author=quoteAuthor;
		dataService.addData(quoteObj);
	}
	$scope.removeData = function(quoteText){
		dataService.removeData(quoteText);
	}
});