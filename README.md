# Ping Pong

#### Ping pong game that results in displaying numbers and strings, 06.24.2016

#### By Tam Nguyen

## Description

The project contains a game that allows a numeral input and outputs numbers and strings, depending if the number are multiples of 3, 5, and 15.

## BDD Specifications

| Behavior                                                     | Input         | Output    |
| -------------------------------------------------------------|:-------------:| ---------:|
| It returns a number                                          | 2             | 2 |
| It returns numbers starting from 1 and up to number inputted | 2             | [1, 2] |
| It returns ping for numbers that are multiples of 3          | 6             | [1, 2, ping, 4, 5, ping] |
| It returns pong for numbers that are multiples of 5          | 10            | [1, 2, ping, 4, pong, ping, 7, 8, ping, pong] |
| It returns pingpong for numbers that are multiples of 15     | 30            | [1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong, 16, 17, ping, 19, pong, ping, 22, 23, ping, pong, 26, ping, 28, 29, pingpong] |

## Setup/Installation Requirements

* Check out the GitHub pages link: https://tamothy.github.io/ping_pong_project
* Clone repository if interested in changing project
* Use Atom to customize changes
* Make sure to commit regularly on terminal
* Don't forget to push to remote repository

## Known Bugs

At first my process was thinking of code that would be DRY (Don't Repeat Yourself), but this process ran into many coding errors, and so my experience worked best when thinking of code from a functional perspective, then changing the code to DRY afterwards. Nevertheless, if interested in changing the project, my advice is to make it work first, then simplify the code afterwards if necessary.

## Support and contact details

Tam Nguyen's email: mr.tamron@gmail.com

## Technologies Used

HTML

CSS

JavaScript

JQuery

### License

This software is licensed under the MIT license.

Copyright (c) 2016 **Tam Nguyen**
