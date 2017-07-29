import { StateProvider } from '@uirouter/angularjs';

export default function sentenceConfig($stateProvider: StateProvider) {
  $stateProvider.state({    
    name: 'sentence',
    url: '/sentence',
    template: require('./sentence.html')
  });
}

sentenceConfig.$inject = ['$stateProvider'];