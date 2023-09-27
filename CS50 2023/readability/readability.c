#include <cs50.h>
#include <ctype.h>
#include <math.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string text = get_string("Text: ");

    int letters = 0;
    int words = 1;
    int sentences = 0;

    // Count number of letters
    for (int i = 0; i < strlen(text); i++)
    {
        if (isalpha(text[i]))
        {
            letters++;
        }
        // Count number of words
        else if (text[i] == ' ')
        {
            words++;
        }
        // Count number of sentences
        else if (text[i] == '.' || text[i] == '?' || text[i] == '!')
        {
            sentences++;
        }
    }
    // Index = 0.0588 * L - 0.296 * S - 15.8

    // Calculate L average nb of letters per 100 words
    float L = (float) letters / (float) words * 100;

    // Calculate S average nb of sentences per 100 words
    float S = (float) sentences / (float) words * 100;

    int index = round(0.0588 * L - 0.296 * S - 15.8);

    if (index < 1)
    {
        printf("Before Grade 1\n");
    }
    else if (index > 16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        printf("Grade %i\n", index);
    }
}