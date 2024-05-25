import React from 'react';
import { privacyPolicyContent } from '@/app/components/constants/privacyPolicyContent';

interface PrivacyPolicyProps {
  companyName: string;
  lastUpdatedDate: string;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  companyName,
  lastUpdatedDate,
}) => {
  return (
    <div className="text-gray-50 max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6">
        This Privacy Policy explains how {companyName} (the "Company," "we," "us," or "our") collects, uses, and safeguards the personal information of our users.
      </p>

      {privacyPolicyContent.map((section, index) => (
        <Section key={index} title={section.title}>
          <p>{section.content}</p>
        </Section>
      ))}

      <p>Last updated: {lastUpdatedDate}</p>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    {children}
  </div>
);

export default PrivacyPolicy;