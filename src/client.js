
import Debug from 'debug'
const debug = Debug('testistic-client')

var Axios = require('axios')

export default function () {
    var api = Axios.create({
        baseURL: 'http://localhost:8081'
      })
    return {
        createTestRun: async function (testrun) {
            debug(`Submit TestRun ${JSON.stringify(testrun)}`)
            try {
                var response = await api.post('/testruns', testrun)
                var testrundata = response.data
                debug('TestRun created', testrundata)
                return testrundata
            } catch (error) {
                if (error.response) {
                    debug('Unable to CreateTestRun Status:', error.response.status, error.config.url)
                } else if (error.code) {
                    debug('Unable to CreateTestRun Code:', error.code, error.config.url)
                } else {
                    debug('Unable to CreateTestRun', error)
                }
            }
        }
    }
}
