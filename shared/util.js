export default const getQuizQuestions = async () => {
  const url = "https://api.infermedica.com/v3/conditions";
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "App-Id": "124b24d6",
      "App-Key": "2a6b6a45eef7ca5e299edfd733a801a0",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  return [];
};
