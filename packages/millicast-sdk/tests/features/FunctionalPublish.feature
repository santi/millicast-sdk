Feature: As a developer I want to publish a stream so i can ensure its working correctly

  Scenario: Broadcast h264 stream
    Given a page with broadcaster options and a page with view options
    When I broadcast a stream with h264 codec and connect to stream as viewer
    Then broadcast is active and Viewer receive video data