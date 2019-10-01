import React, { useState } from 'react'
import i18next from 'i18next'

const LanguageSymbol = () => {
    const [language, setLanguage] = useState(false)
    return (
            <div className="mt-2 mr-2"
            style={{ cursor: 'pointer' }}
             onClick={() => { i18next.changeLanguage(!language? 'en' : 'de'); setLanguage(!language) } }
            >
            {language? 'DE' : 'EN'}
            </div>
    )
}

export default LanguageSymbol