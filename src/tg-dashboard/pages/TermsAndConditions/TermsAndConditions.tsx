import AdminDashboardLayout from "@dashboard/hoc/AdminDashboardLayout";

const TermsAndConditions = () => {
  return (
    <AdminDashboardLayout>
      <div className="w-full p-4  flex flex-col">
        <span className="text-3xl font-bold mb-1">Terms & Conditions</span>
        <div className="w-full flex flex-col justify-center pt-6">
          <div className="flex flex-col justify-between bg-white border border-[#0000001F] rounded-[10px] p-4 text-[#666666] text-sm">
            <span className="mb-6">
              Last Updated: <span className="font-bold">21.7.2024</span>
            </span>

            <span className="mb-6">
              Welcome to TG Shop! These Terms of Service ("Terms") govern your
              access to and use of our website, mobile application, and services
              (collectively, the "Services"). By using our Services, you agree
              to these Terms. If you do not agree, please do not use our
              Services.
            </span>

            <div className="flex flex-col mb-4">
              <span className="text-[22px] text-[#BB8F32] font-bold mb-2">
                1. Information We Collect
              </span>
              <span>
                By accessing, browsing, or using our Services, you acknowledge
                that you have read, understood, and agreed to be bound by these
                Terms. If you are using our Services on behalf of an
                organization, you confirm that you have the authority to bind
                the organization to these Terms.
              </span>
            </div>

            <div className="flex flex-col mb-4">
              <span className="text-[22px] text-[#BB8F32] font-bold mb-2">
                2. Eligibility
              </span>
              <span>
                You must be at least 18 years old or the legal age of majority
                in your jurisdiction to use our Services. If you are under this
                age, you may only use our Services with the consent of a parent
                or legal guardian.
              </span>
            </div>

            <div className="flex flex-col mb-4">
              <span className="text-[22px] text-[#BB8F32] font-bold mb-2">
                3. User Accounts
              </span>
              <span>
                To access certain features, you may need to create an account.
                You are responsible for maintaining the confidentiality of your
                login credentials and for all activities that occur under your
                account. We reserve the right to suspend or terminate your
                account if we suspect any unauthorized activity.
              </span>
            </div>

            <div className="flex flex-col mb-4">
              <span className="text-[22px] text-[#BB8F32] font-bold mb-2">
                4. Prohibited Activities
              </span>
              <span>
                By using our Services, you agree not to: Engage in any
                fraudulent, misleading, or unlawful activities. Attempt to hack,
                disrupt, or compromise our Services. Use automated systems
                (bots, scrapers, etc.) to access our platform without
                permission. Post or share any offensive, abusive, or illegal
                content.
              </span>
            </div>

            <div className="flex flex-col mb-4">
              <span className="text-[22px] text-[#BB8F32] font-bold mb-2">
                5. Intellectual Property
              </span>
              <span>
                All content, trademarks, logos, and materials on our platform
                are owned by [Your Company Name] or licensed to us. You may not
                copy, distribute, or modify any content without our written
                consent.
              </span>
            </div>

            <div className="flex flex-col mb-4">
              <span className="text-[22px] text-[#BB8F32] font-bold mb-2">
                6. Purchases & Payments
              </span>
              <span>
                Some Services may require payment. By purchasing, you agree to
                provide accurate payment information. We use third-party payment
                processors and do not store your financial details. All sales
                are final, and refunds are issued at our discretion.
              </span>
            </div>

            <div className="flex flex-col mb-4">
              <span className="text-[22px] text-[#BB8F32] font-bold mb-2">
                7. Limitation of Liability
              </span>
              <span>
                Our Services are provided "as is" without any warranties. We are
                not responsible for indirect, incidental, or consequential
                damages arising from your use of our Services. If you are
                dissatisfied with our Services, your only remedy is to stop
                using them.
              </span>
            </div>

            <div className="flex flex-col mb-4">
              <span className="text-[22px] text-[#BB8F32] font-bold mb-2">
                8. Termination
              </span>
              <span>
                We may suspend or terminate your access to our Services if you
                violate these Terms or for any reason at our sole discretion.
              </span>
            </div>

            <div className="flex flex-col mb-4">
              <span className="text-[22px] text-[#BB8F32] font-bold mb-2">
                9. Governing Law
              </span>
              <span>
                These Terms shall be governed by and construed under the laws of
                [Your Country/State], without regard to its conflict of law
                provisions.
              </span>
            </div>

            <div className="flex flex-col mb-4">
              <span className="text-[22px] text-[#BB8F32] font-bold mb-2">
                10. Changes to These Terms
              </span>
              <span>
                We may update these Terms from time to time. If we make
                significant changes, we will notify you via email or through our
                platform. If you have any questions, contact us at [your
                email/contact info].
              </span>
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default TermsAndConditions;
