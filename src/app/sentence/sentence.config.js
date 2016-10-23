export default function($routeProvider){
  $routeProvider
    .when('/sentence', {
      template: require('./sentence.tpl.html'),
      controller: 'SentenceController',
      controllerAs : 'Sentence'
    })
}