import "./itemdetail.css";
import ContadorContainer from "../Contador/ContadorContainer";

const ItemDetail = ({ product, onAddToCart }) => {
  const handleAddToCart = (quantity) => {
    onAddToCart(product, quantity); // Llama a onAddToCart con el producto y la cantidad seleccionada
  };

  // Función para formatear el precio
  const formatPrice = (price) => {
    return price.toLocaleString("es-CL"); // Usa puntos para separar miles en el formato chileno
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} width={600} />
      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${formatPrice(product.price)}</p> {/* Aplicación del formato */}
        <ContadorContainer stock={product.stock} initial={1} onAdd={handleAddToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;
