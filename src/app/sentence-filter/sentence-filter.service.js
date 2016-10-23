export default function sentenceFilterService($resource){
	return $resource('http://api.icndb.com/categories');
}