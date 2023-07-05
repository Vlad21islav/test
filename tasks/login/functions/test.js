function paraming(str) {
    const Object = {}
    const input = str.split(' ')
    let commandName = input.shift()
    Object.action = commandName
    let params = Object.params = {}
    for (const param of input) {
        if (param !== '') {
            const paramsKey = param.split('=')
            if (paramsKey.length >= 1) {
                const key = paramsKey.shift()
                let value = paramsKey.join('=')

                params[key] = value
            }
        }
    }
    return Object
}

console.log(paraming('add     login=Привет😂    password=Приветович🤣'))
