# include <fstream>
# include <string>
# include <iostream>
# include <streambuf>

using namespace std;

int main()
{
    ofstream oFile;
    oFile.open("problem store.csv", ios::out | ios::trunc);
    
}