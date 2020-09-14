export const initialState = {
    basket: [],
    user:null,
};

const reducer = (state, action) => {
   
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            // * Returns the first index of the item in the
            // *basket with the id
            const index = state.basket.findIndex(
                (basketItem)=>basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if(index>=0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in the basket!`)
            }

            return{
                ...state,
                basket:newBasket
            }
        case "SET_USER":
            return{
                ...state,
                user:action.user
            };

        default:
            return state;
    }
};

//* Selector
export const getTotalPrice = (basket)=>basket?.reduce((amount,item)=>item.price + amount,0);

export default reducer;