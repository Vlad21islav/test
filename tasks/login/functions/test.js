function paraming(params) {
    let over = false
    paramObject = {}
    let splitParams = params.split(' ')
    let splitParamsLen = splitParams.filter(() => true).length;
    if (splitParamsLen === 3) {
        if (splitParams[0] === 'add') {
            let paramsKey1 = splitParams[1].split('=')
            let paramsKey1Len = paramsKey1.filter(() => true).length;
            if (paramsKey1Len === 2) {
                if (paramsKey1[0] === 'login') {
                    paramObject.login = paramsKey1[1]
                    let paramsKey2 = splitParams[2].split('=')
                    let paramsKey2Len = paramsKey2.filter(() => true).length;
                    if (paramsKey2Len === 2) {
                        if (paramsKey2[0] === 'password') {
                            paramObject.password = paramsKey2[1]
                        }
                    }
                }
            }
        }
    }
    if (over) {
        return paramObject
    } else {
        return 'Вы ввели не правильную строку'
    }
}

console.log(paraming('add logn=Привет😂 password=Приветович🤣'))
