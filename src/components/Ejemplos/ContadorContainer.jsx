import { useState, useEffect } from "react"
import Contador from "../Contador"
import Banner from "../NavBar/Banner"

const ContadorContainer = () => {
  const [contador, setContador] = useState(0)
  const [toggle, setToggle] = useState(true)

  const aumentarContador = () => {
    setContador(contador + 1)
  }

  const alternarToggle = () => {
    setToggle(!toggle)
  }

  //se ejecuta solo al montar el componente
  //ej: llamadas a api, suscripciones a eventListener
  useEffect(() => {
    console.log("1er useEffect")
  }, [])

  //se ejecuta en el montaje y cada vez que se actualice la variable contador
  //ej: para realizar acciones especificas cuando una variable dependiente cambie
  useEffect(() => {
    console.log("2do useEffect")
  }, [contador])

  //se ejecuta en el montaje y cada vez que se actualice cualquier variable de estado de mi componente
  //ej: operaciones globales de monitoreo o registro, actualizaciones generales del componente
  useEffect(() => {
    console.log("3er useEffect")
  })

  return (
    <>
      <Contador contador={contador} aumentarContador={aumentarContador} />
      <div>
        <p>Valor toggle: {toggle.toString()} </p>
        <button onClick={alternarToggle} >Alternar valor toggle</button>
        {
          toggle === true && <Banner />
        }
      </div>
    </>
  )
}
export default ContadorContainer