# mazeboard

Clojure implementation of the mazeboard game (previously implemented in common lisp, maybe I'll share that one too in the future :) )

"Mazeboard" is a board game; I'll add a description of the mechanics, I promise!

## Installation

Download from https://github.com/fpischedda/mazeboard

## Build

    $ lein deps

    $ lein build

## Tests

    $ lein midje :all

## Usage - cli - WIP
you need to have a mongodb instance running locally

    $ lein ring server ; starts the API server
    $ lein figwheel ; starts the web client in development mode using figwheel

## Usage - Docker - WIP
you need to have Docker Compose running in your system

    $ docker-compose up

## Rules
The game is for two to four players.
Each player must start at one of the four corners of the board.
The boards is a grid of NxN tiles with N being a odd number equal or greater
then 5.
Each tile represents a room which may have up to four open walls, or walls with
an open door.
Each player can either move through an open wall to one of the four nearby tiles
or rotate a tile.
The first player that reaches the central tile wins the game.

Additional game modes:

* A player flips a coin, head=the player MUST move through an open wall if possible,
  tail=the player MUST rotate a tile.
* A player rolls a dice, 1=rotate clockwise, 6=rotate countercolockwise, 2=move up,
  3=move down, 4=move left, 5=move right.

## License

Copyright © 2015 Francesco Pischedda

Distributed under the AGLP 3 License
# mazeboard-clj
