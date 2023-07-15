let state = {
    isSleep: true,
    word: 0,
    words: undefined
};

const getState = () => state;
const setState = (object) => {
    state = {...state,...object}
}


module.exports = {getState, setState};
