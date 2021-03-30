
/**
 * Custom Element - Select 
 * @author CLIENTXCMS
 * @date 26-02-21
 * 
 * @exemple <select is="custom-select" data-url="/api/users/search"></select>
 * @requires Select2
 */
class Select extends HTMLSelectElement {

    connectedCallback(){
        this.init = this.init.bind(this)
        this.init()
    }

    init(){
        
    $(this).select2({
    minimumInputLength: 2,
    minimumResultsForSearch: 10,
    ajax: {
        url: this.dataset.url,
        dataType: 'json',
        type: "GET",
        headers: {
            'CLIENTX-SELECT':true
        },
        data: function (term) {
            return term;
        },
        processResults: function (data) {
            return {
                results: data.results
            };
        }
    }
});
    }
}

customElements.define("custom-select", Select, {extends: 'select'})