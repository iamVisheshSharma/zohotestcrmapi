const axios = require("axios");
require("dotenv").config();
const FormData = require("form-data");

async function getRefreshToken(code) {
  let formdata = new FormData();
  formdata.append("client_id", "1000.TF3O1A283MBXNX8VBQO1NMWD0IW87D");
  formdata.append(
    "client_secret",
    "4c1a9c9beba98430fa7621b5f62f3df657223f52c1"
  );
  formdata.append("redirect_url", "https://www.zoho.com/in/crm");
  formdata.append(
    "code", code);
  formdata.append("grant_type", "authorization_code");
  let bodyContent = formdata;

  let reqOptions = {
    url: "https://accounts.zoho.in/oauth/v2/token",
    method: "POST",
    data: bodyContent,
  };

  let response = await axios.request(reqOptions);
  console.log(response.data);
  return response.data;
}

async function getAccessToken(token) {
  let formdata = new FormData();
  formdata.append("client_id", "1000.TF3O1A283MBXNX8VBQO1NMWD0IW87D");
  formdata.append(
    "client_secret",
    "4c1a9c9beba98430fa7621b5f62f3df657223f52c1"
  );
  formdata.append("redirect_url", "https://www.zoho.com/in/crm");
  formdata.append(
    "refresh_token",token);
  formdata.append("grant_type", "refresh_token");

  let bodyContent = formdata;

  let reqOptions = {
    url: "https://accounts.zoho.in/oauth/v2/token",
    method: "POST",
    data: bodyContent,
  };

  let response = await axios.request(reqOptions);
  console.log(response.data);
  return response.data;
}

async function getAllLeads(token) {
  let headersList = {
    "Authorization": `Zoho-oauthtoken ${token}`, 
    "Authorization": `Bearer ${token}` 
   }
   
   let reqOptions = {
     url: "https://www.zohoapis.in/crm/v2/Leads",
     method: "GET",
     headers: headersList,
   }
   
   let response = await axios.request(reqOptions);
   console.log(response.data);
   return response.data
}

module.exports.getRefreshToken = getRefreshToken;
module.exports.getAccessToken = getAccessToken;
module.exports.getAllLeads = getAllLeads;
