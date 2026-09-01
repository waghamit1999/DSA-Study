function findEmployeeName(
  employees: Map<number, string>,
  id: number,
): string | undefined {
  return employees.get(id);
}

const emps = new Map<number, string>();
emps.set(1, "Amit");
emps.set(2, "Priya");
emps.set(3, "Avinash");
emps.set(4, "PC");

console.log(findEmployeeName(emps, 4));
console.log(findEmployeeName(emps, 2));
