import { IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
import {
  emarat,
  facebook,
  footerlogo,
  insta,
  linked,
  saudi,
  x,
  youtube,
} from "../../constants/images";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-[#323232]">
      <div className="container grid md:grid-cols-3 py-8">
        <div>
          <h1 className="text-3xl p-5">{t("importantLinks")}</h1>
          <ul className="space-y-1">
            <li>
              <a
                className="relative group flex items-center gap-3 w-fit py-1"
                href="#">
                <IoIosArrowBack />
                {t("ourServices")}
                <span className="absolute bottom-0 start-0 h-[1px] w-full bg-white scale-0 group-hover:scale-100 transition"></span>
              </a>
            </li>
            <li>
              <a
                className="relative group flex items-center gap-3 w-fit py-1"
                href="#">
                <IoIosArrowBack />
                {t("about")}
                <span className="absolute bottom-0 start-0 h-[1px] w-full bg-white scale-0 group-hover:scale-100 transition"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <h1 className="text-3xl py-5">{t("contact")}</h1>
          <ul className="space-y-1">
            <li>
              <a className="flex items-center gap-3" href="#">
                <img src={emarat} alt="emarat" />
                <span dir="ltr" className="relative group py-1">
                  +971 56 177 0746
                  <span className="absolute bottom-0 start-0 h-[1px] w-full bg-white scale-0 group-hover:scale-100 transition"></span>
                </span>
                <div />
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3" href="#">
                <img src={saudi} alt="saudi" />
                <span dir="ltr" className="relative group py-1">
                  +966 59 662 0665
                  <span className="absolute bottom-0 start-0 h-[1px] w-full bg-white scale-0 group-hover:scale-100 transition"></span>
                </span>
                <div />
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 p-4 border-y border-y-[#323232] w-fit"
                href="#">
                <IoMdMail />
                <span dir="ltr" className="relative group py-1">
                  Hello@darbproductions.com
                  <span className="absolute bottom-0 start-0 h-[1px] w-full bg-white scale-0 group-hover:scale-100 transition"></span>
                </span>
                <div />
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-2 py-4">
            <li>تابعنا على</li>
            <li className="hover:scale-110 transition">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="hover:scale-110 transition">
              <a href="#">
                <img src={insta} alt="instagram" />
              </a>
            </li>
            <li className="hover:scale-110 transition">
              <a href="#">
                <img
                  className="bg-white w-7 p-1 rounded-full"
                  src={x}
                  alt="x"
                />
              </a>
            </li>
            <li className="hover:scale-110 transition">
              <a href="#">
                <img src={youtube} alt="youtube" />
              </a>
            </li>
            <li className="hover:scale-110 transition">
              <a href="#">
                <img src={linked} alt="linked" />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <div className="text-sm">
            <img className="w-fit mx-auto" src={footerlogo} alt="darb logo" />
            <p>قسم الانتاج الاعلامي</p>
            <p>التابع لشركة دَرْب برودكشنز</p>
          </div>
          <div className="text-lg my-8">
            <p>اشترك معنا ليصلك كل جديد</p>
            <div className="overflow-hidden w-3/4 lg:w-2/3 2xl:w-1/2 mx-auto relative rounded-full my-2">
              <a
                href="#"
                className="absolute top-1/2 -translate-y-1/2 left-0 h-full w-16 rounded-full hover:scale-110 transition">
                <IoIosArrowBack className="rotate-180 text-black bg-[#b6b6b6] w-full h-full p-2 rounded-full" />
              </a>
              <input
                className="pe-10 text-black outline-none bg-white placeholder:text-[#b6b6b6] text-center rounded-full w-full p-2"
                type="text"
                placeholder={t("email")}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
