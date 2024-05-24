class Solution:
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1:
            return 1
        
        secondPrev = 0
        prev = 1
        result = 0

        for i in range(2, n + 1):
            result = secondPrev + prev
            secondPrev = prev
            prev = result
        
        return result

