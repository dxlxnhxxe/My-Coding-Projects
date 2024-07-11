import turtle

turtle.bgcolor('black')
turtle.pensize(2)
turtle.color('red')
turtle.speed(0)

# for colours in ('red', 'orange', 'yellow', 'green', 'blue', 'purple'):
#    turtle.color(colours)
#    turtle.circle(150)
#    turtle.left(60)
# turtle.done()

for i in range(6):
    for colours in ('red', 'orange', 'yellow', 'green', 'blue', 'purple'):
        turtle.color(colours)
        turtle.circle(150)
        turtle.left(10)
turtle.done()

