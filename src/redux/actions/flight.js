import { ACTIONS, FLIGHTS } from '../types/index';

const fetchBusinessFLights = () => ({
  type: FLIGHTS.BUSINESS + ACTIONS.FETCHING
});

const setBusinessFLights = flights => ({
  type: FLIGHTS.BUSINESS + ACTIONS.SUCCESS,
  data: flights
});

const setBusinessError = error => ({
  type: FLIGHTS.BUSINESS + ACTIONS.FAILURE,
  error
});

const fetchCheapFLights = () => ({
  type: FLIGHTS.CHEAP + ACTIONS.FETCHING
});

const setCheapFLights = flights => ({
  type: FLIGHTS.CHEAP + ACTIONS.SUCCESS,
  data: flights
});

const setCheapError = error => ({
  type: FLIGHTS.CHEAP + ACTIONS.FAILURE,
  error
});

const updateBusiness = flights => ({
  type: FLIGHTS.BUSINESS + ACTIONS.INSERT + ACTIONS.SUCCESS,
  data: flights
});

const updateBusinessError = error => ({
  type: FLIGHTS.BUSINESS + ACTIONS.INSERT + ACTIONS.FAILURE,
  error
});

const addBusinessFLights = para => ({
  type: FLIGHTS.BUSINESS + ACTIONS.INSERT,
  data: para
});

const addCheapFLights = para => ({
  type: FLIGHTS.CHEAP + ACTIONS.INSERT,
  data: para
});

const updateCheapFLights = flights => ({
  type: FLIGHTS.CHEAP + ACTIONS.INSERT + ACTIONS.SUCCESS,
  data: flights
});

const updateCheapError = error => ({
  type: FLIGHTS.CHEAP + ACTIONS.INSERT + ACTIONS.FAILURE,
  error
});

export {
  fetchBusinessFLights,
  setBusinessFLights,
  setBusinessError,
  fetchCheapFLights,
  setCheapFLights,
  setCheapError,
  addBusinessFLights,
  updateBusiness,
  updateBusinessError,
  addCheapFLights,
  updateCheapFLights,
  updateCheapError
};
