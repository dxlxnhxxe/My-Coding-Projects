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
        for (int step = 1; step <= PyramidHeight; step++)
        {
            for (int blank = 1; blank <= PyramidHeight - step; blank++)
            {
                printf(" ");
            }
            for (int hash = PyramidHeight - step; hash < PyramidHeight; hash++)
            {
                printf("#");
            }
            printf("\n");
        }
    }
}
