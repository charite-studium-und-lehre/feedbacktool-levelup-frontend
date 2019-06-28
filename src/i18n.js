import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      "foobar" : "<p>Auf dieser Seite findest du eine Übersicht zu deinen stärkeren und schwächeren Fächern in den Semesterprüfungen und dem PTM. Die Auswertung basiert auf den Ergebnissen aller zurückliegenden Semesterprüfungen und dem Ergebnis desaktuellen PTMs.</p><strong>Wichtig:</strong><p>Die Anzahl der gestellten Fragen pro Fach kann sich durch die Verteilung der Fächer im Curriculum und bei der Auswahl der MC-Fragen in den Klausuren stark unterscheiden. Weiterhin findet keine Gewichtung des Rankings der Fächer nach schweren und leichten Fragen statt.</p>"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  })

  export default i18n