import React, { useEffect, useState } from 'react';
import Turn from './Turn.jsx';
import { Conditions } from './Conditions.jsx';

const Game = () => {
   
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('O');

    const handleClick = (index) => {
        if (board[index] === null) {
            const newBoard = [...board];
            newBoard[index] = turn;
            setBoard(newBoard);
            setTurn(turn === 'X' ? 'O' : 'X');
            Conditions.forEach((condition)=>{
                let pos1=condition[0];
                let pos2=condition[1];
                let pos3=condition[2];
                let pos1val=newBoard[pos1];
                let pos2val=newBoard[pos2];
                let pos3val=newBoard[pos3];
                if(pos1val!==null&&pos2val!==null&&pos3val!==null){
              if(pos1val==pos2val && pos2val==pos3val){
                alert(`winner is ${pos1val}`)
              }
                }
            })
            
    };

    }
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
<>
<Turn player={turn}/>
        <div className='bg-purple-400 h-[70vh] w-screen flex items-top justify-center overflow-hidden'>
            <section className='grid grid-cols-3 grid-row-3 h-[55vh] w-[55vh]'>
                {[...Array(9)].map((_, index) => renderBox(index))}
            </section>
        </div>
        </>

    );
};

export default Game;
