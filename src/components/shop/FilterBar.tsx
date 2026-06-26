type FilterValue = 'all' | 'men' | 'women' | 'unisex'

interface FilterBarProps {
  active: FilterValue
  onChange: (value: FilterValue) => void
}

const filters: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Men', value: 'men' },
  { label: 'Women', value: 'women' },
  { label: 'Unisex', value: 'unisex' },
]

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter fragrances">
      {filters.map((f) => (
        <button
          key={f.value}
          id={`filter-btn-${f.value}`}
          onClick={() => onChange(f.value)}
          className={`rounded-none px-5 py-2 font-sans text-xs uppercase tracking-[0.12em] transition-all duration-200 ${
            active === f.value
              ? 'bg-gold text-charcoal border border-gold'
              : 'border border-charcoal-border text-cream-muted hover:border-gold hover:text-gold'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
