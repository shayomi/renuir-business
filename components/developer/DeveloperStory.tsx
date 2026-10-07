import { getTranslations } from 'next-intl/server';

export async function DeveloperStory() {
  const t = await getTranslations('developer.story');
  return <div className="bg-slate-950 text-white">
    <section className="app-container border-t border-white/10 py-12 sm:py-16 lg:py-20">
      <h2 className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">{t('howHeadline')}</h2>
      <ol className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {[1,2,3,4].map(i => <li key={i} className="flex gap-5 border-t border-white/15 pt-6">
          <span className="text-primary-300 text-xl tabular-nums">0{i}</span>
          <div><h3 className="text-xl font-medium">{t(`step${i}Title`)}</h3><p className="mt-3 max-w-md leading-relaxed text-white/70">{t(`step${i}Desc`)}</p></div>
        </li>)}
      </ol>
    </section>
    <section className="app-container border-t border-white/10 py-12 sm:py-16 lg:py-20">
      <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">{t('whatHeadline')}</h2>
      <dl className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {[1,2,3,4].map(i => <div key={i} className="border-t border-white/15 pt-6"><dt className="text-xl font-medium">{t(`cap${i}Title`)}</dt><dd className="mt-3 max-w-md leading-relaxed text-white/70">{t(`cap${i}Desc`)}</dd></div>)}
      </dl>
      <div className="mt-14 border-t border-white/15 pt-8"><h3 className="text-xl font-medium">{t('securityHeadline')}</h3><ul className="mt-4 list-disc space-y-3 pl-5 text-white/70">{[1,2,3].map(i => <li key={i}>{t(`security${i}`)}</li>)}</ul></div>
    </section>
  </div>;
}
