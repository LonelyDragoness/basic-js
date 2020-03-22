module.exports = function repeater(str, options) {
    if (!options['repeatTimes']) { options['repeatTimes'] = 1; }
    if (!options['separator']) { options['separator'] = '+'; }
    if (!options['additionRepeatTimes']) { options['additionRepeatTimes'] = 1; }
    if (!options['additionSeparator']) { options['additionSeparator'] = ''; }
    if (!options['addition']) {
        if(`${options['addition']}` !== 'false' && `${options['addition']}` !== 'null') {
            options['addition'] = '';
        } else {
            options['addition'] = `${options['addition']}`;
        }
    }

    let additionalPart = `${options['addition']}`;
    for (let j = 0; j < options['additionRepeatTimes'] - 1; j++) {
        additionalPart += `${options['additionSeparator']}${options['addition']}`
    }
    let result = `${str}${additionalPart}`;
    for (let k = 0; k < options['repeatTimes'] - 1; k++) {
        result += `${options['separator']}${str}${additionalPart}`
    }
    return result
}
