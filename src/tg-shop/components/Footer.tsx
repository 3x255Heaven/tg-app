import PrimaryLogo from "@assets/svgs/PrimaryLogo";
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

import conversionStatementDoc from "@assets/docs/conversion_statement.pdf";
import dataPrivacyDoc from "@assets/docs/data_privacy.pdf";
import dataProtectionDoc from "@assets/docs/data_protection.pdf";
import refundPolicyDoc from "@assets/docs/refund_policy.pdf";
import termsOfUseDoc from "@assets/docs/terms_of_use.pdf";

import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const docs = [
    { label: t("conversion_statement"), file: conversionStatementDoc },
    { label: t("data_privacy"), file: dataPrivacyDoc },
    { label: t("data_protection"), file: dataProtectionDoc },
    { label: t("refund_policy"), file: refundPolicyDoc },
    { label: t("terms_of_use"), file: termsOfUseDoc },
  ];

  return (
    <footer className="w-full bg-[#231F20] text-white px-5 sm:px-10 lg:px-20 py-12 flex flex-col items-center">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center border-b border-white pb-10 gap-10 lg:gap-0">
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <h2 className="text-2xl font-semibold">TG Beauty</h2>
          <span>Bate Brkića 11, Novi Sad</span>
          <span>Pib: 115067592 </span>
          <span>Mb: 68068479</span>
          <span>www.teodoragrubor.com</span>
          <span>+381659805580</span>
          <span>teodora.grubor@gmail.com</span>
        </div>

        <div className="flex flex-col items-center">
          <PrimaryLogo width={60} height={80} />
          <img
            src={brandImage}
            alt="TG Brand"
            className="mt-5 w-42 h-auto object-contain"
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

      <div className="flex flex-wrap justify-center items-center text-center gap-4 mt-10">
        {docs.map((doc, idx) => (
          <a
            key={idx}
            href={doc.file}
            download
            className="text-sm text-gray-400 hover:text-white cursor-pointer"
          >
            {doc.label}
          </a>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} TG Beauty. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
