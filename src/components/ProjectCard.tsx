
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  github,
  live,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <Card
      className="overflow-hidden border-border bg-card/50 backdrop-blur-sm hoverable h-full flex flex-col transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardContent className="flex-grow p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 gap-2 flex flex-wrap justify-end">
        {github && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="gap-2 transition-all duration-300"
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              <span>Repo</span>
            </a>
          </Button>
        )}
        {live && (
          <Button
            variant="default"
            size="sm"
            asChild
            className="gap-2 transition-all duration-300"
          >
            <a href={live} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
