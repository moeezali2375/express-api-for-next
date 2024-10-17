import express from "express"
import cors from "cors"
import { getAllEvents } from "./data.js"
const app=express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
	res.send("Hello World");
	});

app.get("/events",(req,res)=>{
	res.send({events:getAllEvents()})
	});

app.listen(4000,(req,res)=>{
	console.log("Server Started on Port: 4000");
	})

