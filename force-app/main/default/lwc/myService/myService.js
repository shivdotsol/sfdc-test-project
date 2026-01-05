export function calculateTotal(amount, tax) {
  return amount + tax;
}

export function formatDate(dateValue) {
  return new Date(dateValue).toLocaleDateString();
}
