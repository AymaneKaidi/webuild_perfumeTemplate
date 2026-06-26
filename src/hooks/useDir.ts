import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Sets dir + lang on <html> whenever the active language changes.
 * Arabic → dir="rtl"; English/French → dir="ltr".
 * Tailwind logical properties (ms-, me-, border-s, border-e, start-, end-)
 * automatically flip based on the html[dir] attribute.
 */
export default function useDir(): 'ltr' | 'rtl' {
  const { i18n } = useTranslation()
  const dir = i18n.dir(i18n.language) as 'ltr' | 'rtl'

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = i18n.language
  }, [dir, i18n.language])

  return dir
}
