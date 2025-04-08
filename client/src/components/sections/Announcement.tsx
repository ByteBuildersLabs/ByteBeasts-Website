import AnnouncementCard, { AnnouncementData } from "../ui/AnnouncementCard";

const announcement: AnnouncementData = {
  image: "/game-preview.png",
  badge: "Coming Soon",
  title: "ODBOOST IS COMING!",
  date: "April 22 - May 1st 2025",
  description:
    "Get ready for our newest adventure in the ByteBeasts universe. ODBOOST combines strategic gameplay with unique collectible beasts in an immersive on-chain experience.",
  ctaText: "Join Waitlist",
  ctaLink: "#", 
  gradientFrom: "purple-600",
  gradientTo: "pink-600",
};

const Announcement = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnnouncementCard {...announcement} />
      </div>
    </section>
  );
};

export default Announcement;
