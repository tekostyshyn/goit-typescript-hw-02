/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN
}

function isWeekend(day: Day): boolean {
  switch (day) {
    case Day.MON:
      return false;
    case Day.TUE:
      return false;
    case Day.WED:
      return false;
    case Day.THU:
      return false;
    case Day.FRI:
      return false;
    case Day.SAT:
      return true;
    case Day.SUN:
      return true;
  }
} 
