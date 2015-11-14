angular.module('contactsApp')
    .filter('labelCase', function labelCase() {
        return function changeLabelCase(input) {
            var text = input.replace(/([A-Z])/g, ' $1');
            return text[0].toUpperCase() + text.slice(1);
        };
    })
    .filter('camelCase', function camelCase() {
        return function (input) {
            return input.toLowerCase().replace(/ (\w)/g, function (match, letter) {
                return letter.toUpperCase();
            });
        };
    })
    .filter('keyFilter', function keyFilter() {
        return function (obj, query) {
            var result = {};
            angular.forEach(obj, function (val, key) {
                if (key !== query) {
                    result[key] = val;
                }
            });

            return result;
        };
    });
