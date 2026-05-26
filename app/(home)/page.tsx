import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 px-4 py-32 text-center min-h-screen">
      <h1 className="text-6xl font-bold tracking-tight mb-8 max-w-4xl">
        ADHD
      </h1>
      <p className="text-xl text-fd-muted-foreground max-w-2xl mb-12">
        FDA FAERS data analysis and medication safety research
      </p>
      <div className="flex gap-3 flex-wrap justify-center mb-16">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-md bg-fd-primary px-8 py-4 text-base font-medium text-fd-primary-foreground hover:opacity-90 transition-opacity"
        >
          View documentation
        </Link>
        <Link
          href="/docs/safety-data"
          className="inline-flex items-center justify-center rounded-md px-8 py-4 text-base font-medium text-fd-foreground hover:bg-fd-accent transition-colors"
        >
          Safety data
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full text-left">
        {[
          {
            title: 'FAERS Q1 2024 Analysis',
            body: '169,640 adverse event reports analyzed. ADHD medications show 4x safety advantage vs average drug.',
            stat: '0.79%',
            statLabel: 'Share of all FAERS reports',
          },
          {
            title: 'Concomitant Classification',
            body: '75.2% of ADHD medication reports list drug as present but not the cause of adverse event.',
            stat: '75.2%',
            statLabel: 'Concomitant rate',
          },
          {
            title: 'Suspected Causation',
            body: 'ADHD medications suspected as cause in only 25.2% of reports vs ~100% for average drug.',
            stat: '25.2%',
            statLabel: 'Suspected causation rate',
          },
          {
            title: 'Research Dataset',
            body: '300+ peer-reviewed studies spanning 33 countries from 2004–2026.',
            stat: '300+',
            statLabel: 'Studies reviewed',
          },
          {
            title: 'Drug Comparison',
            body: 'Head-to-head analysis of Adderall, Ritalin, Vyvanse, Concerta, Strattera, and other ADHD medications.',
            stat: '18,048',
            statLabel: 'Drugs tracked',
          },
          {
            title: 'Clinical Evidence',
            body: 'FDA clinical reviews, pharmacovigilance data, and international research.',
            stat: '33',
            statLabel: 'Countries represented',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-md bg-fd-card p-6"
          >
            <p className="text-2xl font-bold text-fd-primary mb-2">{item.stat}</p>
            <p className="text-xs text-fd-muted-foreground mb-3">{item.statLabel}</p>
            <h3 className="text-sm font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-fd-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
