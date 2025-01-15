export function computerMove(tiles, tileFree)
{
    let jsTiles = [];
    document.querySelectorAll('.js-tile').forEach((tile)=>
    {
        jsTiles.push(tile);
    })

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
    else if(tiles[0] === 'player-move' && tileFree[4])
    {
        jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tileFree[4] = false;
        tiles[4] = 'computer-move';
    }
    else if(tiles[2] === 'player-move' && tileFree[4])
    {
        jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tileFree[4] = false;
        tiles[4] = 'computer-move';
    }
    else if(tiles[6] === 'player-move' && tileFree[4])
    {
        jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tileFree[4] = false;
        tiles[4] = 'computer-move';
    }
    else if(tiles[8] === 'player-move' && tileFree[4])
    {
        jsTiles[4].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tileFree[4] = false;
        tiles[4] = 'computer-move';
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
    else if(tiles[0] === 'computer-move' && tileFree[2])
    {
        jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tileFree[2] = false;
        tiles[2] = 'computer-move';
    }
    else
    {
        if(tileFree[0])
        {
            jsTiles[0].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[0] = false;
            tiles[0] = 'computer-move';
        }
        else if(tileFree[6])
        {
            jsTiles[6].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[6] = false;
            tiles[6] = 'computer-move';
        }
        else if(tileFree[8])
        {
            jsTiles[8].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[8] = false;
            tiles[8] = 'computer-move';
        }
        else if(tileFree[2])
        {
            jsTiles[2].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[2] = false;
            tiles[2] = 'computer-move';
        }
        else if(tileFree[1])
        {
            jsTiles[1].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[1] = false;
            tiles[1] = 'computer-move';
        }
        else if(tileFree[3])
        {
            jsTiles[3].innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tileFree[3] = false;
            tiles[3] = 'computer-move';
        }
        
    }    
};