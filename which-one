import { useState, useEffect } from 'react';
import "./purist.css";

// Define background images for middle columns
const columnBackgrounds = [
  'Purist/backgrounds/1.png',
  'Purist/backgrounds/2.png',
  'Purist/backgrounds/3.png',
  'Purist/backgrounds/4.png',
  'Purist/backgrounds/5.png',
  'Purist/backgrounds/6.png',
  'Purist/backgrounds/7.png',
  'Purist/backgrounds/8.png',
  'Purist/backgrounds/9.png',
  'Purist/backgrounds/10.png',
  'Purist/backgrounds/11.png',
  'Purist/backgrounds/12.png',
  'Purist/backgrounds/13.png',
  'Purist/backgrounds/14.png',
  'Purist/backgrounds/15.png',
  'Purist/backgrounds/16.png',
  'Purist/backgrounds/17.png',
  'Purist/backgrounds/18.png',
  'Purist/backgrounds/19.png',
  'Purist/backgrounds/20.png',
  'Purist/backgrounds/21.png',
  'Purist/backgrounds/22.png',
  'Purist/backgrounds/23.png',
  'Purist/backgrounds/24.png',
  'Purist/backgrounds/25.png',
  'Purist/backgrounds/26.png',
    'Purist/backgrounds/27.png',
    'Purist/backgrounds/28.png',
    'Purist/backgrounds/29.png',
    'Purist/backgrounds/30.png',
    'Purist/backgrounds/31.png',
    'Purist/backgrounds/32.png',
    'Purist/backgrounds/33.png',
    'Purist/backgrounds/34.png',
    'Purist/backgrounds/35.png',
    'Purist/backgrounds/36.png',
    'Purist/backgrounds/37.jpg',
    'Purist/backgrounds/38.JPG',
    'Purist/backgrounds/39.webp',
    'Purist/backgrounds/40.png',
    'Purist/backgrounds/41.PNG',
    'Purist/backgrounds/42.jpg',
    'Purist/backgrounds/43.JPG',
    'Purist/backgrounds/44.PNG',
    'Purist/backgrounds/45.jpg',
    'Purist/backgrounds/46.jpg',
    'Purist/backgrounds/47.jpg',
    'Purist/backgrounds/48.jpg',
    'Purist/backgrounds/49.jpg',
    'Purist/backgrounds/50.jpg',
    'Purist/backgrounds/51.jpg',
    'Purist/backgrounds/52.jpg',
    'Purist/backgrounds/53.jpeg',
    'Purist/backgrounds/54.PNG',
    'Purist/backgrounds/55.PNG',
    'Purist/backgrounds/56.JPG',
    'Purist/backgrounds/57.jpg',
    'Purist/backgrounds/58.JPG',
    'Purist/backgrounds/59.JPG',
    'Purist/backgrounds/60.png',
    'Purist/backgrounds/61.JPG',
    'Purist/backgrounds/62.JPG',
    'Purist/backgrounds/63.JPG',
    'Purist/backgrounds/64.jpg',
    'Purist/backgrounds/65.JPG',
    'Purist/backgrounds/66.jpg',
    'Purist/backgrounds/67.jpg',
    'Purist/backgrounds/68.jpg',
    'Purist/backgrounds/69.JPG',
    'Purist/backgrounds/70.jpg',
    'Purist/backgrounds/71.JPG',
    'Purist/backgrounds/72.JPG',
    'Purist/backgrounds/73.jpg',
    'Purist/backgrounds/74.JPG',
    'Purist/backgrounds/75.jpg',
    'Purist/backgrounds/76.JPG',
    'Purist/backgrounds/77.jpeg',
    'Purist/backgrounds/78.JPG',
    'Purist/backgrounds/79.JPG',
    'Purist/backgrounds/80.JPG',
    'Purist/backgrounds/81.png',
    'Purist/backgrounds/82.jpg',
    'Purist/backgrounds/84.JPG',
    'Purist/backgrounds/85.JPG',
    'Purist/backgrounds/86.JPG',
    'Purist/backgrounds/87.JPG',
    'Purist/backgrounds/88.JPG',
    'Purist/backgrounds/89.JPG',
    'Purist/backgrounds/90.JPG',
    'Purist/backgrounds/91.JPG',
    'Purist/backgrounds/92.JPG',
    'Purist/backgrounds/93.JPG',
    'Purist/backgrounds/94.JPG',
    'Purist/backgrounds/95.JPG',
    'Purist/backgrounds/96.JPG',
    'Purist/backgrounds/97.JPG',
    'Purist/backgrounds/98.JPG',
    'Purist/backgrounds/99.JPG',
    'Purist/backgrounds/100.JPG',
    'Purist/backgrounds/101.JPG',
    'Purist/backgrounds/102.JPG',
    'Purist/backgrounds/103.JPG',
    'Purist/backgrounds/104.JPG',
    'Purist/backgrounds/105.JPG',
    'Purist/backgrounds/106.JPG',
    'Purist/backgrounds/107.GIF',
    'Purist/backgrounds/108.JPG',
    'Purist/backgrounds/109.JPG',
    'Purist/backgrounds/110.JPG',
    'Purist/backgrounds/111.jpg',
    'Purist/backgrounds/112.JPG',
    'Purist/backgrounds/113.JPG',
    'Purist/backgrounds/114.JPG',
    'Purist/backgrounds/115.JPG',
    'Purist/backgrounds/116.JPG',
    'Purist/backgrounds/117.JPG',
    'Purist/backgrounds/118.JPG',
    'Purist/backgrounds/119.WEBP',
    'Purist/backgrounds/120.JPG',
    'Purist/backgrounds/122.GIF',
    'Purist/backgrounds/123.JPG',
    'Purist/backgrounds/124.JPG',
    'Purist/backgrounds/125.JPG',
    'Purist/backgrounds/126.JPG',
    'Purist/backgrounds/127.JPG',
    'Purist/backgrounds/128.WEBP',
    'Purist/backgrounds/129.JPG',
    'Purist/backgrounds/130.JPG',
    'Purist/backgrounds/131.jpg',
    'Purist/backgrounds/132.jpg',
    'Purist/backgrounds/133.PNG',
    'Purist/backgrounds/134.PNG',
    'Purist/backgrounds/135.PNG',
    'Purist/backgrounds/136.PNG',
    'Purist/backgrounds/137.png',
    'Purist/backgrounds/138.JPG',
    'Purist/backgrounds/139.png',
    'Purist/backgrounds/140.JPG',
    'Purist/backgrounds/141.JPG',
    'Purist/backgrounds/142.JPG',
    'Purist/backgrounds/143.JPG',
    'Purist/backgrounds/144.JPG',
    'Purist/backgrounds/145.jpeg',
    'Purist/backgrounds/146.JPG',
    'Purist/backgrounds/147.JPG',
    'Purist/backgrounds/148.jpg',
    'Purist/backgrounds/149.jpg',
    'Purist/backgrounds/150.JPG',
    'Purist/backgrounds/151.PNG',
    'Purist/backgrounds/152.jpg',
    'Purist/backgrounds/153.jpeg',
    'Purist/backgrounds/154.JPG',
    'Purist/backgrounds/155.PNG',
    'Purist/backgrounds/156.PNG',
    'Purist/backgrounds/157.JPG',
    'Purist/backgrounds/158.JPG',
    'Purist/backgrounds/159.jpg',
    'Purist/backgrounds/160.jpg',
    'Purist/backgrounds/161.JPG',
    'Purist/backgrounds/162.JPG',
    'Purist/backgrounds/163.jpg',
    'Purist/backgrounds/164.jpg',
    'Purist/backgrounds/165.WEBP',
    'Purist/backgrounds/166.JPG',
    
];

