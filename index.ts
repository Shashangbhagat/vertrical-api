import express, { Application } from "express";
import * as recordControllers from './controllers/RecordControllers';
import mongoose from "mongoose";

const app: Application = express();
const port = 3000;
const mongoUrl = 
    'mongodb+srv://vertrical:vertrical@cluster0.vggd7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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