from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Path to your extension
extension_path = 'E:\GitHub\YT-Autoplay-Off'

# Set up Chrome options
chrome_options = Options()
chrome_options.add_argument(f'load-extension={extension_path}')

# Create a new Chrome WebDriver instance
driver = webdriver.Chrome()

try:
    # Navigate to a YouTube playlist
    driver.get("https://www.youtube.com/watch?v=jgyShFzdB_Q&list=PLway-ecGdR05uYnlYvwyY4hgXoyAteey4")

    # Wait for the page to load
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "content")))

    # Check if our script is injected
    script_injected = driver.execute_script("return typeof toggle_YT_Autoplay !== 'undefined'")
    print(f"Script injected: {script_injected}")

    # Check the initial autoplay status
    initial_autoplay = driver.execute_script("return document.querySelector('yt-playlist-manager').canAutoAdvance_")
    print(f"Initial autoplay status: {initial_autoplay}")

    # Simulate changing the autoplay preference
    driver.execute_script("""
    var event = new CustomEvent('checkboxStateChange', { detail: false });
    document.dispatchEvent(event);
    """)

    # Wait a bit for the change to take effect
    time.sleep(1)

    # Check the new autoplay status
    new_autoplay = driver.execute_script("return document.querySelector('yt-playlist-manager').canAutoAdvance_")
    print(f"New autoplay status: {new_autoplay}")

    # Assert that the autoplay status has changed
    assert initial_autoplay != new_autoplay, "Autoplay status did not change as expected"

    print("Test completed successfully!")

except Exception as e:
    print(f"Test failed: {str(e)}")

finally:
    # Close the browser
    driver.quit()