// Define text links for left and right columns
const leftColumnLinks = [
  { text: "IG", url: "https://www.instagram.com/gilbertojramiro" },
  { text: "TWITTER", url: "https://twitter.com/Th33Arch1t3ct" },
  { text: "MUSIC", url: "https://soundcloud.com/wholesomesound" },
  { text: "MUSIC VIDEOS", url: "https://www.youtube.com/@WHOLESOMESOUNDOFFICIAL" },
  { text: "BLOG", url: "https://www.tumblr.com/wholesomesound" },
  { text: "VLOG", url: "https://www.youtube.com/@gilbertoramiro" },
  { text: "☮︎", url: "https://wholesomesound.com" },
  { text: "SKYSCRAPPER", url: "https://gilbertoramiro.com/SKYSCAPPER" },
  { text: "ARCHIVE", url: "https://wholesomesounds.com" },
  { text: "GITHUB", url: "https://github.com/Th33Arch1t3ct" },
];

const rightColumnLinks = [
  { text: "IG", url: "https://www.instagram.com/gilbertojramiro" },
  { text: "TWITTER", url: "https://twitter.com/Th33Arch1t3ct" },
  { text: "BLOG", url: "https://www.tumblr.com/wholesomesound" },
  { text: "VLOG", url: "https://www.youtube.com/@gilbertoramiro" },
  { text: "MUSIC", url: "https://soundcloud.com/wholesomesound" },
  { text: "MUSIC VIDEOS", url: "https://www.youtube.com/@WHOLESOMESOUNDOFFICIAL" },
  { text: "☢︎", url: "https://wholesomesound.com" },
  { text: "SKYSCRAPPER", url: "https://gilbertoramiro.com/SKYSCAPPER" },
  { text: "ARCHIVE", url: "https://wholesomesounds.com" },
  { text: "GITHUB", url: "https://github.com/Th33Arch1t3ct" },
  ];

