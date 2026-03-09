import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface TrustFeatureProps {
  title: string;
  description: string;
  image: string;
}

export function TrustFeature({ title, description, image }: TrustFeatureProps) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center bg-muted justify-center rounded-lg"
        )}
      >
        <Image src={image} alt={title} width={20} height={20} />
      </div>

      <div>
        <Typography variant="h5" className="text-base">
          {title}
        </Typography>
        <Typography variant="mutedText" className="mt-1 max-w-70">
          {description}
        </Typography>
      </div>
    </div>
  );
}
