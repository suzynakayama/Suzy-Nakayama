import React from 'react';
import "./Panda.css"

export const Panda = ({ isVisible }) => {
  return (
    <div className={ isVisible ? "panda show" : "panda" }>
    <div className="face">
      <div className="ear left-ear"></div>
      <div className="ear right-ear"></div>
      <div className="eye left-eye">
        <div className="spark spark-left">
          <div className="dot"></div>
        </div>
      </div>
      <div className="eye right-eye">
        <div className="spark spark-right">
          <div className="dot"></div>
        </div>
      </div>
      <div className="nose"></div>
      <div className="mouth"></div>
    </div>
    <div className="body">
      <div className="white"></div>
      <div className="arm left-arm"></div>
      <div className="arm right-arm"></div>
      <div className="leg left-leg">
        <div className="leg-dot-left"></div>
      </div>
      <div className="leg right-leg">
        <div className="leg-dot-right"></div>
      </div>
    </div>
  </div>
  )
}
