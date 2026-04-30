import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
const initialData = {
    titles : [],
    status : "",
    error : false
}

let fetchTitles = createAsyncThunk("gettingTitles", async() => {
      try {
            const response = await axios.get('http://localhost:4000/');
            console.log("Data fetched:", response.data);
            return response.data;
        } catch(err) {
            console.error("Error while fetching notes", err);
            return [];
        }
});

const titleSlice = createSlice({
    name:"title",
    initialState:initialData,
    extraReducers : (builder) => {
        builder.addCase(fetchTitles.pending,(state)=>{ state.status = "loading" })
        .addCase(fetchTitles.fulfilled,(state,action)=>{
            state.status = "complete";
            state.titles = action.payload;
        })
        .addCase(fetchTitles.rejected,(state,action)=>{
            state.status = "rejected";
            state.titles = [];
            state.error = action.error.message;
        })
    }
});

const store = configureStore({
    reducer:{
        title:titleSlice.reducer
    }
});

export default store;
export {fetchTitles}