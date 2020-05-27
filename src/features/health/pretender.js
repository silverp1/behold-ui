export default function() {
  this.get(
    '/api/v1/values/failed',
    request => [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify({
        "values": [
          {
              "value": "critical",
              "updated_at": "2020-05-27T04:10:38",
              "returned_value": "\"<HTML><HEAD><meta http-equiv=\\\"content-type\\\" content=\\\"text/html;charset=utf-8\\\">\\n<TITLE>301 Moved</TITLE></HEAD><BODY>\\n<H1>301 Moved</H1>\\nThe document has moved\\n<A HREF=\\\"http://www.google.com/\\\">here</A>.\\r\\n</BODY></HTML>\\r\\n\"",
              "inserted_at": "2020-05-27T04:10:38",
              "id": 93151,
              "check_id": 14,
              "check": {
                  "value": "div",
                  "updated_at": "2020-05-20T19:29:45",
                  "type": "http_comparison",
                  "target": "http://google.com",
                  "state": "critical",
                  "operation": null,
                  "name": "Local DNS Check",
                  "last_alerted_for": null,
                  "interval": 5000,
                  "inserted_at": "2020-05-18T22:21:15",
                  "id": 14,
                  "comparison": null
              }
          },
          {
              "value": "critical",
              "updated_at": "2020-05-27T04:08:34",
              "returned_value": "\"<HTML><HEAD><meta http-equiv=\\\"content-type\\\" content=\\\"text/html;charset=utf-8\\\">\\n<TITLE>301 Moved</TITLE></HEAD><BODY>\\n<H1>301 Moved</H1>\\nThe document has moved\\n<A HREF=\\\"http://www.google.com/\\\">here</A>.\\r\\n</BODY></HTML>\\r\\n\"",
              "inserted_at": "2020-05-27T04:08:34",
              "id": 93143,
              "check_id": 14,
              "check": {
                  "value": "div",
                  "updated_at": "2020-05-20T19:29:45",
                  "type": "http_comparison",
                  "target": "http://google.com",
                  "state": "critical",
                  "operation": null,
                  "name": "Local DNS Check",
                  "last_alerted_for": null,
                  "interval": 5000,
                  "inserted_at": "2020-05-18T22:21:15",
                  "id": 14,
                  "comparison": null
              }
          },
          {
              "value": "critical",
              "updated_at": "2020-05-25T23:31:45",
              "returned_value": "\"<HTML><HEAD><meta http-equiv=\\\"content-type\\\" content=\\\"text/html;charset=utf-8\\\">\\n<TITLE>301 Moved</TITLE></HEAD><BODY>\\n<H1>301 Moved</H1>\\nThe document has moved\\n<A HREF=\\\"http://www.google.com/\\\">here</A>.\\r\\n</BODY></HTML>\\r\\n\"",
              "inserted_at": "2020-05-25T23:31:45",
              "id": 93134,
              "check_id": 14,
              "check": {
                  "value": "div",
                  "updated_at": "2020-05-20T19:29:45",
                  "type": "http_comparison",
                  "target": "http://google.com",
                  "state": "critical",
                  "operation": null,
                  "name": "Local DNS Check",
                  "last_alerted_for": null,
                  "interval": 5000,
                  "inserted_at": "2020-05-18T22:21:15",
                  "id": 14,
                  "comparison": null
              }
          },
          {
              "value": "critical",
              "updated_at": "2020-05-25T23:31:40",
              "returned_value": "\"<HTML><HEAD><meta http-equiv=\\\"content-type\\\" content=\\\"text/html;charset=utf-8\\\">\\n<TITLE>301 Moved</TITLE></HEAD><BODY>\\n<H1>301 Moved</H1>\\nThe document has moved\\n<A HREF=\\\"http://www.google.com/\\\">here</A>.\\r\\n</BODY></HTML>\\r\\n\"",
              "inserted_at": "2020-05-25T23:31:40",
              "id": 93128,
              "check_id": 14,
              "check": {
                  "value": "div",
                  "updated_at": "2020-05-20T19:29:45",
                  "type": "http_comparison",
                  "target": "http://google.com",
                  "state": "critical",
                  "operation": null,
                  "name": "Local DNS Check",
                  "last_alerted_for": null,
                  "interval": 5000,
                  "inserted_at": "2020-05-18T22:21:15",
                  "id": 14,
                  "comparison": null
              }
          },
          {
              "value": "critical",
              "updated_at": "2020-05-25T23:31:35",
              "returned_value": "\"<HTML><HEAD><meta http-equiv=\\\"content-type\\\" content=\\\"text/html;charset=utf-8\\\">\\n<TITLE>301 Moved</TITLE></HEAD><BODY>\\n<H1>301 Moved</H1>\\nThe document has moved\\n<A HREF=\\\"http://www.google.com/\\\">here</A>.\\r\\n</BODY></HTML>\\r\\n\"",
              "inserted_at": "2020-05-25T23:31:35",
              "id": 93124,
              "check_id": 14,
              "check": {
                  "value": "div",
                  "updated_at": "2020-05-20T19:29:45",
                  "type": "http_comparison",
                  "target": "http://google.com",
                  "state": "critical",
                  "operation": null,
                  "name": "Local DNS Check",
                  "last_alerted_for": null,
                  "interval": 5000,
                  "inserted_at": "2020-05-18T22:21:15",
                  "id": 14,
                  "comparison": null
              }
          },
          {
              "value": "critical",
              "updated_at": "2020-05-25T23:31:30",
              "returned_value": "\"<HTML><HEAD><meta http-equiv=\\\"content-type\\\" content=\\\"text/html;charset=utf-8\\\">\\n<TITLE>301 Moved</TITLE></HEAD><BODY>\\n<H1>301 Moved</H1>\\nThe document has moved\\n<A HREF=\\\"http://www.google.com/\\\">here</A>.\\r\\n</BODY></HTML>\\r\\n\"",
              "inserted_at": "2020-05-25T23:31:30",
              "id": 93118,
              "check_id": 14,
              "check": {
                  "value": "div",
                  "updated_at": "2020-05-20T19:29:45",
                  "type": "http_comparison",
                  "target": "http://google.com",
                  "state": "critical",
                  "operation": null,
                  "name": "Local DNS Check",
                  "last_alerted_for": null,
                  "interval": 5000,
                  "inserted_at": "2020-05-18T22:21:15",
                  "id": 14,
                  "comparison": null
              }
          },
          {
              "value": "critical",
              "updated_at": "2020-05-25T23:31:25",
              "returned_value": "\"<HTML><HEAD><meta http-equiv=\\\"content-type\\\" content=\\\"text/html;charset=utf-8\\\">\\n<TITLE>301 Moved</TITLE></HEAD><BODY>\\n<H1>301 Moved</H1>\\nThe document has moved\\n<A HREF=\\\"http://www.google.com/\\\">here</A>.\\r\\n</BODY></HTML>\\r\\n\"",
              "inserted_at": "2020-05-25T23:31:25",
              "id": 93112,
              "check_id": 14,
              "check": {
                  "value": "div",
                  "updated_at": "2020-05-20T19:29:45",
                  "type": "http_comparison",
                  "target": "http://google.com",
                  "state": "critical",
                  "operation": null,
                  "name": "Local DNS Check",
                  "last_alerted_for": null,
                  "interval": 5000,
                  "inserted_at": "2020-05-18T22:21:15",
                  "id": 14,
                  "comparison": null
              }
          },
          {
              "value": "critical",
              "updated_at": "2020-05-25T23:31:20",
              "returned_value": "\"<HTML><HEAD><meta http-equiv=\\\"content-type\\\" content=\\\"text/html;charset=utf-8\\\">\\n<TITLE>301 Moved</TITLE></HEAD><BODY>\\n<H1>301 Moved</H1>\\nThe document has moved\\n<A HREF=\\\"http://www.google.com/\\\">here</A>.\\r\\n</BODY></HTML>\\r\\n\"",
              "inserted_at": "2020-05-25T23:31:20",
              "id": 93106,
              "check_id": 14,
              "check": {
                  "value": "div",
                  "updated_at": "2020-05-20T19:29:45",
                  "type": "http_comparison",
                  "target": "http://google.com",
                  "state": "critical",
                  "operation": null,
                  "name": "Local DNS Check",
                  "last_alerted_for": null,
                  "interval": 5000,
                  "inserted_at": "2020-05-18T22:21:15",
                  "id": 14,
                  "comparison": null
              }
          },
          {
              "value": "critical",
              "updated_at": "2020-05-25T23:31:15",
              "returned_value": "\"<HTML><HEAD><meta http-equiv=\\\"content-type\\\" content=\\\"text/html;charset=utf-8\\\">\\n<TITLE>301 Moved</TITLE></HEAD><BODY>\\n<H1>301 Moved</H1>\\nThe document has moved\\n<A HREF=\\\"http://www.google.com/\\\">here</A>.\\r\\n</BODY></HTML>\\r\\n\"",
              "inserted_at": "2020-05-25T23:31:15",
              "id": 93099,
              "check_id": 14,
              "check": {
                  "value": "div",
                  "updated_at": "2020-05-20T19:29:45",
                  "type": "http_comparison",
                  "target": "http://google.com",
                  "state": "critical",
                  "operation": null,
                  "name": "Local DNS Check",
                  "last_alerted_for": null,
                  "interval": 5000,
                  "inserted_at": "2020-05-18T22:21:15",
                  "id": 14,
                  "comparison": null
              }
          },
          {
              "value": "critical",
              "updated_at": "2020-05-25T23:31:10",
              "returned_value": "\"<HTML><HEAD><meta http-equiv=\\\"content-type\\\" content=\\\"text/html;charset=utf-8\\\">\\n<TITLE>301 Moved</TITLE></HEAD><BODY>\\n<H1>301 Moved</H1>\\nThe document has moved\\n<A HREF=\\\"http://www.google.com/\\\">here</A>.\\r\\n</BODY></HTML>\\r\\n\"",
              "inserted_at": "2020-05-25T23:31:10",
              "id": 93092,
              "check_id": 14,
              "check": {
                  "value": "div",
                  "updated_at": "2020-05-20T19:29:45",
                  "type": "http_comparison",
                  "target": "http://google.com",
                  "state": "critical",
                  "operation": null,
                  "name": "Local DNS Check",
                  "last_alerted_for": null,
                  "interval": 5000,
                  "inserted_at": "2020-05-18T22:21:15",
                  "id": 14,
                  "comparison": null
              }
          }
      ]
      })
    ]
  )
  
  this.post(
    '/api/v1/health/restart',
    request => [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify({
        message: "restart successfully issued"
      })
    ]
  )

  this.get(
    '/api/v1/health',
    request => [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify({
        "scheduler_alive": true,
        "rollup_processes": {
            "total_count": 8,
            "process_data": [
                {
                    "type": "rollup",
                    "status": "running",
                    "name": "11-rollup",
                    "id": 11
                },
                {
                    "type": "rollup",
                    "status": "running",
                    "name": "12-rollup",
                    "id": 12
                },
                {
                    "type": "rollup",
                    "status": "running",
                    "name": "10-rollup",
                    "id": 10
                },
                {
                    "type": "rollup",
                    "status": "running",
                    "name": "9-rollup",
                    "id": 9
                },
                {
                    "type": "rollup",
                    "status": "running",
                    "name": "14-rollup",
                    "id": 14
                },
                {
                    "type": "rollup",
                    "status": "running",
                    "name": "15-rollup",
                    "id": 15
                },
                {
                    "type": "rollup",
                    "status": "running",
                    "name": "13-rollup",
                    "id": 13
                },
                {
                    "type": "rollup",
                    "status": "running",
                    "name": "7-rollup",
                    "id": 7
                }
            ],
            "all_alive": true,
            "alive_count": 8
        },
        "expected_process_count": 8,
        "check_processes": {
            "total_count": 8,
            "process_data": [
                {
                    "type": "check",
                    "status": "running",
                    "name": "11-http",
                    "id": 11
                },
                {
                    "type": "check",
                    "status": "running",
                    "name": "12-dns",
                    "id": 12
                },
                {
                    "type": "check",
                    "status": "running",
                    "name": "10-http_json_comparison",
                    "id": 10
                },
                {
                    "type": "check",
                    "status": "running",
                    "name": "9-http_json",
                    "id": 9
                },
                {
                    "type": "check",
                    "status": "running",
                    "name": "14-http_comparison",
                    "id": 14
                },
                {
                    "type": "check",
                    "status": "running",
                    "name": "15-http_comparison",
                    "id": 15
                },
                {
                    "type": "check",
                    "status": "running",
                    "name": "13-dns",
                    "id": 13
                },
                {
                    "type": "check",
                    "status": "running",
                    "name": "7-ping",
                    "id": 7
                }
            ],
            "all_alive": true,
            "alive_count": 8
        }
      })
    ]
  )
}