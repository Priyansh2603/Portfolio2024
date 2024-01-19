import React, { useEffect, useState } from 'react';
import './BioSection.css'; // Import your CSS file for styling

const BioSection = () => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const bioText = "Hii, I'm Priyansh Daksha, a passionate software developer with expertise in React.js, Node.js, Express.js, MongoDB, Bootstrap, and Solidity. I excel in crafting seamless user experiences and building robust backends. My journey is fueled by a curiosity to solve complex problems and a commitment to staying on the cutting edge of technology. ";

    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prevText) => prevText + bioText[index]);
      index++;

      if (index === bioText.length-1) {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="biosection">
      <div className="biotext" style={{fontFamily:'cursive'}}>{typedText}</div>
    </div>
  );
};

export default BioSection;
