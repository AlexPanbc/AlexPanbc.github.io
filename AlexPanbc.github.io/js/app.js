/**
 * 创建总的入口模块：batteryManage，它依赖其它所有模块
 */
angular.module('batteryManage',
      [
        'ui.router',
        'user.controller',/**用户模块-controller**/
        'user.route',/**用户模块-路由**/
        'user.service',/**用户模块-service**/
        'book.controller',/**book模块controller**/
        'book.route',/**book模块-路由**/
        'book.service'/**book-service**/
      ]
    )
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
            // 配置路由重定向,默认返回到主页
            .otherwise('/login');
        }
    ])
    //配置系统初始需要的数据
    .run(function ($rootScope, $state) {
            //实现返回上一状态的函数 back button function   ng-click="back()"
            $rootScope.back = function () {
                $state.go($rootScope.previousState_name, $rootScope.previousState_params);
            };
    });
