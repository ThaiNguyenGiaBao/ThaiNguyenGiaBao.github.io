import bao from "../../assets/images/bao.jpg";
import styles from "./LandingPage.module.scss";

const WelcomeSection: React.FC = () => (
  <div
    className={`${styles.myStyle} w-4/5 flex justify-center items-center gap-3 flex-col-reverse lg:flex-row lg:px-20`}
  >
    <section className="w-full flex flex-col justify-center text-3xl gap-1">
      <h1 className={`${styles.myFont} font-bold mb-3 dark:text-cyan-400`}>
        Hi 👋, I'm Thai Nguyen Gia Bao
      </h1>
      <p className="text-xl">
        I am a second-year <b>Computer Science</b> student from Ho Chi Minh University of Technology (HCMUT)
      </p>
      
    </section>
    <div className="w-full flex justify-center items-center container">
      <img
        src={bao}
        alt="My Picture"
        style={{
          width: "clamp(200px, 100%, 400px)",
          height: "auto",
          borderRadius: "20px",
        }}
      />
    </div>
  </div>
);

export default WelcomeSection;
