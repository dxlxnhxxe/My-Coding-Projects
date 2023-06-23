#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

string plaintext, cyphertext;
int k;
int i=0;

bool only_digits(string word);
char rotate(char letter, int key);

int main(int argc, string argv[])
{
// Make sure program was run with just one command-line argument
if (argc != 2)
{
    printf("The argument supplied is not valid");
    return (1);
}
else
    // Make sure every character in argv[1] is a digit
    {
        if (only_digits(argv[1]))
        {
            // Convert argv[1] from a `string` to an `int`
            k=atoi(argv[1]);
            // Prompt user for plaintext
            plaintext = get_string("plaintext:  ");
            // For each character in the plaintext:
            printf("ciphertext: ");
            for (i=0; i<strlen(plaintext); i++)
            {
                printf("%c", rotate(plaintext[i], k));
            }
            printf("\n");
            return (0);
        }
        else
        {
            printf("Usage: ./caesar key\n");
            return (1);
        }
    }
}

bool only_digits(string word)
{
    bool ok=true;
    while (i<strlen(word))
    {
        if ((word[i]<48 || word[i]>57))
        {
            ok = false;
        }
    i++;
    }
    return (ok);
}
char rotate(char letter, int key)

{
    // Rotate the character if it's a letter

    unsigned char newletter=letter;

    if ((letter>64 && letter<91) || (letter>96 && letter<123))
    {
        newletter = letter + key%26;

        if ((letter<91 && newletter>90) || (letter>96 && newletter>122))
        {
            newletter = newletter-26;
        }
    }
    return (newletter);
}
