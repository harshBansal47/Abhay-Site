"use client"
import { motion } from 'framer-motion';

import Adhar from '@/public/adhar.png';
import BillPayment from '@/public/bill-payments.png';
import Insurance from '@/public/insurance.png';
import Loan from '@/public/loan.png';
import MoneyTransfer from '@/public/money-transfer.png';
import Pancard from '@/public/pncard.png';
import Recharge from '@/public/recharges.png';
import Tour from '@/public/tour.png';
import Website from '@/public/website.png';
import ServicesBackground from '@/public/services-bg.jpg';


const servicesData = [
  {
    title: 'PAN Card Services',
    imgSrc: Pancard.src,
    items: [
      'New PAN Card (107 Rs inclusive GST)',
      'Correction Application (107 Rs inclusive GST)',
      'Duplicate Application',
    ],
    imageLeft: true,
    misc: 'We at GST Suvidha Kendra provide information about Pan Card and assistance to Individuals in applying for the same through the authorised agents of the authorities. The services rendered include verifying, supporting and filing the application forms for those who are applying for new PAN card, corrections and changes to their existing PAN data and request for duplicate or replacement of lost or damaged PAN card.'
  },
  {
    title: 'Insurance Services',
    imgSrc: Insurance.src,
    items: [
      'Car Insurance (1st & 3rd Party)',
      'Two-Wheeler Insurance (1st & 3rd Party)',
      'Health Insurance',
      'Term Insurance',
      'Travel Insurance',
      'Critical Insurance',
      'Child Insurance',
      'Investment',
      'Pension',
    ],
    imageLeft: false,
    misc: 'With our Loan services, you can check your eligiblity before applying for a loan & save your time. Our system do this check within 10 minutes. Once approved, you can avail loans very fast.'
  },
  {
    title: 'Loan Services',
    imgSrc: Loan.src,
    items: [
      'Personal loans',
      'Business loans',
      'Loan Against property',
      'Home loans',
      'Vehicle loans',
    ],
    imageLeft: true,
  },
  {
    title: 'Website & Local Marketing Services',
    imgSrc: Website.src,
    items: [
      '1 Page Website + Domain + Hosting + 1 Business Email + Logo',
      'E-Commerce Website + Domain + Hosting + 1 Business Email + Logo + 20 Pages',
      'SSL (Security for Websites)/Logo Design/Brochure/Pamphlet/Visiting Card',
      'Listing in 10 Local Websites',
      'City Wise SEO Promotion',
      'Google Ads Set-Up',
      'Facebook Ads Set-Up',
      'Social Media Pages Creation',
    ],
    imageLeft: false,
  },
  {
    title: 'AEPS (Aadhaar Enabled Payment Systems)',
    imgSrc: Adhar.src,
    items: [
      'Withdrawal of cash',
      'Balance Inquiry',
      'Deposition of the amount',
      'Acquiring mini bank statement',
      'Transferal of funds from one Aadhaar-linked bank account to another Aadhaar-linked accounts',
    ],
    imageLeft: true,
    misc: 'No need to go to the bank when you need cash. Simply, apply for your finger and withdraw the money from us.',
  },
  {
    title: 'Money Transfer Services',
    imgSrc: MoneyTransfer.src,
    items: [
      'Add Beneficiary with Name, IFSC, Account Number & mobile number',
      'Money transfer up to 25,000 Rs in one single transaction',
      'Transfer up to 1 Lakh rupees in multiple transactions per day',
      'RTGS/NEFT/UPI for current accounts',
    ],
    imageLeft: false,
  },
  {
    title: 'Bill Payments',
    imgSrc: BillPayment.src,
    items: [
      'Mobile Post-Paid Bill Payment',
      'Electricity Bill Payment',
      'Landline Bill Payment',
      'Data card Bill Payment',
      'Cable TV Bill Payment',
      'DTH Bill Payment',
      'Piped GAS Bill Payment',
      'Broadband Bill Payment',
      'Insurance Premium Payment',
      'Water Bill Payment',
    ],
    imageLeft: true,
  },
  {
    title: 'Recharges',
    imgSrc: Recharge.src,
    items: [
      'Pre-Paid Mobile/Data Card',
      'Airtel/BSNL/IDEA/JIO/MTNL/VODAFONE',
      'DTH Recharges',
      'Airtel DTH Recharge',
      'Dish TV Recharge',
      'Tata Sky Recharge',
      'Sun Direct Recharge',
      'Videocon D2H Recharge',
    ],
    imageLeft: false,
  },
  {
    title: 'Tours & Travels',
    imgSrc: Tour.src,
    items: [
      'FLIGHT (DOMESTIC)',
      'FLIGHT (INTERNATIONAL)',
      'HOTEL BOOKING (DOMESTIC)',
      'HOTEL BOOKING (INTERNATIONAL)',
      'BUS BOOKING',
      'TRAIN BOOKING',
    ],
    imageLeft: true,
  },
];

