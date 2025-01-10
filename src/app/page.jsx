import AboutSection from "@/components/AboutSection";
import ContactPage from "@/components/ContactPage";
import HomeSection from "@/components/HomeSection";
import NavWrapper from "@/components/NavWrapper";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <main className="text-white">
     <NavWrapper />
     <HomeSection />
     <AboutSection />
     <PortfolioSection />
     <ContactPage />
     <div className="flex flex-wrap items-center bg-[#000000] border-t border-gray-700 md:justify-between justify-center select-none">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-gray-400 font-medium py-2">
            Copyright © <span className="">2025</span><br />
            <span className="">Designed & Developed by- Rahman Husain</span>
          </div>
        </div>
      </div>
    </main>
    
  );
}
