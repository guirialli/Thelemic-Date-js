const process = require("process")
const args = process.argv.slice(2)

const tdate = require("./Bin/tdate")

tdate.tdate(args)