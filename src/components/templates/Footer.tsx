import { IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
import {
  arLogo,
  enLogo,
  emarat,
  facebook,
  insta,
  linked,
  saudi,
  x,
  youtube,
} from "../../constants/images";
import { IoMdMail } from "react-icons/io";
// import { useState } from "react";

const Footer = () => {
  // const [email, setEmail] = useState<string>("");
  const { t } = useTranslation();

  return (
    <footer id="contact" className="border-t border-[#323232]">
      <div className="container justify-center grid sm:grid-cols-3 py-8">
        <div className=" sm:mx-0">
          <h1 className="text-3xl p-5">{t("importantLinks")}</h1>
          <ul className="space-y-1">
            <li>
              <a
                className="relative group flex items-center gap-3 w-fit"
                href="#services">
                <IoIosArrowBack />
                <span className="relative group py-1">
                  {t("ourServices")}
                  <span className="absolute bottom-0 start-0 h-[1px] w-full bg-white scale-0 group-hover:scale-100 transition"></span>
                </span>
              </a>
            </li>
            <li>
              <a
                className="relative group flex items-center gap-3 w-fit"
                href="#">
                <IoIosArrowBack />
                <span className="relative group py-1">
                  {t("about")}
                  <span className="absolute bottom-0 start-0 h-[1px] w-full bg-white scale-0 group-hover:scale-100 transition"></span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-3xl py-5">{t("contact")}</h1>
          <ul className="space-y-1">
            <li>
              <a
                target="_blank"
                href="https://wa.me/+971561770746"
                className="flex items-center gap-3">
                <img src={emarat} alt="emarat" />
                <span dir="ltr" className="relative group py-1">
                  +971 56 177 0746
                  <span className="absolute bottom-0 start-0 h-[1px] w-full bg-white scale-0 group-hover:scale-100 transition"></span>
                </span>
                <div />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://wa.me/+966596620665"
                className="flex items-center gap-3">
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
                target="_blank"
                className="flex items-center gap-3 p-4 border-y border-y-[#323232] w-fit"
                href="mailto:Hello@darbproductions.com">
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
            <li>{t("followUsOn")}</li>
            <li className="hover:scale-110 transition">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61560568536456">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="hover:scale-110 transition">
              <a
                target="_blank"
                href="https://www.instagram.com/darbfilms?igsh=OXUyNnprNjZkbng5">
                <img src={insta} alt="instagram" />
              </a>
            </li>
            <li className="hover:scale-110 transition">
              <a
                target="_blank"
                href="https://x.com/i/flow/login?redirect_after_login=%2Fdarbyfilms">
                <img
                  className="bg-white w-[25px] p-1 rounded-full"
                  src={x}
                  alt="x"
                />
              </a>
            </li>
            <li className="hover:scale-110 transition">
              <a target="_blank" href="#">
                <img src={youtube} alt="youtube" />
              </a>
            </li>
            <li className="hover:scale-110 transition">
              <a target="_blank" href="#">
                <img src={linked} alt="linked" />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <div className="text-sm">
            <a href="#">
              <img
                className="w-24 mx-auto ltr:hidden"
                src={arLogo}
                alt="darb logo in arabic"
              />
            </a>
            <a href="#">
              <img
                className="w-24 mx-auto rtl:hidden"
                src={enLogo}
                alt="darb logo in english"
              />
            </a>
            <p>{t("mediaProductionDepartment")}</p>
            <p>{t("darbProductionsSubsidiary")}</p>
          </div>
          {/* <div className="text-lg my-8">
            <p>{t("subscribe")}</p>
            <div className="overflow-hidden w-3/4 lg:w-2/3 2xl:w-1/2 mx-auto relative rounded-full my-2">
              <a
                target="_blank"
                href={`mailto:Hello@darbproductions.com&subject=website&body=${email}`}
                className="absolute top-1/2 -translate-y-1/2 left-0 h-full w-16 rounded-full hover:scale-110 transition">
                <IoIosArrowBack className="rotate-180 text-black bg-[#b6b6b6] w-full h-full p-2 rounded-full" />
              </a>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 placeholder:capitalize text-black outline-none bg-white placeholder:text-[#b6b6b6] text-center rounded-full w-full p-2"
                type="text"
                placeholder={t("email")}
              />
            </div>
          </div> */}
        </div>
      </div>
      <div className="text-black flex gap-4 px-10 py-2 bg-[#f2f2f2] font-medium">
        <p>الحقوق محفوظة</p>
        <p>2024 درب برودكشنز</p>
      </div>
    </footer>
  );
};

export default Footer;
