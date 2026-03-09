// components/team-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

export function TeamCard({ name, role, image, linkedin }: TeamCardProps) {
  return (
    <Card className="flex flex-col rounded-md overflow-hidden h-full p-4">
      {" "}
      <div className="flex flex-col h-full">
        <div className="relative aspect-square w-full rounded-md overflow-hidden mb-4">
          {" "}
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {/* Content container */}
        <div className="flex flex-col grow">
          <div className="flex items-center justify-between gap-2">
            <div>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="mutedText">{role}</Typography>
            </div>

            {linkedin && (
              <Link
                href={linkedin}
                className="flex h-8 w-8 items-center justify-center rounded-md border hover:bg-muted transition shrink-0"
                target="_blank"
                rel="noopener noreferrer"
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
