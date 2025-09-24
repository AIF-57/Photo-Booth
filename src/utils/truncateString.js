export default function truncateString(str, maxLength = 50) {
  if (str.length <= maxLength) {
    return str; // Return the original string if it's within the limit
  } else {
    // Slice the string to the desired length and append "..."
    return str.slice(0, maxLength);
  }
}
