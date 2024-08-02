import WelcomeSection from "./WelcomeSection";
import AboutSection from "./About";
// import DummyPage from "./DummyPage";
import Contact from "./Contact";

const LandingPage: React.FC = function () {
  return (
    <div className="flex flex-col items-center w-full p-0 py-3 dark:text-slate-100">
      <WelcomeSection />
      <AboutSection />
      {/* <DummyPage /> */}
      <Contact />
    </div>
  );
};

export default LandingPage;