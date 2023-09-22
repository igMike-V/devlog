export const isValidUrl = (url: string): true | string => {
  try {
    new URL(url)
    return true
  } catch {
    return 'The value must be a valid url'
  }
} 

export const isValidSlug = (slug:string): true | string => {
  const regex = /^[a-z-]+$/
  if (regex.test(slug)) {
    return true
  } else {
    return 'The value must contain only lowercase letters and hyphens'
  }
}