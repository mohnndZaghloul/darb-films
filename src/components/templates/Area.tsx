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

  return (
    <section className="text-center my-28">
      <h1 className="text-4xl my-20">{t("areaHeader")} </h1>
      <div className="relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {videos.map((link, index) => (
          <VideoComponent key={index} {...link} />
        ))}
      </div>
    </section>
  );
};

export default Area;
