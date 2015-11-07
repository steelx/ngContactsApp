angular.module('contactsApp')
    .value('FieldTypes', {
        text: ['Text', 'should be text'],
        email: ['Email', 'should be an email address'],
        number: ['Number', 'should be a number'],
        date: ['Date', 'should be a date'],
        datetime: ['Datetime', 'should be a datetime'],
        time: ['Time', 'should be a time'],
        month: ['Month', 'should be a month'],
        week: ['Week', 'should be a week'],
        url: ['URL', 'should be a url'],
        tel: ['Phone Number', 'should be a phone number'],
        color: ['Color', 'should be a color']
    })
    .directive('formField', function ($timeout, FieldTypes) {
        return {
            restrict: 'EA',
            templateUrl: 'views/formField.html',
            replace: true,
            scope: {
                record: '=',
                field: '@',
                live: '@',
                required: '@'
            },
            link: function ($scope, element, attr) {
                $scope.$on('record:invalid', function setFieldDirty() {
                    $scope[$scope.field].$setDirty();
                });

                $scope.types = FieldTypes;
                $scope.remove = function removeField(field) {
                    delete $scope.record[field];
                    $scope.blurUpdate();
                };

                $scope.blurUpdate = function updateContactModel() {
                    if ($scope.live === 'true') {//live is a string value
                        $scope.record.$update(function updatedCallback(updatedRecord) {
                            $scope.record = updatedRecord;
                        });
                    }
                };

                var saveTimeout;
                $scope.update = function callBlurUpdate(argument) {
                    $timeout.cancel(saveTimeout);
                    saveTimeout = $timeout($scope.blurUpdate, 1000);
                };
            }
        };
    });
