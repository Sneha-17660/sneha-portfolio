import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SystemProfile from "@/components/SystemProfile";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import HowIBuild from "@/components/HowIBuild";
import BuildLog from "@/components/BuildLog";
import About from "@/components/About";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SystemScan from "@/components/SystemScan";
import BuildModeOverlay from "@/components/BuildModeOverlay";
import BuildModeFrame from "@/components/BuildModeFrame";

export default function Home() {
  return (
    <>
      <Navbar />
      <BuildModeOverlay />
      <main id="main-content">
        <BuildModeFrame label="Hero">
          <Hero />
        </BuildModeFrame>
        <BuildModeFrame label="SystemProfile">
          <SystemProfile />
        </BuildModeFrame>
        <BuildModeFrame label="Work">
          <Work />
        </BuildModeFrame>
        <BuildModeFrame label="Experience">
          <Experience />
        </BuildModeFrame>
        <BuildModeFrame label="Stack">
          <Stack />
        </BuildModeFrame>
        <BuildModeFrame label="HowIBuild">
          <HowIBuild />
        </BuildModeFrame>
        <BuildModeFrame label="BuildLog">
          <BuildLog />
        </BuildModeFrame>
        <BuildModeFrame label="About">
          <About />
        </BuildModeFrame>
        <BuildModeFrame label="GitHub">
          <GitHubSection />
        </BuildModeFrame>
        <BuildModeFrame label="Contact">
          <Contact />
        </BuildModeFrame>
      </main>
      <Footer />
      <SystemScan />
    </>
  );
}
