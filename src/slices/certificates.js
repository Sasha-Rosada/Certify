import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    isDataLoaded: false,
    data: null
}

const certificate = createSlice({
    name: 'certificate',
    initialState,
    reducers: {
        MentorDataRequest(state, action) {
            state.isFetching = true;
            state.isDataLoaded = false;
        },
        DiplomasDataRequest(state, action) {
            state.isFetching = true;
            state.isDataLoaded = false;
        },
        ParticipationDataRequest(state, action) {
            state.isFetching = true;
            state.isDataLoaded = false;
        },
        RequestFailure(state, action) {
            state.data = null;
            state.isFetching = false;
            state.isDataLoaded = false;
        },
        RequestSuccess(state, action) {
            state.data = action.payload;
            state.isDataLoaded = true;
            state.isFetching = false
        }
    }
});

export const { MentorDataRequest, ParticipationDataRequest, DiplomasDataRequest, RequestFailure, RequestSuccess } = certificate.actions;
export default certificate.reducer;