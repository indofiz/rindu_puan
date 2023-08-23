export const jsonToFormData = (data: any) => {
  const formData = new FormData()

  function resolveObject(name: string, object: any) {
    for (const [key, value] of Object.entries(object)) {
      if (value instanceof Object) {
        if (value instanceof File) {
          formData.append(`${name}[${key}]`, value)
        } else {
          resolveObject(`${name}[${key}]`, value)
        }
        continue
      }
      if (value instanceof Array) {
        resolveArray(`${name}[${key}]`, value)
        continue
      }
      formData.append(`${name}[${key}]`, `${value}`)
    }
  }

  function resolveArray(name: string, array: any) {
    array.forEach((value: any, index: number) => {
      if (value instanceof Object) {
        resolveObject(`${name}[${index}]`, value)
        return
      }

      if (value instanceof Array) {
        resolveArray(`${name}[${index}]`, value)
        return
      }

      formData.append(`${name}[${index}]`, `${value}`)
    })
  }

  Object.keys(data).forEach((key) => {
    const value = data[key]

    if (value instanceof Object) {
      resolveObject(key, value)
    } else if (value instanceof Array) {
      resolveArray(key, value)
    } else {
      formData.append(key, value)
    }
  })

  return formData
}
