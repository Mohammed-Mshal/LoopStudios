let butMenu = document.querySelector(`header .container nav .menu`);
butMenu.addEventListener(`click`, (e) => {
    if(e.currentTarget.classList.contains(`hidden`)){
        butMenu.classList.remove(`hidden`);
        butMenu.classList.add(`close`);
        document.querySelector(`header .container nav ul`).style.top=`0`
    }
    else{
        butMenu.classList.remove(`close`);
        butMenu.classList.add(`hidden`);
        document.querySelector(`header .container nav ul`).style.top=`-120%`
    }
});
