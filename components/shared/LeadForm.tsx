'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

const schema = z.object({
  email: z.string().email('Enter a valid work email'),
  // Honeypot: hidden from real users; bots that fill it are rejected server-side.
  website: z.string().optional(),
});

type Values = z.infer<typeof schema>;

interface LeadFormProps {
  /** Analytics/routing tag: waitlist | demo | contact | developer */
  source?: string;
  cta?: string;
  placeholder?: string;
  variant?: 'light' | 'dark';
  className?: string;
  successMessage?: string;
}

/**
 * The single lead-capture form used across the site. Posts to /api/lead and
 * shows real loading / success / error states (the previous forms were inert).
 */
export function LeadForm({
  source = 'waitlist',
  cta,
  placeholder,
  variant = 'light',
  className,
  successMessage,
}: LeadFormProps) {
  const t = useTranslations('common.leadForm');
  const tc = useTranslations('common');
  const ctaLabel = cta ?? t('cta');
  const placeholderLabel = placeholder ?? t('placeholder');
  const successLabel = successMessage ?? t('success');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const dark = variant === 'dark';

  const onSubmit = async (values: Values) => {
    setStatus('loading');
    setError(null);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, source }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
    } catch {
      setStatus('error');
      setError(t('error'));
    }
  };

  if (status === 'done') {
    return (
      <div
        className={cn(
          'flex items-center gap-3 rounded-full px-5 py-3.5 text-[15px] font-medium',
          dark ? 'bg-white/10 text-white' : 'bg-primary/5 text-primary',
          className,
        )}
      >
        <span
          className={cn(
            'flex size-6 items-center justify-center rounded-full',
            dark ? 'bg-white text-primary' : 'bg-primary text-white',
          )}
        >
          <Check className="size-3.5" strokeWidth={3} />
        </span>
        {successLabel}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn('w-full max-w-md', className)}
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register('website')}
      />
      <div
        className={cn(
          'flex items-center gap-2 rounded-full p-1.5 shadow-soft ring-1 transition-shadow',
          dark
            ? 'bg-white/10 ring-white/15 focus-within:ring-white/30'
            : 'bg-card ring-border focus-within:ring-primary/40',
        )}
      >
        <input
          type="email"
          autoComplete="email"
          aria-label={t('emailLabel')}
          placeholder={placeholderLabel}
          disabled={status === 'loading'}
          {...register('email')}
          className={cn(
            'h-11 min-w-0 flex-1 bg-transparent pl-4 text-[15px] outline-none',
            dark
              ? 'text-white placeholder:text-white/50'
              : 'text-foreground placeholder:text-muted-foreground',
          )}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={cn(
            'flex h-11 shrink-0 items-center gap-2 rounded-full px-5 text-[14px] font-semibold transition-transform duration-300 active:scale-[0.97] disabled:opacity-70',
            dark ? 'bg-white text-primary hover:bg-white/90' : 'bg-primary text-white hover:bg-primary/90',
          )}
          style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
        >
          {status === 'loading' ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              {ctaLabel}
              <ArrowRight className="size-4" strokeWidth={2} />
            </>
          )}
        </button>
      </div>
      <div className={cn('min-h-5 px-4 pt-2 text-[13px]', dark ? 'text-white/70' : 'text-muted-foreground')}>
        {errors.email?.message ?? error ?? ''}
      </div>
      <p className={cn('px-4 text-[12px] leading-relaxed', dark ? 'text-white/50' : 'text-muted-foreground')}>
        {tc('consentText')}{' '}
        <Link href="/privacy" className="underline underline-offset-2 hover:opacity-80">
          {tc('consentLink')}
        </Link>
      </p>
    </form>
  );
}
