import { createAsyncThunk , createSlice } from "@reduxjs/toolkit"
import { login, me } from "../../../Service/user.service"

export const login1 = createAsyncThunk("tasks/login", async (user) => {
    const response = await login(user)
    return response
})



export const me1 = createAsyncThunk("tasks/me", async () => {
    const response = await me()
    return response
})


const tasksslice = createSlice({
    name: "tasksslice",
    initialState: { user:{}, loading: false, error: false },
    extraReducers: (builder) => {
        builder
            .addCase(login1.pending, (state, action) => {
                state.loading = true
                state.error = false
            })
            .addCase(login1.fulfilled, (state, action) => {
                state.loading = false
                localStorage.setItem("token",action.payload)
                window.location="/"

            })
            .addCase(login1.rejected, (state, action) => {
                state.loading = false
                state.error = true
            })







            .addCase(me1.pending, (state, action) => {
                state.loading = true
                state.error = false
            })
            .addCase(me1.fulfilled, (state, action) => {
                state.loading = false
             state.user=action.payload

            })
            .addCase(me1.rejected, (state, action) => {
                state.loading = false
                state.error = true
            })
    }
})
export default tasksslice.reducer