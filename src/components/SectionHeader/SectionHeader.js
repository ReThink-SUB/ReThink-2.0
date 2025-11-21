import React, { useEffect, useCallback, useState } from 'react';
import './styles.css';

/**
 * Responsive section header component. Title and subtitle text are passed in as props.
 * Has 3 lines across the page broken up into left and right lines, split by title and subtitle text. 
 */
export default function SectionHeader(props) {

  // State hook for title width; all right lines will use the same width
  const [titleWidth, setTitleWidth] = useState(0);
  const [styleLineWidth, setStyleLineWidth] = useState({});

  /**
   * Computes and returns width of given text based on its corresponding CSS style.
   * @param string text to calculate width of
   * @param string className of CSS style to apply to text for calculations
   * @returns width of styled text
   */
  const measureWidth = (text, className) => {
    // creates document element for computation
    const tempElement = document.createElement('div');
    tempElement.className = className;
    tempElement.textContent = text;

    // appends, calculates width, removes
    document.body.appendChild(tempElement);
    const width = tempElement.clientWidth;
    document.body.removeChild(tempElement);

    return width;
  };

  /**
   * If title was properly passed in, calculate and set the width.
   * All three lines will use the same width based on the title.
   */
  const setWidthAndStyles = useCallback(() => {
    if (props.title){
      const newTitleWidth = measureWidth(props.title, 'text title');
      setTitleWidth(newTitleWidth);
      setStyleLineWidth({ width: `calc(100% - ${newTitleWidth}px - 12%)` });
    }
  }, [props.title, titleWidth]);


  /**
   * Sets width and styles needed, and also adds window resize event listener.
   */
  useEffect(() => {
    setWidthAndStyles();
    window.addEventListener("resize", setWidthAndStyles, false);
    
    return () => {
      window.removeEventListener("resize", setWidthAndStyles, false);
    };
  }, [setWidthAndStyles]);


  return (
    <div className="parent">
      <div className="line-container">
        <div className="leftline top"></div>
        <div className="leftline mid"></div>
        <div className="leftline bot"></div>
      </div>
      
      <div className="line-container">
        <div className="rightline top" style={styleLineWidth}></div>
        <div className="rightline mid" style={styleLineWidth}></div>
        <div className="rightline bot" style={styleLineWidth}></div>
      </div>

      <div className="text-container">
        <div className="text title">{props.title}</div>
        <div className="text subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
}