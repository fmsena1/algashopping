import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {soma, subtract} from '../store/Calculator/Calculator.actions';

const Calculator = () =>
{
    // useSelector coleta e expoe dados
    const result = useSelector(function (state){
        return state.calculator
    })
    //useDispatch dispara as ações
    const dispatch = useDispatch()

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    return <>
        <input type="number" 
        placeholder='a'
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        />
        
        <input type="number" 
        placeholder='b'
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        />

            <button
                onClick={() => {
                    dispatch(
                        soma(a, b)
                    )
                }}
            >Somar</button>
            <button
            onClick={() => {
                dispatch(
                    subtract(a, b)
                )
            }}
            >Subtrair</button>

            <div>{result}</div>
    </>
}

export default Calculator;