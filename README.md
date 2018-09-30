# Testistic  Client

This module publishes a client which can be used to send test results to the Testistic service.

The client will be used in the test reporters.

## Configuration

The client needs to be provided the end point for the Testistic API endpoint.
This can be provided through the environment variable `TESTISTIC_API_URL`.


## Usage

Ensure the environment is configured properly.

Instantiate a client, create a TestRun,then invoke createTestRun
```
var client = TestisticClient()
var testrun = Testistic.TestRun.createFromTemplate()
await client.createTestRun(testrun)
```
