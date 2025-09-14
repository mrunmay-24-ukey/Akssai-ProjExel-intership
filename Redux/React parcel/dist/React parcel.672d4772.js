let reduxState = {
    post: 0,
    name: 'Anurag',
    city: 'Delhi'
};
function reducer(state, action) {
    if (action.type === 'post/increment') return {
        ...state,
        post: state.post + 1
    };
    return state;
}
reduxState = reducer(reduxState, {
    type: 'post/increment'
});

//# sourceMappingURL=React parcel.672d4772.js.map
