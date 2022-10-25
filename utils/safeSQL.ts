export function safeSQL(sqlQuery: string): string {
  return sqlQuery.replace(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/, ""); // letters (lower, upper), numbers, spaces
}
