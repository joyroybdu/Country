import React from 'react';
import footerContact from '../../api/footerApi.json';
import { FaCircleInfo } from "react-icons/fa6";
import { TbDeviceVisionPro } from "react-icons/tb";
import { MdMiscellaneousServices } from "react-icons/md";
export const Footers = () => {
    const footerIcon = {
      info: <FaCircleInfo />,
      vision: <TbDeviceVisionPro />,
      services: <MdMiscellaneousServices />
    };

    return (
      <footer className='footer-section'>
        <div className='container grid grid-three-cols'>
          {footerContact.map((curData, index) => {
            const { icon, title, details } = curData;
            return (
              <div className='footer-contact' key={index}>
                <div className="icon">{footerIcon[icon]}</div> 
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </footer>
    );
};
