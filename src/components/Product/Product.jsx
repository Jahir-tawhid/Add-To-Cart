const Product = ({ product, addToCardData }) => {
  const { name, price, inStock } = product;
  return (
    <div className="border-2 border-red-600 py-6 ">
      <h1 className="text-xl font-bold">Name: {name}</h1>
      <p className="text-lg text-green-700"> Price: {price}</p>
      <h4 className="text-gray-700 mb-4">InStock: {inStock}</h4>
      <button
        onClick={() => addToCardData(product)}
        className="bg-green-600 py-1 px-3"
      >
        {" "}
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
