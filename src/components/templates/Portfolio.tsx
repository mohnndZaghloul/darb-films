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
    <section className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:my-16">
      <div className="my-8 lg:my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full h-full" src={PortfolioImg3} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="relative w-fit mx-auto font-bold text-3xl sm:text-xl text-center py-4 group-hover:-translate-y-2 transition duration-300">
          {t("companyVideo")}
          <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition bg-white"/>
        </h3>
      </div>
      <div className="my-8 lg:my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full h-full" src={PortfolioImg2} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="relative w-fit mx-auto font-bold text-3xl sm:text-xl text-center py-4 group-hover:-translate-y-2 transition duration-300">
          {t("portraitPhotography")}
          <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition bg-white"/>
        </h3>
      </div>
      <div className="my-8 lg:my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full h-full" src={PortfolioImg1} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="relative w-fit mx-auto  font-bold text-3xl text-center py-4 group-hover:-translate-y-2 transition duration3500">
          {t("eventPhotography")}
          <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition bg-white"/>
        </h3>
      </div>
      <div className="my-8 lg:my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full h-full" src={PortfolioImg6} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="relative w-fit mx-auto font-bold text-3xl sm:text-xl text-center py-4 group-hover:-translate-y-2 transition duration-300">
          {t("aerialPhotography")}
          <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition bg-white"/>
        </h3>
      </div>
      <div className="my-8 lg:my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full h-full" src={PortfolioImg5} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="relative w-fit mx-auto font-bold text-3xl sm:text-xl text-center py-4 group-hover:-translate-y-2 transition duration-300">
          {t("podcastProduction")}
          <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition bg-white"/>
        </h3>
      </div>
      <div className="my-8 lg:my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full h-full" src={PortfolioImg4} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="relative w-fit mx-auto font-bold text-3xl sm:text-xl text-center py-4 group-hover:-translate-y-2 transition duration-300">
          {t("corporateMediaLibrary")}
          <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition bg-white"/>
        </h3>
      </div>
    </section>
  );
};

export default Portfolio;
