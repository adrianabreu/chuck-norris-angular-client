export default function sentenceGetterService($resource, sentenceHistoricalService){
	return $resource('http://api.icndb.com/jokes/random', {}, {
		get : {
			interceptor : {
				response : function(response) {
					console.log(response.data);
					sentenceHistoricalService.add(response.data.value);
					return response.data.value;
				}
			}
		}
	});
}

sentenceGetterService.$inject = ['$resource', 'sentenceHistoricalService'];