import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import Menu from "./menubar";
import Logo from "./logoe.jpg"

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
    }

    
  }
  
  
  render() {
    
    return (
      <header className="head">
         <Link className="logo" to="/"><img src={Logo} alt="logo"/></Link>
          <div className="sidebuttons">
          <Link className="links" to="/">
          <img className="expenses" src="https://img.icons8.com/ios-filled/50/ffffff/receipt-dollar.png"/>
          </Link>
          <Link className="links" to="/income">
           <img className="income" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACsElEQVRoge2ZTWsTURSGz7Wx4EcTcREXgvkBLmz/gFhwIVW0G8Gf4E5wKepWXVhdq7hzJ7jUVt1YKwU/QGtX4kZwaz8SEMH2cTFz4ziZTO6ZueGmMQ8EJrmZc94398zMvSciI/5TgDpQD62jFMBe4A3wFtgfWk8hgN3AU/7yEhgPrUsFYICHdPIIMKH1OQPczDBhuRFanxPAxRwTlkuhdeYCnAN+OxjZAs6H1psJcBz46WDC8gs4GVr3PwBHgR8KE5YNYDK0fhERAQ4D3wqYsHwHGqFN1ICPJUxYVoGDoUzsARY9mLAsA/u0Ovr6UALITW6Mt/y7fAUKzcjIoJFZo71qe9AwxpihmZFMcm6NVwmwlwDGgWvdRLmKt3wGxpQCpoC7wAqwGb9WgDvAlDJWJdZQ2sisImmNaEO1nRNvG3gAVBVxZ52NZJhaAmYUyQ4BHxx+GMt7FE0JYCbWpDJywjVBfF4lncSRRaCizDXtbEQTOD6v6wXpwJUC+fwbIbou1koYWQcOFDXi8zlyQURUQlLURKTwttfZCNAAXgAt4DlwJPWVU0VFdIvhkDNTaG5pxQGTLKTGv5YoK8sXZc62TpP8UCRatySPE+NNEUm2O5vGmGpivCUi6g1RipYxZkKRs61Tc40s93jfD/Q5HUqrASwATWCeVL32qbR65ezQ6eP2+8SDkcfKnG2dPm+/zzzEmC8dwcOMVCnWnLOsMQgPRGPMpojMlQhxyxizXlpI1owA08oYFeB1gdl4RT8XjTFLwGlFgjrR0tyVd+iW8WcosIxPotlYVYH7RH8bdGMLuAdM9I7Yjns2K5DWyCr66Z8E5oBPRB33jfj4NnBMGcvQpb+sNQJwnTDNhzHgcjdRIj3WWjuFoeprZda8zy65T5JVkx7rMLLTysoyNKU1YkSf+AMrQnQqojk7ogAAAABJRU5ErkJggg=="></img>
          </Link>
          {/* <Link className="links" to="/create">
            CExpenses
          </Link>
          <Link className="links" to="/createincome">
            Cincome
          </Link> */}
          <Link className="mobileLinks" to="/">
            <Menu />
          </Link>
          </div>
          
        
      </header>
    );
  }
}
