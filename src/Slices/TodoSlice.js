import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const FetchTodos = createAsyncThunk("fetchtodos", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(response)
    return response.data
})
const todoslicer = createSlice({
    name: "todo",
    initialState: {
        isloading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(FetchTodos.pending, (state, action) => {
            state.isloading = true
        });
        builder.addCase(FetchTodos.fulfilled, (state, actions) => {
            state.isloading = false;
            state.data = actions.payload;
        });
        builder.addCase(FetchTodos.rejected, (state, actions) => {
            console.log("error", actions.payload);
            state.isError = true
        })
    }
})

export default todoslicer.reducer