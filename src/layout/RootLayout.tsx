import Footer from "@/shared/Footer";
import NavBar from "@/shared/NavBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="font-body">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
