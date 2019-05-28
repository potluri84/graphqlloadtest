'use strict' 

const EasyGraphQLLoadTester = require('easygraphql-load-tester')
const fs = require('fs')
const path = require('path')

const userSchema = fs.readFileSync(path.join(__dirname, 'user.gql'), 'utf8')

const args = {
    autoSearchGDB: {
        text: 'cb'
    }
}

const loadTester = new EasyGraphQLLoadTester(userSchema, args)

const queries = [{
    name: 'autoSearchGDB(text: "cb*")',
    query: `
      {
        autoSearchGDB(text: "cb*") {
          matches
          classType
        }
      }
    `
}]

const testCases = loadTester.artillery({
    customQueries: queries
})



module.exports = {
    testCases
}