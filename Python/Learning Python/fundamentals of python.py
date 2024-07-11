# gets the radius from the user
# radius = float(input('What your radius?'))
# print('Your area is', 3.1415 * radius ** 2)
#
# age = int(input('What is your age?'))
# if age < 13:
#     print('You are a toddler')
# elif age < 20:
#     print('You are a teenager')
# elif age >= 65:
#     print('You are old')
# else:
#     print('You are an adult')
#
# my_friends = ['Narges', 'Simon', 'Dylan']
#
# for friend in my_friends:
#     print('I am friends with', friend,', ', end='')


my_list = list(range(0, 101, 3))
print(my_list)

#prime
for i in range(0, 100):
    prime_or_nah = True
    for j in range(2, i):
        if i % j == 0:
            print('It is not prime number')
        else:
            print('It is a prime number')

def factorial(n):
    total = 1

#factorial
    for i in range(1, n + 1):
        total *= i
        return total

print(factorial(6))
print(factorial(1000))