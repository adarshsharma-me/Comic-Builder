import { Configuration, OpenAIApi } from "openai";
let prompt = "";
let dataResponse = "";
const configuration = new Configuration({
  apiKey: "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",
});

document.querySelector("#searchButton").addEventListener("click", () => {
  prompt = document.getElementById("comic-idea").value;

  fetch("http://localhost:8000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  })
    .then((res) => res.json())
    .then((data) => {
      dataResponse = data.response.choices[0].text;
      console.log(dataResponse);
    });
});

document.querySelector("#drawButton").addEventListener("click", async () => {
  const openai = new OpenAIApi(configuration);

  const prompt = "a lonely boy on a hill";

  const result = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
  });
  const url = result.data.data[0].url;

  var img = document.createElement("img");
  img.src = url;
  document.getElementById("comic-gallery").appendChild(img);
  // console.log(url);
});

// function draw2() {
//   const openai = new OpenAIApi(configuration);
//   const pr = [
//     "a guy riding a horse",
//     "a man plugging his laptop",
//     "shit and fly relationship",
//   ];
//   let prd;

//   for (let x in pr) {
//     prd = pr[x];
//     async function myFunction(prd) {
//       const prompt = "a lonely boy on a hill";
//       const result = await openai.createImage({
//         prompt,
//         n: 1,
//         size: "1024x1024",
//       });
//       const url = result.data.data[0].url;
//       console.log(url);

//       const imgResult = await fetch(url);
//       console.log(imgResult);
//     }
//   }
// }

// function search() {
//   prompt = document.getElementById("comic-idea").value;
//   // for (i = 0; i < 10; i++) {
//   //   var img = document.createElement("img");
//   //   img.src = "./graduation.jpg";
//   //   document.getElementById("comic-gallery").appendChild(img);
//   // }
