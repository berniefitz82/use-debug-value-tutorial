import { useState, useEffect, useDebugValue } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  //useDebugValue(windowWidth);
  //useDebugValue(getScreenSizeLabel(windowWidth));
  useDebugValue(getScreenSizeLabel(windowWidth), (value) => `Screen Size: ${value}`);
  return windowWidth;
};

const getScreenSizeLabel = (width) => {
  if (width < 576) {
    return 'Extra Small (xs)';
  } else if (width < 768) {
    return 'Small (sm)';
  } else if (width < 992) {
    return 'Medium (md)';
  } else if (width < 1200) {
    return 'Large (lg)';
  } else {
    return 'Extra Large (xl)';
  }
};

// Usage example
const App = () => {
  const windowWidth = useWindowWidth();

  return (
    <div>
      <p>Window Width: {windowWidth}px</p>
    </div>
  );
};

export default App;