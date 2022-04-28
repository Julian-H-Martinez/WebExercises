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
        //  TODO: if game is won or square is filled function should return early
        if(calculateWinner(squares) || squares[i]){
            return;
        }
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
        //  TODO: "status" should display which player has next turn
        // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        //  TODO: call calculateWinner(squares) to check if a player won
        const winner = calculateWinner(this.state.squares);
        let status;
        if(winner){
            status = 'Winner: ' + winner;
        }else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
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


//  =======================================
function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i=0; i<lines.length; i++){
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}