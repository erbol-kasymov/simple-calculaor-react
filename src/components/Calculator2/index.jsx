import React, { useState } from "react";
import { SettingOutlined } from '@ant-design/icons';
import { Cascader, InputNumber, Select, Space } from 'antd';

export const Calculator2 = () => {
    const [input1, setInput1] = useState(10)
    const [input2, setInput2] = useState(10)
    const [result, setResult] = useState('Бул жерге жооп чыгару')
    const handler = (e) => {
        if (e.target.name == 'input1'){
            setInput1(e.target.value)
        }else{
            setInput2(e.target.value)
        }
    }

    const onPlus = () => {
        setResult(input1 + input2)
    }
    const onMinus = () => {
        setResult(input1 - input2)
    }
    const onMulti = () => {
        setResult(input1 * input2)
    }
    const onDelenie = () => {
        setResult(input1 / input2)
    }
    
    return (<div className="wrapCalc">
        <h1>Calculator2</h1>
        <input type="number" value={input1} onChange={handler} name="input1"/>
        <div className="btn-wrap">
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
            <button onClick={onMulti}>*</button>
            <button onClick={onDelenie}>/</button>
        </div>
        <input type="number" value={input2} onChange={handler} name="input2"/>    
        <h1>sum: {result}</h1>
    </div>
    )
    
}