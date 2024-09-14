function Button({ name, py }) {
  return (
    <button
      className={`rounded-3xl text-white bg-DarkCyan px-8 lg:font-bold ${py}`}
    >
      {name}
    </button>
  );
}

export default Button;