const Purist = () => {
    const [leftMiddleBackground, setLeftMiddleBackground] = useState(columnBackgrounds[0]);
    const [rightMiddleBackground, setRightMiddleBackground] = useState(columnBackgrounds[1]);

    // Configuration - Adjust these values to control your layout precisely
    const config = {
        leftTextColumnWidth: "20%",     // Width of left text column
        rightTextColumnWidth: "20%",    // Width of right text column
        leftImageColumnWidth: "35%",    // Width of left image column
        rightImageColumnWidth: "35%",   // Width of right image column
    };

    useEffect(() => {
        // Pick random backgrounds for middle columns
        const randomIndex1 = Math.floor(Math.random() * columnBackgrounds.length);
        let randomIndex2 = Math.floor(Math.random() * columnBackgrounds.length);
        
        // Ensure we don't get the same image twice
        while (randomIndex2 === randomIndex1) {
            randomIndex2 = Math.floor(Math.random() * columnBackgrounds.length);
        }
        
        setLeftMiddleBackground(columnBackgrounds[randomIndex1]);
        setRightMiddleBackground(columnBackgrounds[randomIndex2]);
    }, []);
    
    // CSS for the animations
    const animationStyles = `
        @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
        }
        
        @keyframes scrollDown {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
        }
        
        .scroll-up {
            animation: scrollUp 20s linear infinite;
        }
        
        .scroll-down {
            animation: scrollDown 20s linear infinite;
        }
        
        .text-scroll-up {
            animation: scrollUp 15s linear infinite;
        }
        
        .text-scroll-down {
            animation: scrollDown 15s linear infinite;
        }
    `;
    
    return (
        <div className="h-screen w-full">
            {/* Add the animation styles */}
            <style>{animationStyles}</style>
            
            {/* Main container with flexbox instead of grid */}
            <div style={{ 
                display: 'flex', 
                width: '100%', 
                height: '100%',
                overflow: 'hidden'
            }}>
                {/* Far Left Column - White background with black text */}
                <div style={{ 
                    width: config.leftTextColumnWidth, 
                    backgroundColor: 'white', 
                    height: '100%',
                    overflow: 'hidden',
                    padding: 0,
                    margin: 0
                }}>
                    <div className="text-scroll-up" style={{ 
                        height: '200%', 
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {/* Double the links to create seamless loop */}
                        {[...leftColumnLinks, ...leftColumnLinks].map((link, index) => (
                            <a 
                                key={`left-${index}`}
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                    color: 'black',
                                    fontSize: 'clamp(2rem, 2vw, 1.5rem)',
                                    fontWeight: 500,
                                    textAlign: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: `${100 / (leftColumnLinks.length * 2)}%`,
                                    width: '100%',
                                    padding: 0,
                                    margin: 0,
                                    textDecoration: 'none'
                                }}
                                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* Middle Left Column - Scrolling Up */}
                <div style={{ 
                    width: config.leftImageColumnWidth, 
                    height: '100%', 
                    overflow: 'hidden',
                    padding: 0,
                    margin: 0
                }}>
                    <div className="scroll-up" style={{ height: '200%', width: '100%' }}>
                        {/* Double the content to create seamless loop */}
                        {[...Array(8)].map((_, index) => (
                            <div 
                                key={`left-bg-${index}`}
                                style={{
                                    backgroundImage: `url(${leftMiddleBackground})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '27%',
                                    width: '100%'
                                }}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Middle Right Column - Scrolling Down */}
                <div style={{ 
                    width: config.rightImageColumnWidth, 
                    height: '100%', 
                    overflow: 'hidden',
                    padding: 0,
                    margin: 0
                }}>
                    <div className="scroll-down" style={{ height: '200%', width: '100%' }}>
                        {/* Double the content to create seamless loop */}
                        {[...Array(8)].map((_, index) => (
                            <div 
                                key={`right-bg-${index}`}
                                style={{
                                    backgroundImage: `url(${rightMiddleBackground})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '27%',
                                    width: '100%'
                                }}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Far Right Column - Black background with white text */}
                <div style={{ 
                    width: config.rightTextColumnWidth, 
                    backgroundColor: 'black', 
                    height: '100%',
                    overflow: 'hidden',
                    padding: 0,
                    margin: 0
                }}>
                    <div className="text-scroll-down" style={{ 
                        height: '200%', 
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {/* Double the links to create seamless loop */}
                        {[...rightColumnLinks, ...rightColumnLinks].map((link, index) => (
                            <a 
                                key={`right-${index}`}
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                    color: 'white',
                                    fontSize: 'clamp(2rem, 2vw, 1.5rem)',
                                    fontWeight: 500,
                                    textAlign: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: `${100 / (rightColumnLinks.length * 2)}%`,
                                    width: '100%',
                                    padding: 0,
                                    margin: 0,
                                    textDecoration: 'none'
                                }}
                                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purist;
