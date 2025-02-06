// @ts-nocheck
import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";
import cookies from "js-cookie";

import { navLogo, navLogoEn } from "../../constants/images";
import langLogo from "../../assets/navbar/lang.svg";

import { motion, useScroll } from "framer-motion";

const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(
    cookies.get("i18next") || "ar"
  );

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    scrollY.onChange(() => update());
  }, []);

  useEffect(() => {
    console.log(currentLang);
    i18next.changeLanguage(currentLang);
    window.document.dir = i18n.dir(currentLang);
  }, [currentLang]);

  return (
    <header className="fixed top-0 w-full z-50">
      <motion.nav
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className="bg-black bg-opacity-80 max-h-[5.6rem] py-3 border-b-[2px] border-[#323232]">
        <div className="container flex justify-between items-center">
          <a className="ltr:hidden" href="#">
            <img
              className="h-16 md:h-[4.3rem]"
              src={navLogo}
              alt="darb filmes logo"
            />
          </a>
          <a className="rtl:hidden" href="#">
            <img
              className="h-16 md:h-[4.3rem]"
              src={navLogoEn}
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
            <div className="md:hidden text-xl">
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
                <img className="w-5" src={langLogo} alt="language" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Nav;
