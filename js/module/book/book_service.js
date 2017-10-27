angular.module('book.service',[])
.factory("bookService", function($http) {
    return {
        getBookList: function() {
             return $http.get("json/books.json").then(function(response) {//这里是获取接口数据的方法调用
               return response.data;
            });
        }
    };
});
