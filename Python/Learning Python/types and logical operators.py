# python types

print(type('Hello World!'))
print(type(13))
print(type(4.72))
print(type(True))

# moving to integers
# Python rounds down!

print(4.72, int(4.72))
print(4.05, int(4.05))

# Rounding up!
print(4.72, int(4.72), int(round(4.72)))

# moving strings to integers
print('12345', int('12345'))
print(type('12345'))
print(type(int('12345')))
# print('hello world', int('Hello world')) # wont work because letters can't become integers

# Moving to floats
print(float(18))
print(float('12345'))

# Moving to strings
print(str(18))
print(str(19.5))
print(type(str(19.5)))

# logical operators
# There are three different logical operators; 'and', 'or' and 'not'

x = 6
print(x > 0 and x < 5)

y = 24
print(y % 2 == 0 or y % 5 == 0)
