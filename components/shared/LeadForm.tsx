'use client';

import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

interface Values { email: string; website?: string; }
interface LeadFormProps { source?: string; cta?: string; placeholder?: string; variant?: 'light' | 'dark'; className?: string; successMessage?: string; }

export function LeadForm({ source = 'contact', cta, placeholder, variant = 'light', className, successMessage }: LeadFormProps) {
  const t = useTranslations('common.leadForm');
  const tc = useTranslations('common');
  const v = useTranslations('common.validation');
  const id = useId();
  const dark = variant === 'dark';
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const schema = z.object({ email: z.string().trim().email(v('email')), website: z.string().optional() });
  const { register, handleSubmit, formState: { errors } } = useForm<Values>({ resolver: zodResolver(schema) });
  const submit = async (values: Values) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...values, source }) });
      if (!response.ok) throw new Error('Request failed');
      setStatus('done');
    } catch { setStatus('error'); }
  };
  if (status === 'done') return <div role="status" className={cn('flex items-start gap-3 rounded-xl p-4 text-base leading-relaxed', dark ? 'bg-white/10 text-white' : 'bg-primary/5 text-primary', className)}><Check aria-hidden className="mt-1 size-5 shrink-0" />{successMessage ?? t('success')}</div>;
  return <form onSubmit={handleSubmit(submit)} noValidate aria-busy={status === 'loading'} className={cn('w-full max-w-lg', className)}>
    <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register('website')} />
    <label htmlFor={`${id}-email`} className={cn('mb-2 block text-sm font-medium', dark ? 'text-white/80' : 'text-foreground')}>{t('emailLabel')}</label>
    <div className="flex flex-col gap-3 sm:flex-row">
      <input id={`${id}-email`} type="email" autoComplete="email" placeholder={placeholder ?? t('placeholder')} disabled={status === 'loading'} aria-invalid={!!errors.email} aria-describedby={errors.email || status === 'error' ? `${id}-error` : undefined} className={cn('min-h-12 min-w-0 flex-1 rounded-xl border px-4 text-base outline-none focus-visible:ring-2 focus-visible:ring-primary/50', dark ? 'border-white/25 bg-white/5 text-white placeholder:text-white/65' : 'border-border bg-background text-foreground placeholder:text-muted-foreground')} {...register('email')} />
      <button type="submit" disabled={status === 'loading'} className={cn('inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-base font-medium transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:opacity-60', dark ? 'bg-white text-primary hover:bg-white/90' : 'bg-primary text-white hover:bg-primary/90')}>{status === 'loading' ? <Loader2 aria-label={cta ?? t('cta')} className="size-4 animate-spin" /> : <>{cta ?? t('cta')}<ArrowRight aria-hidden className="size-4" /></>}</button>
    </div>
    {(errors.email || status === 'error') && <p id={`${id}-error`} role="alert" className={cn('mt-2 text-sm leading-relaxed', dark ? 'text-white' : 'text-destructive')}>{errors.email?.message ?? t('error')}{status === 'error' && <> <a href="mailto:info@renuir.com" className="underline underline-offset-4">info@renuir.com</a></>}</p>}
    <p className={cn('mt-3 text-sm leading-relaxed', dark ? 'text-white/70' : 'text-muted-foreground')}>{tc('consentText')} <Link href="/privacy" className="underline underline-offset-4">{tc('consentLink')}</Link></p>
  </form>;
}
