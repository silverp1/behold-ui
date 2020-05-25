# behold-ui

behold-ui is a react application frontend for the [behold](https://github.com/silverp1/behold) monitoring application.

## Run it locally

To run this locally, start it like you would any react application:

1. `npm install`
2. `npm start`

You should now see the application running on port 3000. This application will run using pretender if you don't specify a non-development environment. 

### Use a real instance of behold

By default behold-ui runs in development. You can make it run in "production" by using `REACT_APP_BEHOLD_MODE_OVERRIDE` and setting that to `production`.

Furthermore, when you do this you should specify the API URL of the behold instance you want the frontend to talk to using `REACT_APP_BEHOLD_API_URL` otherwise it defaults to `http://localhost:4000/`.

I use a `.env.local` file locally with `REACT_APP_BEHOLD_API_URL` defined, that is used automatically in the event the production mode is enabled.

## Run it for real

This is meant to be run in a Docker container, but you can really do whatever you want with it (including building it and serving it up on your web server). 

### Run it in Docker

1. Update the Dockerfile to reference your local `API_URL`
2. `docker build .`
3. `docker run --restart=always --name="behold-ui" -p 3001:3000 YOUR_IMAGE_NAME`

The application will now be accessible from the IP of the machine you started the container on at port 3001 (this can be changed by swapping the 3001 in the above command to any port you want). 
