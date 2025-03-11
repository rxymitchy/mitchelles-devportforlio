
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillCardProps {
  title: string;
  level: number;
  icon: React.ReactNode;
  color?: string;
  delay?: number;
}

const SkillCard = ({ title, level, icon, color = "bg-primary", delay = 0 }: SkillCardProps) => {
  return (
    <Card 
      className="border-border bg-card/50 backdrop-blur-sm hoverable animate-fade-in-up" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-md ${color}/10`}>
            {icon}
          </div>
          <div>
            <h3 className="text-base font-medium">{title}</h3>
          </div>
        </div>
        <Progress value={level} className="h-2" />
        <p className="text-xs text-right mt-1 text-muted-foreground">
          {level}% proficiency
        </p>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
