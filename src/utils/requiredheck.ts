export const requiredCheck = (dataTemp: {}, formList: any[]) => {
  // AMBIL ARRAY REQUIRED ONLY
  let arrReq: string[] = []
  formList.map((item) => item.required && arrReq.push(item.id))

  // CHECK SETIAP LIST ARRAY DENGAN DATA TEMP
  let boolArr: boolean[] = []
  if (Object.keys(dataTemp).length > 0) {
    for (const [key, value] of Object.entries(dataTemp)) {
      if (arrReq.findIndex((ind) => ind === key) !== -1) {
        value !== '' ? boolArr.push(true) : boolArr.push(false)
      }
    }
  }

  // HITUNG JUMLAH TRUE
  let isCheck: boolean = false
  if (arrReq.length === boolArr.length) {
    if (boolArr.findIndex((item) => item === false) === -1) {
      isCheck = true
    } else {
      isCheck = false
    }
  }
  if (arrReq.length === 0) isCheck = true

  return isCheck
}
