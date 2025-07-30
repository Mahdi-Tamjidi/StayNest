import ExclusiveOffers from "../components/ExclusiveOffers";
import FeaturedDestinations from "../components/FeaturedDestinations";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <ExclusiveOffers />
      <Testimonial />
    </>
  );
};

export default Home;
