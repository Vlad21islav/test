function getActionParams(line) {
    const splited = line.split(' ');
    const action = splited.shift();
    const params = {};
    for (const param of line) {
        if (param !== '') {
            const paramsValue = param.split('=');
            const key = paramsValue.shift();
            const value = paramsValue.join('=');
            params[key] = value;
        }
    }
    return {action, params};
}

module.exports = getActionParams;
