import React from 'react';

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
            <h1 className='text-3xl font-bold mb-4'>Terms of Service</h1>
            <p className='mb-6'>
                Welcome to {companyName} (the "Company," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website and the services we provide, including consultancy services and assistance in LLM (Language Model) development (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
            </p>

            <div className="mb-8">
                <h2>1. Services</h2>
                <p>
                    1.1 The Company offers consultancy services and assistance in LLM development to its clients. The specific scope of Services will be agreed upon between the Company and the client in a separate agreement.
                </p>
            </div>

            <div className="mb-8">
                <h2>2. Intellectual Property</h2>
                <p>
                    2.1 All intellectual property rights in the Services, including but not limited to copyrights, trademarks, and trade secrets, are owned by the Company or its licensors. You agree not to copy, modify, distribute, or create derivative works based on the Services without our prior written consent.
                </p>
            </div>
            <div className="mb-8">
                <h2>3. Confidentiality</h2>
                <p>
                    3.1 You agree to keep all information related to the Services, including but not limited to technical information, business plans, and client data, strictly confidential. You shall not disclose such information to any third party without our prior written consent.
                </p>
            </div>
            <div className="mb-8">
                <h2>4. Payment and Fees</h2>
                <p>
                    4.1 The fees for the Services will be agreed upon between the Company and the client in a separate agreement. You agree to pay all fees in a timely manner as specified in the agreement.
                </p>
            </div>
            <div className="mb-8">
                <h2>5. Disclaimer of Warranties</h2>
                <p>
                    5.1 The Services are provided "as is" and without warranty of any kind. The Company disclaims all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
            </div>
            <div className="mb-8">
                <h2>6. Limitation of Liability</h2>
                <p>
                    6.1 In no event shall the Company be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the Services, even if advised of the possibility of such damages.
                </p>
            </div>
            <div className="mb-8">
                <h2>7. Termination</h2>
                <p>
                    7.1 The Company reserves the right to terminate your access to the Services at any time and for any reason, without notice.
                </p>
            </div>
            <div className="mb-8">
                <h2>8. Governing Law</h2>
                <p>
                    8.1 These Terms shall be governed by and construed in accordance with the laws of {jurisdiction}. Any dispute arising out of or in connection with these Terms shall be resolved through arbitration in accordance with the rules of {arbitrationAssociation}.
                </p>
            </div>
            <div className="mb-8">
                <h2>9. Amendments</h2>
                <p>
                    9.1 The Company reserves the right to amend these Terms at any time. The amended Terms will be effective upon posting on our website. Your continued use of the Services after the posting of the amended Terms constitutes your acceptance of the amended Terms.
                </p>
            </div>
            <div className="mb-8">
                <h2>10. Compliance with Laws</h2>
                <p>
                    10.1 You agree to comply with all applicable laws and regulations in your jurisdiction when accessing or using our Services.
                </p>
            </div>
            <div className="mb-8">
                <p>
                    If you have any questions about these Terms, please contact us at {contactEmail}.
                </p>
            </div>
            <p>Last updated: {lastUpdatedDate}</p>
        </div>
    );
};

export default TermsOfService;