import { createReducer } from '@reduxjs/toolkit'
import TestConstants from '../constants/testConstants';



const initState = {
    num: 0
}
const testReducer = createReducer(initState, {

    [TestConstants.TEST]: (state, action) => {
      state.num = action.response;
        
    }
    
})

export default testReducer;