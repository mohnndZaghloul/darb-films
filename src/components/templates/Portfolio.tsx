import { useTranslation } from "react-i18next";
import {
  PortfolioImg1,
  PortfolioImg2,
  PortfolioImg3,
  PortfolioImg4,
  PortfolioImg5,
  PortfolioImg6,
} from "../../constants/images";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 my-16">
      <div className="my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full" src={PortfolioImg3} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black translate-y-full group-hover:translate-y-0 transition duration-500" />
        </div>
        <h3 className="group-hover:opacity-100 opacity-0 transition duration-300 font-bold text-xl text-center py-4">
          {t("companyVideo")}
        </h3>
      </div>
      <div className="my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full" src={PortfolioImg2} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black translate-y-full group-hover:translate-y-0 transition duration-500" />
        </div>
        <h3 className="group-hover:opacity-100 opacity-0 transition duration-300 font-bold text-xl text-center py-4">
          {t("portraitPhotography")}
        </h3>
      </div>
      <div className="my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full" src={PortfolioImg1} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black translate-y-full group-hover:translate-y-0 transition duration-500" />
        </div>
        <h3 className="group-hover:opacity-100 opacity-0 transition duration-300  font-bold text-xl text-center py-4">
          {t("eventPhotography")}
        </h3>
      </div>
      <div className="my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full" src={PortfolioImg6} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black translate-y-full group-hover:translate-y-0 transition duration-500" />
        </div>
        <h3 className="group-hover:opacity-100 opacity-0 transition duration-300 font-bold text-xl text-center py-4">
          {t("aerialPhotography")}
        </h3>
      </div>
      <div className="my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full" src={PortfolioImg5} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black translate-y-full group-hover:translate-y-0 transition duration-500" />
        </div>
        <h3 className="group-hover:opacity-100 opacity-0 transition duration-300 font-bold text-xl text-center py-4">
          {t("podcastProduction")}
        </h3>
      </div>
      <div className="my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full" src={PortfolioImg4} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black translate-y-full group-hover:translate-y-0 transition duration-500" />
        </div>
        <h3 className="group-hover:opacity-100 opacity-0 transition duration-300 font-bold text-xl text-center py-4">
          {t("corporateMediaLibrary")}
        </h3>
      </div>
    </section>
  );
};

export default Portfolio;