const miscellaneousServices = [
  "TDS challan Submission",
  "TDS Return (Quarter filing) for Individual",
  "TDS Return (Quarter filing) for Organization",
  "ADVANCE TAX",
  "CMA Report",
  "ROC E FILING",
  "Alteration/Addition in Company",
  "Letter of Undertaking (LUT) File",
  "Name Change of Company",
  "Name Approval of LLP, Private Limited, OPC(RUN Form)",
  "DIR-3 KYC",
  "Company KYC (Active Form) INC-22",
  "Surrender of DIN",
  "Declaration of Commencement of Business",
  "Change in Director Details",
  "Closing of Company-(Excluding Govt. Fees)"
];

export default function Services() {
  return (
    <section
      className="w-full h-auto bg-fixed flex flex-col py-10 relative mt-24 overflow-hidden"
      style={{
        backgroundImage: `url(${ServicesBackground.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Sticky Header */}
      <div className="absolute top-0 z-20 bg-white/70 py-4 w-full">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-600 mb-4">
            Our Miscellanious Services
          </h1>
          <div className="w-80 h-1 bg-neutral-700 rounded-full mx-auto mb-4"></div>
          <p className="text-sm text-gray-600">
            We care for every financial need
          </p>
        </div>
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-white/50 z-10"></div> */}

      {/* Main Content Section */}
      <div className="container mx-auto mt-28 ">
        <div className='my-6 ml-8'>
          {miscellaneousServices.map((service, index) => (
            <div
              className='my-2 mx-4 text-gray-700 text-lg lg:text-xl flex items-center border-b border-gray-300 pb-2 hover:bg-gray-100 transition-all'
              key={index}
            >
              <span className='text-primary mr-2'>{'>'}</span>
              <span>{service}</span>
            </div>
          ))}
        </div>
        {servicesData.map((service, index) => (
          <motion.section
            className={`w-full py-20 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}  // Ensures the animation runs only once
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto flex flex-col md:flex-row items-center">
              {service.imageLeft && (
                <motion.div
                  className="flex-1 my-4"
                  initial={{ opacity: 0, x: -150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6,delay:0.4 }}
                >
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="mx-auto mb-4 w-96 h-96 object-cover"
                  />
                </motion.div>
              )}
             <motion.div className='flex-1 my-4'
              initial={service.imageLeft?{ opacity: 0, x: 150 }:{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6,delay:0.4 }}>
             <div
                className={`flex-1 sm:mx-5 p-4 md:mx-10 lg:mx-20 xl:mr-24 ${service.imageLeft ? 'md:ml-10 lg:mr-10' : 'md:mr-10 lg:ml-20'
                  } text-left`}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-gray-800">
                  {service.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg lg:text-xl">
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
                  transition={{ duration: 0.6,delay:0.4 }}
                >
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="mx-auto mb-4 w-96 h-96 object-cover"
                  />
                </motion.div>
              )}
            </div>
            {service.misc&&<div className='my-4 mx-5 text-gray-600 text-lg lg:text-xl'>{'=>'} {service.misc}</div>}
          </motion.section>
        ))}
      </div>
    </section>
  );
}
