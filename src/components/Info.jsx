function Info() {
  const InfoList = [
    {
      id: 1,
      item: "$89,914",
      para: "of $100,000 backed",
      styling:
        "border-b-2 lg:border-r lg:border-b-0 lg:border-r-0 border-gray-200 lg:border-gray-200",
    },
    {
      id: 2,
      item: "5,007",
      para: "total backers",
      styling:
        "border-b-2 lg:border-r lg:border-b-0 lg:border-r-0 border-gray-200 lg:border-gray-200 ",
    },
    {
      id: 3,
      item: "56",
      para: "days left",
      styling: "",
    },
  ];

  return (
    <div className="flex flex-col shadow-lg  p-8 w-full rounded-lg gap-4">
      <div className="flex lg:flex-row flex-col text-center lg:text-start gap-4 ">
        {InfoList.map((info) => (
          <InfoComp
            key={info.id}
            styling={info.styling}
            item={info.item}
            para={info.para}
          />
        ))}
      </div>
      <input type="range" min={0} max={100} value={69} />
    </div>
  );
}

function InfoComp({ styling, item, para }) {
  return (
    <div className={`${styling} flex flex-col gap-2 p-2 lg:pr-12  `}>
      <h1 className="font-extrabold text-lg">{item}</h1>
      <p className="text-DarkGray text-sm">{para}</p>
    </div>
  );
}

export default Info;
