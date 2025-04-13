import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, FileText, Cookie, AlertCircle } from 'lucide-react';
import { useParams } from 'react-router-dom';
import SEO from '@/components/SEO';

// Define the legal page content
const legalPageContent: Record<string, {
  title: string,
  description: string,
  content: React.ReactNode,
  icon: React.ReactNode
}> = {
  privacy: {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your data",
    icon: <Shield className="h-8 w-8" />,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p className="mb-4">Last updated: April 12, 2025</p>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
            <p>We collect information you provide directly to us when you:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Create an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us</li>
              <li>Participate in surveys or contests</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">2. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">3. Sharing of Information</h3>
            <p>We may share information about you as follows:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>With vendors, consultants, and other service providers</li>
              <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
              <li>If we believe your actions are inconsistent with our user agreements or policies</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">4. Your Choices</h3>
            <p>You can opt out of receiving promotional emails by following the instructions in those emails. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">5. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">Email: privacy@eazyrecipes.com</p>
          </section>
        </div>
      </>
    )
  },
  terms: {
    title: "Terms of Service",
    description: "Rules and guidelines for using our services",
    icon: <FileText className="h-8 w-8" />,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
        <p className="mb-4">Last updated: April 12, 2025</p>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h3>
            <p>By accessing or using the eazyrecipes website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">2. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials on eazyrecipes's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on eazyrecipes's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">3. Disclaimer</h3>
            <p>The materials on eazyrecipes's website are provided on an 'as is' basis. eazyrecipes makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">4. Limitations</h3>
            <p>In no event shall eazyrecipes or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on eazyrecipes's website, even if eazyrecipes or a eazyrecipes authorized representative has been notified orally or in writing of the possibility of such damage.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">5. Governing Law</h3>
            <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
          </section>
        </div>
      </>
    )
  },
  cookies: {
    title: "Cookie Policy",
    description: "How we use cookies and similar technologies",
    icon: <Cookie className="h-8 w-8" />,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
        <p className="mb-4">Last updated: April 12, 2025</p>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">1. What Are Cookies</h3>
            <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the site or a third-party to recognize you and make your next visit easier and the site more useful to you.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">2. How We Use Cookies</h3>
            <p>When you use and access our site, we may place a number of cookie files in your web browser. We use cookies for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To enable certain functions of the website</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable advertisements delivery, including behavioral advertising</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">3. Types of Cookies We Use</h3>
            <p>We use the following types of cookies:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Essential cookies.</strong> These are cookies that are required for the operation of our website.</li>
              <li><strong>Analytical/performance cookies.</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
              <li><strong>Functionality cookies.</strong> These are used to recognize you when you return to our website.</li>
              <li><strong>Targeting cookies.</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed.</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">4. How to Control Your Cookies</h3>
            <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
          </section>
        </div>
      </>
    )
  },
  disclaimer: {
    title: "Disclaimer",
    description: "Important limitations and disclaimers",
    icon: <AlertCircle className="h-8 w-8" />,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
        <p className="mb-4">Last updated: April 12, 2025</p>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">1. Information Accuracy</h3>
            <p>The information contained on the eazyrecipes website is for general information purposes only. eazyrecipes assumes no responsibility for errors or omissions in the contents on the Service.</p>
            <p className="mt-2">In no event shall eazyrecipes be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">2. Recipe Content</h3>
            <p>While we strive to provide accurate recipe information, including cooking times, ingredient quantities, and nutritional information, we cannot guarantee complete accuracy. Variables such as oven calibration, ingredient quality, and cooking experience may affect results.</p>
            <p className="mt-2">Please use your judgment when following our recipes, especially regarding cooking times and food safety.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">3. Allergies and Dietary Restrictions</h3>
            <p>Our recipes may contain allergens such as nuts, dairy, eggs, gluten, or other ingredients that could cause adverse reactions in people with specific allergies or medical conditions. While we try to label recipes appropriately, we cannot guarantee that a recipe is suitable for all dietary needs or restrictions.</p>
            <p className="mt-2">If you have a specific allergy, medical condition, or dietary restriction, please review all ingredients carefully and consult with a healthcare professional as needed before preparing and consuming our recipes.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">4. External Links</h3>
            <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with eazyrecipes. Please note that eazyrecipes does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">5. Changes to Disclaimer</h3>
            <p>eazyrecipes reserves the right to make additions, deletions, or modifications to the contents on the website at any time without prior notice.</p>
          </section>
        </div>
      </>
    )
  }
};

const LegalPage = () => {
  const { pageType } = useParams<{ pageType: string }>();
  
  if (!pageType || !legalPageContent[pageType]) {
    return <div>Page not found</div>;
  }
  
  const pageInfo = legalPageContent[pageType];

  return (
    <div className="min-h-screen">
      <SEO 
        title={pageInfo.title}
        description={pageInfo.description}
        keywords={`${pageInfo.title.toLowerCase()}, legal, eazy recipes, terms`}
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <div className="text-primary mr-3">
              {pageInfo.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{pageInfo.title}</h1>
              <p className="text-gray-600">{pageInfo.description}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-md mb-12">
          {pageInfo.content}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LegalPage;
