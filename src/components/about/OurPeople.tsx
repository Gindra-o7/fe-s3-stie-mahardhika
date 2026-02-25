import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

// Define the shape of the text segment items we expect from our_people.json array
interface TextSegment {
  text: string;
  bold: boolean;
}

const OurPeople = () => {
  const { t } = useLanguage();
  const paragraphs = t("people.description", { returnObjects: true }) as unknown as TextSegment[][];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:pr-30 md:pl-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Left Column: Text Paragraphs */}
          <div className="w-full md:w-3/5">
            <div className="flex flex-col space-y-6 text-gray-700 leading-relaxed text-left md:text-justify text-[15px] md:text-base">
              {Array.isArray(paragraphs) &&
                paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>
                    {paragraph.map((segment, sIndex) => (
                      <span key={sIndex} className={segment.bold ? "font-bold text-gray-900" : ""}>
                        {segment.text}
                      </span>
                    ))}
                  </p>
                ))}
            </div>
          </div>

          {/* Right Column: Title */}
          <div className="w-full md:w-2/5 flex justify-start md:justify-end md:pr-10 lg:pr-20">
            <div className="flex flex-col items-start md:items-end w-full">
              <TitleText>{t("people.title")}</TitleText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
