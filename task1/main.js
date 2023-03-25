let form = document.forms.form;
let searchItem = form.elements.search;
let number = form.elements.number;
let result = document.querySelector('.result');
let loader = document.querySelector('.loader');
let cleanBtn = document.querySelector('.btn-clean');
let errors = document.querySelector('.errors');




let btn = document.querySelector('.btn-search');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    errors.replaceChildren();
    result.replaceChildren();
    findInfo(searchItem.value, number.value);
    loader.classList.remove('inert');
});

cleanBtn.addEventListener('click', () => {
    clear();
})

async function findInfo(item, number) {
    try {
        let response = await fetch(`https://swapi.dev/api/${item}/`);
        if (response.status >= 400 && response.status < 500) {
            throw new Error("Page not found. Please fill in all fields for correct search");
        }
        if (response.status >= 400 && response.status < 500) {
            throw new Error("Sorry. Server problems, please try again");
        }
        let data = await response.json();
        let elem = data.results[number-1];
        if (number > 11 || number < 1) {
            throw new Error("Invalid number entered. Please enter a number from 1 to 10");
        }
        if (item === 'planets') {
            showPlanetInfo(elem);
        } else if (item === 'starships') {
            showShipInfo(elem);
        } else {
            showVehInfo(elem);
        }
    } catch (error) {
            errors.replaceChildren();
            createError(error);
    } finally {
            loader.classList.add('inert');
            cleanBtn.classList.remove('inert');
        }
}

function createError(err) {
    let error = document.createElement('div');
    error.classList = 'error';
    error.innerHTML = err.message;
    loader.classList.add('inert');
    errors.append(error);
}

function clear() {
    form.reset();
    result.replaceChildren();
    cleanBtn.classList.add('inert');
}

function showPlanetInfo(elem) {
    let planetTitles = ["name", "rotation_period", "orbital_period", "diameter", "climate", "terrain", "population"];
    enumeration(planetTitles, elem);
}

function showShipInfo(elem) {
    let shipTitles = ["name", "model", "manufacturer", "cost_in_credits", "length", "max_atmosphering_speed"];
    enumeration(shipTitles, elem);
}

function showVehInfo(elem) {
    let vehTitles = ["name", "model", "manufacturer", "cost_in_credits", "length", "max_atmosphering_speed", "vehicle_class"];
    enumeration(vehTitles, elem);
}

function enumeration(arr, el) {
    result.replaceChildren();
    arr.forEach(e => createTags(e, el[e]));
}

function createTags(key, elem) {
    let desiredData = document.createElement('div');
    desiredData.classList = 'result__field';
    let title = document.createElement('p');
    title.classList = 'result__title';
    title.innerHTML = key.replaceAll('_', " ");
    desiredData.append(title);
    let text = document.createElement('p');
    text.classList = 'result__text';
    text.innerHTML = elem;
    desiredData.append(text);
    addPost(desiredData);
}

function addPost(post) {
    result.append(post);
}


