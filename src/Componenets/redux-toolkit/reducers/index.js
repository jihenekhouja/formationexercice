import { combineReducers } from "@reduxjs/toolkit"
import tasks from "./tasks.reducers"

export const rootReducers =  combineReducers({
        tasks:tasks,
    })
