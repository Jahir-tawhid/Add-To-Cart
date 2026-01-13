const SingleCart = ({ singleData }) => {
  const { name, price, inStock } = singleData;
  return (
    <div>
      <hr />
      <h1 className="font-bold">Name: {name}</h1>
      <p className="text-green-600">Price: {price}</p>
      <h4 className="text-gray-500">In-Stock: {inStock}</h4>
      <hr />
    </div>
  );
};

export default SingleCart;
