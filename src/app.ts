import bodyParser from 'body-parser';
import express from 'express';
import { Request, Response } from 'express';
import bmi, {BmiInput} from './bmi'

const app = express();

// TODO implement me :)
app.get('/bmi',(req:Request, res:Response)=>{

    const userWeight = Number(req.query.weight);
    const userWeightUnit = Number(req.query.weightUnit);
    const userHeight = Number(req.query.height);
    const userHeightUnit = Number(req.query.heightUnit);

    const bmiOut = bmi({weight:userWeight,weightUnit:userWeightUnit,
         height: userHeight,heightUnit:userHeightUnit});
    
    res.send(bmiOut);
    
});
app.post('/bmi',bodyParser.json,(req:Request, res:Response)=>{
    const {weight,weightUnit,height,heightUnit}= req.body;

    const bmiOut = bmi({weight,weightUnit,height,heightUnit});
   
    res.json(bmiOut);
});


export default app;
