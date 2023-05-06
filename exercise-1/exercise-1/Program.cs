using exercise_1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

internal class Program
{
    public enum Options
    {
        Square = 1,
        Triangle,
        Exit
    }

    private static void Main(string[] args)
    {
        Console.WriteLine("Welcom to Twitter's real estate program");

        Options chosenShape = MainMenu();//the function return which type of shape the user wants
        if (Convert.ToInt32(chosenShape) == 3)//in case the user wants to exit the program
        {
            return;
        }
        while (Convert.ToInt32(chosenShape) != 3)//while the user doesn't press 3 the program works
        {
            switch (chosenShape)
            {
                case Options.Square://in case the user chose a square  building
                    Square shape1 = new Square();

                    //Enter the details of the desired building
                    Console.WriteLine("Fill in the height of the building:");
                    shape1.setHeight(Convert.ToInt32(Console.ReadLine()));
                    Console.WriteLine("Fill in the width of the building:");
                    shape1.setWidth(Convert.ToInt32(Console.ReadLine()));

                    //in case all the sides are equale or in case the difference between the height and the width is greater than 5
                    if (shape1.getHeight() - shape1.getWidth() > 5 || shape1.getWidth() == shape1.getHeight())
                    {
                        shape1.PrintArea();
                    }
                    else
                    {
                        shape1.PrintScope();
                    }
                    break;
                case Options.Triangle://in case the user chose a triangle building
                    Triangle shape2 = new Triangle();

                    //Enter the details of the desired building
                    Console.WriteLine("Fill in the height of the building:");
                    shape2.setHeight(Convert.ToInt32(Console.ReadLine()));
                    Console.WriteLine("Fill in the width of the building:");
                    shape2.setWidth(Convert.ToInt32(Console.ReadLine()));

                    Console.WriteLine("press 1 to calculate the perimeter of the triangle, press to print the triangle");
                    int action = Convert.ToInt32(Console.ReadLine());//the user decides witch action to take
                    while (action != 1 && action != 2)//in case of a wrong number
                    {
                        Console.WriteLine("wrong answer, try again");
                        action = Convert.ToInt32(Console.ReadLine());
                    }
                    if (action == 1)
                    {
                        shape2.PrintScope();
                    }
                    if (action == 2)
                    {
                        shape2.PrintShape();
                    }
                    break;


            }
            chosenShape = MainMenu();
            if (Convert.ToInt32(chosenShape) == 3)
            {
                return;
            }
        }


        Console.ReadKey();
    }

    public static Options MainMenu()
    {
        Console.WriteLine("choose an option: 1 for square, 2 for triangle, 3 for exit");
        int myChoice = Convert.ToInt32(Console.ReadLine());
        while (myChoice != 1 && myChoice != 2 && myChoice != 3)
        {
            Console.WriteLine("wrong number, try again");
            myChoice = Convert.ToInt32(Console.ReadLine());
        }
        switch (myChoice)
        {
            case 1:
                return Options.Square;
            case 2:
                return Options.Triangle;
            case 3:
                return Options.Exit;
        }
        return Options.Exit;
    }
}
