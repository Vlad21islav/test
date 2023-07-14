let state = {
    status: 'start',
    add: undefined,
    user: undefined,
    limit: 3
}

const getState = () => state;
const setState = (object) => {
    state = {...state,...object}
}

module.exports = {getState, setState}
