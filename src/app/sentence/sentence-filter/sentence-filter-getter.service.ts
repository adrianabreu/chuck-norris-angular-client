export function sentenceFilterGetterService($resource){
	return $resource('https://api.icndb.com/categories');
}

sentenceFilterGetterService.$inject = ['$resource'];