const Button = ({ label, onClick }) => {
  return (
    <button
      className="text-white 
    border-none 
    px-10 
    py-2 
    rounded-md
    bg-neutral-700 
    hover:text-neutral-300
    hover:bg-black
     z-10
     w-full
     hover:outline
     hover:outline-1
     hover:outline-white
    "
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default Button;
