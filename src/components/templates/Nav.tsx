import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";
import cookies from "js-cookie";

import { navLogo } from "../../constants/images";
import langLogo from "../../assets/navbar/lang.svg";

const Nav = () => {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(
    cookies.get("i18next") || "ar"
  );

  useEffect(() => {
    i18next.changeLanguage(currentLang);
    window.document.dir = i18n.dir();
  }, [currentLang]);

  return (
    <header>
      <nav className="max-h-[5.6rem] py-3 border-b-[2px] border-[#323232]">
        <div className="container flex justify-between items-center">
          <a href="#">
            <img
              className="h-16 md:h-[4.3rem]"
              src={navLogo}
              alt="darb filmes logo"
            />
          </a>
          <div>
            <ul className="hidden md:flex justify-between items-center capitalize text-[20px] font-light">
              <li className="relative group">
                <span className="absolute bottom-0 left-0 w-full h-[1px] scale-0 group-hover:scale-100 bg-white transition"></span>
                <a href="#">{t("home")}</a>
              </li>
              <li>
                <span className="w-[1px] h-4 block mx-3 bg-white"></span>
              </li>
              <li className="relative group">
                <span className="absolute bottom-0 left-0 w-full h-[1px] scale-0 group-hover:scale-100 bg-white transition"></span>
                <a href="#services">{t("services")}</a>
              </li>
              <li>
                <span className="w-[1px] h-4 block mx-3 bg-white"></span>
              </li>
              <li className="relative group">
                <span className="absolute bottom-0 left-0 w-full h-[1px] scale-0 group-hover:scale-100 bg-white transition"></span>
                <a href="#about">{t("about")}</a>
              </li>
              <li>
                <span className="w-[1px] h-4 block mx-3 bg-white"></span>
              </li>
              <li className="relative group">
                <span className="absolute bottom-0 left-0 w-full h-[1px] scale-0 group-hover:scale-100 bg-white transition"></span>
                <a href="#contact">{t("contact")}</a>
              </li>
              <li>
                <span className="w-[1px] h-4 block mx-3 bg-white"></span>
              </li>
              <li className="relative group">
                <span className="absolute bottom-0 left-0 w-full h-[1px] scale-0 group-hover:scale-100 bg-white transition"></span>
                <button
                  className="flex justify-center items-center gap-2"
                  onClick={() => {
                    if (currentLang == "en") {
                      setCurrentLang("ar");
                    } else {
                      setCurrentLang("en");
                    }
                  }}>
                  {currentLang == "ar" ? "English" : "Arabic"}
                  <img className="w-4" src={langLogo} alt="language" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
