export function setBackground(colour, clss)
{
    if(colour === 'default')
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        if(title.classList.contains('title-black'))
        {
            title.classList.remove('title-black');
        }
    
        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    }
    else if(colour === 'purple')
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('purple-back-ground');
        if(title.classList.contains('title-black'))
        {
            title.classList.remove('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    }
    else if(colour === 'blue')
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('blue-back-ground');
        if(title.classList.contains('title-black'))
        {
            title.classList.remove('title-black');
        }
    
        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    }
    else if(colour === 'green')
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('green-back-ground');
        if(title.classList.contains('title-black'))
        {
            title.classList.remove('title-black');
        }
    
        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    }
    else if(colour === 'black')
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('black-back-ground');
        if(title.classList.contains('title-black'))
        {
            title.classList.remove('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    }
    else if(colour === 'brown')
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('brown-back-ground');
        if(title.classList.contains('title-black'))
        {
            title.classList.remove('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    }
    else if(colour === 'orange')
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('orange-back-ground');
        if(title.classList.contains('title-black'))
        {

        }
        else
        {
            title.classList.add('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    }
    else if(colour === 'yellow')
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('yellow-back-ground');
        if(title.classList.contains('title-black'))
        {

        }
        else
        {
            title.classList.add('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {

            }
            else
            {
                tile[i].classList.add('tile-alternate');
                clss = 'tile-alternate';
            }
        }
        return clss = 'tile-alternate';
    }
    else if(colour === 'white')
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        body.classList.add('white-back-ground');
        if(title.classList.contains('title-black'))
        {

        }
        else
        {
            title.classList.add('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {

            }
            else
            {
                tile[i].classList.add('tile-alternate');
                clss = 'tile-alternate';
            }
        }
        return clss = 'tile-alternate';
    }
}

