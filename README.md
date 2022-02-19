# Image Processing

## Installation

1. Clone the project `git clone git@github.com:miladezzat/udacity-project-one.git`
2. Install Deps `npm i`

## Scripts

1. Build `npm run build`
2. Run dev `npm run start:dev`
3. Linter `npm run lint`
4. Fix linter `npm run lint:fix`
5. Format `npm run prettier`
6. Test `npm run test`
7. Add git commit `npm run commit`

## Note
1. you will see the app logs on the logs file
2. You can set the `.env` file that contain the `PORT` for app, default 3000, check the `.env-example`


## Usage

The server will listen on port `3000`:

### Path

`/images`

### Query string parameters

  **Expected query arguments are:**

    - filename: Available filenames are:
        - `encenadaport`
        - `fjord`
        - `icelandwaterfall`
        - `palmtunnel`
        - `santamonica`
    width: numerical pixel value > 0
    height: numerical pixel value > 0


| Query string param    | Description |
|-------------|---------------|
| filename    | Any image available in the `assets/full` folder - required  |
| width    | Custom image width - optional          |
| height | Custom image height - optional         |


### Full example

Considering the app running at port 3000 on your local environment, you can access the following endpoints

* Getting the original image - [http://localhost:3000/images?filename=fjord](http://localhost:3000/images?filename=fjord)
* Getting the same image with custom dimensions - [http://localhost:3000/images?filename=fjord&width=100&height=100](http://localhost:3000/images?filename=fjord&width=100&height=100)
