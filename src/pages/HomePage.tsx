import Home from "@/models/home/components/Home";
<<<<<<< HEAD
const HomePage = () => {
  return <Home />;
=======
import CategoryNavbar from "@/shared/CategoryNavbar";
import HomeFooter from "@/shared/HomeFooter";
import HomeNavBar from "@/shared/HomeNavBar";

const HomePage = () => {
  return (
    <>
      <HomeNavBar />
      <CategoryNavbar />
      <Home />
      <HomeFooter />
    </>
  );
>>>>>>> bc039b79347f96c7273b243094f83f690b956fac
};

export default HomePage;
