import { put, takeEvery } from "redux-saga/effects";
import {
  handleLoadBusinessFlights,
  loadBusinessFlights
} from "./../../../sagas/flightSaga";
import { ACTIONS, FLIGHTS } from "../../types/index";

describe("testing sagas - waiting for dispatched actions", () => {
  let generator = null;
  beforeEach(() => {
    generator = loadBusinessFlights();
  });
  const actionType = FLIGHTS.BUSINESS + ACTIONS.FETCHING;

  test("should wait for the proper action - method 1", () => {
    put({ type: actionType });
    const actual = generator.next();

    expect(actual.value).toEqual(
      takeEvery(actionType, handleLoadBusinessFlights)
    );
  });

  test("should wait for the actionToWait action - method 2", () => {
    const actionToWait = () => ({ type: actionType });
    const actual = generator.next(actionToWait());

    expect(actual.value).toEqual(
      takeEvery(actionType, handleLoadBusinessFlights)
    );
  });
});
