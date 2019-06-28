import React, { useState } from 'react'
import i18next from 'i18next'

const LanguageSymbol = () => {
    const [language, setLanguage] = useState(false)
    return (
            <div className="mt-2 mr-2"
            style={{ fontSize: '1.2em' , cursor: 'pointer' }}
             onClick={() => { i18next.changeLanguage(!language? 'en' : 'de'); setLanguage(!language) } }
            >
            {language? 'en' : 'de'}
            </div>
    )
}

export default LanguageSymbol