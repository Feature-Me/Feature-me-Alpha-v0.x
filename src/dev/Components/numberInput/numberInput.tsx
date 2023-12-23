import React from "react";
import { MdArrowLeft, MdAdd, MdRemove, MdArrowRight } from "react-icons/md";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";

import style from "./numberInput.scss";

interface rangeInputPropsType extends propsType {
    min?: number
    max?: number
    step?: number
    bigStep?:number
    AccuracyDigit?: number
    value?: number
    onChange?: FunctionWithTypedProps<number>
}

const NumberInput: React.FC<rangeInputPropsType> = (props) => {

    const min = props.min ?? 0;
    const max = props.max ?? 100;
    const step = props.step ?? 1;
    const acr = props.AccuracyDigit ?? 0;
    const [value, setValue] = React.useState(props.value ?? ((max-min)/2+min));

    function handleChange(num: number) {
        let newValue = value
        newValue+=num;
        if (newValue < min) newValue = min
        else if (newValue > max) newValue = max

        setValue(newValue);

        if (props.onChange)
            props.onChange(newValue)
    }


    return (
        <div className={style.numberinput_wrapper}>
            <div className={style.icon} onClick={() => handleChange(step*10)}>
                <AiOutlineDoubleLeft />
            </div>
            <div className={style.icon} onClick={()=>handleChange(step)}>
                <MdAdd />
                
            </div>
            <input type="number" className={style.number} max={max} min={min} step={step} value={value.toFixed(acr)} onChange={e=>handleChange(Number(e.target.value)-value)} />
            <div className={style.icon} onClick={() => handleChange(-step)}>
                <MdRemove />
            </div>
            <div className={style.icon} onClick={() => handleChange(-step*10)}>
                <AiOutlineDoubleRight />
            </div>
        </ div>
    )
}

export default NumberInput;