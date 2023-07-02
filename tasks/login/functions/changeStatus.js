const state = {
    status: 'start',
    add: undefined,
    user: undefined,
    limit: 3
}

const getState = () => state;
const setState = (object) => {
    return {...state,...object}
}

module.exports = {getState, setState}
