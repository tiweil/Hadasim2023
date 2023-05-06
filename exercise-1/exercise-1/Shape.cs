using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace exercise_1
{
    internal class Shape
    {
        private int height;
        private int width;

        public void setHeight(int num)
        {
            this.height = num;
        }
        public int getHeight() { return height; }
        public void setWidth(int num)
        {
            this.width = num;
        }
        public int getWidth() { return width; }

    }
}
