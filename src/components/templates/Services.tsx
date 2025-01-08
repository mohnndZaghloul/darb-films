import img1 from "../../assets/services/Group.svg";
import img2 from "../../assets/services/Vector.svg";
import img3 from "../../assets/services/g2347_1_.svg";
import img4 from "../../assets/services/Group (1).svg";
import img5 from "../../assets/services/Layer_x0020_1_1_.svg";
import li from "../../assets/services/li.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const Services = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const yMini = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  const yMini2 = useTransform(scrollYProgress, [0.1, 0.2], [50, 0]);
  const yMini3 = useTransform(scrollYProgress, [0.2, 0.3], [50, 0]);
  const opacityMini = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const opacityMini2 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const opacityMini3 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  const y = useTransform(scrollYProgress, [0.1, 0.35], [80, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.6], [80, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.85], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);

  return (
    <div id="services" ref={ref}>
      <section className="sm:hidden text-center py-10 border-y-[2px] border-y-[#323232]">
        <motion.h1
          style={{ y: yMini, opacity: opacityMini }}
          className="container text-[3.1rem] font-bold">
          {t("ourServices")}
        </motion.h1>
        <motion.p
          style={{ y: yMini2, opacity: opacityMini2 }}
          className="container text-[1.8rem] my-4 pb-10">
          {t("servicesHeader")}
        </motion.p>
        <motion.div
          style={{ y: yMini3, opacity: opacityMini3 }}
          className="px-10 2xl:container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[18rem] xl:aspect-[213/349] px-10 sm:px-4 py-10 sm:py-6">
            <motion.div
              initial={{ scaleX: 0, x: "-50%" }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-[1px] left-1/2 h-[2px] w-1/3 bg-white"
            />
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 left-1/2 w-1/2 bg-[#fdc966] shadow-[0px_10px_140px_18px_#fdc966] rounded-full"
            />

            <div>
              <img src={img5} alt="img" />
            </div>
            <h1 className="font-bold text-3xl sm:text-base text-center my-5">
              {t("photography")}
            </h1>
            <ul className="h-full w-full text-2xl sm:text-sm space-y-4 mt-6">
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("photographyLi1")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("photographyLi2")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("photographyLi3")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("photographyLi4")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("photographyLi5")}</span>
              </li>
            </ul>
          </div>
          <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[18rem] xl:aspect-[213/349] px-10 sm:px-4 py-10 sm:py-6">
            <motion.div
              initial={{ scaleX: 0, x: "-50%" }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-[1px] left-1/2 h-[2px] w-1/3 bg-white"
            />
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 left-1/2 w-1/2 bg-[#fdc966] shadow-[0px_10px_140px_18px_#fdc966] rounded-full"
            />

            <div>
              <img src={img2} alt="img" />
            </div>
            <h1 className="font-bold text-3xl sm:text-base text-center my-5">
              {t("videography")}{" "}
            </h1>
            <ul className="h-full w-full text-2xl sm:text-sm space-y-4 mt-6">
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("videographyLi1")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("videographyLi2")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("videographyLi3")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("videographyLi4")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("videographyLi5")}</span>
              </li>
            </ul>
          </div>
          <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[18rem] xl:aspect-[213/349] px-10 sm:px-4 py-10 sm:py-6">
            <motion.div
              initial={{ scaleX: 0, x: "-50%" }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-[1px] left-1/2 h-[2px] w-1/3 bg-white"
            />
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 left-1/2 w-1/2 bg-[#fdc966] shadow-[0px_10px_140px_18px_#fdc966] rounded-full"
            />

            <div>
              <img src={img3} alt="img" />
            </div>
            <h1 className="font-bold text-3xl sm:text-base text-center my-5">
              {t("editingAndVisual")}
            </h1>
            <ul className="h-full w-full text-2xl sm:text-sm space-y-4 mt-6">
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("editingLi1")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("editingLi2")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("editingLi3")}</span>
              </li>
            </ul>
          </div>
          <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[18rem] xl:aspect-[213/349] px-10 sm:px-4 py-10 sm:py-6">
            <motion.div
              initial={{ scaleX: 0, x: "-50%" }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-[1px] left-1/2 h-[2px] w-1/3 bg-white"
            />
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 left-1/2 w-1/2 bg-[#fdc966] shadow-[0px_10px_140px_18px_#fdc966] rounded-full"
            />

            <div>
              <img src={img4} alt="img" />
            </div>
            <h1 className="font-bold text-3xl sm:text-base text-center my-5">
              {t("aerialPhotography")}
            </h1>
            <ul className="h-full w-full text-2xl sm:text-sm space-y-4 mt-6">
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("aerialLi1")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("aerialLi2")}</span>
              </li>
            </ul>
          </div>
          <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[18rem] xl:aspect-[213/349] px-10 sm:px-4 py-10 sm:py-6">
            <motion.div
              initial={{ scaleX: 0, x: "-50%" }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-[1px] left-1/2 h-[2px] w-1/3 bg-white"
            />
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 left-1/2 w-1/2 bg-[#fdc966] shadow-[0px_10px_140px_18px_#fdc966] rounded-full"
            />

            <div>
              <img src={img1} alt="img" />
            </div>
            <h1 className="font-bold text-3xl sm:text-base text-center my-5">
              {t("liveBroadcast")}
            </h1>
            <ul className="h-full w-full text-2xl sm:text-sm space-y-4 mt-6">
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("broadcastLi1")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("broadcastLi2")}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
      <section className="hidden sm:block text-center py-10 border-y-[2px] border-y-[#323232]">
        <motion.h1
          style={{ y: y, opacity: opacity }}
          className="container text-[3.1rem] font-bold">
          {t("ourServices")}
        </motion.h1>
        <motion.p
          style={{ y: y2, opacity: opacity2 }}
          className="container text-[1.8rem] my-4 pb-10">
          {t("servicesHeader")}
        </motion.p>
        <motion.div
          style={{ y: y3, opacity: opacity3 }}
          className="px-10 2xl:container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[18rem] xl:aspect-[213/349] px-10 sm:px-4 py-10 sm:py-6">
            <motion.div
              initial={{ scaleX: 0, x: "-50%" }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-[1px] left-1/2 h-[2px] w-1/3 bg-white"
            />
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 left-1/2 w-1/2 bg-[#fdc966] shadow-[0px_10px_140px_18px_#fdc966] rounded-full"
            />

            <div>
              <img src={img5} alt="img" />
            </div>
            <h1 className="font-bold text-3xl sm:text-base text-center my-5">
              {t("photography")}
            </h1>
            <ul className="h-full w-full text-2xl sm:text-sm space-y-4 mt-6">
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("photographyLi1")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("photographyLi2")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("photographyLi3")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("photographyLi4")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("photographyLi5")}</span>
              </li>
            </ul>
          </div>
          <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[18rem] xl:aspect-[213/349] px-10 sm:px-4 py-10 sm:py-6">
            <motion.div
              initial={{ scaleX: 0, x: "-50%" }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-[1px] left-1/2 h-[2px] w-1/3 bg-white"
            />
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 left-1/2 w-1/2 bg-[#fdc966] shadow-[0px_10px_140px_18px_#fdc966] rounded-full"
            />

            <div>
              <img src={img2} alt="img" />
            </div>
            <h1 className="font-bold text-3xl sm:text-base text-center my-5">
              {t("videography")}{" "}
            </h1>
            <ul className="h-full w-full text-2xl sm:text-sm space-y-4 mt-6">
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("videographyLi1")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("videographyLi2")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("videographyLi3")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("videographyLi4")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("videographyLi5")}</span>
              </li>
            </ul>
          </div>
          <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[18rem] xl:aspect-[213/349] px-10 sm:px-4 py-10 sm:py-6">
            <motion.div
              initial={{ scaleX: 0, x: "-50%" }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-[1px] left-1/2 h-[2px] w-1/3 bg-white"
            />
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 left-1/2 w-1/2 bg-[#fdc966] shadow-[0px_10px_140px_18px_#fdc966] rounded-full"
            />

            <div>
              <img src={img3} alt="img" />
            </div>
            <h1 className="font-bold text-3xl sm:text-base text-center my-5">
              {t("editingAndVisual")}
            </h1>
            <ul className="h-full w-full text-2xl sm:text-sm space-y-4 mt-6">
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("editingLi1")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("editingLi2")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("editingLi3")}</span>
              </li>
            </ul>
          </div>
          <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[18rem] xl:aspect-[213/349] px-10 sm:px-4 py-10 sm:py-6">
            <motion.div
              initial={{ scaleX: 0, x: "-50%" }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-[1px] left-1/2 h-[2px] w-1/3 bg-white"
            />
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 left-1/2 w-1/2 bg-[#fdc966] shadow-[0px_10px_140px_18px_#fdc966] rounded-full"
            />

            <div>
              <img src={img4} alt="img" />
            </div>
            <h1 className="font-bold text-3xl sm:text-base text-center my-5">
              {t("aerialPhotography")}
            </h1>
            <ul className="h-full w-full text-2xl sm:text-sm space-y-4 mt-6">
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("aerialLi1")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("aerialLi2")}</span>
              </li>
            </ul>
          </div>
          <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[18rem] xl:aspect-[213/349] px-10 sm:px-4 py-10 sm:py-6">
            <motion.div
              initial={{ scaleX: 0, x: "-50%" }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-[1px] left-1/2 h-[2px] w-1/3 bg-white"
            />
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 left-1/2 w-1/2 bg-[#fdc966] shadow-[0px_10px_140px_18px_#fdc966] rounded-full"
            />

            <div>
              <img src={img1} alt="img" />
            </div>
            <h1 className="font-bold text-3xl sm:text-base text-center my-5">
              {t("liveBroadcast")}
            </h1>
            <ul className="h-full w-full text-2xl sm:text-sm space-y-4 mt-6">
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("broadcastLi1")}</span>
              </li>
              <li className="flex items-start gap-x-2">
                <img className="w-4 h-4" src={li} alt="li point" />
                <span className="">{t("broadcastLi2")}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
