import { call, put } from "redux-saga/effects";
import { RequestSuccess, RequestFailure } from "../slices/certificates";
import API from "../api/index"

function* FetchDiplomas(action) {
    try {
        const { data: DiplomasUserData } = yield call(API.FetchDiplomasData);
        yield put(RequestSuccess(DiplomasUserData));
    } catch (e) {
        yield put(RequestFailure());
    }
}

function* FetchMentor(action) {
    try {
        const { data: MentorUserData } = yield call(API.FetchMentorData);
        yield put(RequestSuccess(MentorUserData))
    } catch (e) {
        yield put(RequestFailure());
    }
}

function* FetchParticipation(action) {
    try {
        const { data: ParticipationUserData } = yield call(API.FetchParticipationData);
        yield put(RequestSuccess(ParticipationUserData));
    } catch (e) {
        yield put(RequestFailure());
    }
}

export { FetchDiplomas, FetchMentor, FetchParticipation };