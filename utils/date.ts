export function getDaysAgo(date: Date): number { // function is type of number because it returns the number of days ago
  const msPerDay = 1000 * 60 * 60 * 24 // number of milliseconds in a day 86400000 milliseconds in a day
  const diff = Date.now() - date.getTime() 
  return Math.floor(diff / msPerDay)
}