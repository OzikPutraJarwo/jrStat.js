jrStat()

console.log("")

// (a, p, df)
console.log("studentq : " + jrStat.studentq.inv(0.05, 7, 12))
console.log("studentt : " + jrStat.studentt.inv(0.95, 12))
console.log("tukey    : " + jrStat.tukey.inv(0.95, 7, 12))