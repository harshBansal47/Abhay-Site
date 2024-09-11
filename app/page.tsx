import CallingButton from "./Components/CallButton";
import Navbar from "./Components/Navbar";
import ScrollButton from "./Components/ScrollButton";
import GoogleMap from './Components/GoogleMap'
import Services from "./Components/Services";
import Misclenious from './Components/Misclenius';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Components/Carousel";
import AboutUs from "./Components/AboutUs";


export default function Home() {
  return (
    <div className="w-full min-h-screen mt-[96px]">
      <Carousel/> 
      <AboutUs/> 
       <Services/>
      <Misclenious/>
      <GoogleMap/>
      <ScrollButton/>
      <CallingButton call="8955330433" whatsapp="8955330433"/>
   </div>
  );
}
