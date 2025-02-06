import { motion, useScroll, useTransform } from "framer-motion";
import {
  hero,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
} from "../../constants/images";
import HeroIcon from "../ui/HeroIcon";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    offset: ["0 0", "1 1"],
  });

  const y = useTransform(scrollYProgress, [0, 0.1], [0, 50]);
  const y2 = useTransform(scrollYProgress, [0, 0.2], [0, 150]);

  return (
    <section className="sm:overflow-hidden container flex flex-col-reverse md:flex-row justify-between items-center pt-28">
      <motion.div
        initial={{ x: 100, opacity: 0, scale: 0.8 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 3, type: "spring" }}
        style={{ y: y2 }}
        className="sm:w-[45%] max-w-[24rem]  capitalize">
        <h1 className="text-[3.1rem] font-[900]">{t("darbFilms")}</h1>
        <p className="text-[1.4rem] leading-10 py-4">{t("heroText")}</p>
        <div className="flex text-lg font-bold items-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="w-full max-w-[200px] p-2 rounded-lg border-white border bg-white text-black text-center cursor-pointer">
            {t("contact")}
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="w-full max-w-[200px] p-2 rounded-lg border-white border text-center cursor-pointer">
            {t("ourServices")}
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        className="bg-white bg-opacity-15 w-1/4 h-1/4 absolute rounded-full blur-3xl top-20 end-0"
      />
      <motion.div
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        style={{ y }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 3, type: "spring" }}
        className="overflow-hidden sm:overflow-visible relative ltr:!scale-x-[-1]">
        <HeroIcon
          icon={icon1}
          position="left-[10%] top-1/4"
          title={t("liveBroadcast")}
        />
        <HeroIcon
          icon={icon2}
          position="right-[20%] top-[10%]"
          title={t("photography")}
        />
        <HeroIcon
          icon={icon3}
          position="right-[13%] bottom-[30%]"
          title={t("aerialPhotography")}
        />
        <HeroIcon
          icon={icon4}
          position="top-0 left-1/3"
          title={t("videography")}
        />
        <HeroIcon
          icon={icon5}
          position="bottom-[30%] left-[6%]"
          title={t("editingAndVisual")}
        />
        <img src={hero} alt="hero image" />
        <span className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black z-20"></span>
      </motion.div>
    </section>
  );
};

export default Hero;
