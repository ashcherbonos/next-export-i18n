/**
 * the unified entry file for the exported and compiled node module
 */
import useLanguageQuery from './hooks/use-language-query';
import useSelectedLanguage from './hooks/use-selected-language';
import useLanguageSwitcherIsActive from './hooks/use-language-switcher-is-active';
import { useTranslation } from './hooks/use-translation';
import LanguageSwitcher from './components/language-switcher';
import i18n, { setupUserI18N } from "./index.js";
export { useLanguageQuery, useSelectedLanguage, useLanguageSwitcherIsActive, useTranslation, LanguageSwitcher, setupUserI18N };
export default i18n;
