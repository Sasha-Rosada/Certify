import { all, takeLatest } from "@redux-saga/core/effects";

import { FetchDiplomas, FetchMentor, FetchParticipation } from "./certificate";
import { MentorDataRequest, DiplomasDataRequest, ParticipationDataRequest } from "../slices/certificates";

export default function* RootSaga() {
    yield all([
        takeLatest(DiplomasDataRequest.type, FetchDiplomas),
        takeLatest(MentorDataRequest.type, FetchMentor),
        takeLatest(ParticipationDataRequest.type, FetchParticipation)
    ])
};