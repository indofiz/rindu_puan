export const phoneNumber = (phone_number: string) => {
  // get the first 2
  const number_2_front = phone_number.slice(0, 2)

  if (number_2_front == '08') {
    const nmbr = '62' + phone_number.slice(2)
    return nmbr
  }

  return phone_number
}
