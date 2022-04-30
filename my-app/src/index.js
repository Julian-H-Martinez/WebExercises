import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
    //  TODO: (TIMETRAVEL) Delete the constructor in Board

    renderSquare(i) {
        // return <Square value={i}/>;
        return (
            <Square
        //  TODO: Replace this.state.squares[i] with this.props.squares[i]
            value={this.props.squares[i]}
        //  TODO: Replace this.handleClick(i) with this.props.onClick(i)
            onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
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
    //  TODO: set up initial state for Game component within its constructor
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            //  TODO: add, stepNumber: 0, to constructor
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i){
        // TODO: ensure that future history is discarded
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length-1];
        //  creating a copy of the array
        const squares = current.squares.slice();
        //  TODO: if game is won or square is filled function should return early
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            //  TODO: update stepNumber
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    //  TODO: define jumpTo method to update stepNumber
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    //  TODO: update to use most recent history entry to determine and display game's status
    //  TODO: map over history
    render() {
        const history = this.state.history;
        //  TODO: update to render current select move according to stepNumber instead of last move
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return(
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;

        if(winner){
            status = 'Winner: ' + winner;
        }else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

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

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
