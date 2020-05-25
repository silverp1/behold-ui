export default function() {
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