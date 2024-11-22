import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import db from "../../db/db.js";
import "./itemlistcontainer.css";

const ItemListContainer = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  const getProducts = () => {
    const productsRef = collection(db, "products")
    getDocs(productsRef)
    .then((dataDb)=> {
      dataDb.docs.map((productDb)=>{
        return { id: productDb.id }
      })
    })
  } 

  useEffect(() => {
    getProducts ()
  }, [idCategory]);

  return (
    <div className="itemlistcontainer">
      <ItemList products={products} onAddToCart={onAddToCart} />
    </div>
  );
};

export default ItemListContainer;
