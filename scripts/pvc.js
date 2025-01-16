import { setBackground } from "./colour.js";
import { computerMove } from "./computerAgent.js";

let clss = '';

let introduction = JSON.parse(localStorage.getItem('introduction'));

let intervalId;

let tiles = ['', '', '', '', '', '', '', '', '', ''];
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
    }, 5000);
    setBackground(colour, clss);
    introduction = false;
    localStorage.setItem('introduction', JSON.stringify(introduction));
}
else
{
    document.querySelector('.js-introduction').innerHTML = '';
}

clss = setBackground(colour, clss);

document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;

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

tileActivation();

function checkGamestatus()
{
    if(tiles[0] === 'player-move' &&  tiles[1] === 'player-move' && tiles[2] === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('You won!');
    }
    else if(tiles[3] === 'player-move' && tiles[4] === 'player-move' && tiles[5] === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('You won!');
    }
    else if(tiles[6] === 'player-move' && tiles[7] === 'player-move' && tiles[8] === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('You won!');
    }
    else if(tiles[0] === 'player-move' && tiles[3] === 'player-move' && tiles[6] === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('You won!');
    }
    else if( tiles[1] === 'player-move' && tiles[4] === 'player-move' && tiles[7] === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('You won!');
    }
    else if(tiles[2] === 'player-move' && tiles[5] === 'player-move' && tiles[8] === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('You won!'); 
    }
    else if(tiles[2] === 'player-move' && tiles[4] === 'player-move' && tiles[6] === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('You won!');
    }
    else if(tiles[0] === 'player-move' && tiles[4] === 'player-move' && tiles[8] === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('You won!');
    }
    else if(tiles[0] === 'computer-move' &&  tiles[1] === 'computer-move' && tiles[2] === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('The computer wins!');
    }
    else if(tiles[3] === 'computer-move' && tiles[4] === 'computer-move' && tiles[5] === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('The computer wins!');
    }
    else if(tiles[6] === 'computer-move' && tiles[7] === 'computer-move' && tiles[8] === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('The computer wins!');
    }
    else if(tiles[0] === 'computer-move' && tiles[3] === 'computer-move' && tiles[6] === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('The computer wins!');
    }
    else if( tiles[1] === 'computer-move' && tiles[4] === 'computer-move' && tiles[7] === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('The computer wins!');
    }
    else if(tiles[2] === 'computer-move' && tiles[5] === 'computer-move' && tiles[8] === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('The computer wins!');
    }
    else if(tiles[2] === 'computer-move' && tiles[4] === 'computer-move' && tiles[6] === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
        winnerMessage('The computer wins!');
    }
    else if(tiles[0] === 'computer-move' && tiles[4] === 'computer-move' && tiles[8] === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score-pvc', JSON.stringify(score));
        reset();
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
    tiles = ['', '', '', '', '', '', '', '', '', ''];
    document.querySelectorAll(`.js-tile`).forEach((tile)=>
    {
        tile.innerHTML = '';
    })
}

document.querySelector('.js-new-game-click').addEventListener('click', ()=>
{
    reset();
    localStorage.removeItem('score-pvc');
    score =
    {
        wins: 0,
        losses: 0
    }
    document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
    document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
});

document.querySelector('.js-settings-click').addEventListener('click', ()=>
{
    document.querySelector('.js-containment-interface').innerHTML=`
    <div class="interface">
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="1"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="2"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="3"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="4"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="5"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="6"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="7"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="8"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="9"></div>
    </div>
    <div class="settings-ui">
        <div class="deco-background">
            <div class="close js-close">
                <img class="close-btn-image" src="image/x.svg">
            </div>
        </div>
        <div class="settings-title"> Select background color</div>
        <div class="color-palette">
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
    `;
    document.querySelector('.js-default').addEventListener('click', ()=>
    {
        setBackground('default', clss);
        colour = 'default';
        localStorage.setItem('colour', colour);
        clss = '';
    });
    
    document.querySelector('.js-purple').addEventListener('click', ()=>
    {
        setBackground('purple', clss);
        colour = 'purple';
        localStorage.setItem('colour', colour);
        clss = '';
    });
    
    document.querySelector('.js-blue').addEventListener('click', ()=>
    {
        setBackground('blue', clss);;
        colour = 'blue';
        localStorage.setItem('colour', colour);
        clss = '';
    });

    document.querySelector('.js-green').addEventListener('click', ()=>
    {
        setBackground('green', clss);
        colour = 'green';
        localStorage.setItem('colour', colour);
        clss = '';
    });
    
    document.querySelector('.js-black').addEventListener('click', ()=>
    {
        setBackground('black', clss);
        colour = 'black';
        localStorage.setItem('colour', colour);
        clss = '';
    });

    document.querySelector('.js-brown').addEventListener('click', ()=>
    {
        setBackground('brown', clss);
        colour = 'brown';
        localStorage.setItem('colour', colour);
        clss = '';
    });
    
    document.querySelector('.js-orange').addEventListener('click', ()=>
    {
        setBackground('orange', clss);
        colour = 'orange';
        localStorage.setItem('colour', colour);
        clss = '';
    });
    
    document.querySelector('.js-yellow').addEventListener('click', ()=>
    {
        setBackground('yellow', clss);
        colour = 'yellow';
        localStorage.setItem('colour', colour);
        clss = 'tile-alternate';
    });

    document.querySelector('.js-white').addEventListener('click', ()=>
    {
        setBackground('white', clss);
        colour = 'white';
        localStorage.setItem('colour', colour);
        clss = 'tile-alternate';
    });
    
    document.querySelector('.js-close').addEventListener('click', ()=>
    {
        document.querySelector('.js-containment-interface').innerHTML=`
        <div class="interface">
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="9"></div>
        </div>
        <div class="temp-disable-div js-temp-disable"></div>
        `;
        tileActivation()
    });

});

function winnerMessage(statement)
{
    document.querySelector('.js-containment-interface').innerHTML=`
    <div class="interface">
        <div class="tile js-tile-1 js-tile-color ${clss}"></div>
        <div class="tile js-tile-2 js-tile-color ${clss}"></div>
        <div class="tile js-tile-3 js-tile-color ${clss}"></div>
        <div class="tile js-tile-4 js-tile-color ${clss}"></div>
        <div class="tile js-tile-5 js-tile-color ${clss}"></div>
        <div class="tile js-tile-6 js-tile-color ${clss}"></div>
        <div class="tile js-tile-7 js-tile-color ${clss}"></div>
        <div class="tile js-tile-8 js-tile-color ${clss}"></div>
        <div class="tile js-tile-9 js-tile-color ${clss}"></div>
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
        <div class="interface">
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="9"></div>
        </div>
        <div class="temp-disable-div js-temp-disable"></div>
        `;
        tileActivation()
    }, 3000);
}

