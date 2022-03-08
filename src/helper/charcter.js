export const removeUnNecessaryCharacter = (value) => {
  return value.replaceAll("%20", " ")
    .replace("%3F", " ")
    .replaceAll("%22", " ")
    .replaceAll("%2C", " ")
    .replaceAll("%27", "")
    .replaceAll("%24", "")
}