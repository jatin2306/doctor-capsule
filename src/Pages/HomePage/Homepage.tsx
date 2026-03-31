import Header from "../../Components/Header/Header";
import Home from "../Home/Home";
import Services from "../Services/Services";
import WellnessStrip from "../../Components/Strip/WellnessStrip";
import MetricPage from "../MetricPage/MetricPage";
import Footer from "../../Components/Footer/Footer";
const Homepage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="relative overflow-hidden bg-[#2b87de] text-white home-bg">
        <Header />

        <Home />
      </section>

      <Services />
      <div className="w-full pt-2">
        <WellnessStrip />
      </div>

      <MetricPage />
      <Footer />
    </div>
  );
};

export default Homepage;
