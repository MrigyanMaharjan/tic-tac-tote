import React, { useState } from 'react';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('X');

    const handleClick = (index) => {
        if (board[index] === null) {
            const newBoard = [...board];
            newBoard[index] = turn;
            setBoard(newBoard);
            setTurn(turn === 'X' ? 'O' : 'X');
        }
    };

    const renderBox = (index) => {
        return (
            <div
                key={index}
                className='box flex items-center justify-center text-2xl font-semibold bg-slate-500 h-[8rem] rounded-xl hover:scale-95 hover:cursor-pointer duration-150 w-[8rem]'
                onClick={() => handleClick(index)}
            >
                {board[index]}
            </div>
        );
    };

    return (
        <div className='bg-purple-400 h-[70vh] w-screen flex items-top justify-center overflow-hidden'>
            <section className='grid grid-cols-3 grid-row-3 h-[55vh] w-[55vh]'>
                {[...Array(9)].map((_, index) => renderBox(index))}
            </section>
        </div>
    );
};

export default Game;
