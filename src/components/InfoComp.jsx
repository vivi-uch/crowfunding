function InfoComp({ styling, item, para }) {
  return (
    <div className={`${styling} flex flex-col gap-2 p-2 lg:pr-12  `}>
      <h1 className="font-extrabold text-lg">{item}</h1>
      <p className="text-DarkGray text-sm">{para}</p>
    </div>
  );
}

export default InfoComp;
