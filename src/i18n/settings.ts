export const fallbackLng = "ru";
// export const languages = [fallbackLng, "uz", "en"];
export const languages = [fallbackLng];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng: string = fallbackLng, ns: string | string[] = defaultNS) {
     return {
          supportedLngs: languages,
          fallbackLng,
          lng,
          fallbackNS: defaultNS,
          defaultNS,
          ns,
     };
}
