# behold-ui

behold-ui is a react application frontend for the [behold](https://github.com/silverp1/behold) monitoring application.

## Run it locally

To run this locally, start it like you would any react application:

`npm install`
`npm start`

You should now see the application running on port 3000. This application will run using pretender if you don't specify a non-development environment. 

### Use a real instance of behold

You can change to production and, in that mode, you can also specify the `API_URL` to your behold instance:

`NODE_ENV=production API_URL=localhost:4000/ npm start`

## Run it for real

This is meant to be run in a Docker container, but you can really do whatever you want with it (including building it and serving it up on your web server). 

### Run it in Docker

1. Update the Dockerfile to reference your local `API_URL`
2. `docker build .`
3. `docker run --restart=always --name="behold-ui" -p 3001:3000 YOUR_IMAGE_NAME`

The application will now be accessible from the IP of the machine you started the container on at port 3001 (this can be changed by swapping the 3001 in the above command to any port you want). 
