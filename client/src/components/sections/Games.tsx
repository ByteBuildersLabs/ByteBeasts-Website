import { Button } from "../ui/Button";
import GameCard from "../ui/GameCard";

const games = [
  {
    id: "cryptotamers",
    title: "CryptoTamers",
    description: "Collect and nurture digital beasts",
    image: "/game1.png",
    gradientFrom: "from-brand-light",
    gradientTo: "to-brand-dark",
  },
  {
    id: "beastarena",
    title: "Beast Arena",
    description: "Strategic PvP battles with your beasts",
    image: "/game2.png",
    gradientFrom: "from-brand-light",
    gradientTo: "to-brand-dark",
  },
  {
    id: "beastexplorers",
    title: "Beast Explorers",
    description: "Open world adventure with your beasts",
    image: "/game3.png",
    gradientFrom: "from-brand-light",
    gradientTo: "to-brand-dark",
  },
];


const Games = () => {
  return (
    <section id="games" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Games Launched</h2>
          <p className="text-[#FFF6F0]/80 text-lg">
            Explore our growing ecosystem of interconnected games, each offering unique gameplay and collectible
            beasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gradient" className="px-8">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Games;
