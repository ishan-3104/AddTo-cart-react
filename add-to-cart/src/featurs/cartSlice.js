import {createSlice} from '@reduxjs/toolkit'

const initialState={
    itemCount : 0,
    totleAmount : 0,
    itemLst :{}
    
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        incr : (state,action)=>{
            if(state.itemLst[action.payload.id]){
                state.itemLst[action.payload.id] ++
                state.itemCount++
                state.totleAmount = state.totleAmount+action.payload.price
            }
            else{
                state.itemLst[action.payload.id] = 1
                state.itemCount++
                state.totleAmount = state.totleAmount+action.payload.price
            }
        },
        decr : (state,action)=>{
            if(state.itemLst[action.payload.id]>0) {
                state.itemCount--
                state.totleAmount = state.totleAmount-action.payload.price
                state.itemLst[action.payload.id] -- 
            }  
        },
        cleareCart : (state)=> {
            state.itemCount= 0 
            state.totleAmount = 0
            state.itemLst ={}
        },

    }
})

export default cartSlice.reducer
export const {incr,decr,cleareCart} = cartSlice.actions