const Input = ({ label, type, onChange, value }) => {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        value={value}
        className="
    block
    rounded-lg
    px-6
    pt-3
    pb-2
     focus:outline-none
     text-white
     bg-neutral-700
     focus:ring-0
     appearance-none
      w-full
    "
        placeholder={label}
      />
    </>
  );
};
export default Input;
