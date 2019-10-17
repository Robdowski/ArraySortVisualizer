import { HANDLE_RANGE } from '../actions'

const initialState = {
    sliderValue: '25',
    arrayToSort: Array.from({length: 25}, ()=> Math.ceil(Math.random() * 200))
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case HANDLE_RANGE:
            console.log(state.sliderValue)
            return{
                ...state,
                sliderValue: action.payload,
                arrayToSort: Array.from({length: Number(action.payload)}, () => Math.ceil(Math.random() * 200))
            }

        default:
            return state
    }
}

export default rootReducer
