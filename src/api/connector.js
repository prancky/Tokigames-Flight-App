import * as RESTHelper from "./webhelper";

const request = requestToExecute => {
  return requestToExecute
    .then(res => {
      if (res.data.code && res.data.code !== 200 && !res.data.success) {
        handleRequestFailure({ response: res });
      } else {
        return res;
      }
    })
    .catch(err => {
      console.log("error", err);
      handleRequestFailure(err);
    });
};

const handleRequestFailure = error => {
  const { response } = error;
  if (response && response.status === 401) {
    console.log("unauthorized");
  } else if (response && response.data) {
    throw response.data;
  } else {
    console.log("error", error);
    throw error.message;
  }
};

export const get = (url, config = {}) => request(RESTHelper.get(url, config));

export const post = (url, body, config) =>
  request(RESTHelper.post(url, body, config));

export const put = (url, body, config) =>
  request(RESTHelper.put(url, body, config));

export const del = (url, body, config) =>
  request(RESTHelper.del(url, body, config));
