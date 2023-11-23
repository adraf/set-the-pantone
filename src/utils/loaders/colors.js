
export async function getAllColors() {
      const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${randomHexColorCode()}&count=9`)
      const data = await response.json()
      // had to set it this way so we could access the data within
      return data.colors
  }

export async function getSingleColor(id) {
    const response = await fetch(`https://www.thecolorapi.com/id?hex=${id}`)
    const data = await response.json()
    return data
}

  // Generating a random hex code
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16)
  const newCode = n.slice(0, 6)
  return newCode
}
randomHexColorCode()