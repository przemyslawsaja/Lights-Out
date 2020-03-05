import React, {Component} from 'react'
import "./Cell.css"

/** A single cell on the board */

class Cell extends Component {
  state = {isLit : false};

    /** - flipCellsAroundMe: a function rec'd from the board which flips this cell and the cells around of it */
  flipCellsAroundMe = () => {

  };
  /** - isLit: boolean, is this cell lit? */
  isLit = () => {

  };
  handleClick = (evt) =>{
    // call up to the board to flip cells around this cell
    this.props.flipCellsAroundMe();
  };

  render() {
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");

    return (
        <td className={classes} onClick={this.handleClick} />
    )
  }
}


export default Cell