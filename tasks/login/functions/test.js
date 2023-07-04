function paraming(params) {
    paramObject = {}
    let splitParams = params.split(' ')
    const isAdd = splitParams.shift() 
    if (isAdd === 'add') {
        for (let param of splitParams) {
            let paramsKey = param.split('=')
            let paramsKeyLen = paramsKey.filter(() => true).length;
            if (paramsKeyLen === 2) {
                let key = paramsKey[0]
                let value = paramsKey[1]
                paramObject[key] = value
            }
        }
    }
    return paramObject
}

console.log(paraming('add login=Привет😂 password=Приветович🤣'))
