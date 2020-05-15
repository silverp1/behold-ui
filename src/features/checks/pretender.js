export default function() {
  this.get(
    '/api/v1/check/:id/values',
    request => [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify({
        "values": [
            {
                "value": "nominal",
                "updated_at": "2020-05-10T02:22:01",
                "inserted_at": "2020-05-10T02:22:01",
                "id": 15150,
                "check_id": 9
            },
            {
                "value": "nominal",
                "updated_at": "2020-05-10T02:22:25",
                "inserted_at": "2020-05-10T02:22:25",
                "id": 15159,
                "check_id": 9
            },
            {
                "value": "nominal",
                "updated_at": "2020-05-10T02:22:55",
                "inserted_at": "2020-05-10T02:22:55",
                "id": 15168,
                "check_id": 9
            },
            {
                "value": "nominal",
                "updated_at": "2020-05-10T02:24:26",
                "inserted_at": "2020-05-10T02:24:26",
                "id": 15200,
                "check_id": 9
            },
            {
                "value": "nominal",
                "updated_at": "2020-05-10T02:26:45",
                "inserted_at": "2020-05-10T02:26:45",
                "id": 15248,
                "check_id": 9
            },
            {
                "value": "nominal",
                "updated_at": "2020-05-10T02:26:57",
                "inserted_at": "2020-05-10T02:26:57",
                "id": 15252,
                "check_id": 9
            },
            {
                "value": "nominal",
                "updated_at": "2020-05-10T02:28:03",
                "inserted_at": "2020-05-10T02:28:03",
                "id": 15275,
                "check_id": 9
            },
            {
                "value": "nominal",
                "updated_at": "2020-05-10T02:28:33",
                "inserted_at": "2020-05-10T02:28:33",
                "id": 15286,
                "check_id": 9
            },
            {
                "value": "nominal",
                "updated_at": "2020-05-10T02:29:46",
                "inserted_at": "2020-05-10T02:29:46",
                "id": 15311,
                "check_id": 9
            },
            {
                "value": "nominal",
                "updated_at": "2020-05-10T02:29:52",
                "inserted_at": "2020-05-10T02:29:52",
                "id": 15314,
                "check_id": 9
            }
        ]
      })
    ]
  )
  
  this.get(
    '/api/v1/check/:id',
    request => [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify({
        "check": {
            "value": null,
            "updated_at": "2020-05-14T05:31:39",
            "type": "ping",
            "target": "8.8.8.8",
            "state": "nominal",
            "operation": null,
            "name": "Google Check",
            "last_alerted_for": "critical",
            "interval": 60000,
            "inserted_at": "2020-05-03T02:12:55",
            "id": 9,
            "comparison": null,
            "alerts": [
              {
                  "updated_at": "2020-05-14T05:31:39",
                  "type": "email",
                  "target": "me@mydomain.com",
                  "last_sent": "2020-05-14T05:31:39Z",
                  "interval": 60000,
                  "inserted_at": "2020-05-06T02:19:42",
                  "id": 1,
                  "check_id": 9
              }
            ]
          }
        }
      )
    ]
  )
  this.post(
    '/api/v1/check',
    request => [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify({ "message": "check created successfully"})
    ]
  )

  this.get(
    '/api/v1/checks',
    request => [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify({'checks': [
        {
          "value": "record.updated_at",
          "updated_at": "2020-05-09T04:17:13",
          "type": "http_json_comparison",
          "target": "http://google.com",
          "state": "nominal",
          "operation": "greater_than_or_equal_to",
          "name": "Zeus-Server Check Date",
          "last_alerted_for": null,
          "interval": 6000,
          "inserted_at": "2020-05-09T03:42:42",
          "id": 10,
          "comparison": "$last_30_minutes",
          "alerts": []
        },
        {
          "value": "record.updated_at",
          "updated_at": "2020-05-09T04:17:13",
          "type": "ping",
          "target": "10.0.0.1",
          "state": "critical",
          "operation": null,
          "name": "Check router",
          "last_alerted_for": null,
          "interval": 6000,
          "inserted_at": "2020-05-09T03:42:42",
          "id": 11,
          "comparison": null,
          "alerts": [
            {
                "updated_at": "2020-05-09T03:18:33",
                "type": "email",
                "target": "joe@example.com",
                "last_sent": "2020-05-09T03:18:33Z",
                "interval": 60000,
                "inserted_at": "2020-05-06T02:19:42",
                "id": 1,
                "check_id": 9
            }
          ]
        },
        {
            "value": "record.value",
            "updated_at": "2020-05-10T02:36:20",
            "type": "http_json",
            "target": "http://facebook.com",
            "state": "nominal",
            "operation": null,
            "name": "Facebook Check",
            "last_alerted_for": "nominal",
            "interval": 6000,
            "inserted_at": "2020-05-03T02:12:55",
            "id": 9,
            "comparison": null,
            "alerts": []
        }
      ]})
    ]
  )
}
