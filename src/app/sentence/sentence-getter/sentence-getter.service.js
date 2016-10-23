export default function sentenceGetterService($resource){
	return $resource('http://api.icndb.com/jokes/random');
}