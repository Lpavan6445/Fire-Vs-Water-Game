import "./square.css";

export const Square = ({ board, handleChange }) => {
  return (
    <>
      {board.map((value, id) => (
        <div className="square" key={id} onClick={() => handleChange(id)}>
          {value}
        </div>
      ))}
    </>
  );
};
