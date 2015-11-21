angular.module('contactsApp')
    .controller('ListController', function ListController($scope, Contact, $location){
      $scope.contacts = Contact.query();
      $scope.fields = ['firstName', 'lastName'];

      $scope.sort = function (field){
          $scope.sort.field = field;
          $scope.sort.order = !$scope.sort.order;
      };
      $scope.sort.field = 'firstName';
      $scope.sort.order = false;

      $scope.show = function showSingleContact(id) {
        $location.url('/contacts/' + id);
      };
    })
    .controller('NewController', function NewController($scope, Contact, $location) {
        // contact object that we want to edit
        $scope.contact = new Contact({
            firstName: ['', 'text'],
            lastName: ['', 'text'],
            email: ['', 'email'],
            homePhone: ['', 'tel'],
            cellPhone: ['', 'tel'],
            birthday: ['', 'date'],
            website: ['', 'url'],
            address: ['', 'text']
        });

        $scope.save = function saveContact(contact) {
            if ($scope.newContact.$invalid) {
                $scope.$broadcast('record:invalid');
            } else {
                //form is valid
                $scope.contact.$save();
                $location.url('/contacts');
            }
        };
    })
    .controller('SingleController', function SingleController($scope, $location, $routeParams, Contact) {
        $scope.contact = Contact.get({id: parseInt($routeParams.id, 10)});
        $scope.delete = function deleteContact() {
            $scope.contact.$delete();
            $location.url('/contacts');
        };

        $scope.backBtn = function () {
            $location.url('/contacts');
        };
    });
