import { motion } from "framer-motion";
import hero from "../../assets/hero/hero.svg";

const Hero = () => {
  return (
    <section className="overflow-hidden container flex flex-col-reverse sm:flex-row justify-center items-center">
      <div className="sm:w-[45%] max-w-[470px]">
        <h1 className="text-5xl font-bold">درب فيلمز</h1>
        <p className="text-2xl leading-10 py-4">
          شركة الانتاج الاعلامي الرائدة في المملكة العربية السعودية ودولة
          الإمارات العربية المتحدة
        </p>
        <div className="flex text-lg font-bold items-center gap-4">
          <button className="w-full max-w-[200px] p-2 rounded-lg border-white border bg-white text-black">
            تواصل معنا
          </button>
          <button className="w-full max-w-[200px] p-2 rounded-lg border-white border">
            خدماتنا
          </button>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        className="bg-white bg-opacity-20 w-1/4 h-1/4 absolute rounded-full blur-3xl top-20 end-0"
      />
      <div className="relative w-[55%]">
        <img src={hero} alt="hero image" />
        <span className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-black"></span>
      </div>
    </section>
  );
};

export default Hero;
