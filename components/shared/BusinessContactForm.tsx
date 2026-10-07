'use client';

import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

interface Values { name: string; company: string; email: string; message?: string; website?: string; }
interface BusinessContactFormProps { source?: string; cta?: string; className?: string; }
const fieldClass = 'min-h-12 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/40';

export function BusinessContactForm({ source = 'contact', cta, className }: BusinessContactFormProps) {
  const t = useTranslations('common.contactForm');
  const tc = useTranslations('common');
  const v = useTranslations('common.validation');
  const id = useId();
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const schema = z.object({ name: z.string().trim().min(2, v('name')).max(120, v('name')), company: z.string().trim().min(2, v('company')).max(160, v('company')), email: z.string().trim().email(v('email')), message: z.string().max(1200, v('message')).optional(), website: z.string().optional() });
  const { register, handleSubmit, formState: { errors } } = useForm<Values>({ resolver: zodResolver(schema) });
  const submit = async (values: Values) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...values, source }) });
      if (!response.ok) throw new Error('Request failed');
      setStatus('done');
    } catch { setStatus('error'); }
  };
  if (status === 'done') return <div role="status" className={cn('rounded-2xl bg-primary/5 p-8', className)}><Check aria-hidden className="mb-4 size-7 text-primary" /><p className="text-xl font-medium">{t('successTitle')}</p><p className="mt-2 text-base leading-relaxed text-muted-foreground">{t('successBody')}</p></div>;
  const fields = ['name', 'company', 'email'] as const;
  return <form onSubmit={handleSubmit(submit)} noValidate aria-busy={status === 'loading'} className={cn('grid gap-5', className)}>
    <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register('website')} />
    <div className="grid gap-5 sm:grid-cols-2">{fields.map(name => <div key={name} className={cn('grid gap-2', name === 'email' && 'sm:col-span-2')}>
      <label htmlFor={`${id}-${name}`} className="text-sm font-medium">{t(name === 'company' ? 'organization' : name)}</label>
      <input id={`${id}-${name}`} type={name === 'email' ? 'email' : 'text'} autoComplete={name === 'company' ? 'organization' : name} placeholder={t(name === 'company' ? 'organizationPlaceholder' : `${name}Placeholder`)} disabled={status === 'loading'} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${id}-${name}-error` : undefined} className={fieldClass} {...register(name)} />
      {errors[name] && <p id={`${id}-${name}-error`} role="alert" className="text-sm text-destructive">{errors[name]?.message}</p>}
    </div>)}</div>
    <div className="grid gap-2"><label htmlFor={`${id}-message`} className="text-sm font-medium">{t('messageLabel')} {t('messageOptional')}</label><textarea id={`${id}-message`} rows={4} disabled={status === 'loading'} placeholder={t('messagePlaceholder')} aria-invalid={!!errors.message} aria-describedby={errors.message ? `${id}-message-error` : undefined} className={cn(fieldClass, 'resize-y py-3')} {...register('message')} />{errors.message && <p id={`${id}-message-error`} role="alert" className="text-sm text-destructive">{errors.message.message}</p>}</div>
    {status === 'error' && <p role="alert" className="text-sm leading-relaxed text-destructive">{t('error')} <a href="mailto:info@renuir.com" className="underline underline-offset-4">info@renuir.com</a></p>}
    <button type="submit" disabled={status === 'loading'} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-6 text-base font-medium text-white transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:opacity-60">{status === 'loading' ? <Loader2 aria-label={t('cta')} className="size-4 animate-spin" /> : <>{cta ?? t('cta')}<ArrowRight aria-hidden className="size-4" /></>}</button>
    <p className="text-sm leading-relaxed text-muted-foreground">{tc('consentText')} <Link href="/privacy" className="underline underline-offset-4">{tc('consentLink')}</Link></p>
  </form>;
}
