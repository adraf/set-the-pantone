
// Loader to get all colours 
export async function getAllColors() {
      const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${randomHexColorCode()}&count=16`)
      const data = await response.json()
      // had to set it this way so we could access the data within
      return data.colors
  }

  // Loader to get single colour
export async function getSingleColor(id) {
    const response = await fetch(`https://www.thecolorapi.com/id?hex=${id}`)
    const data = await response.json()
    return data
}

// Loader to get colour scheme to match chosen signle colour
export async function getSingleColorScheme(id) {
  const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${id}&count=6`)
  const data = await response.json()
  return data.colors
}

// Generating a random hex code for use in getAllColors loader
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16)
  const newCode = n.slice(0, 6)
  return newCode
}
randomHexColorCode()