angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.user',
  'ui.bootstrap',
  //'ngBoilerplate.admin',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/users' );

  $stateProvider.state( 'admin', {
      url: '/admin',
      views: {
        "main": {
          controller: 'TabsDemoCtrl',
          templateUrl: 'admin/admin.tpl.html'
        }
      },
      data:{ pageTitle: 'Users' }
    });
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' ' ;
    }
  });
})

.controller('TabsDemoCtrl', function ($scope, $window) { 
})

.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  $scope.items = [];
  $scope.animationsEnabled = true;

  $scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'admin/modal.tpl.html',
      controller: 'ModalInstanceCtrl',     
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });    
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
})

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})
.controller('validateCtrl', function($scope) {  

   $scope.submitForm = function() {      
      if ($scope.teamleadCpaForm.$valid) {
        console.log("отправлена");
      }

    };
})


;
