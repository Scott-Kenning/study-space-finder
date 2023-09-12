interface CardProps {
  children: React.ReactNode;
  link?: string;
}

const Card: React.FC<CardProps> = ({ children, link }) => {
  return (
    <a
      href={link || "#"}
      tabIndex={0}
      className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl hover:brightness-[95%] hover:scale-[103%] hover:cursor-pointer transition-all duration-200 h-16 w-full flex items-center justify-center border py-16"
    >
      {children}
    </a>
  );
};

export default Card;
