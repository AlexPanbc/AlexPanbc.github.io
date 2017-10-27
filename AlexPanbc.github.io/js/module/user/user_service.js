angular.module('user.service',[])
.factory("userService", function($http) {
    return {
        userLoginIn: function(user) {
            console.log("用户名："+user.account);
            console.log("密码："+user.pwd);
            return true;
        }
    };
});
