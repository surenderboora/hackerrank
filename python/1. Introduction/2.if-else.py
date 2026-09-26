# Problem - https://www.hackerrank.com/challenges/py-if-else/problem

WEIRD = "Weird"
NOT_WEIRD = "Not Weird"

if __name__ == '__main__':
    n = int(input().strip())
    result = ""
    if n % 2 == 1:
        result = WEIRD
    elif n % 2 == 0 and 2 <= n <= 5:
        result = NOT_WEIRD
    elif n % 2 == 0 and 6 <= n <= 20:
        result = WEIRD
    elif n % 2 == 0 and n > 20:
        result = NOT_WEIRD
        
    print(result)