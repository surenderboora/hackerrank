# Problem - https://www.hackerrank.com/challenges/python-print/problem

if __name__ == '__main__':
    n = int(input())
    
    # print(*values, sep=' ', end='\n', file=sys.stdout)
    # print(value1, value2, value3, sep=' ', end='\n', file=sys.stdout)
    for i in range(n):
        print(i+1, sep='', end='')