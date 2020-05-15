export default function() {
  this.post(
    '/api/v1/alert',
    request => [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify({
        "message": "alert created successfully"
      })
    ]
  )
};