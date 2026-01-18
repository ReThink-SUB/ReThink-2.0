import React, { useEffect, useCallback, useState } from 'react';
import './styles.css';

/**
 * Responsive section header component. Title and subtitle text are passed in as props.
 * Has 3 lines across the page broken up into left and right lines, split by title and subtitle text. 
 */
export default function SectionHeader(props) {

  // State hooks for styling the right lines dynamically based on text width.
  const [styleTitleLineWidth, setstyleTitleLineWidth] = useState({});
  const [styleSubtitleLineWidth, setstyleSubtitleLineWidth] = useState({});

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
   * If title and subtitle were properly passed in (ie. properly formatted component),
   * calculate and set the widths. Also set styles of the right title and subtitle lines.
   */
  const setWidthAndStyles = useCallback(() => {
    if (props.title && props.subtitle){
      const measuredTitleWidth = measureWidth(props.title, 'text title');
      const measuredSubtitleWidth = measureWidth(props.subtitle, 'text subtitle');
      
      setstyleTitleLineWidth({ width: `calc(100% - ${measuredTitleWidth}px - 12%)` });
      // Use the larger width to ensure bottom line never extends past the title lines
      const maxWidth = Math.max(measuredTitleWidth, measuredSubtitleWidth);
      setstyleSubtitleLineWidth({ width: `calc(100% - ${maxWidth}px - 12%)` });
    }
  }, [props.title, props.subtitle]);


  /**
   * Sets width and styles needed, and also adds window resize event listener.
   */
  useEffect(() => {
    setWidthAndStyles();
    window.addEventListener("resize", setWidthAndStyles, false);
  }, [setWidthAndStyles]);


  return (
    <div className="parent">
      <div className="line-container">
        <div className="leftline top"></div>
        <div className="leftline mid"></div>
        <div className="leftline bot"></div>
      </div>
      
      <div className="line-container">
        <div className="rightline top" style={styleTitleLineWidth}></div>
        <div className="rightline mid" style={styleTitleLineWidth}></div>
        <div className="rightline bot" style={styleSubtitleLineWidth}></div>
      </div>

      <div className="text-container">
        <div className="text title">{props.title}</div>
        <div className="text subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
}