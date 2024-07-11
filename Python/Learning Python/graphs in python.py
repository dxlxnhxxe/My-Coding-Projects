# important the relevant modules
import matplotlib.pyplot as plt

# plotting graphs in python
# x = [1, 3, 5, 10] # this is what we are plotting
# plt.plot(x)
# plt.show() #This will show the plot we are plotting

# y = [7, 12, 21, 22]
# plt.plot(x, y)
# plt.show()

# let's plot a lovely looking plot

# label the axis
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Two lines!')
# line 1 - points
x = [3, 9, 14]
y = [2, 7, 30]
# plotting x and y
plt.plot(x, y, c='red', linewidth=2, label='Line 1')

# line 2 - points
x2 = [1, 15, 18]
y2 = [0, 3, 12]
# plotting x2 and y2
plt.plot(x2, y2, c='green', linewidth=2, label='Line 2', linestyle='dashed', marker='o',
         markerfacecolor='orange', markersize='10')

# show the legend on the plot
plt.legend()

# get python
plt.show()