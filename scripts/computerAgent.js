export function computerMedium(tiles, tileFree)
{
    let number = Math.random()*10;
    let choice = Math.floor(number);
    let jsTiles = [];
    document.querySelectorAll('.js-tile').forEach((tile)=>
    {
        jsTiles.push(tile);
    })
    let numberCS = Math.random()*2;
    let choiceCS = Math.floor(numberCS);
    if(choiceCS === 1)
    {
        computerStart(jsTiles, tiles, tileFree)
    }    
    if(choice >= 1 && choice <= 5)
    {
        if(tiles[0] === 'computer-move' && tiles[1] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[2] === 'computer-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[3] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[4] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[7] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[2] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[7] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[5] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[4] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false
            tiles[3] = 'computer-move';
        }
        else if(tiles[7] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[7] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[1] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[4] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[2] === 'player-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[6] === 'player-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[3] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[4] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[8] === 'player-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[6] === 'player-move' && tiles[8] === 'player-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[5] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[4] === 'player-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[4] === 'player-move' && tiles[8] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move'; 
        }
        else if(tiles[6] === 'player-move' && tiles[7] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[2] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'player-move' && tiles[4] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[7] === 'player-move' && tiles[8] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[5] === 'player-move' && tiles[8] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[6] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[4] === 'player-move' && tiles[5] === 'player-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[7] === 'player-move' && tiles[4] === 'player-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[4] === 'player-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[6] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[8] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[7] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[5] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tileFree[4] && tileFree[1])
        {
            if(choice >= 1 && choice <= 5)
            {
                jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[1] = false;
                tiles[1] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[2] === 'player-move' && tileFree[4] && tileFree[1])
        {
            if(choice >= 1 && choice <= 5)
            {
                jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[1] = false;
                tiles[1] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[6] === 'player-move' && tileFree[4] && tileFree[7])
        {
            if(choice >= 1 && choice <= 5)
            {
                jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[7] = false;
                tiles[7] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[8] === 'player-move' && tileFree[4] && tileFree[7])
        {
            if(choice >= 1 && choice <= 5)
            {
                jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[7] = false;
                tiles[7] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[0] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else
        {
            for(let i = 1; i <= 9; i++)
            {
                if (tileFree[i - 1])
                {
                    jsTiles[i - 1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                    tileFree[i - 1] = false;
                    tiles[i - 1] = 'computer-move';
                    break;
                }
            }
            
        }
    }
    else
    {
        if(tiles[0] === 'player-move' && tiles[1] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[4] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[2] === 'player-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[6] === 'player-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[3] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[4] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[8] === 'player-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[6] === 'player-move' && tiles[8] === 'player-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[5] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[4] === 'player-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[4] === 'player-move' && tiles[8] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move'; 
        }
        else if(tiles[6] === 'player-move' && tiles[7] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[2] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'player-move' && tiles[4] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[7] === 'player-move' && tiles[8] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[5] === 'player-move' && tiles[8] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[6] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[4] === 'player-move' && tiles[5] === 'player-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[7] === 'player-move' && tiles[4] === 'player-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[4] === 'player-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[6] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[8] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[7] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[5] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tileFree[4] && tileFree[1])
        {
            if(choice >= 1 && choice <= 5)
            {
                jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[1] = false;
                tiles[1] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[2] === 'player-move' && tileFree[4] && tileFree[1])
        {
            if(choice >= 1 && choice <= 5)
            {
                jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[1] = false;
                tiles[1] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[6] === 'player-move' && tileFree[4] && tileFree[7])
        {
            if(choice >= 1 && choice <= 5)
            {
                jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[7] = false;
                tiles[7] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[8] === 'player-move' && tileFree[4] && tileFree[7])
        {
            if(choice >= 1 && choice <= 5)
            {
                jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[7] = false;
                tiles[7] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[0] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[1] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[2] === 'computer-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[3] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[4] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[7] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[2] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[7] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[5] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[4] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false
            tiles[3] = 'computer-move';
        }
        else if(tiles[7] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[7] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else
        {
            for(let i = 1; i <= 9; i++)
            {
                if (tileFree[i - 1])
                {
                    jsTiles[i - 1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                    tileFree[i - 1] = false;
                    tiles[i - 1] = 'computer-move';
                    break;
                }
            }
            
        }
    }
};

export function computerEasy(tiles, tileFree)
{
    let number = Math.random()*10;
    let choice = Math.floor(number);
    let jsTiles = [];
    document.querySelectorAll('.js-tile').forEach((tile)=>
    {
        jsTiles.push(tile);
    })

    if(choice === 1 || choice === 2)
    {
        if(tiles[0] === 'computer-move' && tiles[1] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[2] === 'computer-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[3] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[4] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[7] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[2] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[7] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[5] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[4] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false
            tiles[3] = 'computer-move';
        }
        else if(tiles[7] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[7] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[1] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[4] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[2] === 'player-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[6] === 'player-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[3] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[4] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[8] === 'player-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[6] === 'player-move' && tiles[8] === 'player-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[5] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[4] === 'player-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[4] === 'player-move' && tiles[8] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move'; 
        }
        else if(tiles[6] === 'player-move' && tiles[7] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[2] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'player-move' && tiles[4] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[7] === 'player-move' && tiles[8] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[5] === 'player-move' && tiles[8] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[6] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[4] === 'player-move' && tiles[5] === 'player-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[7] === 'player-move' && tiles[4] === 'player-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[4] === 'player-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[6] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[8] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[7] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[5] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tileFree[4] && tileFree[1])
        {
            if(choice === 1 || choice === 2)
            {
                jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[1] = false;
                tiles[1] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[2] === 'player-move' && tileFree[4] && tileFree[1])
        {
            if(choice === 1 || choice === 2)
            {
                jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[1] = false;
                tiles[1] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[6] === 'player-move' && tileFree[4] && tileFree[7])
        {
            if(choice === 1 || choice === 2)
            {
                jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[7] = false;
                tiles[7] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[8] === 'player-move' && tileFree[4] && tileFree[7])
        {
            if(choice === 1 || choice === 2)
            {
                jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[7] = false;
                tiles[7] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[0] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else
        {
            for(let i = 1; i <= 9; i++)
            {
                if (tileFree[i - 1])
                {
                    jsTiles[i - 1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                    tileFree[i - 1] = false;
                    tiles[i - 1] = 'computer-move';
                    break;
                }
            }
            
        }
    }
    else
    {
        if(tiles[0] === 'player-move' && tiles[1] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[4] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[2] === 'player-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[6] === 'player-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[3] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[4] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[8] === 'player-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[6] === 'player-move' && tiles[8] === 'player-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[5] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[4] === 'player-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[4] === 'player-move' && tiles[8] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move'; 
        }
        else if(tiles[6] === 'player-move' && tiles[7] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[2] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'player-move' && tiles[4] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[7] === 'player-move' && tiles[8] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[5] === 'player-move' && tiles[8] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[6] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[4] === 'player-move' && tiles[5] === 'player-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[7] === 'player-move' && tiles[4] === 'player-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[4] === 'player-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[6] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[8] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[7] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[5] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tileFree[4] && tileFree[1])
        {
            if(choice === 1 || choice === 2)
            {
                jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[1] = false;
                tiles[1] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[2] === 'player-move' && tileFree[4] && tileFree[1])
        {
            if(choice === 1 || choice === 2)
            {
                jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[1] = false;
                tiles[1] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[6] === 'player-move' && tileFree[4] && tileFree[7])
        {
            if(choice === 1 || choice === 2)
            {
                jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[7] = false;
                tiles[7] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[8] === 'player-move' && tileFree[4] && tileFree[7])
        {
            if(choice === 1 || choice === 2)
            {
                jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[7] = false;
                tiles[7] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[0] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[1] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[2] === 'computer-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[3] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[4] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[7] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[2] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[7] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[5] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[4] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false
            tiles[3] = 'computer-move';
        }
        else if(tiles[7] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[7] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else
        {
            for(let i = 1; i <= 9; i++)
            {
                if (tileFree[i - 1])
                {
                    jsTiles[i - 1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                    tileFree[i - 1] = false;
                    tiles[i - 1] = 'computer-move';
                    break;
                }
            }
            
        }
    }
};

export function computerHard(tiles, tileFree)
{
    let number = Math.random()*10;
    let choice = Math.floor(number);
    let jsTiles = [];
    document.querySelectorAll('.js-tile').forEach((tile)=>
    {
        jsTiles.push(tile);
    })
    if(choice >= 1 && choice <= 8)
    {
        if(tiles[0] === 'computer-move' && tiles[1] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[2] === 'computer-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[3] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[4] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[7] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[2] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[7] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[5] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[4] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false
            tiles[3] = 'computer-move';
        }
        else if(tiles[7] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[7] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[1] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[4] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[2] === 'player-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[6] === 'player-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[3] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[4] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[8] === 'player-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[6] === 'player-move' && tiles[8] === 'player-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[5] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[4] === 'player-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[4] === 'player-move' && tiles[8] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move'; 
        }
        else if(tiles[6] === 'player-move' && tiles[7] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[2] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'player-move' && tiles[4] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[7] === 'player-move' && tiles[8] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[5] === 'player-move' && tiles[8] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[6] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[4] === 'player-move' && tiles[5] === 'player-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[7] === 'player-move' && tiles[4] === 'player-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[4] === 'player-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[6] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[8] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[7] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[5] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tileFree[4] && tileFree[1])
        {
            if(choice >= 1 && choice <= 8)
            {
                jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[1] = false;
                tiles[1] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[2] === 'player-move' && tileFree[4] && tileFree[1])
        {
            if(choice >= 1 && choice <= 8)
            {
                jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[1] = false;
                tiles[1] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[6] === 'player-move' && tileFree[4] && tileFree[7])
        {
            if(choice >= 1 && choice <= 8)
            {
                jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[7] = false;
                tiles[7] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[8] === 'player-move' && tileFree[4] && tileFree[7])
        {
            if(choice >= 1 && choice <= 8)
            {
                jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[7] = false;
                tiles[7] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[0] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else
        {
            for(let i = 1; i <= 9; i++)
            {
                if (tileFree[i - 1])
                {
                    jsTiles[i - 1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                    tileFree[i - 1] = false;
                    tiles[i - 1] = 'computer-move';
                    break;
                }
            }
        }
    }
    else
    {
        if(tiles[0] === 'player-move' && tiles[1] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[4] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[2] === 'player-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[6] === 'player-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[3] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[4] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[8] === 'player-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[6] === 'player-move' && tiles[8] === 'player-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[5] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[4] === 'player-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[4] === 'player-move' && tiles[8] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move'; 
        }
        else if(tiles[6] === 'player-move' && tiles[7] === 'player-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[2] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'player-move' && tiles[4] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[7] === 'player-move' && tiles[8] === 'player-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[5] === 'player-move' && tiles[8] === 'player-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[6] === 'player-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[4] === 'player-move' && tiles[5] === 'player-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[7] === 'player-move' && tiles[4] === 'player-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[4] === 'player-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'player-move' && tiles[6] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tiles[8] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[1] === 'player-move' && tiles[7] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[3] === 'player-move' && tiles[5] === 'player-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'player-move' && tileFree[4] && tileFree[1])
        {
            if(choice >= 1 && choice <= 8)
            {
                jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[1] = false;
                tiles[1] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[2] === 'player-move' && tileFree[4] && tileFree[1])
        {
            if(choice >= 1 && choice <= 8)
            {
                jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[1] = false;
                tiles[1] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[6] === 'player-move' && tileFree[4] && tileFree[7])
        {
            if(choice >= 1 && choice <= 8)
            {
                jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[7] = false;
                tiles[7] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[8] === 'player-move' && tileFree[4] && tileFree[7])
        {
            if(choice >= 1 && choice <= 8)
            {
                jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[7] = false;
                tiles[7] = 'computer-move';
            }
            else
            {
                jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                tileFree[4] = false;
                tiles[4] = 'computer-move';
            }
        }
        else if(tiles[0] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[1] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[2] === 'computer-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[3] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[5])
        {
            jsTiles[5].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[5] = false;
            tiles[5] = 'computer-move';
        }
        else if(tiles[4] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[7] === 'computer-move' && tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[2] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[6] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[7] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tiles[5] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tiles[4] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false
            tiles[3] = 'computer-move';
        }
        else if(tiles[7] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[4] === 'computer-move' && tileFree[7])
        {
            jsTiles[7].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[7] = false;
            tiles[7] = 'computer-move';
        }
        else if(tiles[2] === 'computer-move' && tiles[6] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[0] === 'computer-move' && tiles[8] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[1] === 'computer-move' && tiles[7] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else if(tiles[3] === 'computer-move' && tiles[5] === 'computer-move' && tileFree[4])
        {
            jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[4] = false;
            tiles[4] = 'computer-move';
        }
        else
        {
            for(let i = 1; i <= 9; i++)
            {
                if (tileFree[i - 1])
                {
                    jsTiles[i - 1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
                    tileFree[i - 1] = false;
                    tiles[i - 1] = 'computer-move';
                    break;
                }
            }
        }
    }
};

export function computerStart(tiles, tileFree)
{
    let number = Math.random()*9;
    let choice = Math.floor(number);
    let jsTiles = [];
    document.querySelectorAll('.js-tile').forEach((tile)=>
    {
        jsTiles.push(tile);
    })
    for(let i = 1; i <= 9; i++)
    {
        if(choice === i)
        {
            jsTiles[i - 1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[i - 1] = false;
            tiles[i - 1] = 'computer-move';
            break;
        }
    }
}