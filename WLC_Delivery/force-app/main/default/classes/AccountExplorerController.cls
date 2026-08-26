public with sharing class AccountExplorerController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String searchTerm) {
        String likeTerm = '%' + String.escapeSingleQuotes(
            searchTerm == null ? '' : searchTerm
        ) + '%';

        return [
            SELECT Id, Name, Industry, Phone
            FROM Account
            WHERE (Name LIKE :likeTerm OR Industry LIKE :likeTerm)
            WITH USER_MODE
            ORDER BY Name ASC
            LIMIT 200
        ];
    }
}
