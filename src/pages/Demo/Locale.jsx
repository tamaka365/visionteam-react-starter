import { useCallback } from "react";

import { useTranslation } from "react-i18next";

export default function Locale() {
  const { t, i18n } = useTranslation();

  const handleLocaleChange = useCallback(() => {
    i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
  }, [i18n]);

  return (
    <div>
      <h1>{t("hello_world")}</h1>
      <button onClick={handleLocaleChange}>{t("change_locale")}</button>
      <LanguageSwitcher />
    </div>
  );
}

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div className="select">
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
};
