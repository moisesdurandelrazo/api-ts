/** @format */

import express from "express";
import usersRoute from "./users";

const app = express();
app.use(express.json());
app.use("/", usersRoute);

app.listen(3000, () => console.log("Escuchando"));

//curl --header "Content-Type: application/json" --request POST --data '{"name": "Hola mundo"}' http://localhost:3000/
