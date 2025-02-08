"use strict";
const classroom_col = document.querySelector('.achievements-inner-classroom-col');

const img_amount = 33;
const column_amount = 2;

for (let i = 0; i < column_amount; i++) {
    const container = document.createElement('div');
    container.className = 'achievements-inner-classroom-col-container';
    if (i % 2 === 0)
        container.classList.add('right');
    else
        container.classList.add('left');
    const row = document.createElement('div');
    row.className = 'achievements-inner-classroom-col-container-row';
    container.appendChild(row);

    classroom_col.appendChild(container);
}

const classroom_col_container = document.querySelectorAll('.achievements-inner-classroom-col-container');
const classroom_row = document.querySelectorAll('.achievements-inner-classroom-col-container-row');

for (let i = 0; i < img_amount; i++) {
    const img = document.createElement('img');
    img.className = 'achievements-inner-classroom-col-container-row-img';
    img.src = './img/classroom/classroom_' + (i + 1) + '.jpg';
    const row_index = Math.floor((i / img_amount) * column_amount);
    classroom_row[row_index].appendChild(img);
}


classroom_row.forEach((e, i) => {
    const new_row = e.cloneNode(true);
    classroom_col_container[i].appendChild(new_row);
});
