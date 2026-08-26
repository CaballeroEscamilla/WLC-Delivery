// Misma lógica de búsqueda que se resolvió una sola vez para el LWC (paso 4
// del plan original): JavaScript puro, sin dependencias del framework ni del
// origen de los datos. Aquí se reutiliza tal cual, ahora sobre el JSON estático.
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
