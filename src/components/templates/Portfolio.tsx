import {
  PortfolioImg1,
  PortfolioImg2,
  PortfolioImg3,
  PortfolioImg4,
  PortfolioImg5,
  PortfolioImg6,
} from "../../constants/images";

const Portfolio = () => {
  return (
    <section className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 my-16">
      <div className="my-14">
        <div className="relative w-full">
          <img className="w-full" src={PortfolioImg3} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="font-bold text-xl text-center py-4">فيديو الشركات </h3>
      </div>
      <div className="my-14">
        <div className="relative w-full">
          <img className="w-full" src={PortfolioImg2} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="font-bold text-xl text-center py-4">تصوير البورتريه</h3>
      </div>
      <div className="my-14">
        <div className="relative w-full">
          <img className="w-full" src={PortfolioImg1} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="font-bold text-xl text-center py-4">تصوير الفعاليات</h3>
      </div>
      <div className="my-14">
        <div className="relative w-full">
          <img className="w-full" src={PortfolioImg6} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="font-bold text-xl text-center py-4">التصوير الجوي </h3>
      </div>
      <div className="my-14">
        <div className="relative w-full">
          <img className="w-full" src={PortfolioImg5} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="font-bold text-xl text-center py-4">انتاج البودكاست</h3>
      </div>
      <div className="my-14">
        <div className="relative w-full">
          <img className="w-full" src={PortfolioImg4} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="font-bold text-xl text-center py-4">
          بناء مكتبة صور وفيديو الشركات
        </h3>
      </div>
    </section>
  );
};

export default Portfolio;
