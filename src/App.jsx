import MasterCraft from "./components/MasterCraft";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Project from "./components/Project";
// import ExpandableCard from "./components/Expand";

function App() {
  return (
    <div className="font-Custom">
      <Navbar />
      <div className="flex justify-center items-center lg:mx-auto lg:w-1/2 flex-col mx-4 gap-4">
        <MasterCraft />
        <Info />
        <Project />
        {/* <ExpandableCard /> */}
        {/* check how to collapse and all with framer */}
        <p className="text-ModerateCyan text-sm mb-2">coded by vivian</p>
      </div>
    </div>
  );
}

export default App;
