angular.module('user.controller',['ui.router'])
.controller('loginctro', function($scope,userService,$rootScope,$state) {/**登陆跳转**/
  //module
  $scope.user = {
    account:"",
    pwd:""
  }
  /**登陆按钮点击**/
  $scope.subLogin = function(){
    /**这里写调用service操作，调用接口去获取提交数据**/
    var loginresult=userService.userLoginIn($scope.user);
    if(loginresult){
      alert("登陆成功了呦，宝宝");
      $state.go("booklist");//跳转到图书列表
    }
  }


});
