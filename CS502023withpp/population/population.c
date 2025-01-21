#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int years = 0;
    int startPopulation, endPopulation;

    // TODO: Prompt for start size
    do
    {
        printf("Enter the starting population size: ");
        scanf("%d", &startPopulation);

        if (startPopulation < 9)
        {
            printf("Population size must be at least 9. Please try again.\n");
        }
    }
    while (startPopulation < 9);

    // TODO: Prompt for end size
    do
    {
        printf("Enter the ending population size: ");
        scanf("%d", &endPopulation);

        if (endPopulation < startPopulation)
        {
            printf("Ending population size must be greater than or equal to the starting population size. Please try again.\n");
        }
    }
    while (endPopulation < startPopulation);

    // TODO: Calculate number of years until we reach threshold

    while (startPopulation < endPopulation)
    {
        startPopulation = startPopulation + (startPopulation / 3) - (startPopulation / 4);
        years++;
    }

    // TODO: Print number of years
    printf("Years: %d\n", years);
    
    return 0;
}