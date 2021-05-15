## What is BrainF*ck?

BrainF*ck is an Esoteric programming language made by Urban Müller in 1993. It is composed of 8 different instructions and was pruposely made to be hard to read and overcomplicated.

> `++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.`

This is a hello world example in brainf*ck. Pretty weird right?
## What is this website?

This website is a brainf*ck interpreter implementation written in typescript.

## Specifications of the implementation

- The memory is an Array of length 30 000 of numbers;
- The pointer value begins in the position 15 000;
- Only 7 of the 8 basic instructions are currently implemented:
</br>

|Instruction|Symbol|Is Implemented?|
|:---:|:---:|:---:|
|MOV_RIGHT| > | Yes |
|MOV_LEFT| < | Yes |
|INCREMENT| + | Yes |
|DECREMENT| - | Yes |
|LOOP_START| [ | Yes |
|LOOP_END| ] | Yes |
|PRINT_CHAR| . | Yes |
|READ_CHAR| , | No |

## LICENSE
This project is licensed under the GNU GPLv3  License - see the [LICENSE.md](LICENSE.md) file for details.