import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TravelMood from "@/components/TravelMood";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TravelMood />
      </main>
    </>
  );
}
