import Cards from "@/components/Cards";
import Celebrate from "@/components/Celebrate";
import Countdown from "@/components/Countdown";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PageSection from "@/components/PageSection";


export default function Home() {
  return (
    <div>
      <Header></Header>

      <Hero></Hero>
      <br></br>
      <Countdown></Countdown>
      <br></br>
      <Celebrate></Celebrate>
      <Cards></Cards>
      <br></br>
      <PageSection></PageSection>
      <br></br>

    </div>
  );
}
