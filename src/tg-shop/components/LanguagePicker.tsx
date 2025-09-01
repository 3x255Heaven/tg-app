import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { languages } from "@constants/languages";

const LanguagePicker = () => {
  const [isLanguagePickerOpen, setLanguagePickerOpen] = useState(false);
  const { i18n } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setLanguagePickerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => {
          setLanguagePickerOpen(!isLanguagePickerOpen);
        }}
        className="cursor-pointer flex justify-center items-center text-center"
      >
        {i18n.language === "sr" ? (
          <div className="border border-[#BB8F32] text-[#BB8F32] rounded-full p-1.5">
            SR
          </div>
        ) : (
          <div className="border border-[#BB8F32] text-[#BB8F32] rounded-full p-1.5">
            EN
          </div>
        )}
      </button>
      {isLanguagePickerOpen && (
        <div className="absolute top-[40px] left-[-14px] mt-2 w-18 border border-[#BB8F32] rounded-lg shadow-lg z-50">
          <ul className="py-2 text-gray-700">
            {Object.keys(languages).map((language: any) => {
              return (
                <li
                  key={language}
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => {
                    i18n.changeLanguage(language);
                    setLanguagePickerOpen(false);
                  }}
                >
                  {language === "sr" ? (
                    <div className="border hover:bg-[#BB8F32] hover:text-white border-[#BB8F32] text-[#BB8F32] rounded-full p-1.5">
                      SR
                    </div>
                  ) : (
                    <div className="border hover:bg-[#BB8F32] hover:text-white border-[#BB8F32] text-[#BB8F32] rounded-full p-1.5">
                      EN
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;
