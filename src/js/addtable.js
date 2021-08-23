export default function addTable(size) {
    const container = document.querySelector('.game-container');
    const table = document.createElement('table');
    table.className = 'game-field';
    let count = 0;
    for (let i = 0; i < size; i++) {
      const tr = document.createElement('tr');
      for (let y = 0; y < size; y++) {
        const td = document.createElement('td');
        td.className = 'field-cell';
        td.id = count;
        tr.appendChild(td);
        count++;
      }
      table.appendChild(tr);
    }
    container.appendChild(table);
  };
  