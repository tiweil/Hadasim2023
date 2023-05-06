using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace exercise_1
{
    internal class Triangle : Shape
    {

        public void PrintScope()
        {
            double side = Math.Sqrt(Math.Pow(getWidth() / 2, 2) + Math.Pow(getHeight(), 2));
            Console.WriteLine($"The scope of the building: {2 * side + getWidth()}");
        }
        public void PrintShape()
        {
            if (getWidth() % 2 == 0 || getWidth() > getHeight() * 2)
            {
                Console.WriteLine("Can't print the triangle");
                return;
            }
            else
            {
                int oddNumbers = 0;
                for (int i = 1; i <= getWidth(); i += 1)
                {
                    if (i % 2 != 0)
                    {
                        oddNumbers += 1;
                    }
                }
                int rowsPerNum = (getHeight() - 2) / (oddNumbers - 2);
                int remainder = (getHeight() - 2) % (oddNumbers - 2);
                int num = 1;
                int count = 1;
                while (num <= getHeight())
                {
                    if (num == 1)
                    {
                        for (int j = 1; j <= (getHeight() - num); j++)
                        {
                            Console.Write(" ");
                        }

                        Console.Write("*");
                        Console.WriteLine();
                        num += 1;
                        count += 1;
                    }
                    else if (count == 2)
                    {

                        for (int k = 1; k <= rowsPerNum + remainder; k += 1)
                        {
                            for (int j = 1; j <= (getHeight() - count); j++)
                            {
                                Console.Write(" ");
                            }

                            for (int i = 1; i <= 2 * count - 1; i++)
                            {
                                Console.Write("*");
                            }
                            Console.WriteLine();
                        }
                        count += 1;
                        num = num + rowsPerNum + remainder;
                    }
                    else
                    {
                        if (count == (getWidth() + 1) / 2)
                        {
                            for (int j = 1; j <= (getHeight() - count); j++)
                            {
                                Console.Write(" ");
                            }
                            for (int i = 1; i <= 2 * count - 1; i++)
                            {
                                Console.Write("*");
                            }
                            Console.WriteLine();
                            break;
                        }
                        else
                        {
                            for (int k = 1; k <= rowsPerNum; k += 1)
                            {
                                for (int j = 1; j <= (getHeight() - count); j++)
                                {
                                    Console.Write(" ");
                                }

                                for (int i = 1; i <= 2 * count - 1; i++)
                                {
                                    Console.Write("*");
                                }
                                Console.WriteLine();
                            }
                            count += 1;
                            num = num + rowsPerNum;
                        }

                    }
                }

            }
        }
    }
}
