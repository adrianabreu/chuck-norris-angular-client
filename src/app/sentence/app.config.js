export default function appConfig($logProvider,$routeProvider){
    // todo ... env variable
    $logProvider.debugEnabled(!true);    
    // initial redirection
    $routeProvider
    	.otherwise({
        	redirectTo: '/sentence'
    	});
}


appConfig.$inject = ['$logProvider','$routeProvider'];