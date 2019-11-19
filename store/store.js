import {
    createStore
} from 'redux'

const initialState = {
    count: 0
}

function reducer(state = initialState, action) {

}

const store = createStore(reducer, initialState)