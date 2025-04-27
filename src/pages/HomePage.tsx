import Home from "@/models/home/components/Home";
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
};

export default HomePage;
