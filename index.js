const express = require("express");
const app = express();
const connectDB = require("./connectdb");
require("dotenv").config();
const { getRefreshToken, getAccessToken, getAllLeads } = require("./getToken");
const Lead = require("./lead");
const Token = require('./token');

app.use(express.json());
// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Methods", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// })

app.get("/", async function (req, res) {
	try {
		const leads = await Lead.find({});
		return res.send(leads)
	} catch (error) {
		console.log(error);
	}
});

app.post("/refresh-token/:code", async function (req, res) {
  const { code } = req.params;
  console.log(code);
  try {
		console.log((await getRefreshToken(code)));
    const { refresh_token } = await getRefreshToken(code);
		console.log(refresh_token);
		if(!refresh_token){
			console.log('Refresh Token is not found');
			const tokens = await Token.find({});
			console.log(tokens);
			const act = tokens[tokens.length-1].access_token;
			const response = await getAllLeads(act);
			console.log(response);
			const leads = response.data;
			if(leads.length > 0){
				await Lead.create(leads, function(err){
					console.log(err);
				})
			}
			return res.send({"access_token": "Present", "Leads": leads})
		}
    const { access_token } = await getAccessToken(refresh_token);
		const token = {
			refresh_token,
			access_token
		};
		await Token.deleteMany({});
		await new Token(token).save()
    const response = await getAllLeads(access_token);
		const leads = response.data;
		if(leads.length > 0){
			leads.create(leads, function(err){
				console.log(err);
			})
		}
		res.send(leads)
  } catch (error) {
    res.send("You code may expired.");
  }
});

const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URI);
    app.listen(
      process.env.PORT,
      console.log(`Listening at http://localhost:${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
