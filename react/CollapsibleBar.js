import React, { useState } from "react";
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = [ 'barContainer' ,
 'bar',
 'iconContainerLeftOpen',
 'leftIconOpen',
 'iconContainerLeftClosed',
 'leftIconClosed',
 'collapsibleHeader',
 'iconContainerRightOpen',
'rightIconOpen',
'iconContainerRightClosed',
'rightIconClosed',
'collapsibleContent',
'contentsContainer'

]

const CollapsibleBar = (props) => {
  const handles = useCssHandles(CSS_HANDLES)

  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <div>
      <div className={handles.barContainer}>
        <button className={handles.bar}
          onClick={
            isOpen == false ? () => setIsOpen(true) : () => setIsOpen(false)
          }
        >
          {isOpen == true ? (
            <span className={handles.iconContainerLeftOpen}>
              <img src={props.iconLeftOpen} width={props.leftIconWidth} height={props.leftIconHeight} className={handles.leftIconOpen}/>
            </span>
          ) : (
            <span className={handles.iconContainerLeftClosed}>
              <img src={props.iconLeftClosed} width={props.leftIconWidth} height={props.leftIconHeight} className={handles.leftIconClosed}/>
            </span>
          )}
         <span className={handles.collapsibleHeader}>{props.collapseHeader}</span>
          {isOpen == true ? (
            <span className={handles.iconContainerRightOpen}>
              <img src={props.iconRightOpen} width={props.rightIconWidth} height={props.rightIconHeight} className={handles.rightIconOpen}/>
            </span>
          ) : (
            <span className={handles.iconContainerRightClosed}>
              <img src={props.iconRightClosed} width={props.rightIconWidth} height={props.rightIconHeight} className={handles.rightIconClosed}/>
            </span>
          )}
        </button>
        </div>
        <div className={handles.contentsContainer}>
        {isOpen == true ? <div className={handles.collapsibleContent}>{props.collapseContent}</div> : null}
        </div>
      </div>
    </React.Fragment>
  );
};
export default CollapsibleBar;

