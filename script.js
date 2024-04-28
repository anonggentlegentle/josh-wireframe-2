const tableCount = 1;

const table = document.querySelector(".table-body");

const tableContent = `<tr class="main__item main__item--${tableCount}">
<td class="table-data-row">&nbsp;</td>
<td class="table-data-row">&nbsp;</td>
<td>
  <button class="button main__add-instructors">UPDATE</button>
  <button class="button main__add-subjects">DELETE</button>
</td>
</tr>`;

document
  .querySelector(".main__add-subjects")
  .addEventListener("click", function () {
    table.insertAdjacentHTML("beforeend", tableContent);
    tableCount++;
  });
