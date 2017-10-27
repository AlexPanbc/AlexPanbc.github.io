angular.module('book.route',['ui.router'])
.config(function($stateProvider) { /**跳转book list**/
  $stateProvider
  .state("booklist", {
    url: "/booklist",
    templateUrl: "view/page/book/booklist.html",
    controller:"booklistctrl"
  })
  .state("bookdetail", {/**详情路由跳转**/
    url: "/bookdetail/:id",
    templateUrl: "view/page/book/bookdetail.html",
    controller:"bookdetailctrl",
    params:{'id':{}}
  })
});
