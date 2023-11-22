
export async function getAllColors() {
      const response = await fetch('https://www.thecolorapi.com/scheme?hex=0047AB&count=9')
      const data = await response.json()
      // had to set it this way so we could access the data within
      return data.colors
  }
