/**
 * BMI Calculator
 */

export const BmiStatus = {
    Underweight: 0,
    HealthyWeight: 1,
    Overweight: 2,
    Obesity: 3
}

export const WeightUnits = {
    KG: 0,     // kilograms
    G: 1,      // grams
    Pound: 2,  // lbs
}

export const HeightUnits = {
    CM: 0,     // centimeter
    M: 1,      // meter
    In: 2,     // inch
    Ft: 3,     // feet
}

export interface BmiInput {
    weight: number;
    weightUnit: number;
    height: number;
    heightUnit: number;
}

export interface BmiOutput {
    bmi: number;
    status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
    // TODO: implement me
    const {weight,weightUnit,height,heightUnit} = input;
    let bmiW = weight;
    let bmiH = height;

    if(weightUnit!==0){
        if(weightUnit===1){
            bmiW*=1000;
        }else{
           bmiW*=0.45359237; 
        }
    }

    if(heightUnit!==1){
        if(heightUnit===0){
            bmiH*=100;
        }else if(heightUnit===2){
           bmiH*=0.0254; 
        }else{
            bmiH*=0.3048;
        }
    }

    const bmiCalc = bmiW/(bmiH*bmiH);
    let bmiS = 0;

    if(18.5 <= bmiCalc && bmiCalc< 25){
        bmiS = 1
    }else if(25<=bmiCalc &&bmiCalc<30 ){
        bmiS = 2
    }else{
        bmiS = 3
    }
    
    return {status: bmiS, bmi: Math.round(bmiCalc)};
}
