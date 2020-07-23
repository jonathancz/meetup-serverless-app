import React from 'react'
import './App.css'
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react"
import image from "./test.jpg"

const list = ["1", "2", "3", "4", "5", "6", "7"]
function App() {
  return (
    <div class="row">
      {list.map(card =>
        <div class="card small">
            <img src={image} class="section media"/>
            <h2>Card {card}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum, risus ut euismod euismod, erat mi aliquam erat, eu venenatis nulla metus mattis ante.</p>
        </div>
      )}

      
      
    </div>
  )
}

export default App
