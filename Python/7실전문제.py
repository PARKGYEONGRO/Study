# 구구단 2 단 결과를 출력하는 프로그램을 for 문과 while 문을 사용하여 각각작성해 봅시다

# 2단
# n = 2는 기본 세팅
n = 2

for i in range(1, 10):
    print(f'{n} * {i} = {n*i}')

# i = 0은 while 문일때
i = 0
while i<9:
    i = i + 1
    print(f'{n} * {i} = {n*i}')


# 사용자로부터 1 에서 9 사이의 숫자를 입력 받아 입력 받은 숫자에 해당하는 구구단을 출력하고 ,
# 만약 1 에서 9 사이의 숫자 이외의 숫자가 입력되면 다시 입력하라는 문구가 나오도록
# 프로그램을 작성해 봅시다

n = int(input('1에서 9까지의 수를 입력하시오 :'))

fin = 'false'
while fin != 'True':
    if 1<= n <=9:
        for i in range(1, 10):
           print(f'{n} * {i} = {n*i}')
        fin = 'True'
    else:
        n = int(input('1에서 9까지의 수를 다시 입력하시오 : '))


# for 문을 사용하여 숫자를 입력 받아 다음과 같은 출력 결과가 나오도록 프로그램을 작성해 봅시다.

n = int(input('숫자를 입력하세요 : '))

for i in range(1,n+1):
    for j in range(n-i):
        print(' ', end='')
    for j in range(i):
        print('*', end='')
    print()


# 중첩 반복문을 활용하여 다음과 같이 주사위 2 개의 합이 6 인 경우를 전부 출력하는 프로그램을 작성해 봅시다.
for a in range(1,7):
    for b in range(1,7):
        if a + b == 6:
            print('첫 번째 주사위', a, '두 번째 주사위', b)


"""
거꾸로 정수는 121 이나 3443 와 같이 거꾸로 나열해도 그 값이 원래의 값과
같은 정수를 의미한다 . 사용자로부터 숫자 n 을 입력 받아 이 수가 거꾸로
정수인지 아닌지를 판단하는 다음과 같은 프로그램을 작성해봅시다
"""

n = int(input('정수를 입력하시오 : '))

ispalindrome = True

text = str(n)
leng = len(text)

begin = 0
end = leng - 1

while begin < end:
    if text[begin] != text[end]:
        ispalindrome = False
        break
    else:
        begin += 1
        end -= 1

if ispalindrome == True:
    print(f'{n}은(는) 거꾸로 정수입니다.')
else:
    print(f'{n}은(는) 거꾸로 정수가 아닙니다.') 