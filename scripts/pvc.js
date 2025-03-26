import { setBackground } from "./colour.js";
import { Hard, computerStart, ExtremelyHard, NoChance} from "./computerAgent.js";

let difficulty = localStorage.getItem('difficulty') || 'Hard';

let computerMove;

if(difficulty === 'Hard')
{
    computerMove = Hard;
    document.querySelector('.js-title').innerHTML = 'Difficulty: Hard';
}
else if(difficulty === 'Extremely Hard')
{
    computerMove = ExtremelyHard;
    document.querySelector('.js-title').innerHTML = 'Difficulty: Extremely Hard';
}
else if(difficulty === 'No Chance')
{
    computerMove = NoChance;
    document.querySelector('.js-title').innerHTML = 'Difficulty: No Chance';
}

let classTile = '';

let classTitle = '';

let introduction = JSON.parse(localStorage.getItem('introduction'));

let intervalId;

let tiles = ['', '', '', '', '', '', '', '', ''];
let tileFree = [true, true, true, true, true, true, true, true, true];

let score = JSON.parse(localStorage.getItem('score-pvc')) || 
{
    wins: 0,
    losses: 0
}

let colour = localStorage.getItem('colour') || 'default';

if(introduction)
{
    setTimeout(()=>
    {
        document.querySelector('.js-introduction').innerHTML = '';
        tileActivation()
    }, 5000);
    setBackground(colour);
    introduction = false;
    localStorage.setItem('introduction', JSON.stringify(introduction));
}
else
{
    document.querySelector('.js-introduction').innerHTML = '';
    tileActivation();
}

if(colour === 'yellow' || colour === 'white')
{
    classTile = "tile-alternate";
    classTitle = "title-black";

}

document.querySelectorAll('.js-comp-score-digit').forEach((compScore)=>
{
    compScore.innerHTML = `${score.losses}`;
})

document.querySelectorAll('.js-player-score-digit').forEach((playerScore)=>
{
    playerScore.innerHTML = `${score.wins}`;
})

/*document.querySelector('.js-options-new-game').addEventListener('mouseover', ()=>
{
    document.querySelector('.js-options-new-game').innerHTML = `
    <img class="icon" src="image/new-game-hover.png">
    <div class="js-new-game">New Game</div>
    `;
})

document.querySelector('.js-options-new-game').addEventListener('mouseout', ()=>
{
    document.querySelector('.js-options-new-game').innerHTML = `
    <img class="icon" src="image/newGame.png">
    <div class="js-new-game">New Game</div>
    `;
});*/

document.querySelector('.js-new-game-click').addEventListener('mouseover', ()=>
{
    document.querySelector('.js-options-new-game').classList.add('options-div-hover');
})

document.querySelector('.js-new-game-click').addEventListener('mouseout', ()=>
{
   document.querySelector('.js-options-new-game').classList.remove('options-div-hover');
});

document.querySelector('.js-settings-click').addEventListener('mouseover', ()=>
{
    document.querySelector('.js-options-settings').classList.add('options-div-hover');
})

document.querySelector('.js-settings-click').addEventListener('mouseout', ()=>
{
    document.querySelector('.js-options-settings').classList.remove('options-div-hover');
});

document.querySelector('.js-info-click').addEventListener('mouseover', ()=>
{
    document.querySelector('.js-options-info').classList.add('options-div-hover');
})

document.querySelector('.js-info-click').addEventListener('mouseout', ()=>
{
    document.querySelector('.js-options-info').classList.remove('options-div-hover');
});

document.querySelector('.js-mode-click').addEventListener('mouseover', ()=>
{
    document.querySelector('.js-options-mode').classList.add('options-div-hover');
})

document.querySelector('.js-mode-click').addEventListener('mouseout', ()=>
{
    document.querySelector('.js-options-mode').classList.remove('options-div-hover');
});

