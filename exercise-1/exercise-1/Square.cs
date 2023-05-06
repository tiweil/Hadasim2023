using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace exercise_1
{
    internal class Square : Shape
    {

        public void PrintArea()
        {
            Console.WriteLine($"The area of the building: {getHeight() * getWidth()}");
        }
        public void PrintScope()
        {
            Console.WriteLine($"The scope of the building: {2 * getHeight() + 2 * getWidth()}");
        }
    }
}
