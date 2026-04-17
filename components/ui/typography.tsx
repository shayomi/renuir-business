import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "radix-ui";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-semibold tracking-tight leading-[1.1]",
      extraLargeText:
        "scroll-m-20 text-[2.75rem] sm:text-[3.5rem] lg:text-[5rem] font-extrabold tracking-tight leading-[1.05]",
      h2: "scroll-m-20 pb-2 text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold tracking-tight leading-[1.15] first:mt-0",
      h3: "scroll-m-20 text-xl sm:text-[1.375rem] lg:text-2xl font-semibold tracking-tight leading-[1.2]",
      h4: "scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight leading-[1.25]",
      h5: "scroll-m-20 text-base sm:text-lg font-semibold tracking-tight leading-[1.3]",
      h6: "scroll-m-20 text-sm sm:text-base font-semibold tracking-tight leading-[1.4]",
      p: "text-[0.9375rem]/[1.6] lg:text-base/[1.7] [&:not(:first-child)]:mt-6",
      div: "text-[0.9375rem]/[1.6] lg:text-base/[1.7]",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      ul: "my-5 ml-8 sm:ml-10 list-disc [&>li]:mt-2",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-lg sm:text-xl text-muted-foreground leading-[1.5]",
      largeText: "text-lg font-semibold",
      smallText: "text-sm font-medium leading-[1.5]",
      mutedText: "text-sm text-muted-foreground leading-[1.5]",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  extraLargeText: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  div: "div",
  blockquote: "blockquote",
  inlineCode: "code",
  largeText: "div",
  smallText: "small",
  lead: "p",
  mutedText: "p",
  ul: "ul",
};

export interface TypographyProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, asChild, ...props }, ref) => {
    const Comp = (
      asChild
        ? Slot
        : (as ?? (variant ? variantElementMap[variant] : undefined) ?? "div")
    ) as React.ElementType;

    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
