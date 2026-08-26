export function filterAccounts(accounts, searchTerm) {
  if (!searchTerm) {
    return accounts;
  }
  const term = searchTerm.toLowerCase();
  return accounts.filter(
    (acc) =>
      (acc.Name && acc.Name.toLowerCase().includes(term)) ||
      (acc.Industry && acc.Industry.toLowerCase().includes(term))
  );
}
