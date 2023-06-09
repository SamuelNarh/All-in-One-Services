import CardActionTypes from '../cart/cart.type'

const INITIAL_STATE ={
    hidden:true
}

const cardReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CardActionTypes.TOGGLE_CARD_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
            default:
                return state
        
    }
}

export default cardReducer;