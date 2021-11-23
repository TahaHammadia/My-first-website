import socket
import threading
from time import sleep

target = "192.168.1.24"
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
ports = [port for port in range(0, 65536)]
openPorts = []
def scan(port):
    try:
        s.connect((target, port))
        openPorts.append(port)
    except Exception as e:
        pass

def test_scan(port):
    try:
        s.connect((target, port))
        print("OPEN")
    except Exception as e:
        print(str(e))

for port in ports:
    t = threading.Thread(target = scan, args =[port])
    t.start()
print(openPorts)