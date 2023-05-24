import ItemView from './ItemView.js';
export default class ItemListView {
    constructor(itemListModel) {
        this.itemListModel = itemListModel;
        this.controllerOnAddItem = null;
    }

    onAddItem(e) {
        console.log('onAddItem');
        var tbody = document.querySelector('#mainbody');
        tbody.removeChild(tbody.lastChild);
        var newRow = document.createElement('tr');
        newRow.classList.add('to-do');
        tbody.appendChild(newRow);
        var endRow = document.createElement('tr');
        endRow.classList.add('to-end');
        tbody.appendChild(endRow);
        document.querySelector('.to-do').innerHTML = this.toHtml();
        //document.querySelector('.to-do').classList.remove('to-do');
        document.querySelector('.to-end').innerHTML = this.endHtml();
        //document.querySelector('.to-end').classList.remove('to-end');
    }

    toHtml() {
        return `
                <th scope="row">3</th>
                <td class="text-center">
                    <textarea class="form-control fs-sm" aria-label="With textarea" placeholder="Input variant here..."></textarea>
                </td>
            `;
    }

    endHtml() {
        console.log('end');
        return `
            <td colspan="3">
                    <button id="add" type="button" class="btn btn-success d-flex mx-auto px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-plus-lg mt-1 mr-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                    <div>Add</div>
                </button>
            </td>
            `;
    }

    newItem(item) {
        return` <th scope="row">${item.name}</th>
                        <td>${item.description}</td>
                        <td class="text-center pt-3">
                            <button type="button" class="btn btn-success mx-0" onclick="location.href='vote.html'">
                                Vote
                            </button>
                        </td>`;
    }

}