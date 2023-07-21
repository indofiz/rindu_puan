import { intervalToDuration, parse } from 'date-fns'

export function calculateFullAge(dob: string | undefined) {
  if (dob) {
    const birthDate = parse(dob, 'yyyy-MM-dd', new Date())
    const { years, months, days } = intervalToDuration({
      start: birthDate,
      end: new Date()
    })
    return { years, months, days }
  }
  return { years: 0, months: 0, days: 0 }
}
