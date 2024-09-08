import CallingButton from "./Components/CallButton";
import Navbar from "./Components/Navbar";
import ScrollButton from "./Components/ScrollButton";
import GoogleMap from './Components/GoogleMap'

export default function Home() {
  return (
    <div className="w-full min-h-screen mt-28">
      <CallingButton call="8955330433" whatsapp="8955330433"/>
      <div className="h-screen"></div>
      <GoogleMap/>
      <ScrollButton/>
   </div>
  );
}