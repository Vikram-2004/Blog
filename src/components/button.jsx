const Button = ({ label, handleClick }) => {
  return (
    <button
      className="text-white 
    border-none 
    px-10 
    py-2 
    rounded-md
    bg-neutral-700 
    mb-8
    hover:text-neutral-300
    hover:bg-black
     w-full
     z-10
    "
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
export default Button;
