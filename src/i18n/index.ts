import spanish from './es.json'
import catalan from './ca.json'

export const getI18N = ({
  currentLocale = 'es'
}: {
  currentLocale?: string
}) => {
  if (currentLocale === 'es') return spanish
  if (currentLocale === 'ca') return catalan
  return spanish
}