function checkGamestatus()
{
    if(tiles[0] === 'player-move' &&  tiles[1] === 'player-move' && tiles[2] === 'player-move')
    {
        score.wins ++;
        document.querySelectorAll('.js-player-score-digit').forEach((playerScore)=>
        {
            playerScore.innerHTML = `${score.wins}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('You won!');
    }
    else if(tiles[3] === 'player-move' && tiles[4] === 'player-move' && tiles[5] === 'player-move')
    {
        score.wins ++;
        document.querySelectorAll('.js-player-score-digit').forEach((playerScore)=>
        {
            playerScore.innerHTML = `${score.wins}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('You won!');
    }
    else if(tiles[6] === 'player-move' && tiles[7] === 'player-move' && tiles[8] === 'player-move')
    {
        score.wins ++;
        document.querySelectorAll('.js-player-score-digit').forEach((playerScore)=>
        {
            playerScore.innerHTML = `${score.wins}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('You won!');
    }
    else if(tiles[0] === 'player-move' && tiles[3] === 'player-move' && tiles[6] === 'player-move')
    {
        score.wins ++;
        document.querySelectorAll('.js-player-score-digit').forEach((playerScore)=>
        {
            playerScore.innerHTML = `${score.wins}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('You won!');
    }
    else if( tiles[1] === 'player-move' && tiles[4] === 'player-move' && tiles[7] === 'player-move')
    {
        score.wins ++;
        document.querySelectorAll('.js-player-score-digit').forEach((playerScore)=>
        {
            playerScore.innerHTML = `${score.wins}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('You won!');
    }
    else if(tiles[2] === 'player-move' && tiles[5] === 'player-move' && tiles[8] === 'player-move')
    {
        score.wins ++;
        document.querySelectorAll('.js-player-score-digit').forEach((playerScore)=>
        {
            playerScore.innerHTML = `${score.wins}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('You won!'); 
    }
    else if(tiles[2] === 'player-move' && tiles[4] === 'player-move' && tiles[6] === 'player-move')
    {
        score.wins ++;
        document.querySelectorAll('.js-player-score-digit').forEach((playerScore)=>
        {
            playerScore.innerHTML = `${score.wins}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('You won!');
    }
    else if(tiles[0] === 'player-move' && tiles[4] === 'player-move' && tiles[8] === 'player-move')
    {
        score.wins ++;
        document.querySelectorAll('.js-player-score-digit').forEach((playerScore)=>
        {
            playerScore.innerHTML = `${score.wins}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('You won!');
    }
    else if(tiles[0] === 'computer-move' &&  tiles[1] === 'computer-move' && tiles[2] === 'computer-move')
    {
        score.losses ++;
        document.querySelectorAll('.js-comp-score-digit').forEach((compScore)=>
        {
            compScore.innerHTML = `${score.losses}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('The computer wins!');
    }
    else if(tiles[3] === 'computer-move' && tiles[4] === 'computer-move' && tiles[5] === 'computer-move')
    {
        score.losses ++;
        document.querySelectorAll('.js-comp-score-digit').forEach((compScore)=>
        {
            compScore.innerHTML = `${score.losses}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('The computer wins!');
    }
    else if(tiles[6] === 'computer-move' && tiles[7] === 'computer-move' && tiles[8] === 'computer-move')
    {
        score.losses ++;
        document.querySelectorAll('.js-comp-score-digit').forEach((compScore)=>
        {
            compScore.innerHTML = `${score.losses}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('The computer wins!');
    }
    else if(tiles[0] === 'computer-move' && tiles[3] === 'computer-move' && tiles[6] === 'computer-move')
    {
        score.losses ++;
        document.querySelectorAll('.js-comp-score-digit').forEach((compScore)=>
        {
            compScore.innerHTML = `${score.losses}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('The computer wins!');
    }
    else if( tiles[1] === 'computer-move' && tiles[4] === 'computer-move' && tiles[7] === 'computer-move')
    {
        score.losses ++;
        document.querySelectorAll('.js-comp-score-digit').forEach((compScore)=>
        {
            compScore.innerHTML = `${score.losses}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('The computer wins!');
    }
    else if(tiles[2] === 'computer-move' && tiles[5] === 'computer-move' && tiles[8] === 'computer-move')
    {
        score.losses ++;
        document.querySelectorAll('.js-comp-score-digit').forEach((compScore)=>
        {
            compScore.innerHTML = `${score.losses}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('The computer wins!');
    }
    else if(tiles[2] === 'computer-move' && tiles[4] === 'computer-move' && tiles[6] === 'computer-move')
    {
        score.losses ++;
        document.querySelectorAll('.js-comp-score-digit').forEach((compScore)=>
        {
            compScore.innerHTML = `${score.losses}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));
        winnerMessage('The computer wins!');
    }
    else if(tiles[0] === 'computer-move' && tiles[4] === 'computer-move' && tiles[8] === 'computer-move')
    {
        score.losses ++;
        document.querySelectorAll('.js-comp-score-digit').forEach((compScore)=>
        {
            compScore.innerHTML = `${score.losses}`;
        })
        localStorage.setItem('score-pvc', JSON.stringify(score));

        winnerMessage('The computer wins!');
    }
    else
    {
        let check = [tileFree[0], tileFree[1], tileFree[2], tileFree[3], tileFree[4], tileFree[5], tileFree[6], tileFree[7], tileFree[8]];
        let countSpace = 0;
        for(let i = 0; i < check.length; i++)
        {
            if(check[i] === false)
            {
                countSpace++;
            }
        }
        if(countSpace === 9)
        {
            reset();
        }
    }
}

function reset()
{
    tileFree = [true, true, true, true, true, true, true, true, true];
    tiles = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll(`.js-tile`).forEach((tile)=>
    {
        tile.innerHTML = '';
    })
    whosMove();
}

document.querySelector('.js-new-game-click').addEventListener('click', ()=>
{
    newGameClick();
});

let newGame = document.querySelectorAll(".js-options-new-game")

newGame.forEach((gameDiv)=>
{
    gameDiv.addEventListener("click", () => {
        newGameClick();
    });
})

document.querySelector('.js-settings-click').addEventListener('click', ()=>
{
    settingsClick();
});

let settings = document.querySelectorAll(".js-options-settings")

settings.forEach((settingsDiv)=>
{
    settingsDiv.addEventListener("click", () => {
        settingsClick();
    });
})


function winnerMessage(statement)
{
    document.querySelector('.js-containment-interface').innerHTML=`
    <div class="title js-title">Difficulty: ${difficulty}</div>
    <div class="interface">
        <div class="tile js-tile-1 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-2 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-3 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-4 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-5 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-6 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-7 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-8 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-9 js-tile-color ${classTile}"></div>
    </div>
    <div class=" js-status-message status-message">
        <div class="status-message-inside-content">
            <div>${statement}</div>
        </div>
    </div>
    `;
    setTimeout(()=>
    {
        document.querySelector('.js-status-message').classList.add('fade-out');
    }, 2000);

    setTimeout(()=>
    {
        clearInterval(intervalId);
        document.querySelector('.js-containment-interface').innerHTML=`
        <div class="title ${classTitle} js-title">Difficulty: ${difficulty}</div>
        <div class="interface">
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
        </div>
        <div class="temp-disable-div js-temp-disable"></div>
        `;
        tileActivation()
    }, 3000);
}

document.querySelector('.js-info-click').addEventListener('click', ()=>
{
    infoClick();
});

let info = document.querySelectorAll(".js-options-info")

info.forEach((infoDiv)=>
{
    infoDiv.addEventListener("click", () => {
        infoClick();
    });
})

document.querySelector('.js-mode-click').addEventListener('click', ()=>
{
    modeClick();
});

let mode = document.querySelectorAll(".js-options-mode")

mode.forEach((modeDiv)=>
{
    modeDiv.addEventListener("click", () => {
        modeClick();
    });
})

function tileActivation()
{
    reset();
    document.querySelectorAll(`.js-tile`).forEach((tile)=>
    {
        tile.addEventListener('click', ()=>
        {
            let tileIndex = tile.dataset.tileNo - 1;
            if(tileFree[tileIndex])
            {
                tile.innerHTML = `<img class="js-move grow move" src="image/tic-tac-circle.webp">`;
                tileFree[tileIndex] = false;
                tiles[tileIndex] = 'player-move';
                technicalities();
                let check = [tileFree[0], tileFree[1], tileFree[2], tileFree[3], tileFree[4], tileFree[5], tileFree[6], tileFree[7], tileFree[8]];
                let fill = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === false)
                    {
                        fill++;
                    }
                }
                if(fill === 9)
                {
                    
                }
                else
                {
                    document.querySelector('.js-temp-disable').innerHTML = `<div class="disable"></div>`;
                    new Promise((resolve)=>
                    {
                        setTimeout(()=>
                        {
                            computerMove(tiles, tileFree);
                            document.querySelector('.js-temp-disable').innerHTML = ``;
                            resolve()
                        }, 1000);

                    }).then(()=>
                    {
                        technicalities();
                    })
                }   
            }
        });
    })
}

function closeWindowSettings()
{
    document.querySelector('.js-x-div').addEventListener('click', ()=>
    {
        document.querySelector('.js-containment-interface').innerHTML=`
        <div class="title ${classTitle} js-title">Difficulty: ${difficulty}</div>
        <div class="interface">
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
        </div>
        <div class="temp-disable-div js-temp-disable"></div>
        `;
        tileActivation()
    });
}

function previousePage()
{
    document.querySelector('.js-previouse-div').addEventListener('click', ()=>
    {
        document.querySelector('.js-containment-interface').innerHTML=`
        <div class="title ${classTitle} js-title">Difficulty: ${difficulty}</div>
        <div class="interface">
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
        </div>
        <div class="settings-ui">
            <div class="settings-heading">
                <div class="settings">Settings</div>
                <div class="x-div js-x-div">
                    <img class="x-img" src="image/x.svg">
                </div>
            </div>
            <div>
                <div class="colour-div js-colour-div">Change background colour</div>
                <div class="difficulty-div js-difficulty-div">Change difficulty level</div>
            </div>
        </div>
        `;
        closeWindowSettings();
        document.querySelector('.js-difficulty-div').addEventListener('click', ()=>
        {
            document.querySelector('.js-containment-interface').innerHTML =
            `
            <div class="title ${classTitle} js-title">Difficulty: ${difficulty}</div>
            <div class="interface">
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
            </div>
            <div class="settings-ui-difficulty">
                <div class="settings-heading">
                    <div class="settings-difficulty">Settings</div>
                    <div class="x-div js-x-div">
                        <img class="x-img" src="image/x.svg">
                    </div>
                    <div class="previouse-div js-previouse-div">
                        <img class="previouse-img" src="image/previouse-page.png">
                    </div>
                </div>
                <div>
                    <div class="difficulty-div js-easy">Easy</div>
                    <div class="difficulty-div js-medium">Medium</div>
                    <div class="difficulty-div js-hard">Hard</div>
                </div>
            </div>
            `;
            closeWindowSettings();
            previousePage();
            selectDifficulty();
        });
    
        document.querySelector('.js-colour-div').addEventListener('click', ()=>
        {
            document.querySelector('.js-containment-interface').innerHTML=`
            <div class="title ${classTitle} js-title">Difficulty: ${difficulty}</div>
            <div class="interface">
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
            </div>
            <div class="settings-ui">
                <div class="settings-heading">
                    <div class="settings">Settings</div>
                    <div class="x-div js-x-div">
                        <img class="x-img" src="image/x.svg">
                    </div>
                    <div class="previouse-div js-previouse-div">
                        <img class="previouse-img" src="image/previouse-page.png">
                    </div>
                </div>
                <div class="settings-content-colour">
                    <div class="colour-palette">
                        <div class="default js-default"></div>
                        <div class="purple js-purple"></div>
                        <div class="blue js-blue"></div>
                        <div class="green js-green"></div>
                        <div class="black js-black"></div>
                        <div class="brown js-brown"></div>
                        <div class="orange js-orange"></div>
                        <div class="yellow js-yellow"></div>
                        <div class="white js-white"></div>
                    </div>
                </div>
            </div>
            `;
            closeWindowSettings();
            document.querySelector('.js-default').addEventListener('click', ()=>
            {
                setBackground('default', classTile);
                colour = 'default';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
            
            document.querySelector('.js-purple').addEventListener('click', ()=>
            {
                setBackground('purple', classTile);
                colour = 'purple';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
            
            document.querySelector('.js-blue').addEventListener('click', ()=>
            {
                setBackground('blue', classTile);;
                colour = 'blue';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
        
            document.querySelector('.js-green').addEventListener('click', ()=>
            {
                setBackground('green', classTile);
                colour = 'green';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
            
            document.querySelector('.js-black').addEventListener('click', ()=>
            {
                setBackground('black', classTile);
                colour = 'black';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
        
            document.querySelector('.js-brown').addEventListener('click', ()=>
            {
                setBackground('brown', classTile);
                colour = 'brown';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
            
            document.querySelector('.js-orange').addEventListener('click', ()=>
            {
                setBackground('orange', classTile);
                colour = 'orange';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
            
            document.querySelector('.js-yellow').addEventListener('click', ()=>
            {
                setBackground('yellow', classTile);
                colour = 'yellow';
                localStorage.setItem('colour', colour);
                classTile = 'tile-alternate';
            });
        
            document.querySelector('.js-white').addEventListener('click', ()=>
            {
                setBackground('white', classTile);
                colour = 'white';
                localStorage.setItem('colour', colour);
                classTile = 'tile-alternate';
            });
            previousePage();
        });
    });
}

function selectDifficulty()
{
    document.querySelector('.js-hard').addEventListener('click', ()=>
    {
        computerMove = Hard;
        document.querySelector('.js-title').innerHTML = 'Difficulty: Hard';
        difficulty = 'Hard';
        localStorage.setItem('difficulty', difficulty);
    });

    document.querySelector('.js-no-chance').addEventListener('click', ()=>
    {
        computerMove = NoChance;
        document.querySelector('.js-title').innerHTML = 'Difficulty: No Chance';
        difficulty = 'No Chance';
        localStorage.setItem('difficulty', difficulty);
    });

    document.querySelector('.js-extremely-hard').addEventListener('click', ()=>
    {
        computerMove = ExtremelyHard;
        document.querySelector('.js-title').innerHTML = 'Difficulty: Extremely Hard'
        difficulty = 'Extremely Hard';
        localStorage.setItem('difficulty', difficulty);
    });
}

function whosMove()
{
    if(difficulty === 'No Chance')
    {
        computerStart(tiles, tileFree);
    }
    else if(difficulty === 'Extremely Hard')
    {
        let number = Math.random()*2
        let fiftyfifty = Math.floor(number);
        if(fiftyfifty === 1)
        {
            computerStart(tiles, tileFree);
        }

    }
    technicalities();
}

function newGameClick()
{
    reset();
    localStorage.removeItem('score-pvc');
    score =
    {
        wins: 0,
        losses: 0
    }

    document.querySelectorAll('.js-comp-score-digit').forEach((compScore)=>
    {
        compScore.innerHTML = `${score.losses}`;
    })

    document.querySelectorAll('.js-player-score-digit').forEach((playerScore)=>
    {
        playerScore.innerHTML = `${score.wins}`;
    })
}

function settingsClick()
{
    document.querySelector('.js-containment-interface').innerHTML=`
    <div class="title js-title">Difficulty: ${difficulty}</div>
    <div class="interface">
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
    </div>
    <div class="settings-ui">
        <div class="settings-heading">
            <div class="settings">Settings</div>
            <div class="x-div js-x-div">
                <img class="x-img" src="image/x.svg">
            </div>
        </div>
        <div>
            <div class="colour-div js-colour-div">Change background colour</div>
            <div class="difficulty-div js-difficulty-div">Change difficulty level</div>
        </div>
    </div>
    `;
    closeWindowSettings();
    document.querySelector('.js-difficulty-div').addEventListener('click', ()=>
    {
        document.querySelector('.js-containment-interface').innerHTML =
        `
        <div class="title ${classTitle} js-title">Difficulty: ${difficulty}</div>
        <div class="interface">
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
        </div>
        <div class="settings-ui-difficulty">
            <div class="settings-heading">
                <div class="settings-difficulty">Settings</div>
                <div class="x-div js-x-div">
                    <img class="x-img" src="image/x.svg">
                </div>
                <div class="previouse-div js-previouse-div">
                    <img class="previouse-img" src="image/previouse-page.png">
                </div>
            </div>
            <div>
                <div class="difficulty-div js-hard">Hard</div>
                <div class="difficulty-div js-extremely-hard">Extremely Hard</div>
                <div class="difficulty-div js-no-chance">No Chance</div>
            </div>
        </div>
        `;
        closeWindowSettings();
        previousePage();
        selectDifficulty();
    });

    document.querySelector('.js-colour-div').addEventListener('click', ()=>
    {
        document.querySelector('.js-containment-interface').innerHTML=`
        <div class="title ${classTitle} js-title">Difficulty: ${difficulty}</div>
        <div class="interface">
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
        </div>
        <div class="settings-ui">
            <div class="settings-heading">
                <div class="settings">Settings</div>
                <div class="x-div js-x-div">
                    <img class="x-img" src="image/x.svg">
                </div>
                <div class="previouse-div js-previouse-div">
                    <img class="previouse-img" src="image/previouse-page.png">
                </div>
            </div>
            <div class="settings-content-colour">
                <div class="colour-palette">
                    <div class="default js-default"></div>
                    <div class="purple js-purple"></div>
                    <div class="blue js-blue"></div>
                    <div class="green js-green"></div>
                    <div class="black js-black"></div>
                    <div class="brown js-brown"></div>
                    <div class="orange js-orange"></div>
                    <div class="yellow js-yellow"></div>
                    <div class="white js-white"></div>
                </div>
            </div>
        </div>
        `;
        closeWindowSettings();
        document.querySelector('.js-default').addEventListener('click', ()=>
        {
            setBackground('default', classTile);
            colour = 'default';
            localStorage.setItem('colour', colour);
            classTile = '';
            classTitle = '';
        });
        
        document.querySelector('.js-purple').addEventListener('click', ()=>
        {
            setBackground('purple', classTile);
            colour = 'purple';
            localStorage.setItem('colour', colour);
            classTile = '';
            classTitle = '';
        });
        
        document.querySelector('.js-blue').addEventListener('click', ()=>
        {
            setBackground('blue', classTile);;
            colour = 'blue';
            localStorage.setItem('colour', colour);
            classTile = '';
            classTitle = '';
        });
    
        document.querySelector('.js-green').addEventListener('click', ()=>
        {
            setBackground('green', classTile);
            colour = 'green';
            localStorage.setItem('colour', colour);
            classTile = '';
            classTitle = '';
        });
        
        document.querySelector('.js-black').addEventListener('click', ()=>
        {
            setBackground('black', classTile);
            colour = 'black';
            localStorage.setItem('colour', colour);
            classTile = '';
            classTitle = '';
        });
    
        document.querySelector('.js-brown').addEventListener('click', ()=>
        {
            setBackground('brown', classTile);
            colour = 'brown';
            localStorage.setItem('colour', colour);
            classTile = '';
            classTitle = '';
        });
        
        document.querySelector('.js-orange').addEventListener('click', ()=>
        {
            setBackground('orange', classTile);
            colour = 'orange';
            localStorage.setItem('colour', colour);
            classTile = '';
            classTitle = "title-black";
        });
        
        document.querySelector('.js-yellow').addEventListener('click', ()=>
        {
            setBackground('yellow', classTile);
            colour = 'yellow';
            localStorage.setItem('colour', colour);
            classTile = 'tile-alternate';
            classTitle = "title-black";
        });
    
        document.querySelector('.js-white').addEventListener('click', ()=>
        {
            setBackground('white', classTile);
            colour = 'white';
            localStorage.setItem('colour', colour);
            classTile = 'tile-alternate';
            classTitle = "title-black";
        });
        previousePage();
    });
}

function infoClick()
{
    document.querySelector('.js-containment-interface').innerHTML=`
    <div class="info-ui">
        <div class="info-heading">
            <div class="x-info-div js-close">
                <div class="x-info-container">
                    <img class="x-info" src="image/double-back-arrow.png">
                </div>
                <div class="x-info-text">Back</div>
            </div>
        </div>
        <div class="references">
            <p class="paragraph-title">References</p>
            <p class="paragraph">
                All icons/images used in this program were sourced from google and is not my own design. A list of references is provided below
                <br>
                <br>
                Settings icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/settings" title="settings icons">Settings icons created by Freepik - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/gear" title="gear icons">Gear icons created by Freepik - Flaticon</a>
                <br>
                <br>
                VS icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/vs" title="vs icons">Vs icons created by The Icon Tree - Flaticon</a>
                <br>
                <br>
                New game icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/new" title="new icons">New icons created by Freepik - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/add-list" title="add list icons">Add list icons created by HideMaru - Flaticon</a>
                <br>
                <br>
                Info icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/information" title="information icons">Information icons created by Freepik - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/info" title="info icons">Info icons created by Pixel perfect - Flaticon</a>
                <br>
                <br>
                Lauging emoji icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/laugh" title="laugh icons">Laugh icons created by Smashicons - Flaticon</a>
                <br>
                <br>
                Geek emoji icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/geek" title="geek icons">Geek icons created by Freepik - Flaticon</a>
                <br>
                Player icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/profile-picture" title="profile picture icons">Profile picture icons created by Md Tanvirul Haque - Flaticon</a>
                <br>
                <br>
                Comptuer icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/keyboard" title="keyboard icons">Keyboard icons created by Freepik - Flaticon</a>
                <br>
                <br>
                Double back icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/left-arrow" title="left arrow icons">Left arrow icons created by Ayub Irawan - Flaticon</a>
            </p>
        </div>
    </div>`;
    document.querySelector('.js-close').addEventListener('click', ()=>
    {
        document.querySelector('.js-containment-interface').innerHTML=`
        <div class="title ${classTitle} js-title">Difficulty: ${difficulty}</div>
        <div class="interface">
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
        </div>
        <div class="temp-disable-div js-temp-disable"></div>
        `;
        tileActivation()
    });
}

function modeClick()
{
    window.close('pvc.html');
    window.open('index.html');
}

function technicalities()
{
    document.querySelectorAll(`.js-move`).forEach((move)=>
    {
        move.addEventListener("animationend", ()=>
        {
            move.classList.remove("grow");
            checkGamestatus();
        });
    });
}