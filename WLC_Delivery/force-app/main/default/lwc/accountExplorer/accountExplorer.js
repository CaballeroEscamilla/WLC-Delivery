import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountExplorerController.getAccounts';

const COLUMNS = [
    { label: 'Nombre', fieldName: 'Name' },
    { label: 'Industria', fieldName: 'Industry' },
    { label: 'Teléfono', fieldName: 'Phone', type: 'phone' }
];

const SEARCH_DELAY = 300;

export default class AccountExplorer extends LightningElement {
    columns = COLUMNS;

    inputValue = '';
    searchTerm = '';

    accounts = [];
    error;
    isLoading = true;
    searchTimeout;

    @wire(getAccounts, { searchTerm: '$searchTerm' })
    wiredAccounts({ data, error }) {
        this.isLoading = false;
        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = [];
        }
    }

    get hasResults() {
        return this.accounts.length > 0;
    }

    get showEmptyState() {
        return !this.isLoading && !this.error && !this.hasResults;
    }

    get emptyStateTitle() {
        return this.searchTerm ? 'Sin resultados para tu búsqueda' : 'Aún no hay cuentas';
    }

    get emptyStateMessage() {
        return this.searchTerm
            ? `No encontramos cuentas que coincidan con "${this.searchTerm}". Intenta con otro nombre o industria.`
            : 'Todavía no hay registros de Account en esta org.';
    }

    get showClearButton() {
        return !!this.inputValue;
    }

    handleSearchChange(event) {
        this.inputValue = event.target.value;
        this.isLoading = true;

        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.searchTerm = this.inputValue;
        }, SEARCH_DELAY);
    }

    handleClearSearch() {
        clearTimeout(this.searchTimeout);
        this.inputValue = '';
        this.searchTerm = '';
    }
}
