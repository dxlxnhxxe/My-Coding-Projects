#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int PyramidHeight, step, blank, hash;
    do
    {
        PyramidHeight = get_int("How many blocks high is the pyramid? ");
    }

    while (!(PyramidHeight >= 1 && PyramidHeight <= 8));

    if (PyramidHeight >= 1 && PyramidHeight <= 8)
    {
        for (step = 1; step <= PyramidHeight; step++)
        {
            for (blank = 1; blank <= PyramidHeight - step; blank++)
            {
                printf(" ");
            }
            for (hash = PyramidHeight - step; hash < PyramidHeight; hash++)
            {
                printf("#");
            }
            printf("\n");
        }
    }
}