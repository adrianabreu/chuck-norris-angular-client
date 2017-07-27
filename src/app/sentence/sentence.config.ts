export default function sentenceConfig($routeProvider){
  $routeProvider
    .when('/sentence', {
      template: require('./sentence.html')
    })
}

sentenceConfig.$inject = ['$routeProvider'];