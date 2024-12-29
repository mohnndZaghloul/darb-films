import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";
import cookies from "js-cookie";

import logo from "../../assets/navbar/logo.svg";
import logoTitle from "../../assets/navbar/title.svg";
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
      <nav className="max-h-[100px] py-4 border-b-[2px] border-[#323232]">
        <div className="container flex justify-between items-center">
          <a href="#" className="flex items-center capitalize gap-2">
            <img src={logo} alt="darb filmes logo" />
            <img src={logoTitle} alt="darb filmes" />
          </a>
          <div>
            <ul className="hidden md:flex justify-between items-center capitalize text-lg font-light">
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
                  {currentLang == "ar" ? "English" : "العربية"}
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
