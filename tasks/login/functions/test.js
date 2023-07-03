function paraming(...params) {
    paramObject = {}
    for (let param in params) {
        paramObject.param = params[param]
    }
    return paramObject
}

console.log(paraming('hi', 'hello'))
