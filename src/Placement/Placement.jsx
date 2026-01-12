import SingleCart from "../components/SingleCart/SingleCart";

const Placement = ({ cart }) => {
  return (
    <div className="border-2 border-blue-600 px-6 py-2">
      <h1 className="text-4xl font-bold">Placement: {cart.length}</h1>
      {cart.map((singleData) => (
        <SingleCart key={singleData} singleData={singleData}></SingleCart>
      ))}
    </div>
  );
};

export default Placement;
