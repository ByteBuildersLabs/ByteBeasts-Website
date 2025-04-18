import { Globe } from "lucide-react";
import FeatureCard from "../ui/FeatureCard";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary relative">
      <div className="absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-kallisto text-foreground">
            About ByteBeasts
          </h2>
          <p className="text-foreground/80 text-lg font-montserrat">
          ByteBeasts fuses the timeless magic of monster-taming with the power of blockchain. 
          It's more than just a game—it's a persistent, player-owned universe where your Beasts evolve, 
          retain memories, and travel across interconnected experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Globe className="h-8 w-8 text-white" />}
            title="Interconnected Universe"
            description="Your Beast is never locked in. Progress and memories carry over across all games in the ByteBeasts ecosystem."
            gradientFrom="from-brand-light"
            gradientTo="to-brand-dark"
          />

          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                <line x1="16" y1="8" x2="2" y2="22"></line>
                <line x1="17.5" y1="15" x2="9" y2="15"></line>
              </svg>
            }
            title="True Ownership"
            description="Built on Starknet, your Beasts live on-chain forever—fully owned by you, not the platform."
            gradientFrom="from-brand-light"
            gradientTo="to-brand-dark"
          />

          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            }
            title="Community Driven"
            description="A game shaped by its players, for its players. Events, tournaments, and evolution based on community input and participation."
            gradientFrom="from-brand-light"
            gradientTo="to-brand-dark"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
