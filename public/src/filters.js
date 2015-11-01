angular.module('contactsApp')
    .filter('labelCase', function function_name() {
        return function changeLabelCase(input) {
            input = input.replace(/([A-Z])/g, ' $1');
            return input[0].toUpperCase() + input.slice(1);
        }
    })
