import { useState } from 'react'
import Select, { SelectOption } from '../../atoms/Form/Select'

const options = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 }
]

const SelectInput = () => {
  const [value, setValue] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])
  return (
    <>
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
      <Select
        multiple
        options={options}
        value={value}
        onChange={(o) => setValue(o)}
      />
    </>
  )
}

export default SelectInput
