import produceData from '../mockData/produce.json'

const ADD = "cart/ADD"

export const addToCart = () => {
   return {
      type: ADD,
      produceData
   }
}

export const cartReducer = (state = {}, action) => {
   switch (action.type) {
      default:
         return state;
   }
}