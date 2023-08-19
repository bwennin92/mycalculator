import React from 'react'
import CalculatorKey from './CalculatorKey'
const Calculator = () => {
  return (
    <div  className='calculator'>
        <div className='calculator-input'>
            <div className='result'>{result}</div>
        </div>
        <div className='calculator-keypad'>
            <div className='keys-function'>
                <CalculatorKey keyValue ={'C'} onClick={handleOperation} />
                <CalculatorKey keyValue ={'\xB1'} onClick={handleOperation} />
                <CalculatorKey keyValue ={'%'} onClick={handleOperation} />
            </div>
            <div className='key-operators'>
                <CalculatorKey keyValue={'+'} onClick={handleOperation} />
                <CalculatorKey keyValue={'-'} onClick={handleOperation} />
                <CalculatorKey keyValue={'*'} onClick={handleOperation} />
                <CalculatorKey keyValue={'/'} onClick={handleOperation} />
                <CalculatorKey keyValue={'='} onClick={handleOperation} />
            </div>
            <div className="key-numbers">
                <CalculatorKey keyValue={'9'} onClick={handleOperation} />
                <CalculatorKey keyValue={'8'} onClick={handleOperation} />
                <CalculatorKey keyValue={'7'} onClick={handleOperation} />
                <CalculatorKey keyValue={'6'} onClick={handleOperation} />
                <CalculatorKey keyValue={'5'} onClick={handleOperation} />
                <CalculatorKey keyValue={'4'} onClick={handleOperation} />
                <CalculatorKey keyValue={'3'} onClick={handleOperation} />
                <CalculatorKey keyValue={'2'} onClick={handleOperation} />
                <CalculatorKey keyValue={'1'} onClick={handleOperation} />
                <CalculatorKey
                className='key-dot'
                keyValue={'.'}
                onClick={handleOperation}
                />
                <CalculatorKey className='key-zero'
                keyValue={'0'}
                onClick={handleOperation}
                />
            </div>
        </div>

    </div>
  )
}

export default Calculator