import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import Diplomas from "./FakeData/diplomas";
import Mentor from "./FakeData/mentor";
import Participation from "./FakeData/participation";

axios.defaults.baseURL = "https://vito.sspu.edu.ua/";

if (process.env.REACT_APP_USE_MOCK) {
    const Mock = new MockAdapter(axios, { delayResponse: process.env.REACT_APP_MOCK_DELAY ?? 0 });

    Mock.onGet("/diplomas/db.json").reply(200, Diplomas);
    Mock.onGet("/p-certificates/db.json").reply(200, Participation);
    Mock.onGet("/m-certificates/db.json").reply(200, Mentor);
}



const API = {
    FetchDiplomasData: () => axios.get('/diplomas/db.json'),
    FetchParticipationData: () => axios.get('/p-certificates/db.json'),
    FetchMentorData: () => axios.get('/m-certificates/db.json')
}

export default API;