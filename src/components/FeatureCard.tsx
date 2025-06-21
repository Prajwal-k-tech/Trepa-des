import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="relative group">
      {/* Background with atmospheric effect */}
      <div className="absolute inset-0 bg-card/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/60"></div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative p-8">
        <div className="mb-6">{icon}</div>
        <h3 className="text-xl font-semibold font-heading text-card-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
