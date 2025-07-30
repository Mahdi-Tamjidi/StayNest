import ExclusiveOffers from "../components/ExclusiveOffers";
import FeaturedDestinations from "../components/FeaturedDestinations";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <ExclusiveOffers />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default Home;
