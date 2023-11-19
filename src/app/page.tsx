"use client"
import React, { useState } from 'react';

const Calculator = () => {
 const [result, setResult] = useState(0);
 const [expression, setExpression] = useState('');

 const buttons = [
    '00', '000', '%', 'C',
    '9', '8', '7', '*',
    '6', '5', '4', '-',
    '3', '2', '1', '/',
    '0','.','+','='
 ];

 const handleClick = (button:any) => {
    if (button === '=') {
      {
        setResult(eval(expression));
        setExpression('');
      } 
      
    } 
    else if (button === 'C') {
      setResult(0);
      setExpression('');
    }  else {
      setExpression(expression + button);
    }
 };

 return (
    <div className="bg-gradient-to-l from-purple-500 to-pink-400 min-h-screen flex items-center justify-center">
      
      <div className="bg-gradient-to-t from-blue-800 to-violet-300 p-4 rounded-xl shadow-md w-full md:w-1/2 lg:w-1/3">
        <div className="mb-4 text-xl font-bold text-center"><span className='text-violet-900'>CAL</span>CULATOR <span className='text-violet-900'>BY</span> BUSH<span className='text-violet-900'>RA</span></div>
        <div className="border border-gray-200 p-2 rounded">
          <input className="border-0 text-right w-full bg-transparent focus:ring-0" readOnly value={result} />
        </div>
        <div className="border border-gray-200 p-2 rounded">
          <input className="border-0 text-right w-full bg-transparent focus:ring-0" readOnly value={expression} />
        </div>
        <div className="grid grid-cols-4 gap-1">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="border p-2 rounded hover:bg-blue-500 text-white"
              onClick={() => handleClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
 );
};

export default Calculator;