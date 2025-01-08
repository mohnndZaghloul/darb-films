import { useTranslation } from "react-i18next";
import VideoComponent from "../ui/VideoComponent";
import {
  AreaImg1,
  AreaImg2,
  AreaImg3,
  AreaImg4,
  AreaImg5,
  AreaImg6,
  AreaImg7,
  AreaImg8,
  AreaImg9,
  AreaImg10,
  AreaImg11,
  AreaImg12,
} from "../../constants/images";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const videos = [
  {
    URL: "https://vimeo.com/478491757",
    thumbnail: AreaImg4,
  },
  {
    URL: "https://vimeo.com/682332585",
    thumbnail: AreaImg3,
  },
  {
    URL: "https://vimeo.com/682332427",
    thumbnail: AreaImg2,
  },
  {
    URL: "https://vimeo.com/manage/videos/713308855",
    thumbnail: AreaImg1,
  },
  {
    URL: "https://vimeo.com/379438311",
    thumbnail: AreaImg8,
  },
  {
    URL: "https://vimeo.com/778240217",
    thumbnail: AreaImg7,
  },
  {
    URL: "https://vimeo.com/manage/videos/778239939",
    thumbnail: AreaImg6,
  },
  {
    URL: "https://vimeo.com/532827819",
    thumbnail: AreaImg5,
  },
  {
    URL: "https://vimeo.com/383758022",
    thumbnail: AreaImg12,
  },
  {
    URL: "https://vimeo.com/manage/videos/587933499",
    thumbnail: AreaImg11,
  },
  {
    URL: "https://vimeo.com/478496462",
    thumbnail: AreaImg10,
  },
  {
    URL: "https://vimeo.com/379438132",
    thumbnail: AreaImg9,
  },
];

const Area = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const y = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.4], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={ref} id="about" className="text-center my-20">
      <motion.h1
        style={{ y, opacity }}
        className="container text-[2rem] my-8 sm:my-20">
        {t("areaHeader")}
      </motion.h1>
      <motion.div
        style={{ y: y2, opacity: opacity2 }}
        className="relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {videos.map((link, index) => (
          <VideoComponent key={index} {...link} />
        ))}
      </motion.div>
    </section>
  );
};

export default Area;
