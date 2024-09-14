import Button from "./Button";

function MasterCraft() {
  return (
    <div className="text-center bg-white rounded-lg p-4 lg:p-8 relative -top-8 lg:-top-14 shadow-lg w-full">
      <div className="flex justify-center items-center">
        <img src="images/logo-mastercraft.svg" className="absolute -top-8" />
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
          <span className="hidden lg:block"> Bookmark</span>
        </button>
      </div>
    </div>
  );
}

export default MasterCraft;
