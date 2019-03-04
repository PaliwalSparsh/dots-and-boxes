[![Build Status](https://travis-ci.org/PaliwalSparsh/dots-and-boxes.svg?branch=master)](https://travis-ci.org/PaliwalSparsh/dots-and-boxes)
[![Storybook](https://github.com/storybooks/brand/blob/master/badge/badge-storybook.svg)](https://5c7525e30b10e7d8d0526fa5--dots-and-boxes.netlify.com)

# Dots-and-boxes

**Game demo link**: [https://dots-and-boxes.netlify.com/](https://dots-and-boxes.netlify.com/)

**Storybook link**: [https://5c7525e30b10e7d8d0526fa5--dots-and-boxes.netlify.com](https://5c7525e30b10e7d8d0526fa5--dots-and-boxes.netlify.com)

_In storybook you can view all components used to make this game and play with knobs to understand their behaviour._

## Requirements

Creating the game dots and boxes. Players take turns joining two horizontally or vertically adjacent dots by a line. A player that completes the fourth side of a square (a box) colors that box and must play again. When all boxes have been colored, the game ends and the player who has colored more boxes wins.

## Approach

Game constitutes mainly of grid. The grid is made up of smaller blocks GridBlock(component). It composed of a box div (component) with a bar div (component) one on its left and another on its top. ( _you can view these in storybook for better understanding_ )

These GridBlocks put side-by-side create rows and columns for Grid. When a user clicks on a bar in a GridBlock we dispatch an action `UPDATE_GRID` with payload `{ row, column, type }`. Row and column define the position of GridBlock and type tells is it the `top` bar or `left` bar of the GridBlock. Based on if it is bar on top or bar on left of GridBlock we check if enabling this bar leads to completion of current box or adjacent boxes. We swap turns and wait until total score of both players becomes equal to max score possible and finish the game.

## Technologies used

1.  React ( hooks, useReducer used to setup Redux like action, reducer lifecycle. )
2.  Storybook - can be used to view all basic components used to create app.
3.  create-react-app
4.  Netlify for deployment - **BONUS POINTS** :smile:
5.  Travis CI for continuous integration - It runs tests and check if the build is stable.

## Getting started

1.  `npm start` To run the app in the development mode . Browse to [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

2.  `npm test` Launches the test runner in the watch mode. It will run the following -
    a) unit tests - For actions, reducers and utils using jest.
    b) snapshot tests - For structural testing components using storyshot addon of storybook.

3.  `npm run build` Builds the app for production to the `build` folder.

4.  `npm run storybook` To start the storybook development server.
