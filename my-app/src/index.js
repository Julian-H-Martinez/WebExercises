import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     // TODO: remove the constructor
//     // constructor(props) {
//     //     super(props);
//     //     this.state={
//     //         value: null,
//     //     };
//     // }
//     render() {
//         // TODO: use onClick={this.props.onClick}
//         // TODO: replace this.state.value with this.props.value
//         return (
//             <button
//                 className="square"
//                 onClick = {() => this.props.onClick()}
//                 // onClick = {() => this.setState({value:'X'})}
//             >
//                 {/* TODO */}
//                 {this.props.value}
//                 {/*{this.state.value}*/}
//             </button>
//         );
//     }
// }

//  TODO: replace Square class to be a function
function Square(props){
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    //  TODO: add constructor to Board
    //  TODO: set Board's initial state to contain array of 9 nulls corresponding to the 9 squares
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            //  setting first move to be 'X' by default
            xIsNext: true,
        };
    }

    handleClick(i){
        //  creating a copy of the array
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        // return <Square value={i}/>;
        return (
            <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);