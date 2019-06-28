import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      "exams.semester.questions.text" : "<strong>Nö</strong>",
      "Beratung": "counselling"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "de",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  })

  export default i18n