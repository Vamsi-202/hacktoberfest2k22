# A simple program to count set bits
# in all numbers from 1 to n.

# Returns count of set bits present in all
# numbers from 1 to n
def countSetBits(n):
	
	# initialize the result
	bitCount = 0

	for i in range(1, n + 1):
		bitCount += countSetBitsUtil(i)

	return bitCount


# A utility function to count set bits
# in a number x
def countSetBitsUtil(x):

	if (x <= 0):
		return 0
	return (0 if int(x % 2) == 0 else 1) + countSetBitsUtil(int(x / 2))


# Driver program
if __name__=='__main__':
	n = 4
	print("Total set bit count is", countSetBits(n))
