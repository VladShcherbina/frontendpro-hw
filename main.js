function generateList(array) {
    const ulElement = document.createElement('ul');
    
    array.forEach(item => {
        const liElement = document.createElement('li');
        if (Array.isArray(item)) {
            const nestedUl = generateList(item);
            liElement.appendChild(nestedUl);
        } else {
            liElement.textContent = item;
        }

        ulElement.appendChild(liElement);
    });

    return ulElement;
}

const data = [1, 2, [3, 4, [5, 6, 7]], 5];
const listElement = generateList(data);
document.body.appendChild(listElement);
