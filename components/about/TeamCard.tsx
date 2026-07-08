import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TeamCard({ name, role, image, linkedin }: TeamCardProps) {
  const hasLinkedin = Boolean(linkedin && linkedin !== "#");

  return (
    <Card className="flex flex-col rounded-2xl overflow-hidden h-full p-4 shadow-soft">
      <div className="flex flex-col h-full">
        <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-primary/10"
              aria-hidden="true"
            >
              <span className="text-2xl font-medium text-primary">
                {getInitials(name)}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col grow">
          <div className="flex items-center justify-between gap-2">
            <div>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="mutedText">{role}</Typography>
            </div>

            {hasLinkedin && (
              <Link
                href={linkedin as string}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-muted transition shrink-0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on LinkedIn`}
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
