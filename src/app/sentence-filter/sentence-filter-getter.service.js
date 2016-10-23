export default function sentenceFilterGetterService($resource){
	return $resource('http://api.icndb.com/categories');
}