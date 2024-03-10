import { createSlice } from "@reduxjs/toolkit";


const initialState = [

    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "It's easy",
      
        
    },

    {
        id: '2',
        title: 'Subscribe...',
        content: "Like and Share this video",
       
        
    }

]

const postsSlice = createSlice({

    name: 'posts',
    initialState,
    reducers:{
        postAdded(state,actions){
            state.push(actions.payload)
        },
        
    }

})
export const selectAllPosts=(state)=>state.posts;
export const {postAdded} = postsSlice.actions
export default postsSlice.reducer