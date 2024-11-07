import {useState} from 'react'


const FunctionalComponent = ({nama}) => {

  const [value, setValue] = useState(0);

  const handlePlus = () => {
    setValue(value + 1);
  }

  const handleMinus = () => {
    if(value > 0)
    setValue(value - 1);
  }
  return (
    <div>
      <h1>Membuat Komponen</h1>
      <h2> halo {nama}, selamat belajar</h2>
      <button onClick={handleMinus}>-</button>
      <span>{' '} {value} {' '} </span>
      <button onClick={handlePlus}>+</button>
    </div>
  )
}

FunctionalComponent.defaultProps = {
  nama: 'risky'

}

export default FunctionalComponent