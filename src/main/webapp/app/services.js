angular.module("myApp.services", [ "ngResource" ]).factory("Idea", function($resource) {
	return $resource("./ideas/:id", {
		id: '@id'
	}, {
		update: {
			method: "PUT"
		},
		remove: {
			method: "DELETE"
		}
	});
});