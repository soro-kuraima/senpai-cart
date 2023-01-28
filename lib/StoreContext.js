import { createContext, useContext, useReducer } from "react";

export const StoreContext = createContext(null);
export const StoreDispatchContext = createContext(null);
const initialState = {
   cart: []
};

export function StoreProvider({children}) {
    const [store, dispatch] = useReducer(cartReducer, initialState)

    return(
        <StoreContext.Provider value={store}>
            <StoreDispatchContext.Provider value={dispatch}>
                {children}
            </StoreDispatchContext.Provider>
        </StoreContext.Provider>
    )
}

export function useStore() {
    return useContext(StoreContext);
}

export function useStoreDispatch() {
    return useContext(StoreDispatchContext)
}


function cartReducer(state, action) {
    switch(action.type) {
        case "addItem":{
            // eslint-disable-next-line no-case-declarations
            const newItem = action.payload;
            //console.log(state);
            //console.log(newItem);
            const newState =  {
               ...state,
               cart: [...state.cart, newItem],
            }
            const total = newState.cart.reduce(
                (totalAcummulator, currentItem) => totalAcummulator + (currentItem.price * currentItem.quantity),
                0
              );
            return{
                ...newState,
                total
            }
        }
        case "changeQuantity":{
            const id = action.payload.id;
            const quantity = action.payload.quantity
            const newCartState = state.cart.map(cartItem => {
                if(cartItem.id === id) {
                    return {...cartItem, quantity}
                }
                return cartItem
            })
            const newState = {
                ...state,
                cart: [...newCartState]
            }
            const total = newState.cart.reduce(
                (totalAcummulator, currentItem) => totalAcummulator + (currentItem.price * currentItem.quantity),
                0
              );
              return {
                ...newState,
                total
              }
        }

        case "removeItem":{
            // eslint-disable-next-line no-case-declarations
            const id = action.payload;
            const newCartState = state.cart.filter(cartItem => cartItem.id !== id);
            const newState = {
                ...state,
                cart: [...newCartState]
            }

            const total = newState.cart.reduce(
                (totalAcummulator, currentItem) => totalAcummulator + (currentItem.price * currentItem.quantity),
                0
              );
              return {
                ...newState,
                total
              }
        }
        case "clearCart":{
            return
        }
    }

    //total Calculator

}