import Button from "./Button";
import { motion } from "framer-motion";

function MasterCraft() {
  return (
    <motion.div
      initial={{ top: "100px" }}
      animate={{ top: "-44px" }}
      transition={{
        duration: 1,
      }}
      className="text-center bg-white rounded-lg px-4 py-8 lg:p-12 relative shadow-2xl w-full"
      //notings here , it is whatever we define as the top or whatever in Motion that actually counts so no need for top-12 in classname above
    >
      <div className="flex justify-center items-center">
        <motion.img
          initial={{ scale: 1.2, rotate: "180deg" }}
          animate={{ scale: 1, rotate: "0deg" }}
          transition={{ duration: 1 }}
          src="images/logo-mastercraft.svg"
          className="absolute -top-8"
        />
      </div>
      <h1 className="font-extrabold lg:my-2 my-4">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="text-DarkGray my-2">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex justify-between mt-6">
        <Button name="Back this project" py="" />
        <button className="flex items-center lg:gap-2 lg:rounded-3xl lg:bg-gray-200 pr-2">
          <img src="images/icon-bookmark.svg" className="w-12" />
          <span className="hidden lg:block px-4"> Bookmark</span>
        </button>
      </div>
    </motion.div>
  );
}

export default MasterCraft;
