import Debug from 'debug'

import ValidUrl from 'valid-url'

import assert from 'assert'

const debug = Debug('testistic-client')

var Axios = require('axios')

var options = {
    apiEndpoint: process.env.TESTISTIC_API_URL || 'http://localhost:8081'
}

export default function (clientoptions) {
    options = Object.assign(options, clientoptions)

    assert(ValidUrl.isWebUri(options.apiEndpoint),`Testistic API Endpoint is not valid => ${options.apiEndpoint}`)

    var api = Axios.create({
        baseURL: options.apiEndpoint
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
                    debug(`Unable to CreateTestRun HTTP Status is ${error.response.status} URL was ${error.config.url}`)
                } else if (error.code) {
                    debug('Unable to CreateTestRun Code:', error.code, error.config.url)
                } else {
                    debug('Unable to CreateTestRun', error)
                }
            }
        }
    }
}
