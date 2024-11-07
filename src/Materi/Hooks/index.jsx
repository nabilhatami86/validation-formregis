import React, { useState } from 'react'
import useToggle from './Pembahasan/useToggle'

const Hooks = () => {

    let [label, setLabel] = useState('ON');
    let [lampu, setLampu] = useToggle();

    const style = {
        background: lampu  ? 'yellow' : 'black',
        textAlign: 'center',
        height:'400px'
    }

    const saklar = () => {
        setLampu(!lampu)
        setLabel(e => {
            if(e === 'ON') {
                return 'OFF'
            }
            return "ON"
        })
    }

  return (
    <div style={style}>
       <button onClick={saklar}>{label}</button>
    </div>
  )
}

export default Hooks