// Companys / Non-Universities
import idx from "@/assets/components/international-support/sponsor/idx.png";
import bni from "@/assets/components/international-support/sponsor/bni.png";
import dinasPerikanan from "@/assets/components/international-support/sponsor/dinas-perikanan-lamongan.png";
import smanSooko from "@/assets/components/international-support/sponsor/sman-1-sooko.png";
import penelehResearch from "@/assets/components/international-support/sponsor/peneleh-research.png";
import miridih from "@/assets/components/international-support/sponsor/miridih.png";
import mawabeya from "@/assets/components/international-support/sponsor/mawabeya.png";
import djp from "@/assets/components/international-support/sponsor/djp.png";
import ewhaWoman from "@/assets/components/international-support/sponsor/ewha-woman-university.png";
import akita from "@/assets/components/international-support/sponsor/akita-university.png";
import hanoi from "@/assets/components/international-support/sponsor/hanoi-university.png";
import krirk from "@/assets/components/international-support/sponsor/krirk-university.png";
import liverpool from "@/assets/components/international-support/sponsor/liverpool-university.png";

// Universities
import achmadSiddiq from "@/assets/components/international-support/sponsor/achmad-siddiq-university.png";
import bhayangkara from "@/assets/components/international-support/sponsor/bhayangkara-university.png";
import esaUnggul from "@/assets/components/international-support/sponsor/esa-unggul-university.png";
import gajayana from "@/assets/components/international-support/sponsor/gajayana-university.png";
import hayamWuruk from "@/assets/components/international-support/sponsor/hayam-wuruk-university.png";
import lumajang from "@/assets/components/international-support/sponsor/lumajang-university.png";
import madura from "@/assets/components/international-support/sponsor/madura-university.png";
import malang from "@/assets/components/international-support/sponsor/malang-university.png";
import sithAwang from "@/assets/components/international-support/sponsor/sith-awang-long.png";
import soetomo from "@/assets/components/international-support/sponsor/soetomo-university.png";
import stai from "@/assets/components/international-support/sponsor/stai-assyafiiyah.png";
import stieBima from "@/assets/components/international-support/sponsor/stie-bima.png";
import stieCendekia from "@/assets/components/international-support/sponsor/stie-cendekia.png";
import surabaya from "@/assets/components/international-support/sponsor/surabaya-university.png";
import wijayaPutra from "@/assets/components/international-support/sponsor/wijaya-putra-university.png";

// Row 1: 4 items
const companyRow1 = [
  { src: idx, className: "max-w-32 md:max-w-44" },
  { src: bni, className: "max-w-40 md:max-w-42" },
  { src: penelehResearch, className: "max-w-28 md:max-w-38" },
  { src: miridih, className: "max-w-32 md:max-w-56" },
];

// Row 2: 4 items
const companyRow2 = [
  { src: dinasPerikanan, className: "max-w-24 md:max-w-34" },
  { src: mawabeya, className: "max-w-24 md:max-w-48 ml-5" },
  { src: djp, className: "max-w-24 md:max-w-26 ml-5" },
  { src: smanSooko, className: "max-w-24 md:max-w-44 ml-10" },
];

// Row 3: 5 items
const companyRow3 = [
  { src: ewhaWoman, className: "max-w-28 md:max-w-40" },
  { src: akita, className: "max-w-28 md:max-w-44" },
  { src: hanoi, className: "max-w-24 md:max-w-44" },
  { src: liverpool, className: "max-w-24 md:max-w-44" },
  { src: krirk, className: "max-w-24 md:max-w-44" },
];

const universities = [
  // Row 1: 5 items
  { src: esaUnggul, className: "max-w-28 md:max-w-40" },
  { src: hayamWuruk, className: "max-w-28 md:max-w-40" },
  { src: stai, className: "max-w-24 md:max-w-38" },
  { src: stieCendekia, className: "max-w-24 md:max-w-42 -ml-4" },
  { src: sithAwang, className: "max-w-24 md:max-w-32" },

  // Row 2: 5 items
  { src: stieBima, className: "max-w-24 md:max-w-36" },
  { src: achmadSiddiq, className: "max-w-24 md:max-w-36 ml-2" },
  { src: surabaya, className: "max-w-24 md:max-w-28 ml-4" },
  { src: bhayangkara, className: "max-w-24 md:max-w-48 -ml-7" },
  { src: lumajang, className: "max-w-24 md:max-w-34 -ml-1" },

  // Row 3: 5 items
  { src: malang, className: "max-w-24 md:max-w-34 ml-1" },
  { src: soetomo, className: "max-w-24 md:max-w-30 ml-5" },
  { src: gajayana, className: "max-w-24 md:max-w-28 ml-4" },
  { src: madura, className: "max-w-24 md:max-w-36 -ml-1" },
  { src: wijayaPutra, className: "max-w-24 md:max-w-30 ml-1" },
];

const Sponsor = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 bg-white">
      <div className="flex flex-col gap-12 md:gap-16 max-w-5xl">
        {/* Companies / Non-Universities (Top) */}
        <div className="flex flex-col gap-2">
          {/* Row 1: 4 items */}
          <div className="flex flex-wrap items-center justify-start">
            {companyRow1.map((company, index) => (
              <div key={`company-r1-${index}`} className="flex items-center justify-start mb-6">
                <img src={company.src} alt={`Company ${index + 1}`} className={`${company.className} h-auto object-contain transition-all duration-300`} />
              </div>
            ))}
          </div>
          {/* Row 2: remaining items */}
          <div className="flex flex-wrap items-center justify-start">
            {companyRow2.map((company, index) => (
              <div key={`company-r2-${index}`} className="flex items-center justify-start mb-6">
                <img src={company.src} alt={`Company ${index + 5}`} className={`${company.className} h-auto object-contain transition-all duration-300`} />
              </div>
            ))}
          </div>
          {/* Row 3: remaining items */}
          <div className="flex flex-wrap items-center justify-start">
            {companyRow3.map((company, index) => (
              <div key={`company-r3-${index}`} className="flex items-center justify-start mb-6">
                <img src={company.src} alt={`Company ${index + 9}`} className={`${company.className} h-auto object-contain transition-all duration-300`} />
              </div>
            ))}
          </div>
        </div>

        {/* Universities (Bottom) */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-0 gap-y-6">
            {universities.map((uni, index) => (
              <div key={`uni-${index}`} className="flex items-center justify-start">
                <img src={uni.src} alt={`University ${index + 1}`} className={`${uni.className} h-auto object-contain transition-all duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
