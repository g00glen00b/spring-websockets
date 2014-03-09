angular.module("myApp.filters", []).filter("markdown", function($sce) {
	var converter = new Showdown.converter();
	return function(value) {
		var html = converter.makeHtml(value || '');
        return $sce.trustAsHtml(html);
	};
});