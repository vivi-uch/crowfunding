import Button from "./Button";

function Card({ count, item, price, ButtonText, para, py, handleClick }) {
  return (
    <div
      className={`flex flex-col gap-5 border border-DarkGray p-6 rounded-lg shadow-lg ${
        count === 0 ? "opacity-25" : ""
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between text-md">
        <h1 className="text-black font-bold">{item}</h1>
        <h2 className="text-LightGray font-light">Pledge ${price} or more</h2>
      </div>

      <p>{para}</p>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
        <p className="text-black text-xl font-bold">
          {count}
          <span className="ml-2 relative -top-1 text-sm font-light">left</span>
        </p>
        <Button name={ButtonText} py={py} onClick={handleClick} />
      </div>
    </div>
  );
}

export default Card;
