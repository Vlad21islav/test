function paraming(str) {
    const splited = str.split(' ')
    const action = splited.shift()
    const params = splited.params = {}
    for (const param of splited) {
        if (param !== '') {
            const paramsValue = param.split('=')
            const key = paramsValue.shift()
            const value = paramsValue.join('=')

            params[key] = value
        }
    }
    return {action, params}
}

console.log(paraming('add     login=Привет😂    password=Приветович🤣'))
