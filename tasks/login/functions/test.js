function paraming(params) {
    paramObject = {}
    const splitParams = params.split(' ')
    splitParams.shift() 
    for (let param of splitParams) {
        const paramsKey = param.split('=')
        if (paramsKey.length === 2) {
            let key = paramsKey[0]
            let value = paramsKey[1]
            paramObject[key] = value
        }
    }
    return paramObject
}

console.log(paraming('add login=Привет😂 password=Приветович🤣'))
