export default class ItemView {
    constructor(itemModel) {
        this.itemModel = itemModel;
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



}