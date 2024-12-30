import { useTranslation } from "react-i18next";
import VideoComponent from "../ui/VideoComponent";

const videos = [
  "https://vimeo.com/682332585",
  "https://vimeo.com/682332427",
  "https://vimeo.com/manage/videos/587933499",
  "https://vimeo.com/manage/videos/713308855",
  "https://vimeo.com/383758022",
  "https://vimeo.com/manage/videos/778239939",
  "https://vimeo.com/532827819",
  "https://vimeo.com/478491757",
  "https://vimeo.com/478496462",
  "https://vimeo.com/379438132",
  "https://vimeo.com/379438311",
  "https://vimeo.com/778240217",
];

const Area = () => {
  const { t } = useTranslation();

  return (
    <section className="text-center my-28">
      <h1 className="text-4xl my-20">{t("areaHeader")} </h1>
      <div className="relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {videos.map((link, index) => (
          <VideoComponent key={index} URL={link} />
        ))}
      </div>
    </section>
  );
};

export default Area;
