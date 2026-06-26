import { useTranslation } from 'react-i18next'

type FilterValue = 'all' | 'men' | 'women' | 'unisex'

interface FilterBarProps {
  active: FilterValue
  onChange: (value: FilterValue) => void
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  const { t } = useTranslation()

  const filters: { label: string; value: FilterValue }[] = [
    { label: t('filter.all'), value: 'all' },
    { label: t('filter.men'), value: 'men' },
    { label: t('filter.women'), value: 'women' },
    { label: t('filter.unisex'), value: 'unisex' },
  ]

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t('filter.label')}>
      {filters.map((f) => (
        <button
          key={f.value}
          id={`filter-btn-${f.value}`}
          onClick={() => onChange(f.value)}
          className={`rounded-none px-5 py-2 font-sans text-xs uppercase tracking-[0.12em] transition-all duration-200 ${
            active === f.value
              ? 'border border-gold bg-gold text-charcoal'
              : 'border border-charcoal-border text-cream-muted hover:border-gold hover:text-gold'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
