angular.module('book.controller',['ui.router'])
.controller('booklistctrl', function($scope,$rootScope,$state,$http) {/**book list*/
    var books=[];
    $http.get("json/books.json").then(function(response) {//这里是获取接口数据的方法调用
      $scope.books=response.data;
    });
    $scope.checkBookDetail=function(book){
      var bookid=book.id;
      $state.go("bookdetail",{id:bookid});
    };

})
.controller('bookdetailctrl', function($scope,$rootScope,$state,$http,$stateParams) {/**book detail**/
  var books=[];
  $http.get("json/books.json").then(function(response) {//这里是获取接口数据的方法调用
    books=response.data;
    $scope.book=books[$stateParams.id];
  });
});
