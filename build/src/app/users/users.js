/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.user', [
  'ui.router', 
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */

.config(function config( $stateProvider, $urlRouterProvider ) {
 // $urlRouterProvider.otherwise( '/users' );

  
  $stateProvider
    .state( 'users', {
      url: '/users',
      views: {
        "main": {
          controller: 'UserCtrl',
          templateUrl: 'users/users.tpl.html'
        }
      },
      data:{ pageTitle: 'Users' }
    })
    .state( 'user', {
      url: '/users/:id',
       resolve:{
        user:  function($http, $stateParams) {
            return $http({method: 'GET', url: 'http://sandy.artur.test/kpi/user/'+ $stateParams.id}).then (function (response) {
               return response.data.result;                   
            });
         },
         stats:  function($http, $stateParams) {
            return $http({method: 'GET', url: 'http://sandy.artur.test/kpi/stats/'+ $stateParams.id}).then (function (response) {             
               return response.data.result;                   
            });
         }
      },           
      views: {
        "main": {         
          controller: 'UserMetrics',
          templateUrl: "users/route1.tpl.html"
        }
      },
      data:{ pageTitle: 'User'  }      
     
    });

})

/**
 * And of course we define a controller for our route.
 */
.controller( 'UserCtrl', function HomeController( $scope, $http ) {

  $scope.data = [];
  $scope.users = [];

  $http.get('http://sandy.artur.test/kpi/user').then(function(response) {
     $scope.users = response.data.result;
     angular.forEach($scope.users, function(user){       
        $http.get('http://sandy.artur.test/kpi/stats/' + user.id).then(function(response) {
          $scope.data.push({
            user: user,
            stats: response.data.result
          });
          console.log( $scope.data);
        });
     }); 
               
  });

})

.controller('UserMetrics', function($scope, $http, $stateParams, user, stats){
  $scope.positionMap = {'accounter':'Аккаунтер', 'manager':'Менеджер', 'hunter': 'Хантер', 'teamlead':'Тимлид'};
  $scope.departmentMap = {'cpa':'CPA', 'cpm':'CPM', 'pub': 'Площадки'};
  $scope.user = user;
  $scope.stats = stats;

  $scope.feeCorrection120 = 0;
  $scope.feeCorrection100 = 0;
  $scope.feeCorrection80 = 0;
  $scope.feeCorrection60 = 0;
  $scope.sum = 0;
  $scope.fee = 0;

  angular.forEach($scope.stats.metrics, function(metric) {

      if (metric.correction == 1.2)  {
        $scope.feeCorrection120 += metric.fee_corrected;                 
      } 
      else if (metric.correction == 1) {
         $scope.feeCorrection100 += metric.fee_corrected;
      } 
      else if (metric.correction == 0.8) {
         $scope.feeCorrection80 += metric.fee_corrected;
      } 
      else if (metric.correction == 0.6) {
         $scope.feeCorrection60 += metric.fee_corrected;
      }  
        $scope.fee +=  metric.fee;          
       //console.log($scope.fee.toFixed(2));                                
   });

   $scope.sum = $scope.feeCorrection100 + $scope.feeCorrection80 + $scope.feeCorrection60 + $scope.feeCorrection120;         
                         
})


;
