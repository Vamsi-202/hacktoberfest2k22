#include<iostream>
using namespace std;
int main()
{
    int n;
    cout<<"Enter a number to check whether it is odd or even: ";
    cin>>n;
    if(n==0)
    {
        cout<<"\nZero is neither EVEN nor ODD!";
    }
    else if(n%2==0)
    {
        cout<<"The number "<<n<<" is EVEN!";
    }
    else
    {
        cout<<"The number "<<n<<" is ODD!";
    }
    return 0;
}
