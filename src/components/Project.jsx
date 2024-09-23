import { useState } from "react";
import Card from "./Cards";
import { motion } from "framer-motion";

function Project() {
  const CardList = [
    {
      item: "Bamboo stand",
      price: 25,
      para: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      num: 101,
      ButtonText: "Select Reward",
      py: "py-3",
    },
    {
      item: "Black Edition Stand",
      price: 75,
      para: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      num: 64,
      ButtonText: "Select Reward",
      py: "py-3",
    },
    {
      item: "Mahogany special Edition",
      price: 200,
      para: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      num: 0,
      ButtonText: "Select Reward",
      py: "py-3",
    },
  ];

  const [count, setCount] = useState();

  const handleClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <motion.div
      initial={{ marginTop: "100px" }}
      animate={{ marginTop: "6px" }}
      transition={{ duration: 1.8 }}
      className="p-8 flex flex-col text-DarkGray shadow-2xl gap-6 font-light text-sm mb-2"
    >
      <h1 className="text-black font-bold text-lg"> About this project</h1>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      {CardList.map((card) => (
        <Card
          key={card.item}
          item={card.item}
          price={card.price}
          para={card.para}
          ButtonText={card.ButtonText}
          py={card.py}
          count={card.num}
          handleClick={handleClick}
        />
      ))}
    </motion.div>
  );
}

export default Project;