document.querySelector('.js-info-click').addEventListener('click', ()=>
{
    document.querySelector('.js-containment-interface').innerHTML=`
    <div class="interface">
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="1"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="2"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="3"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="4"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="5"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="6"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="7"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="8"></div>
        <div class="tile js-tile js-tile-color ${clss}" data-tile-no="9"></div>
    </div>
    <div class="info-ui">
        <div class="deco-background">
            <div class="close js-close">
                <img class="close-btn-image" src="image/x.svg">
            </div>
        </div>
        <div class="references">
            <p class="paragraph-title">About project and references</p>
            <p class="paragraph">This game of tic tac toe is a program/project/youtube exercise question created by me, Khumbo Mdina.
                The game is solely designed/programed for experimental purposes and is an answer to one of the tutorial exercise questions
                found on <a href="https://www.youtube.com/watch?v=SBmSRK3feww">https://www.youtube.com/watch?v=SBmSRK3feww</a>. 
            </p>
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
            </p>
        </div>
    </div>`;
    document.querySelector('.js-close').addEventListener('click', ()=>
    {
        document.querySelector('.js-containment-interface').innerHTML=`
        <div class="interface">
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${clss}" data-tile-no="9"></div>
        </div>
        <div class="temp-disable-div js-temp-disable"></div>
        `;
        tileActivation()
    });

});

document.querySelector('.js-mode-click').addEventListener('click', ()=>
{
    window.close('tic-tac-toe.html');
    window.open('index.html');
});

function tileActivation()
{
    document.querySelectorAll(`.js-tile`).forEach((tile)=>
    {
        tile.addEventListener('click', ()=>
        {
            let tileIndex = tile.dataset.tileNo - 1;
            if(tileFree[tileIndex])
            {
                tile.innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tileFree[tileIndex] = false;
                tiles[tileIndex] = 'player-move';
                checkGamestatus();
                let check = [tileFree[0], tileFree[1], tileFree[2], tileFree[3], tileFree[4], tileFree[5], tileFree[6], tileFree[7], tileFree[8]];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    document.querySelector('.js-temp-disable').innerHTML = `<div class="disable"></div>`;
                    setTimeout(()=>
                    {
                        computerMove(tiles, tileFree);
                        document.querySelector('.js-temp-disable').innerHTML = ``;
                    }, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });
    
    })
}
