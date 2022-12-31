import { Configuration, OpenAIApi } from "openai";
function search() {
  var prompt = document.getElementById("comic-idea").value;

  for (i = 0; i < 10; i++) {
    var img = document.createElement("img");
    img.src = "./graduation.jpg";
    document.getElementById("comic-gallery").appendChild(img);
  }
}

// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);
// const prompt = "a lonely boy on a hill";
// const result = await openai.createImage({
//   prompt,
//   n: 1,
//   size: "1024x1024",
// });
// const url = result.data.data[0].url;
// console.log(url);

// const imgResult = await fetch(url);
// const blob = await imgResult.blob();
// const buffer = Buffer.from( await blob.arrayBuffer())
// writeFileSync( './img/ error because I${Date.now()}.png', buffer);
