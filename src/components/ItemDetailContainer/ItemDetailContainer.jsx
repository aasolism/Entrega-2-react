import { useState, useEffect } from "react";
import { getProducts } from "../../data/data.js";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = ({ onAddToCart }) => { // Recibe onAddToCart como prop
  const [product, setProduct] = useState(null);
  const { idProduct } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => {
        const findProduct = data.find((productData) => productData.id === idProduct);
        setProduct(findProduct);
      });
  }, [idProduct]);

  // Muestra un mensaje de carga mientras se obtiene el producto
  if (!product) return <p>Cargando...</p>;

  return <ItemDetail product={product} onAddToCart={onAddToCart} />;
};

export default ItemDetailContainer;
