export function calculateAge(birthDate: Date, today = new Date()): number {
  const birthdayHasPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  return today.getFullYear() - birthDate.getFullYear() - (birthdayHasPassed ? 0 : 1);
}
