import Image from "next/image";
import { Typography } from "@/components/ui/typography";

interface SectorCardProps {
  title: string;
  description: string;
  image: string;
  icon: string;
}

export function SectorCard({
  title,
  description,
  image,
  icon,
}: SectorCardProps) {
  return (
    <div
      className="group relative h-90 overflow-hidden rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 dark:from-black/90 dark:via-black/40 dark:to-black/20" />

      <div className="relative z-10 flex h-full flex-col justify-end gap-2 p-5 text-white">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-black/70">
          <Image
            src={icon}
            alt={title}
            width={16}
            height={16}
            className="h-4 w-4"
          />
        </div>

        <Typography variant="h5" className="text-white font-semibold">
          {title}
        </Typography>

        <Typography variant="h6" className="text-white font-medium">
          {description}
        </Typography>
      </div>
    </div>
  );
}
