from itertools import count
from openpyxl import load_workbook, workbook
import random
def get_file():
    wb_name = input("輸入.xlsx檔案")
    # sheet_name = input("輸入工作表名稱")
    if (len(wb_name) < 5 or wb_name[-5:] != ".xlsx"):
        print("invalid file")
    try:
        wb = load_workbook(wb_name);
    except FileNotFoundError:
        print("such a file not found")
        return 0;
    return wb

def get_sheet(wb):
    sheet_name = input("請輸入工作表名稱")
    try:
        sheet = wb[sheet_name];
    except KeyError:
        print("該工作表不存在")
        return None;
    return sheet


def get_random_problem(problem_num:int):
    num = input("輸入題目數量 : ")
    list1 = [i for i in range(1,problem_num+1)]
    try:
        n = int(num)
    except ValueError:
        print("輸入值非數字")
        return []
        
    if (n > problem_num):
        print("輸入值超出題庫數量!!")
        return []
    list2 = random.sample(list1, int(num))
    return list2

def create_test(sheet, question_list):
    return [sheet[i] for i in question_list];
        

def print_sheet(sheet):
    if (sheet == None):
        print("sheet not found")
        return 0;
    count = 1
    for row in sheet:
        print(count)
        count += 1
        for each_col in row:
            print(each_col.value, end=" ")
        print('\n')

wb = get_file()
print_sheet(wb['工作表2'])
