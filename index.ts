import express, { Application, Request, Response } from "express";
const mongoose = require("mongoose");

const app: Application = express();
const port = 3000;
const mongoUrl = 
    'mongodb+srv://vertrical:vertrical@cluster0.vggd7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Database connected");
});


app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}