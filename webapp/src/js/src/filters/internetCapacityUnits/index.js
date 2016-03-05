function internetCapacityUnits () {
    return function (input, separator) {
        separator = separator || 100;

        var output = input;

        if (input >= separator) {
            output += ' MB';
        } else {
            output += ' GB';
        }

        return output;
    };
}

internetCapacityUnits.$inject = [];

module.exports = internetCapacityUnits;