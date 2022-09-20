/**
 * Provides the t() function which returns the value stored for this given key (e.g. "i18n.ui.headline")
 * in the translation file.
 * The return value can be a string, a number, an array or an object.
 * In case there is no entry for this key, it returns the key.
 * @returns t(key: string): any function
 */
declare const useTranslation: () => {
    /**
     * Returns the value stored for this given key (e.g. "i18n.ui.headline")  in the translation file.
     * The return value can be a string, a number, an array or an object.
     * In case there is no entry for this key, it returns the key.
     * @param key the key for looking up the translation
     * @param view the mustache view for interpolating the template string
     * @returns the value stored for this key, could be a string, a number, an array or an object
     */
    t: (key: string, view?: object | undefined) => any;
};
export { useTranslation };
