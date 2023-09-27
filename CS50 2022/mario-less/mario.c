#include <cs50.h>
#include <stdio.h>

int main(void)
{
int height, step, blank, hash;
do
{
        height = get_int("height:");
}
while(height<1 || height>8);
for (int step=1; step<=height; step++)
{
    for (int blank=1; blank<=height-step; blank++)
    {
        printf(" ");
    }
    for (int hash=height-step; hash<height; hash++)
    {
        printf("#");
    }
    printf("\r\n");
}
}