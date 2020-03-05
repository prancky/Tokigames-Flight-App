import { takeEvery, call, put } from "redux-saga/effects";
import { FLIGHTS, ACTIONS, FLIGHT_TYPES } from '../redux/types';

import { getFlights } from "../api/flights";
import {
  setBusinessFLights,
  setBusinessError,
  setCheapFLights,
  setCheapError,
  updateBusiness,
  updateCheapFLights,
  updateBusinessError,
  updateCheapError
} from "../redux/actions/flight";

export function* handleLoadBusinessFlights() {
  try {
    const flights = yield call(getFlights, FLIGHT_TYPES.BUSINESS);
    yield put(setBusinessFLights(flights));
  } catch (ex) {
    yield put(setBusinessError(ex.toString()));
  }
}

export function* handleLoadCheapFlights() {
  try {
    const flights = yield call(getFlights, FLIGHT_TYPES.CHEAP);
    yield put(setCheapFLights(flights));
  } catch (ex) {
    yield put(setCheapError(ex.toString()));
  }
}

export function* handleAddBusinessFlights(para) {
  try {
    const data = para;
    yield put(updateBusiness(data));
  } catch (ex) {
    yield put(updateBusinessError(ex.toString()));
  }
}

export function* handleAddCheapFlights(para) {
  try {
    yield put(updateCheapFLights(para));
  } catch (ex) {
    yield put(updateCheapError(ex.toString()));
  }
}

export function* loadBusinessFlights() {
  yield takeEvery(FLIGHTS.BUSINESS + ACTIONS.FETCHING, handleLoadBusinessFlights);
  yield takeEvery(FLIGHTS.CHEAP + ACTIONS.FETCHING, handleLoadCheapFlights);
  yield takeEvery(FLIGHTS.BUSINESS + ACTIONS.INSERT, handleAddBusinessFlights);
  yield takeEvery(FLIGHTS.CHEAP + ACTIONS.INSERT, handleAddCheapFlights);
}
