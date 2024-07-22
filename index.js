const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
	const url = "mongodb+srv://shwetashimpi406:DPxbvyJQQe5BYlwJ@cluster0.b0oyzuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("doubt22jul24");
	const coll = db.collection("student");
	const record={"name":req.body.name,"phno":req.body.phno,"doubt":req.body.doubt};
	coll.insertOne(record)
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
});

app.listen(9000,()=>{console.log("ready at 9000");});
	