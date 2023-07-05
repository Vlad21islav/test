function paraming(params) {
    const paramObject = {}
    const splitParams = params.split(' ')
    let firstParam = splitParams.shift() 
    paramObject.action = firstParam
    let parametrs = paramObject.params = {}
    for (const param of splitParams) {
        const paramsKey = param.split('=')
        if (paramsKey.length === 2) {
            const key = paramsKey[0]
            const value = paramsKey[1]
            parametrs[key] = value
        }
    }
    return paramObject
}

console.log(paraming('add login=Привет😂 password=Приветович🤣'))
