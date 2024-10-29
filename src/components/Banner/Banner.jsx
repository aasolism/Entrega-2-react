import imgBanner from "../../assets/img-banner.jpg"
import { useEffect } from "react"
import "./banner.css"

const Banner = () => {

  useEffect(()=> {

    console.log("Mensaje dentro de useEffect Banner")

    //cleanup effect
    return () => {
      console.log("Me estoy desmontando...")
    }
  }, [])

  const saludo = "Banner"

  const styleH2 = { color: "cyan", fontSize: "100px" }

  return(
    <div className="banner" >
      <img src={imgBanner} alt="" style={{ width: "200px" }} />
    </div>
  )
}

export default Banner
//export { Banner, saludar }

