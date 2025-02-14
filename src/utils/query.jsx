import { getPrivateRequest, getPublicRequest } from "./axios";

export const getPublicData = async (url, params = {}) => {
  try {
    const res = await getPublicRequest.get(url, { params });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const postPublicData = async (url, values) => {
  try {
    const res = await getPublicRequest.post(url, values);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const putPublicData = async (url, values) => {
  try {
    const res = await getPublicRequest.put(url, values);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getprivateData = async (url, params = {}) => {
  try {
    const res = await getPrivateRequest.get(url, { params });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const postprivateData = async (url, values) => {
  try {
    const res = await getPrivateRequest.get(url, values);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const putprivateData = async (url, values) => {
  try {
    const res = await getPrivateRequest.get(url, values);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteprivateData = async (url, values) => {
  try {
    const res = await getPrivateRequest.post(url, values);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
