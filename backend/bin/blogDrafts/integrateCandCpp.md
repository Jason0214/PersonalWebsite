# link cpp lib to c application
runtime link a lib compiled with g++ to a gcc compiled application

### Why needed?
Someone may argue it is useless, why not use g++ to compile everything? Well, remember g++ and gcc have different behaviour on C code, for example g++ would treat string literal as `std:string`, while gcc treat it as `const char*`. Therefore, sometimes use g++ to compile prewritten c code would break it.

### Steps to do it
1. Compile Cpp code to .so
``` Makefile
CXX=g++
CXXFLAGS=-fPIC -Wall -g -std=c++11 -D _POSIX_C_SOURCE=200809L
TARGET=libhello.so

%.o:%.cpp
	$(CXX) -c $(CXXFLAGS) -o $@ $<

$(TARGET): $(OBJ)
	$(CXX) -shared -o $(TARGET) $(OBJ) -static-libstdc++
```

2. link .so in compilation
3. set `LD_LIBRARY_PATH` to .so path in runtime

### Reference
[1]https://stackoverflow.com/questions/14917952/can-i-use-shared-library-created-in-c-in-a-c-program
