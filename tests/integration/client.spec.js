import Testistic from 'testistic-model'

import TestisticClient from '../../index.js'

import { assert } from 'chai'

describe('Given a TestRun', function () {
    var client = TestisticClient()
    var testrun = Testistic.TestRun.createFromTemplate()
    describe('When it is submitted', function () {
        var r
        before(async () => {
            r = await client.createTestRun(testrun)
        })
        it('Then there is a test run registered', async function () {
            assert(r)
        })
    })
})
