import Testistic from 'testistic-model'

import TestisticClient from '../../index.js'

import { assert } from 'chai'

describe('Given a TestisticClient', function () {
  this.timeout(30000)
    var client = TestisticClient()
    
    describe('When a TestRun is reported', function () {
        var testrun
        var r
        before(async () => {
            testrun = Testistic.TestRun.createFromTemplate()
            r = await client.createTestRun(testrun)
        })
        it('Then there is a test run registered', async function () {
            assert(r, 'Unable to create Test Run')
        })
    })
    describe('When TestRuns are reported', function () {
        var testruns
        var r
        before(async () => {
            var testrun1 = Testistic.TestRun.createFromTemplate()
            testrun1.epic='epic1'
            var testrun2 = Testistic.TestRun.createFromTemplate()
            testrun2.epic='epic2'
            r = await client.createTestRuns([ testrun1, testrun2 ])
        })
        it('Then test runs are registered', async function () {
            assert(r, 'Unable to create TestRuns')
        })
    })
})
