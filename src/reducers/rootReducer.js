const initState = {
    posts: [{id: '1', title: 'hi', body: 'fi'}]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_POST': 
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)    
            }
        default:
            break;
    }
    return state;
}

export default rootReducer