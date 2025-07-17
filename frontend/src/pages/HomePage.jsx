import Navbar from "../components/HomePage/Navbar";
import HeroSection from "../components/HomePage/HeroSection";
import WhyUsSection from "../components/HomePage/WhyUsSection";
import HowItWorksSection from "../components/HomePage/HowItWorksSection";
import Footer from "../components/HomePage/Footer";

export default function HomePage() {
    return (
        <div className="font-sans">
            <Navbar />
            <main>
                <HeroSection />
                <WhyUsSection />
                <HowItWorksSection />
            </main>
            <Footer />
        </div>
    );
}
