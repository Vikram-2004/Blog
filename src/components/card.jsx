const Card = ({ title, context, username, date, time }) => {
  return (
    <div className=" w-[30vw] shadow-2xl">
      <div className="px-8 py-8">
        <h1 className="text-2xl font-semibold uppercase">#{title}</h1>
      </div>
      <div className=" max-h-[30vh] overflow-y-auto p-8 mb-8">{context}</div>
      <div className="px-8 pb-3">
        <h1 className="uppercase text-slate-400 ">
          @{username || "Anonyomous"}
        </h1>
      </div>
      <div className="flex gap-2 text-slate-400 px-8 pb-8">
        <p>{date || "Date"}</p>
        <p>{time || "Future"}</p>
      </div>
    </div>
  );
};
export default Card;
