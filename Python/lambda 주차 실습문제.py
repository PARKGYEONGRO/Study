# 실습 1
# n_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# # append 사용
# even_list = []
# for n in filter(lambda x: x % 2 == 0, n_list):
#     even_list.append(n)

# #list 함수 사용
# # even_list = list(filter(lambda x: x % 2 == 0, n_list))

# print('even_list =',even_list)


# # 실습 2

# a_list = ['a', 'b', 'c', 'd']

# # 1
# def to_upper(x):
#     return x.upper()
# upper_a_list = list(map(to_upper, a_list))
# print('upper_a_list =', upper_a_list)

# # 2
# upper_a_list = list(map(lambda x: x.upper(), a_list))
# print('upper_a_list =', upper_a_list)



# # 실습 3

# product_xy = []
# for x in [1, 2, 3]: # 이중 for 루프를 통해 두 리스트 원소의 곱을 모두 append
#     for y in [2, 4, 6]:
#         product_xy.append(x * y)
# product_xy = [x * y for x in [1,2,3] for y in [2,4,6]]

# print(product_xy)


# 실습 4

# list1 = [n for n in range(1, 31) if n% 2 == 0 if n % 3 == 0]
# print(list1)

# cubic = [x**3 for x in range(1, 11) if x**3 <= 500]
# print('cubic = ', cubic)

# a = ['welcome', 'to', 'the', 'python', 'world']
# first_a =[word[0] for word in a]
# print('first_a =',first_a)
