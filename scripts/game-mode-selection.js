let introduction = false;

document.querySelector('.js-pvc').addEventListener('click', ()=>
{
    localStorage.removeItem('score-pvc');
    introduction = true;
    localStorage.setItem('introduction', JSON.stringify(introduction));
    window.close('index.html');
    window.open('pvc.html');
});

document.querySelector('.js-pvp').addEventListener('click', ()=>
{
    localStorage.removeItem('score-pvp');
    introduction = true;
    localStorage.setItem('introduction', JSON.stringify(introduction));
    window.close('index.html');
    window.open('pvp.html');
});

window.addEventListener("orientationchange", function() {
if (screen.orientation.angle !== 0) {
    screen.orientation.lock("portrait").catch(err => console.log(err));
}
})