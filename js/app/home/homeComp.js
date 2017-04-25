(function () {
    function homeCtrl (addNewService, $timeout) {
        var ctrl = this;
        ctrl.addNewService = addNewService;
        ctrl.news = [];
        ctrl.comments = null;
        ctrl.index = null;

        ctrl.$onInit = function() {
            if(ctrl.newsItem){
                ctrl.news = ctrl.newsItem;
            }
          };

        ctrl.deleteNew = function (index){
          ctrl.news.splice(index, 1);
          ctrl.addNewService.addNew(ctrl.news);
          if(ctrl.index === index){
              ctrl.index = null;
              ctrl.comments = null;
          }
          if(ctrl.index === index){
              ctrl.index = ctrl.index - 1;
              ctrl.comments = ctrl.news[ctrl.index].comments;
          }

        };
        ctrl.addNew = function(){
          var post = {
              text: ctrl.newItem,
              comments: []
          };
          ctrl.news.push(post);
          ctrl.addNewService.addNew(ctrl.news);
          ctrl.newItem = "";
        };
        ctrl.addComment = function(){
            if(ctrl.messegeItem){
                ctrl.news[ctrl.index].comments.push(ctrl.messegeItem);
            }
          ctrl.addNewService.addNew(ctrl.news);
          ctrl.messegeItem = "";
        };
        ctrl.setIndex = function (index) {
            ctrl.index = index;
            ctrl.comments = ctrl.news[ctrl.index].comments;

        }
    }

    homeCtrl.$inject = ['addNewService', '$timeout'];

    angular.module('empeek')
        .component('homePage', {
            templateUrl: 'js/app/home/homePage.html',
            bindings: {
               newsItem: '<'
           },
            controller: homeCtrl
        });
})();
