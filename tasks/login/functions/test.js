function paraming(params) {
    paramObject = {}
    let splitParams = params.split(' ')
        for (let param of splitParams) {
            let paramsKey = param.split('=')
            if (paramsKey.length === 2) {
                let key = paramsKey[0]
                let value = paramsKey[1]
                paramObject[key] = value
            }
        }
    return paramObject
}

console.log(paraming('add login=Привет😂 password=Приветович🤣'))
