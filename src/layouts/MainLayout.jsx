import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#D7CEC7]">
      
      <Navbar />

      {/* This pushes footer down when content is short */}
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
