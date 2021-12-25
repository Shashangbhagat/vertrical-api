import express, { Application } from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import * as recordControllers from './controllers/RecordControllers';

const app: Application = express();
dotenv.config();
const port = process.env.PORT;
const mongoUrl = process.env.MONGOURL || ' ';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(mongoUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Database connected");
});


app.get(
    '/records', 
    recordControllers.getAllSearchedRecords,
);

app.get(
    '/record/:id',
    recordControllers.getRecord
)

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}