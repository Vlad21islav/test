let state = {
    isSleep: true
};

const getState = () => state;
const setState = (object) => {
    state = {...state,...object}
}


module.exports = {getState, setState};
