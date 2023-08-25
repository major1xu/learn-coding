from calendar import*
year = int(input('Enter Year:'))
print(calendar(year,2,1,8.3))

#Ukraine Flag using Python

import numpy as np
import matplotlib.pyplot as py
import matplotlib.patches as patch

#plotting the tri colours in national flag
a = patch.Rectangle((0,3), width=6, height=2, facecolor='#0057B7', edgecolor='grey')
b = patch.Rectangle((0,1), width=6, height=2, facecolor='#FFD700', edgecolor='grey')

m,n = py.subplots()
n.add_patch(a)
n.add_patch(b)

py.axis('equal')
py.show
