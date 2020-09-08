import axios from "axios";

const request = axios.create({
  baseURL: "https://wordcomparisonbe.herokuapp.com/api",
});

export const postNewComparison = (newComparison) => {
  return request.post("/words", newComparison).then(({ data }) => {
    return data.wordsObj;
  });
};

export const getComparisons = (order) => {
  return request
    .get("/words", { params: { order } })
    .then(({ data: { wordsObj } }) => {
      return wordsObj;
    });
};
