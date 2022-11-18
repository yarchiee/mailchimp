const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "YOUR_API_KEY",
  server: "YOUR_SERVER_PREFIX",
});

const run = async () => {
  const response = await client.campaigns.create({ type: "plaintext" });
  console.log(response);
};

run();

let url = "@mailchimp/mailchimp_marketing";
fetch(url, {
  method: "POST",
  // headers 加入 json 格式
  headers: {
    "Content-Type": "application/json",
  },
  // body 將 json 轉字串送出
  body: JSON.stringify({
    email: "lovef1232e@hexschool.com",
    password: "12345678",
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => {
    console.log("錯誤:", err);
  });
