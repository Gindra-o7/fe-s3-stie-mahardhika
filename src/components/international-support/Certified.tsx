import { Trans } from "react-i18next";

const certifications = [
  {
    acronym: "CDM",
    title: "Certified Digital Marketer",
  },
  {
    acronym: "CSMA",
    title: "Certified Strategic Management Analyst",
  },
  {
    acronym: "CHCSA",
    title: "Certified Human Capital Strategic Analyst",
  },
];

const Certified = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20">
        <div className="mb-10 md:mb-16 max-w-4xl text-gray-600 text-base md:text-lg leading-relaxed text-center mx-auto">
          <p className="[&>strong]:font-bold [&>strong]:text-gray-900">
            <Trans i18nKey="support.certified.description" components={[<strong key="0" />]} />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 hover:border-[#08C9EC] p-8 md:p-10 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all duration-300 min-h-40 md:min-h-48 group transform hover:-translate-y-1"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 group-hover:text-[#08C9EC] transition-colors">{cert.acronym}</h3>
              <p className="text-base md:text-lg text-gray-600">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certified;
