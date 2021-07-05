(function () {
    const container = document.querySelector('.container');
    const allBackgroundEls = container.querySelectorAll('.display .background');
    const allBottleEls = container.querySelectorAll('.display .bottle');
    const flavorEl = container.querySelector('.flavors');
    const flavorBtnsEls = flavorEl.querySelectorAll('.button');
    const cartBtnEl = container.querySelector('.actions button');
    const switchBtnEl = container.querySelector('#switch');
    const drinkNameEl = container.querySelector('.header h4');


    const updateDrinkName = (flavor) => {
        const names = {
            blue: 'Glacier freeze',
            purple: 'Grape',
            yellow: 'Lemon lime',
            pink: 'Berry',
            orange: 'Orange',
        }

        drinkNameEl.innerHTML = names[flavor];
        drinkNameEl.className = '';
        drinkNameEl.classList.add(flavor);
    }

    const updateActionBtnColor = (flavor) => {
        cartBtnEl.className = '';
        cartBtnEl.classList.add(flavor);
    }

    const updateBackground = (flavor) => {
        const backgroundEl = container.querySelector(`.background.${flavor}`);
        const backgroundFirstEl = container.querySelector(`.background.first`)
        const backgroundSecondEl = container.querySelector(`.background.second`)
        allBackgroundEls.forEach(el => el.classList.remove('first', 'second'))
        if(backgroundFirstEl) {
            backgroundFirstEl.classList.remove('first');
            backgroundFirstEl.classList.add('second');
        }
        if(backgroundSecondEl && !backgroundFirstEl) {
            backgroundSecondEl.classList.add('second');
        }
        backgroundEl.classList.add('first');
    }

    const updateBottle = (flavor) => {
        allBottleEls.forEach(bottle => bottle.classList.remove('visible'))
        const bottle = container.querySelector(`.display .bottle.${flavor}`);
        bottle.classList.add('visible');
    }

    flavorEl.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            flavorBtnsEls.forEach(btn => btn.classList.remove('selected'))
            e.target.classList.add('selected');
            const flavor = e.target.dataset.color;
            updateBottle(flavor);
            updateBackground(flavor);
            updateActionBtnColor(flavor);    
            updateDrinkName(flavor);

        }
    })

    switchBtnEl.addEventListener('click', (e) => {
        const checked = e.target.checked;
        document.body.classList[checked ? 'add' : 'remove']('dark')
    })
})()