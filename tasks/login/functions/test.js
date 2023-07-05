function paraming(str) {
    const splited = str.split(' ')
    let action = splited.shift()
    let params = splited.params = {}
    for (const param of splited) {
        if (param !== '') {
            const paramsValue = param.split('=')
            if (paramsValue.length >= 1) {
                const key = paramsValue.shift()
                let value = paramsValue.join('=')

                params[key] = value
            }
        }
    }
    return {action, params}
}

console.log(paraming('add     login=Привет😂    password=Приветович🤣'))
