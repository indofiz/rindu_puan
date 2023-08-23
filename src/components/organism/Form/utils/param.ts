export interface dataChange {
  target: { name: string; value: string | File | null }
}

export interface dataChangeLocation {
  target: {
    latitudeId: string
    longitudeId: string
    valueLatitude: number
    valueLongitude: number
  }
}

export interface dataError {
  target: { name: string; value: string[] }
}

// export interface errorChange {
//   target: { id: string; name: string; message: {}[]; state: string }
// }
