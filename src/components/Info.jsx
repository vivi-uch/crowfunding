import InfoComp from "./InfoComp";

function Info() {
  const InfoList = [
    {
      id: 1,
      item: "$89,914",
      para: "of $100,000 backed",

      styling: "border-b border-gray-200 lg:border-r lg:border-b-0 ",
    },
    {
      id: 2,
      item: "5,007",
      para: "total backers",

      styling: "border-b border-gray-200 lg:border-r lg:border-b-0 ",
    },
    {
      id: 3,
      item: "56",
      para: "days left",
      styling: "",
    },
  ];

  return (
    <div className="flex flex-col shadow-lg  p-8 w-full rounded-lg gap-8">
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
      {/* my default range value for now */}
      <input type="range" min={0} max={100} value={69} />
    </div>
  );
}

export default Info;
