from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.headless = True

driver = webdriver.Chrome(options=options)

driver.get("https://muzammil011.github.io/My-portfolio/")

assert "Muzammil" in driver.title

print("Test Passed: Portfolio site is live and title looks correct.")

driver.quit()
