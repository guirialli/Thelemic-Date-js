#!/usr/bin/env node
const process = require("process")
const args = process.argv.slice(2)

const tdate = require("../Lib/index")

tdate.tdate(args)