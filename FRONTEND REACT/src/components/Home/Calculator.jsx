import React, { useState } from 'react';

const Calculator = () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setValue(value + e.target.name);
    }

    const calculate = () => {
        try {
            if(value.includes('sqrt')) {
                setResult(Math.sqrt(value.replace('sqrt', '')));
            } else if(value.includes('sin')) {
                setResult(Math.sin(value.replace('sin', '')));
            } else if(value.includes('cos')) {
                setResult(Math.cos(value.replace('cos', '')));
            } else if(value.includes('tan')) {
                setResult(Math.tan(value.replace('tan', '')));
            } else {
                setResult(eval(value));
            }
        } catch (error) {
            setResult("Error");
        }
    }

    const clear = () => {
        setValue("");
        setResult("");
    }

    const backspace = () => {
        setValue(value.slice(0, -1));
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-10 rounded shadow-xl">
                <div className="mb-5">
                <input type="text" value={value} className="w-full bg-gray-200 rounded-2xl p-3 text-lg text-right" disabled />
                <div className="text-right text-gray-600">{result}</div>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', 'sqrt(', '**', '^2', 'sin(', 'cos(', 'tan(', ')'].map((item, index) => (
                        <button key={index} name={item} onClick={handleClick} className="p-5 font-bold rounded-lg text-2xl bg-gray-200 hover:bg-gray-300">{item}</button>
                    ))}
                    <button onClick={calculate} className="col-span-1 font-bold p-5 text-lg bg-green-400 text-white rounded hover:bg-green-500">=</button>
                    <button onClick={clear} className="p-5 text-lg font-bold bg-red-400 text-white rounded hover:bg-red-500">C</button>
                    <button onClick={backspace} className="p-5 text-lg font-bold bg-yellow-400 text-white rounded hover:bg-yellow-500">⌫</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
