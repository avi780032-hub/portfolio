import {profile,skill} from"./data";

import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar profile={profile}/>
      <Hero profile={profile}/>
      <About about ={about}/>
    </>
  );
}

export default App;