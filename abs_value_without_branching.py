# Python3 implementation of above approach
CHARBIT = 8;
SIZE_INT = 8;

# This function will return
# absolute value of n
def getAbs(n):
	mask = n >> (SIZE_INT * CHARBIT - 1);
	return ((n + mask) ^ mask);

# Driver Code
n = -6;
print("Absolute value of",n,"is",getAbs(n));
