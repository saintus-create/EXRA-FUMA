import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 px-4 py-16 text-center">
      <p className="text-sm font-semibold tracking-widest uppercase text-fd-primary mb-4">
        The Real Consequences of Attention Deficit Hyperactivity Disorder
      </p>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 max-w-3xl">
        Not just a "messy desk" —{' '}
        <span className="text-fd-primary">life-altering outcomes</span>
      </h1>
      <p className="text-lg text-fd-muted-foreground max-w-xl mb-8">
        Chronic underemployment, unintended pregnancy, driving accidents, substance use disorder, accidental neglect of dependents, self-harm, and legal trouble. These are the documented consequences of untreated Attention Deficit Hyperactivity Disorder.
      </p>
      <div className="flex gap-3 flex-wrap justify-center mb-16">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-md bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground shadow hover:opacity-90 transition-opacity"
        >
          Read the evidence
        </Link>
        <Link
          href="/docs/safety-data"
          className="inline-flex items-center justify-center rounded-md border border-fd-border px-6 py-3 text-sm font-medium text-fd-foreground shadow-sm hover:bg-fd-accent transition-colors"
        >
          View research data
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full text-left">
        {[
          {
            title: 'Chronic Underemployment & Financial Ruin',
            body: 'Repeated lateness, missed deadlines, forgotten paperwork, and emotional dysregulation lead to job loss, debt, ruined credit, and homelessness.',
            stat: '2–3x',
            statLabel: 'More likely to be fired or quit impulsively',
          },
          {
            title: 'Unintended Pregnancy & STIs',
            body: 'Poor foresight, impulse control, and working memory failure in sexual situations lead to higher rates of teen pregnancy and sexually transmitted infections.',
            stat: '2–3x',
            statLabel: 'Higher risk of unplanned pregnancy',
          },
          {
            title: 'Driving Accidents & License Suspension',
            body: 'Inattention, impulsivity, and time blindness cause speeding tickets, unpaid warrants, license suspension, and driving on suspended license.',
            stat: '50%',
            statLabel: 'Higher risk of serious car crashes',
          },
          {
            title: 'Self-Medication & Substance Use Disorder',
            body: 'Using alcohol to shut off racing minds, cannabis to slow time blindness, or stimulants when prescription meds run out leads to dependence and overdose.',
            stat: '2–3x',
            statLabel: 'Higher risk of substance use disorders',
          },
          {
            title: 'Accidental Neglect of Dependents',
            body: 'Working memory failure and time blindness cause forgotten pickups, missed prescriptions, and overwhelmed shutdowns leading to Child Protective Services involvement.',
            stat: 'Higher',
            statLabel: 'Unintentional injury rates in children',
          },
          {
            title: 'Self-Harm & Legal Trouble',
            body: 'Rejection sensitivity leads to non-suicidal self-injury, while impulsivity and poor judgment cause shoplifting, bad checks, fights, and criminal records.',
            stat: '3x',
            statLabel: 'More likely to have been arrested',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-fd-border bg-fd-card p-6"
          >
            <p className="text-2xl font-extrabold text-fd-primary mb-2">{item.stat}</p>
            <p className="text-xs text-fd-muted-foreground mb-3">{item.statLabel}</p>
            <h3 className="text-sm font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-fd-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-fd-border pt-8 max-w-3xl w-full text-left">
        <p className="text-xs text-fd-muted-foreground mb-3">Research-backed documentation</p>
        <p className="text-lg font-bold mb-2">
          Peer-reviewed studies. Clinical evidence. Real outcomes.
        </p>
        <p className="text-sm text-fd-muted-foreground mb-4">
          Journal of Attention Disorders, JAMA Psychiatry, Child: Care, Health and Development, and more.
        </p>
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-md bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground shadow hover:opacity-90 transition-opacity"
        >
          Explore the documentation
        </Link>
      </div>
    </main>
  );
}
