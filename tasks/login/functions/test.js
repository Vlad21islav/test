function paraming(params) {
    const logAndPass = ['']
    let over = false
    paramObject = {}
    let splitParams = params.split(' ')
    let splitParamsLen = splitParams.filter(() => true).length;
    if (splitParamsLen === 3) {
        const isAdd = splitParams.shift() 
        if (isAdd === 'add') {
            for (let param in splitParams) {
                let paramsKey = param.split('=')
                let paramsKeyLen = paramsKey.filter(() => true).length;
                if (paramsKeyLen === 2) {
                    if (paramsKey[0] === 'login') {
                        paramObject.login = paramsKey[1]
                    }
                }
            }
            over = true
        }
    }
    if (over) {
        return paramObject
    } else {
        return 'Вы ввели не правильную строку'
    }
}

console.log(paraming('add login=Привет😂 password=Приветович🤣'))
