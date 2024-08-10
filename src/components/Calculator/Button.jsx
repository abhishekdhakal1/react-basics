const Button = ({ value, handleButton }) => {
  return (
    <button
      className="p-3 m-2 border-2 border-black rounded-full bg-orange-500 hover:bg-orange-700"
      onClick={() => handleButton(value)}
    >
      {value}
    </button>
  );
};
export default Button;
