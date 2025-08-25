import React from "react";
import { useNavigate } from "react-router-dom";
import AgilityView from "../view";
import { createHeaderLinks } from '../../../utils/headerLinks';
import { footerLinks, footerLinks2, footerLinks3, socialLinks } from '../../../utils/footerLinks';

const AgilityController = () => {
  const navigate = useNavigate();
  const headerLinks = createHeaderLinks(navigate);

  return <AgilityView 
  headerLinks={headerLinks} 
  footerLinks={footerLinks} 
  footerLinks2={footerLinks2}  
  footerLinks3={footerLinks3} 
  socialLinks={socialLinks} 
  />;
};

export default AgilityController;