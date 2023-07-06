function getActionParams(splited) {
    const action = splited.shift();
    const params = splited.params = {};
    for (const param of splited) {
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
