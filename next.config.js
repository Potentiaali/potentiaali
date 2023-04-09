const nextTranslate = require('next-translate-plugin');
const i18nConfig = require("./i18n")

module.exports = nextTranslate({
    reactStrictMode: true,
    i18n: i18nConfig
    
})