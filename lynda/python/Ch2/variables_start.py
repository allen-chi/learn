# 
# Example file for variables
#

f=0
# print(f)

# # Declare a variable and initialize it
# f="abc"
# print(f)

# # # re-declaring the variable works


# # # ERROR: variables of different types cannot be combined

# print ("this is a string" + str(123))
# Global vs. local variables in functions
def someFunction():
    f="def"
    print(f)

someFunction()
print(f)