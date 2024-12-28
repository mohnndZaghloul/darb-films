import img1 from "../../assets/services/Group.svg";
import img2 from "../../assets/services/Vector.svg";
import img3 from "../../assets/services/g2347_1_.svg";
import img4 from "../../assets/services/Group (1).svg";
import img5 from "../../assets/services/Layer_x0020_1_1_.svg";
import li from "../../assets/services/li.svg";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="text-center py-20 border-y-[2px] border-y-[#323232]">
      <h1 className="text-6xl font-bold">خدماتنا</h1>
      <p className="text-3xl my-4 pb-10">
        بخبراتنا المتراكمة في الانتاج الاعلامي نضمن لكم تجربة سلسلة ونتائج عالية
        الجودة
      </p>
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[17rem] xl:aspect-[213/349] px-5 py-6">
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
            className="absolute top-0 left-1/2 w-1/3 aspect-square bg-[#fdc966] bg-opacity-50 sm:bg-opacity-100 blur-3xl rounded-full"
          />
          <div>
            <img src={img2} alt="img" />
          </div>
          <h1 className="font-bold text-lg my-5">التصوير الفوتوغرافي</h1>
          <ul className="h-full space-y-5 mt-6">
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              التصوير الفوتوغرافي للإعلانات التجارية
            </li>
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              تصوير البورترية
            </li>
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              تصوير فعاليات الشركات
            </li>
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              التصوير المعماري
            </li>
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              التصوير المنتجات
            </li>
          </ul>
        </div>
        <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[17rem] xl:aspect-[213/349] px-5 py-6">
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
            className="absolute top-0 left-1/2 w-1/3 aspect-square bg-[#fdc966] bg-opacity-50 sm:bg-opacity-100 sm:opacity-100 blur-3xl rounded-full"
          />
          <div>
            <img src={img1} alt="img" />
          </div>
          <h1 className="font-semibold text-lg my-5">تصوير الفيديو </h1>
          <ul className="h-full space-y-5 mt-6">
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              انتاج الاعلانات التجارية
            </li>
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              تصوير البودكاست
            </li>
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              تصوير المقابلات
            </li>
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              انتاج وثائقيات الشركات
            </li>
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              إدارة الفعاليات
            </li>
          </ul>
        </div>
        <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[17rem] xl:aspect-[213/349] px-5 py-6">
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
            className="absolute top-0 left-1/2 w-1/3 aspect-square bg-[#fdc966] bg-opacity-50 sm:bg-opacity-100 sm:opacity-100 blur-3xl rounded-full"
          />
          <div>
            <img src={img3} alt="img" />
          </div>
          <h1 className="font-semibold text-lg my-5">
            المونتاج والخدع البصرية
          </h1>
          <ul className="h-full space-y-5 mt-6">
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              مونتاج الفيديو
            </li>
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              التلوين
            </li>
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              الخدع البصرية VFX
            </li>
          </ul>
        </div>
        <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[17rem] xl:aspect-[213/349] px-5 py-6">
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
            className="absolute top-0 left-1/2 w-1/3 aspect-square bg-[#fdc966] bg-opacity-50 sm:bg-opacity-100 sm:opacity-100 blur-3xl rounded-full"
          />
          <div>
            <img src={img4} alt="img" />
          </div>
          <h1 className="font-semibold text-lg my-5">التصوير الجوي</h1>
          <ul className="h-full space-y-5 mt-6">
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              تصوير المشاريع العقارية
            </li>
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              التصوير الفوتوغرافي الجوي
            </li>
          </ul>
        </div>
        <div className="relative mx-auto w-full overflow-hidden flex flex-col items-center text-start rounded-[1.25rem] border border-white h-full lg:max-w-[17rem] xl:aspect-[213/349] px-5 py-6">
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
            className="absolute top-0 left-1/2 w-1/3 aspect-square bg-[#fdc966] bg-opacity-50 sm:bg-opacity-100 sm:opacity-100 blur-3xl rounded-full"
          />
          <div>
            <img src={img5} alt="img" />
          </div>
          <h1 className="font-semibold text-lg my-5">البث المباشر</h1>
          <ul className="h-full space-y-5 mt-6">
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              البث المباشر عبر مواقع التواصل الاجتماعي
            </li>
            <li className="flex items-start gap-x-2">
              <img className="w-4 h-4" src={li} alt="li point" />
              البث المباشر عبر الأقمار الصناعية
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
