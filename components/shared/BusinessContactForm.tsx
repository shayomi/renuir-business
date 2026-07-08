'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid work email'),
  company: z.string().min(2, 'Please enter your organization'),
  message: z.string().max(1200).optional(),
});

type Values = z.infer<typeof schema>;

interface BusinessContactFormProps {
  source?: string;
  cta?: string;
  className?: string;
}

const fieldClass =
  'h-11 w-full rounded-xl border border-border bg-background px-4 text-[15px] text-foreground outline-none transition-shadow placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-primary/30';

/**
 * Full onboarding / enquiry form for venue and business buyers.
 * Posts to /api/lead with real loading, success and error states.
 */
export function BusinessContactForm({
  source = 'contact',
  cta,
  className,
}: BusinessContactFormProps) {
  const t = useTranslations('common.contactForm');
  const ctaLabel = cta ?? t('cta');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Values) => {
    setStatus('loading');
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
    }
  };

  if (status === 'done') {
    return (
      <div
        className={cn(
          'flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center shadow-soft',
          className,
        )}
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="size-6" strokeWidth={2.5} />
        </span>
        <div>
          <p className="text-lg font-medium text-foreground">{t('successTitle')}</p>
          <p className="mt-1 text-[15px] text-muted-foreground">
            {t('successBody')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn('grid gap-4', className)}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="bc-name" className="text-[13px] font-medium text-foreground">
            {t('name')}
          </label>
          <input id="bc-name" placeholder={t('namePlaceholder')} className={fieldClass} {...register('name')} />
          {errors.name && <span className="text-[12.5px] text-destructive">{errors.name.message}</span>}
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="bc-company" className="text-[13px] font-medium text-foreground">
            {t('organization')}
          </label>
          <input id="bc-company" placeholder={t('organizationPlaceholder')} className={fieldClass} {...register('company')} />
          {errors.company && <span className="text-[12.5px] text-destructive">{errors.company.message}</span>}
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="bc-email" className="text-[13px] font-medium text-foreground">
          {t('email')}
        </label>
        <input
          id="bc-email"
          type="email"
          autoComplete="email"
          placeholder={t('emailPlaceholder')}
          className={fieldClass}
          {...register('email')}
        />
        {errors.email && <span className="text-[12.5px] text-destructive">{errors.email.message}</span>}
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="bc-message" className="text-[13px] font-medium text-foreground">
          {t('messageLabel')} <span className="text-muted-foreground">{t('messageOptional')}</span>
        </label>
        <textarea
          id="bc-message"
          rows={4}
          placeholder={t('messagePlaceholder')}
          className={cn(fieldClass, 'h-auto resize-none py-3 leading-relaxed')}
          {...register('message')}
        />
      </div>

      {status === 'error' && (
        <p className="text-[13px] text-destructive">{t('error')}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-transform duration-300 hover:bg-primary/90 active:scale-[0.98] disabled:opacity-70"
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
    </form>
  );
}
