angular.module("myApp.controllers", []).controller("ideaCtrl", function($scope, Idea) {
	
	$scope.model = {
		ideas: Idea.query(),
		newIdea: {
			title: null,
			description: null
		}
	};
	
	$scope.initiator = false;
	
	$scope.socket = {
		client: null,
		stomp: null
	};
	
	$scope.add = function() {
		$scope.initiator = true;
		var idea = new Idea();
		idea.description = $scope.model.newIdea.description;
		idea.title = $scope.model.newIdea.title;
		idea.votes = 0;
		idea.$save(function(response) {
			$scope.model.ideas.push(response);
		});
		$scope.model.newIdea.title = '';
		$scope.model.newIdea.description = '';
	};
	
	$scope.remove = function(/** Idea */ idea, /** Integer */ index) {
		$scope.initiator = true;
		$scope.model.ideas.splice(index, 1);
		idea.$remove();
	};
	
	$scope.addVotes = function(/** Idea */ idea, /** Integer */ votes) {
		$scope.initiator = true;
		idea.votes += votes;
		idea.$update();
	};
	
	$scope.notify = function(/** Message */ message) {
		if (!$scope.initiator) {
			Idea.query(function(ideas) {
				$scope.model.ideas = ideas;
			});
		}
		$scope.initiator = false;
	};
	
	$scope.reconnect = function() {
		setTimeout($scope.initSockets, 10000);
	};
	
	$scope.initSockets = function() {
		$scope.socket.client = new SockJS('/spring-live-updates/notify');
		$scope.socket.stomp = Stomp.over($scope.socket.client);
		$scope.socket.stomp.connect({}, function() {
			$scope.socket.stomp.subscribe("/topic/notify", $scope.notify);
		});
		$scope.socket.client.onclose = $scope.reconnect;
	};
	
	$scope.initSockets();
});