# Task 3

### Guess the number

![image.png](https://i.postimg.cc/G2XxmVKx/image.png)

_"Guess the number"_, is a simple game, Upon Initialization a random number between `1-20` is selected as answer, User has to guess the right number under specific attempts before the correct answer is revealed.

## Instructions

The flow of game should be

- Upon App Initialization (App load), Maximum attempts and a random number between `1-20` should be selected and stored in constants.
- User has an Inputbox and a button, they can enter a number between `1-20` in the inputbox and click on guess button.

- Upon the button click (Guess button) :-

- If the user's guess is equal to the random number selected, He wins.
- If the number is correct, `correct` class should be applied to result div.
- If the user's guess is incorrect, he will lose an attempt and will be provided with a hint. Ex-
  `So Close! Correct number is higher than your current guess. You have 2 attempts remaining.`
- If the number provided by user is not between `1-20`, It should be considered as Invalid input.
- User should not lose any attempts for entering an Invalid input.
- `invalidInput` class to Inputbox, `invalid` class to result div should be applied on entering an Invalid input.
- There's no time limit for the user to guess the number.
- If the user fails to guess the right number in the given attempts, give feedback to user and select another random number.

## Some Expected Outputs

### On correct guess

![image.png](https://i.postimg.cc/HW06fvbn/image.png)

### On wrong guess

![image.png](https://i.postimg.cc/zXgGzWXy/image.png)

### After all attempts

![image.png](https://i.postimg.cc/jdHC6PVG/image.png)
