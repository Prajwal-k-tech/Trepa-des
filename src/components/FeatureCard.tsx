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
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl transition-all duration-300 group-hover:border-green-500/30 group-hover:bg-gray-900/60"></div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative p-8">
        <div className="mb-6">{icon}</div>
        <h3 className="text-xl font-semibold font-heading text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
