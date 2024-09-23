import InfoComp from "./InfoComp";
import { motion } from "framer-motion";
import { useState } from "react";

function Info() {
  const [range, setRange] = useState("4/5");
  const InfoList = [
    {
      id: 1,
      item: "$89,914",
      para: "of $100,000 backed",

      styling:
        "lg:border-r-gray-200 lg:border-r relative after:w-[45%] after:h-[1px] after:absolute after:-bottom-3 after:left-16 after:bg-gray-200 lg:after:fixed",
    },
    {
      id: 2,
      item: "5,007",
      para: "total backers",

      styling:
        "lg:border-r-gray-200 lg:border-r relative after:w-[45%] after:h-[1px] after:absolute after:-bottom-3 after:left-16 after:bg-gray-200 lg:after:fixed",
    },
    {
      id: 3,
      item: "56",
      para: "days left",
      styling: "",
    },
  ];

  return (
    <motion.div
      initial={{ marginTop: "100px" }}
      animate={{ marginTop: "6px" }}
      transition={{ duration: 1.4 }}
      className="flex flex-col shadow-2xl  p-8 w-full rounded-lg gap-8 mb-8"
    >
      <div className="flex lg:flex-row flex-col text-center lg:text-start gap-4">
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
      {/* <input type="range" min={0} max={100} value={69} /> */}

      {/* <div className="w-full bg-gray-300 rounded-full h-2 relative">
        <span
          className={`bg-ModerateCyan rounded-full w-${range} absolute top-0 h-full`}
        ></span>
      </div> */}

      <div className="w-full h-2 rounded-full bg-gray-300 self-center">
        <span
          className={`flex rounded-full h-full w-${range} bg-ModerateCyan`}
        ></span>
      </div>
    </motion.div>
  );
}

export default Info;
