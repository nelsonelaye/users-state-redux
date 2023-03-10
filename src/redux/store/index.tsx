import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducer";
import rootReducer from "../reducer/slice";

export const store = configureStore({ reducer: { rootReducer } });

// using normal reducer, not slice reducer
// export const store = configureStore({ reducer: rootReducer });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
