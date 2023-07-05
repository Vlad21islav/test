function paraming(str) {
    const output = {}
    const input = str.split(' ')
    let commandName = input.shift()
    output.action = commandName
    let params = output.params = {}
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
    return output
}

console.log(paraming('add     login=Привет😂    password=Приветович🤣'))
