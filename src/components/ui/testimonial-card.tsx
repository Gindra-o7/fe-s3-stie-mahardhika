interface TestimonialCardProps {
  quote: string;
  avatar: string;
  name: string;
  title1: string;
  title2: string;
}

const TestimonialCard = ({ quote, avatar, name, title1, title2 }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-sm p-8 shadow-sm border border-gray-200 transition-all">
      {/* Image Container */}
      <div className="w-full h-48 md:h-80 rounded-sm border-2 border-gray-500 mb-6 overflow-hidden flex items-end justify-center bg-white pt-4">
        <img src={avatar} alt={name} className="w-auto h-full object-contain object-bottom" />
      </div>

      {/* Profile Info */}
      <div className="mb-4">
        <h3 className="text-xl font-extrabold text-gray-900">{name}</h3>
        <p className="text-sm font-semibold text-gray-600 mt-1">{title1}</p>
        <p className="text-sm font-semibold text-gray-600">{title2}</p>
      </div>

      {/* Quote */}
      <p className="text-sm font-medium text-gray-500 leading-relaxed italic text-justify">{quote}</p>
    </div>
  );
};

export default TestimonialCard;
