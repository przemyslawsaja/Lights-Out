import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    changeLightStartsOn: 0.2
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard()  {
    let board = [];
    for(let y=0; y < this.props.nrows; y++){
      let row = [];
      for(let x = 0; x < this.props.ncols; x++){
        row.push(Math.random() < this.props.changeLightStartsOn)
      }
      board.push(row)
    }
    return board
  };

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off

    // TODO: determine is the game has been won

    //this.setState({board, hasWon});
  }


  /** Render game board or winning message. */
  //TODO: winning message
  render() {

    let tblBoard = [];
    for(let y = 0; y < this.props.nrows; y ++){
      let row = [];
      for(let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(<Cell key={coord} isLit={this.state.board[y][x]} />)
      }
      tblBoard.push(<tr>{row}</tr>)
    }
    return (
        <table className="Board">
          <tbody>
          {tblBoard}
          </tbody>
        </table>
    )
  }
}


export default Board;
