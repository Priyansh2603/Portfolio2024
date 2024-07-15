import React, { useState } from 'react';
import { FaCompress } from 'react-icons/fa'; // Import the minimize icon

const ImageComponent = ({ src, alt }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <div>
            <img
                src={src}
                alt={alt}
                style={{
                    borderRadius: 'lg',
                    cursor: 'pointer',
                    width: isFullscreen ? '100%' : 'auto',
                    height: isFullscreen ? '100%' : 'auto',
                    position: isFullscreen ? 'fixed' : 'relative',
                    top: isFullscreen ? 0 : 'auto',
                    left: isFullscreen ? 0 : 'auto',
                    right: isFullscreen ? 0 : 'auto',
                    bottom: isFullscreen ? 0 : 'auto',
                    zIndex: isFullscreen ? 1000 : 'auto',
                }}
                onClick={toggleFullscreen}
            />
            {isFullscreen && (
                <FaCompress
                    onClick={toggleFullscreen}
                    style={{
                        position: 'fixed',
                        top: 10,
                        right: 10,
                        cursor: 'pointer',
                        zIndex: 1001,
                        color: 'white',
                        fontSize: '2rem',
                    }}
                />
            )}
        </div>
    );
};

export default ImageComponent;
