export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
}

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r ${game.gradientFrom} ${game.gradientTo} rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity`}
        ></div>
        <div className="relative">
          <img
            src={game.image}
            alt={game.title}
            width={400}
            height={250}
            className="w-full h-auto rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-xl font-bold mb-2 font-kallisto text-foreground">
              {game.title}
            </h3>
            <p className="text-foreground/90 text-sm font-montserrat">
              {game.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
