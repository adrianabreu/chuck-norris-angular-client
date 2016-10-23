export default function sentenceGetterService($log, $resource, sentenceHistoricalService){
	return $resource('https://api.icndb.com/jokes/random', {}, {
		get : {
			interceptor : {
				response : function(response) {
					$log.debug('sentenceGetterService.get::', response.data.value);
					
					sentenceHistoricalService.add(response.data.value);
					return response.data.value;
				}
			}
		}
	});
}

sentenceGetterService.$inject = [
	'$log',
	'$resource', 
	'sentenceHistoricalService'
];