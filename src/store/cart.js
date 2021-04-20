import produceData from '../mockData/produce.json'

const ADD = "cart/ADD"

export const addToCart = (newItem) => {
   return {
      type: ADD,
      newItem.id: {
         id: newItem.id,
         count: 1,
      },
   }
}

export const cartReducer = (state = {}, action) => {
   switch (action.type) {
      default:
         return state;
   }
}