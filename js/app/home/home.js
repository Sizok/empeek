(function () {
    angular.module('empeek.home', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                template: '<home-page news-item="$resolve.news"></home-page>',
                templateUrl: 'js/app/home/homePage.html',
                data: {
                    pageTitle: 'Home'
                },
                resolve: {
                  news: ['getNewsLocalStorageService', function (getNewsLocalStorageService) {
                    var newsItem = getNewsLocalStorageService.getNews();
                    return newsItem;
                  }]
                }
              })
          }])
  })();