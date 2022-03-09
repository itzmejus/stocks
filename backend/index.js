import express from "express"; //import Express and allows us to use it inside our server.js file.
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import stockModel from "./Models/StockModel.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
const dburl = process.env.DB_URL;
const connectionParams = {
  useNewUrlParser: true,
};
//mongodb connection
mongoose
  .connect(dburl, connectionParams)
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("error:", e);
  });

//insert data

app.post("/insert", async (req, res) => {
  const companyName = req.body.companyName;
  const marketCap = req.body.marketCap;
  const currentPrice = req.body.currentPrice;
  const stockPE = req.body.stockPE;
  const dividendYield = req.body.dividendYield;
  const roce = req.body.roce;
  const roe = req.body.roe;
  const recerves = req.body.recerves;
  const debt = req.body.debt;

  const stock = new stockModel({
    companyName: companyName,
    marketCap: marketCap,
    currentPrice: currentPrice,
    stockPE: stockPE,
    dividendYield: dividendYield,
    roce: roce,
    roe: roe,
    recerves: recerves,
    debt: debt,
  });
  try {
    await stock.save();
    res.send("inserted");
  } catch (error) {
    console.log(error);
  }
});

app.get('/read',async(req,res)=>{
    stockModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result)
    })
})

app.get("/", async (req, res) => {
  res.send("connected");
});

app.listen(5000, () => console.log(`connected at ${port}`));
