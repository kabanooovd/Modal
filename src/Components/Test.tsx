import React from "react"
import { Modal } from "./Modal/Modal"



export const Test = () => {
  const [show, setShow] = React.useState(true)

  const buttons = [
    {
      id: "0",
      name: "click_1",
      onClick: () => alert("click_1")
    },
    {
      id: "1",
      name: "click_2",
      onClick: () => alert("click_2")
    },
    {
      id: "2",
      name: "click_3",
      onClick: () => alert("click_3")
    },
  ]

  return <>
    <div style={{margin: 100, display: "flex", flexDirection: "column", alignItems: "center"}}>
      <button onClick={() => setShow(true)}>open</button>
      <span>test</span>
    </div>
    <Modal show={show} onClose={() => setShow(false)}>
      <h1>header test</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit molestias iure repellendus sapiente, expedita culpa repellat corporis omnis fugit quisquam facilis, eius quod recusandae tempora? Possimus enim fuga veritatis debitis.</p>
      {buttons.map(({id, name, onClick}) => {
        return <button key={id} onClick={onClick}>{name}</button>
      })}
    </Modal>
  </>
}