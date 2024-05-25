import React from 'react';
import { termsOfServiceContent } from '@/app/components/constants/tosContent';

interface TermsOfServiceProps {
    companyName: string;
    contactEmail: string;
    jurisdiction: string;
    arbitrationAssociation: string;
    lastUpdatedDate: string;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({
    companyName,
    contactEmail,
    jurisdiction,
    arbitrationAssociation,
    lastUpdatedDate,
}) => {
    return (
        <div className='text-gray-50 max-w-4xl mx-auto px-4 py-8'>
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <p className="mb-6">
                Welcome to {companyName} (the &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website and the services we provide, including consultancy services and assistance in LLM (Language Model) development (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
            </p>

            {termsOfServiceContent.map((section, index) => (
                <Section key={index} title={section.title}>
                    {typeof section.content === 'function' ? (
                        <p>{section.content(jurisdiction, arbitrationAssociation)}</p>
                    ) : (
                        <p>{section.content}</p>
                    )}
                </Section>
            ))}

            <p className="mb-4">
                If you have any questions about these Terms, please contact us at {contactEmail}.
            </p>

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
export default TermsOfService;