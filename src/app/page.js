import Cards from "@/components/Cards";
import Celebrate from "@/components/Celebrate";
import Contests from "@/components/Contests";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapView from "@/components/MapView";
import PageSection from "@/components/PageSection";
import Sponsors from "@/components/Sponsors";
import Ticket from "@/components/Ticket";


export default function Home() {
  return (
    <div>
      <Header></Header>

      <Hero></Hero>
      <br></br>
      <Countdown></Countdown>
      <br></br>
      <Celebrate></Celebrate>
      <br></br>
      <PageSection></PageSection>
      <br></br>
      <Cards></Cards>
      <br></br>
      <Ticket></Ticket>
      <br></br>
      <Contests></Contests>
      <br></br>
      <Sponsors></Sponsors>
      <br></br>
      {/* <MapView></MapView> */}
      <br></br>
      <Footer></Footer>
    </div>
  );
}
