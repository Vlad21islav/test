function paraming(params) {
    const paramObject = {}
    const splitParams = params.split(' ')
    let firstParam = splitParams.shift() 
    paramObject.action = firstParam
    let parametrs = paramObject.params = {}
    for (const param of splitParams) {
        const paramsKey = param.split('=')
        if (paramsKey.length >= 1) {
            if (paramsKey.shift() !== '' && paramsKey.join('=') !== '') {
                const key = paramsKey.shift()
                let value = paramsKey.join('=')
                
                parametrs[key] = value
            }
        }
    }
    return paramObject
}

console.log(paraming('add           login=sdf      password=sdf'))
