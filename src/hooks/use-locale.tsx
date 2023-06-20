import { localeEn, localePt } from "@global/locale";
import { Locale } from "@global/types";
import { locale } from "expo-localization";

export function useLocale() {
  const appLocale: { [key: string]: Locale } = {
    "en-US": localeEn,
    "pt-BR": localePt,
  };

  return appLocale[locale] || localePt;
}
