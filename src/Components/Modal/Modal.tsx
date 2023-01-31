import React from "react"
import { createPortal } from "react-dom";
import { CloseBtn } from "./CloseBtn";
import "./Modal.css"

const modalRootElement = document.querySelector("#modal")

export const Modal: React.FC<{
  show: boolean;
  onClose: () => void;
}> = (props) => {
  const { children, show, onClose } = props;

  const element = React.useMemo(() => document.createElement("div"), [])

  React.useEffect(() => {
    if (show) {
      modalRootElement?.appendChild(element)
      return () => {
        modalRootElement?.removeChild(element)
      }
    }
  }, [show])

  return createPortal(<div>
      <div className="modal_background">
        <div className="modal_card">{<div className="close_button_wrapper">
          <CloseBtn onClose={onClose}/>
        </div>
        }{children}</div>
      </div>
    </div>, 
    element
  )

  // return <>
  //   <p>TEST</p>
  // </>
}