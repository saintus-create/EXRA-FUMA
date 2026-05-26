import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 px-4 py-16 text-center">
      <p className="text-sm font-semibold tracking-widest uppercase text-fd-primary mb-4">
        FDA FAERS Q1 2024 — Independent Analysis
      </p>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 max-w-2xl">
        ADHD medications are{' '}
        <span className="text-fd-primary">4x safer</span>{' '}
        than the average drug
      </h1>
      <p className="text-lg text-fd-muted-foreground max-w-xl mb-8">
        ADHD medications are suspected as a cause in only 25% of adverse event
        reports — versus ~100% for the average drug. 300+ peer-reviewed studies.
        33 countries. Managed care decision-makers deserve this data.
      </p>
      <div className="flex gap-3 flex-wrap justify-center mb-16">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-md bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground shadow hover:opacity-90 transition-opacity"
        >
          Read the clinical review
        </Link>
        <Link
          href="/docs/safety-data"
          className="inline-flex items-center justify-center rounded-md border border-fd-border px-6 py-3 text-sm font-medium text-fd-foreground shadow-sm hover:bg-fd-accent transition-colors"
        >
          View safety data
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl w-full text-left">
        {[
          { value: '4x', label: 'Safety advantage', sub: 'vs. average drug' },
          { value: '75.2%', label: 'Concomitant rate', sub: 'not suspected as cause' },
          { value: '0.79%', label: 'FAERS share', sub: 'of 169,640 total reports' },
          { value: '300+', label: 'Studies reviewed', sub: 'across 33 countries' },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-fd-border bg-fd-card p-6"
          >
            <p className="text-3xl font-extrabold text-fd-primary">{s.value}</p>
            <p className="text-sm font-semibold mt-2">{s.label}</p>
            <p className="text-xs text-fd-muted-foreground mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 max-w-3xl w-full text-left mt-12">
        {[
          {
            title: 'Presence Does Not Equal Causation',
            body: '3 of 4 adverse event reports list ADHD medications as concomitant — present but not believed to have caused the event.',
          },
          {
            title: 'Minimal Footprint',
            body: 'Under 1% of all FAERS reports involve ADHD stimulants, despite being among the most prescribed drug classes in the U.S.',
          },
          {
            title: 'Global Consistency',
            body: 'Safety and efficacy findings hold across 33 countries from 2004–2026 — not an artifact of any single healthcare system.',
          },
          {
            title: 'Transparent Methodology',
            body: 'FAERS explicitly distinguishes suspected causation from concomitant presence — the gold standard for pharmacovigilance.',
          },
        ].map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-fd-border bg-fd-card p-6"
          >
            <h3 className="text-sm font-bold mb-2">{p.title}</h3>
            <p className="text-sm text-fd-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-fd-border pt-8 max-w-2xl w-full text-center">
        <p className="text-xs text-fd-muted-foreground mb-3">Full documentation</p>
        <p className="text-lg font-bold mb-2">
          FDA data. 300+ studies. 33 countries.
        </p>
        <p className="text-sm text-fd-muted-foreground mb-4">
          Clinical review, methodology, and full study library.
        </p>
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-md bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground shadow hover:opacity-90 transition-opacity"
        >
          Explore the docs
        </Link>
      </div>
    </main>
  );
}
