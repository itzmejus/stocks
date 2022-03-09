import mongoose from "mongoose";
const stockSchema =new mongoose.Schema({

    companyName:{
        type: String,
        required:true,
    },
    marketCap:{
        type: String,
        required:true,
    },
    currentPrice:{
        type: Number,
        required:true,
    },
    stockPE:{
        type: Number,
        required:true,
    },
    dividendYield:{
        type: Number,
        required:true,
    },
    roce:{
        type: Number,
        required:true,
    },
    roe:{
        type: Number,
        required:true,
    },
    recerves:{
        type: Number,
        required:true,
    },
    debt:{
        type: Number,
        required:true,
    },

})

const stockModel= mongoose.model("stocks",stockSchema);
export default stockModel;