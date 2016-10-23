export default function sentenceConfig($routeProvider){
  $routeProvider
    .when('/sentence', {
      template: require('./sentence.tpl.html'),
      controller: 'SentenceController',
      controllerAs : 'Sentence'
    })
}

sentenceConfig.$inject = ['$routeProvider'];