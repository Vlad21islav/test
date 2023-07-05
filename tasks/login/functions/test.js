function paraming(str) {
    const Object = {}
    const input = str.split(' ')
    let commandName = input.shift()
    Object.action = commandName
    let params = Object.params = {}
    for (const param of input) {
        if (param !== '') {
            const paramsValue = param.split('=')
            if (paramsValue.length >= 1) {
                const key = paramsValue.shift()
                let value = paramsValue.join('=')

                params[key] = value
            }
        }
    }
    return Object
}

console.log(paraming('add     login=Привет😂    password=Приветович🤣'))
