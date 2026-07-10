import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-[13px] font-medium uppercase tracking-[0.18em] text-primary">
        404
      </span>
      <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        This page could not be found.
      </h1>
      <p className="mt-3 max-w-md text-[16px] text-muted-foreground">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link href="/" className="mt-8">
        <Button size="lg" className="rounded-full">
          Back to home
        </Button>
      </Link>
    </main>
  );
}
