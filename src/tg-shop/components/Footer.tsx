import InstagramIcon from "@assets/svgs/icons/InstagramIcon";
import MailIcon from "@assets/svgs/icons/MailIcon";
import PhoneIcon from "@assets/svgs/icons/PhoneIcon";
import PrimaryLogo from "@assets/svgs/PrimaryLogo";
import TikTokIcon from "@assets/svgs/icons/TikTokIcon";
import brandImage from "@assets/brand/tg.png";

import aikBank from "@assets/banks/aikbank.png";
import intesaBank from "@assets/banks/intesabank.png";
import nlbBank from "@assets/banks/nlbbank.png";
import otbBank from "@assets/banks/otpbank.svg";
import raiBank from "@assets/banks/raifaisenbank.svg";
import unicreditBank from "@assets/banks/unicreditbank.png";
import ipsBank from "@assets/banks/ips.svg";

import siq from "@assets/banks/siq.png";
import mcCheck from "@assets/banks/mccheck.png";
import visaSecure from "@assets/banks/visasecure.png";
import amEx from "@assets/banks/amex.png";
import visaAmEx from "@assets/banks/visaemex.png";
import mastercard1 from "@assets/banks/mc1.png";
import mastercard2 from "@assets/banks/mc2.png";

const socialLinks = [
  {
    icon: MailIcon,
    label: "teodora.grubor@gmail.com",
    href: "mailto:teodora.grubor@gmail.com",
  },
  {
    icon: InstagramIcon,
    label: "teodora.makeup",
    href: "https://instagram.com/teodora.makeup",
  },
  {
    icon: TikTokIcon,
    label: "Teodora Grubor",
    href: "https://tiktok.com/@teodoragrubor",
  },
  { icon: PhoneIcon, label: "+381659805580", href: "tel:+381659805580" },
];

const bankLogosRow1 = [aikBank, intesaBank, ipsBank, nlbBank, otbBank];
const bankLogosRow2 = [raiBank, unicreditBank];
const bankLogosRow3 = [
  siq,
  mcCheck,
  visaSecure,
  amEx,
  visaAmEx,
  mastercard1,
  mastercard2,
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#231F20] text-white px-5 sm:px-10 lg:px-20 py-12 flex flex-col items-center">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center border-b border-white pb-10 gap-10 lg:gap-0">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-2xl font-semibold">PR TG Beauty</h2>
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-4 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon color="#FFF" />
              <span className="truncate max-w-[200px]">{label}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <PrimaryLogo width={100} height={120} />
          <img
            src={brandImage}
            alt="TG Brand"
            className="mt-5 w-52 h-auto object-contain"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-10 w-full items-center">
        {[bankLogosRow1, bankLogosRow2, bankLogosRow3].map((row, idx) => (
          <div
            key={idx}
            className="flex flex-wrap justify-center items-center gap-8"
          >
            {row.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Bank ${i + 1}`}
                className="h-12 sm:h-14 md:h-16 object-contain"
              />
            ))}
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} PR TG Beauty. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
