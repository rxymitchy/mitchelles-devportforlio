
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  popular?: boolean;
  delay?: number;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  ctaText,
  popular = false,
  delay = 0,
}: PricingCardProps) => {
  return (
    <Card
      className={`border backdrop-blur-sm h-full flex flex-col transition-all duration-300 animate-fade-in-up ${
        popular ? "border-primary shadow-md relative" : "border-border"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {popular && (
        <Badge
          className="absolute -top-3 right-6 font-medium"
          variant="default"
        >
          Popular
        </Badge>
      )}

      <CardHeader className="pb-0">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && (
            <span className="text-muted-foreground font-medium">/project</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </CardHeader>

      <CardContent className="flex-grow pt-6">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check
                size={18}
                className={
                  feature.included
                    ? "text-primary shrink-0 mt-0.5"
                    : "text-muted-foreground/40 shrink-0 mt-0.5"
                }
              />
              <span
                className={
                  feature.included
                    ? "text-sm"
                    : "text-sm text-muted-foreground/40 line-through"
                }
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-2">
        <Button
          className={`w-full ${
            popular ? "bg-primary hover:bg-primary/90" : ""
          }`}
          asChild
        >
          <a href="/contact">{ctaText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
