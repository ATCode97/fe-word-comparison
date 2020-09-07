import axios from "axios";

const request = axios.create({
  baseURL: "https://wordcomparisonbe.herokuapp.com/api",
});

export const postNewComparison = (newComparison) => {
  return request.post(`/words`, newComparison).then(({ data }) => {
    return data.words;
  });
};

export const getComparisons = () => {};
