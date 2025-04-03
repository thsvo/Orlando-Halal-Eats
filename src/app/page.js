import Celebrate from "@/components/Celebrate";
import Countdown from "@/components/Countdown";
import Header from "@/components/Header";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <br></br>
      <Countdown></Countdown>
      <br></br>
      <Celebrate></Celebrate>
    </div>
  );
}
