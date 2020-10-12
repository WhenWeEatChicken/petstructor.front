import { createAction, handleAction } from 'redux-actions';
import {call, put, takeLatest } from 'redux-saga/effects';
import * as API from "../lib/api";

const GET_POST = "board/GET_POST";
const GET_POST_SUCCESS = "board/GET_POST_SUCCESS";
const GET_POST_FAILURE = "board/GET_POST_FAILURE";

export const getPost = createAction(GET_POST);

function* getPostSaga(action){
  yield put(console.log("getPost"));
  try {
    const posts = yield call(API.getPosts);
  } catch (e) {
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true
    })
  }
}