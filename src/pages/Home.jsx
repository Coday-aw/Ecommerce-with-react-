import BestSeller from "../components/BestSeller/BestSeller";
import { Hero } from "../components/Hero/Hero";
import Offers from "../components/Offers/Offers";

function Home() {
  return (
    <div className="page-container">
      <Hero />
      <BestSeller />
      <Offers />
    </div>
  );
}
export default Home;
