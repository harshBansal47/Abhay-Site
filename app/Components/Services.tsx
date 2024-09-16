"use client"
import { motion } from 'framer-motion';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { FaChevronDown } from "react-icons/fa";
import ServicesBackground from '@/public/services-bg.jpg';
import AccountingImage from '@/public/Accounting.png';
import Audit from '@/public/Audit.png';
import DSC from '@/public/DSC.png';
import EWAY from '@/public/EWAY.png';
import GST from '@/public/GST.jpg';
import IEC from '@/public/IEC.png';
import Ip from '@/public/iP.png';
import ITR from '@/public/ITR.jpg';
import Registration from '@/public/Registration.png';
import { ChevronDown } from 'lucide-react';

const serviceData = [
  {
    title: 'Goods and Services Tax (GST) Solutions',
    imgSrc: GST.src,
    items: [
      'Comprehensive GST Enrollment Services',
      'Filing of GST Returns (Nil/Regular, including GSTR1 and GSTR3B)',
      'Management of Composition Scheme Returns (GSTR-4)',
      'Preparation of Annual GST Returns (GSTR 8, GSTR 9/9A, GSTR 10)',
      'Detailed GST Account Reconciliation (Up to 3 months)',
      'Processing GST Refunds and Handling Surrender Requests',
      'GST Audit and Response to Notices',
    ],
    imageLeft: true,
  },
  {
    title: 'Income Tax Filing Services',
    imgSrc: ITR.src,
    items: [
      'Income Tax Returns for Salaried Individuals (ITR-1)',
      'Returns for Capital Gains, House Property, and Other Sources (ITR-2)',
      'Returns for Proprietorship Businesses (ITR-3)',
      'Filing for Companies and Firms (ITR-4, ITR-5)',
      'CA Certification of Tax Returns',
      'Corrections and Responses to Notices for ITR Forms',
    ],
    misc:'We provide all types of Income Tax Return Services for current year, previous years and all types of Amendments.',
    imageLeft: false,
  },
  {
    title: 'Digital Signature Certificates (DSC)',
    imgSrc: DSC.src,
    items: [
      'Class-2 DSC for Individuals (2 Years Validity)',
      'Class-2 DSC Combo for Personal and Organizational Use (2 Years)',
      'Class-3 DSC for Government and Organizational Use (2 Years)',
      'Class-3 DSC for Individuals and Organizations (2 Years)',
      'Digital Signature Token Services',
    ],
    imageLeft: true,
  },
  {
    title: 'Business Registration Services',
    imgSrc: Registration.src,
    items: [
      'Udyog Aadhar (MSME) Registration',
      'FSSAI License and Registration',
      'Government e-Marketplace (GEM) Registration',
      'Shop & Establishment Act Registration',
      'LLP, Partnership, and Proprietorship Registration',
      'Director Identification Number (DIN)',
      'Tax Deduction Account Number (TAN) Registration',
      'Company Conversion Services',
      'Nidhi Company and Section 8 / OPC Registration',
    ],
    imageLeft: false,
  },
  {
    title: 'Comprehensive Accounting Services',
    imgSrc: AccountingImage.src,
    items: [
      'Balance Sheet and Profit & Loss Account Preparation',
      'CA Certification for Financial Statements',
      'Monthly and Annual Accounting Packages',
      'GST Bookkeeping Services (Monthly/Yearly)',
      'Digital Tax Payment Assistance (Monthly/Yearly)',
      'Over 20 Varied Accounting Services Available',
    ],
    misc:'There are more than 20 types of accounting services provided by GST Suvidha Kendra. We can also provide you door step services to save your time.',
    imageLeft: true,
  },
  {
    title: 'Audit Services',
    imgSrc: Audit.src,
    items: [
      'Appointment of Auditor (Form ADT-1)',
      'Income Tax Audit for Businesses (Up to 1 Crore)',
      'Income Tax Audit for Businesses (1 Crore to 2 Crore)',
      'Income Tax Audit for Businesses (2 Crore to 5 Crore)',
      'Income Tax Audit for Businesses (5 Crore to 10 Crore)',
    ],
    imageLeft: false,
  },
  {
    title: 'Import/Export Code (IEC) Services',
    imgSrc: IEC.src,
    items: [
      'IEC Registration with Government Fees (Company)',
      'IEC Registration with Government Fees (Partnership)',
      'IEC Registration with Government Fees (Proprietorship)',
      'Amendment Services for IEC',
    ],
    misc:'We Know Import and Export of any product need lots of verification & drafting. All of your hard work should be taken care by a team of professionals. So, we are here to provide you the necessary support.',
    imageLeft: true,
  },
  {
    title: 'Intellectual Property Services',
    imgSrc: Ip.src,
    items: [
      'Trademark Registration for Individuals (Government Fees Applied)',
      'Trademark Registration for Organizations (Government Fees Applied)',
      'Processing Fees for Trademark Registration',
    ],
    misc:'This is one of the important tasks. From Drafting to publishing, there are so many stages involved. We take care of your trademark application by providing right category whether it is a name or logo.',
    imageLeft: false,
  },
  {
    title: 'E-Way Bill Services',
    imgSrc: EWAY.src,
    items: [
      'E-Way Bill Packs (100 Bills - Quarterly)',
      'E-Way Bill Packs (15 Bills - Monthly)',
      'E-Way Bill Packs (5 Bills - Monthly)',
      'Single E-Way Bill Generation',
      'E-Way Bill Registration',
    ],
    imageLeft: true,
    misc:'This can be a headache when you are new to E-Way Bills. For all the bills which are more than 50,000 Rupees, E-Way bill is mandatory. With our flexible plans, you can relax and order the E-way bill online.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full h-auto bg-fixed flex flex-col py-10 relative mt-24 overflow-hidden"
      style={{
        backgroundImage: `url(${ServicesBackground.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Sticky Header */}
      <div className="absolute top-0 z-20 bg-neutral-50 py-6 w-full shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Services We Offer
          </h1>
          <div className="w-40 h-1 bg-teal-500 rounded-full mx-auto mb-4"></div>
          <p className="text-md text-gray-600">
            Explore our range of services tailored to meet your needs.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto mt-36">
        {serviceData.map((service, index) => (
          <Accordion
            key={index}
            className={`my-3 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              boxShadow: 1,
              borderRadius: 1,
              '&:before': {
                display: 'none',
              },
              '& .MuiAccordionSummary-root': {
                padding: 2,
                borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
              },
              '& .MuiAccordionSummary-content': {
                margin: 0,
              },
              '& .MuiAccordionDetails-root': {
                padding: 2,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ChevronDown/>} // Modern icon
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography className="text-xl font-semibold text-gray-800">
                {service.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col md:flex-row items-center">
                {service.imageLeft && (
                  <motion.div
                    className="flex-1 my-4"
                    initial={{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="mx-auto mb-4 w-80 h-80 object-cover rounded-md shadow-sm"
                    />
                  </motion.div>
                )}
                <motion.div
                  className="flex-1 my-4 p-6"
                  initial={service.imageLeft ? { opacity: 0, x: 150 } : { opacity: 0, x: -150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div
                    className={`flex-1 ${service.imageLeft ? 'md:ml-10' : 'md:mr-10'} text-left`}
                  >
                    <h2 className="text-lg font-bold mb-4 text-gray-700">
                      {service.title}
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-base">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                {!service.imageLeft && (
                  <motion.div
                    className="flex-1 my-4"
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="mx-auto mb-4 w-80 h-80 object-cover rounded-md shadow-sm"
                    />
                  </motion.div>
                )}
              </div>
              {service.misc && (
                <div className="my-4 mx-5 text-gray-600 text-base">{'=> '} {service.misc}</div>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
