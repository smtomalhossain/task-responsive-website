import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

interface LinkItem {
  label: string;
  href: string;
}

interface LinkColumnProps {
  title: string;
  links: LinkItem[];
}

const serviceLinks: LinkItem[] = [
  { label: 'Plumbing', href: '/services/plumbing' },
  { label: 'Drainage', href: '/services/drainage' },
  { label: 'Bathrooms', href: '/services/bathrooms' },
  { label: 'Commercial', href: '/services/commercial' },
];

const usefulLinksLeft: LinkItem[] = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Updates', href: '/updates' },
  { label: 'About Us', href: '/about' },
  { label: 'Rates', href: '/rates' },
];

const usefulLinksRight: LinkItem[] = [
  { label: 'Customer Services', href: '/customerservices' },
  { label: 'Updates', href: '/updates' },
  { label: 'Locations', href: '/locations' },
  { label: 'Sitemap', href: '/sitemap' },
];

const LinkColumn: React.FC<LinkColumnProps> = ({ title, links }) => (
  <div>
    <h3 className="text-[#2A2F32] font-bold mb-4 text-[14px]">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-[#2A2F32] hover:text-blue-600 transition duration-150 text-[14px]"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 mt-20 font-['Inter',sans-serif] border-t border-gray-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-13 pb-12">
          {/* Column 1: Logo and Social Links */}
          <div className="md:col-span-2 lg:col-span-1 space-y-6">
            <h2 className="text-[32px] font-bold text-[#000000]">Business Logo</h2>
            <div className="flex space-x-5">
              <a href="#facebook" aria-label="Facebook">
                <FaFacebook className="w-6 h-6 cursor-pointer text-gray-900 hover:text-blue-600 transition duration-150" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <BsLinkedin className="w-6 h-6 cursor-pointer text-gray-900 hover:text-blue-600 transition duration-150" />
              </a>
              <a href="#twitter" aria-label="Twitter">
                <FaTwitter className="w-6 h-6 cursor-pointer text-gray-900 hover:text-blue-600 transition duration-150" />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <BsInstagram className="w-6 h-6 cursor-pointer text-gray-900 hover:text-blue-600 transition duration-150" />
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="col-span-1">
            <LinkColumn title="Our Services" links={serviceLinks} />
          </div>

          {/* Column 3: Useful Links */}
          <div className="col-span-1">
            <h3 className="text-[#2A2F32] font-bold mb-4 text-[14px]">Useful Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <ul className="space-y-3">
                {usefulLinksLeft.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#2A2F32] hover:text-blue-600 transition duration-150 text-[14px]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {usefulLinksRight.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#2A2F32] hover:text-blue-600 transition duration-150 text-[14px]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-gray-800 font-semibold mb-4 text-base">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <IoLocationOutline className="w-5 h-5 mr-3 mt-1 text-[#2A2F32] flex-shrink-0" />
                <span className="text-[#2A2F32] text-[14px] font-bold leading-snug">
                  1 Sall Street, London, SE11 6NQ
                </span>
              </div>

              <div className="flex items-start">
                <MdOutlineEmail className="w-5 h-5 mr-3 mt-1 text-[#2A2F32] flex-shrink-0" />
                <a
                  href="mailto:enquiries@PlumbingPros.com"
                  className="text-[#2A2F32] hover:text-blue-600 transition duration-150 text-[14px] font-bold"
                >
                  enquiries@PlumbingPros.com
                </a>
              </div>

              <div className="flex items-start">
                <FiPhoneCall className="w-5 h-5 mr-3 mt-1 text-[#2A2F32] flex-shrink-0" />
                <a
                  href="tel:02045276474"
                  className="text-[#2A2F32] hover:text-blue-600 transition duration-150 text-[14px] font-bold"
                >
                  020 4527 6474
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8"></div>

        <div className="py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 space-y-2 sm:space-y-0">
          <span>&copy; {new Date().getFullYear()} Plumbing Pros. All Rights Reserved</span>
          <span className="text-right">Website by IKI Adventure And Creative</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
