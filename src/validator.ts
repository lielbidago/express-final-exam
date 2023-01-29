import type { NextFunction, Request, Response } from 'express';


/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(req: Request, res: Response, next: NextFunction) {
    // TODO implement me

    let weightV=0;
    let weightUnitV=0;
    let heightV = 0;
    let heightUnitV=0;

    

    if(req.method==='POST'){
        weightV = req.body.weight;
        heightV = req.body.height;
        weightUnitV = req.body.weightUnit;
        heightUnitV =req.body.heightUnit;
    }else if(req.method==='GET'){
        weightV = Number(req.query.weight);
        heightV = Number(req.query.height);
        weightUnitV = Number(req.query.weightUnit);
        heightUnitV =Number(req.query.heightUnit);
    }

    if(weightV<0){
        next(new Error('impossible weight'));
    }else if(heightV<0){
        next(new Error('impossible height'));
    }else if(![0,1,2].includes(weightUnitV)){
        next(new Error('incorrect weight unit'));
    }else if(![0,1,2,3].includes(heightUnitV)){
        next(new Error('incorrect height unit'));
    }
    
    next();
}
