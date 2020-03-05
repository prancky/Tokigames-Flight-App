import { put, call } from "redux-saga/effects";
import {
  handleLoadCheapFlights,
  handleLoadBusinessFlights,
  handleAddBusinessFlights,
  handleAddCheapFlights
} from "./../../../sagas/flightSaga";
import { updateBusiness, updateCheapFLights } from "../../actions/flight";
import { getFlights } from "../../../api/flights";

describe("testing sagas - function calls", () => {
  let generator = null;
  beforeAll(() => {
    generator = handleLoadBusinessFlights();
  });

  test("should call the business flights data fetch function", () => {
    const expected = call(getFlights, "business");
    const actual = generator.next();
    expect(actual.value).toEqual(expected);
  });
});

describe("testing sagas - function calls", () => {
  let generator = null;
  beforeAll(() => {
    generator = handleLoadCheapFlights();
  });
  test("should call the cheap flights data fetch function", () => {
    const expected = call(getFlights, "cheap");
    const actual = generator.next();
    expect(actual.value).toEqual(expected);
  });
});

describe("testing sagas - dispatching actions", () => {
  let generator = null;
  const data = {
    departure: "Ankara",
    arrival: "Antalya",
    departureTime: 1561627856.0,
    arrivalTime: 1564410656.0
  };
  beforeAll(() => {
    generator = handleAddBusinessFlights(data);
  });

  test("should call the add business flights", () => {
    const expected = put(updateBusiness(data));
    const actual = generator.next();
    expect(actual.value).toEqual(expected);
  });
});

describe("testing sagas - dispatching actions", () => {
  let generator = null;
  const data = {
    route: "Cruz del Eje-Antalya",
    departure: 1558902656.0,
    arrival: 1558902656.0
  };
  beforeAll(() => {
    generator = handleAddCheapFlights(data);
  });

  test("should call the add cheap flights", () => {
    const expected = put(updateCheapFLights(data));
    const actual = generator.next();
    expect(actual.value).toEqual(expected);
  });
});
