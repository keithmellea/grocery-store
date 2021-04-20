import produceData from '../mockData/produce.json'

const ADD = "cart/ADD"

export const addToCart = (newItem) => {
   return {
      type: ADD,
      newItem: {
         id: newItem,
         count: 1,
      },
   }
}

export const cartReducer = (state = {}, action) => {
   switch (action.type) {
       case ADD:
           const newState = {...state };
           if (newState[action.newItem.id] === undefined) {
           newState[action.newItem.id] = action.newItem;
           } else {
               newState[action.newItem.id].count++;
           }
           return newState;
      default:
         return state;
   }
}