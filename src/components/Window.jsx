import { useState } from "react";
import ReduceIcon from '../assets/reduce.png';
import MaximizeIcon from '../assets/maximize.png';


const resizeIconStyle = {
  width: "15px",
  height: "15px",
  cursor: "pointer",
}

const windowHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  borderRadius: '1px',
  borderBottom: '1px solid black',
  boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.1)',
  height: '20px',
};

export default function Window(
  { children,
    title,
    width = "500px",
    height = "300px",
    maximized = false,
    handleMaximize,
  }) {

    
    const windowStyle = {
      width,
      height: maximized ? height : '90vh',
      marginTop: '20px',
      borderRadius: '3px',
      border: '1px solid #000',
      boxShadow: '1px 1px 50px 7px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
    };

    const windowBodyStyle = {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '3px',
      height: 'calc(100% - 20px)' // Calculer la hauteur en soustrayant la hauteur de l'en-tête
    };

    return (
      <div className="window" style={windowStyle}>
        <div className="window-header" style={windowHeaderStyle}>
          <span>{title}</span>
          <button style={{border: "none", backgroundColor: "transparent"}} onClick={handleMaximize}>
            {maximized ?
              <img src={MaximizeIcon} alt="Reduce" style={resizeIconStyle} /> : 
              <img src={ReduceIcon} alt="Maximize" style={resizeIconStyle} />}
          </button>
        </div>
        <div className="window-body" style={windowBodyStyle}>{children}</div> 
      </div>
    )
}