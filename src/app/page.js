import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MoviesPage from "./movies/page";
import MovieChatbot from "./components/MovieChatbot";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
  <>
  <Navbar/>
  <Banner/>
  <MoviesPage/>
  <MovieChatbot/>
  <WhyChooseUs/>
  <Footer/>
  </>
  );
}
