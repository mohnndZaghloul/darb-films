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

const Area = () => {
  return (
    <section className="text-center my-28">
      <h1 className="text-4xl my-20">
        نفخر بثقة كبرى العلامات التجارية في المنطقة
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        <div>
          <img className="w-full" src={AreaImg1} alt="area" />
        </div>
        <div>
          <img className="w-full" src={AreaImg2} alt="area" />
        </div>
        <div>
          <img className="w-full" src={AreaImg3} alt="area" />
        </div>
        <div>
          <img className="w-full" src={AreaImg4} alt="area" />
        </div>
        <div>
          <img className="w-full" src={AreaImg5} alt="area" />
        </div>
        <div>
          <img className="w-full" src={AreaImg6} alt="area" />
        </div>
        <div>
          <img className="w-full" src={AreaImg7} alt="area" />
        </div>
        <div>
          <img className="w-full" src={AreaImg8} alt="area" />
        </div>
        <div>
          <img className="w-full" src={AreaImg9} alt="area" />
        </div>
        <div>
          <img className="w-full" src={AreaImg10} alt="area" />
        </div>
        <div>
          <img className="w-full" src={AreaImg11} alt="area" />
        </div>
        <div>
          <img className="w-full" src={AreaImg12} alt="area" />
        </div>
      </div>
    </section>
  );
};

export default Area;
