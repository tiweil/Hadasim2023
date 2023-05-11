# Tower Calculator

This program is written in C# using Visual Studio and presents the user with a menu that includes two options:

1. Calculate area/scope of a rectangular tower

2. Calculate perimeter or print an isosceles triangle

As long as the user does not choose to exit the program by selecting option 3, the program will continue to offer these two options.

### Rectangular Tower
When the user selects the first option, they will be prompted to input the height and width of the tower.

The program will check whether the tower is a square or a rectangle with the difference between the lengths of its sides. 

If the difference is greater than 5, the area of the tower will be printed. Otherwise, the scope of the tower will be printed.

### Isosceles Triangle
When the user selects the second option, they will be prompted to choose between two sub-options:

Calculation of the perimeter of the triangle: The perimeter of the triangle will be calculated and the answer will be printed to the user.

Printing the triangle: The program will check if the width of the triangle is an even number or if its width is longer than 2 times its height. 

If so, the program will print a message to the user that the triangle cannot be printed. 

If the width is odd and shorter than twice its height, the program will print the triangle in the required format.

## Running the Program

To run this program, you will need to have C# installed on your computer. Once you have cloned or downloaded this repository, navigate to the directory where the program is saved and run the following command in the terminal:

```console
dotnet run
```
or you can press the debugger.

This will compile and execute the program. You will then be prompted with the main menu and can select your desired options.