import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      "exams.semester.questions.text" : "<strong>Nö</strong>",
      "Beratung": "counselling",
      "Alle Fächer": "All Subjects",
      "Starke Fächer in den Semesterprüfungen": "Strong subjects in your semester exams",
      "Betreuung von Patienten": "Caring for patients"
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