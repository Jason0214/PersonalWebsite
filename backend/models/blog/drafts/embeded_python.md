# Cross Compile Embedded Python
brief guide on how to cross compile a C program using embedded python onto a linux based embed device.


### Save your life, Use Embed Python

Python is somewhat a glue language, it is easy to being embedded to almost all the popular languages. (*here 'embedded' means call python interpreting runtime inside another application*)

Making use of python library through embedded python instead of writting low level yourself can save a lot of effort. In that case, you can even use python `requests` as http lib for your C application.

### Use Embedded Python on Embed Device

>Some modern embedded devices have enough memory and a fast enough CPU to run a typical Linux-based environment, for example, and running CPython on such devices is mostly a matter of compilation (or cross-compilation) and tuning.

These moderns devices include **Raspberry Pi**, **Beagle Bone**, etc. On these devces, you only need to find out all the static libs python used and then easily cross compile your embedded python applications.

### Cross Compile Embedded Python C Program on Beagle Bone Green

Here I use an example of Beagle Bone Green which is arm architecture running debian.
![BBG](https://cdn.shopify.com/s/files/1/0735/0383/products/cc24c4c62bd73acd1dcc4ee7ad71b104.image.530x397_1024x1024.jpeg?v=1523787730)


There are three helpful tools to find out all the header files and static libs used by python:
- [pkg-config](https://linux.die.net/man/1/pkg-config): run `pkg-config --libs --cflags  python3` to find all the header files
- [ldd](http://man7.org/linux/man-pages/man1/ldd.1.html): run `ldd /usr/bin/python3.4` to find static libs (.so)
- [readelf](https://linux.die.net/man/1/readelf) print out symbols in a .so file


Use BBG as an example
- python header files are covered by `/usr/include/python3.4m/*` and `/usr/include/arm-linux-gnueabihf/python3.4m/`
- libs need to be shared to host are `/usr/lib/python3.4/config-3.4m-arm-linux-gnueabihf/libpython3.4*`, `/lib/arm-linux-gnueabihf/libz.so.1` and `/lib/arm-linux-gnueabihf/libexpat.so.1`.


Copy them to the NFS directory (assume it is already set up at `/mnt/remote/`)
``` bash
cp -r /usr/include/python3.4m/* /mnt/remote/python3.4/include
mkdir /mnt/remote/python3.4/include/arm-linux-gnueabihf/
cp -r /usr/include/arm-linux-gnueabihf/python3.4m /mnt/remote/python3.4/include/arm-linux-gnueabihf/

cp /usr/lib/python3.4/config-3.4m-arm-linux-gnueabihf/libpython3.4* /mnt/remote/python3.4/lib/
cp /lib/arm-linux-gnueabihf/libz.so.1  /mnt/remote/python3.4/lib/libz.so
cp /lib/arm-linux-gnueabihf/libexpat.so.1  /mnt/remote/python3.4/lib/libexpat.so
```

Make target python libs and headers accessible to CC
``` Makefile
...
# ~/foo/public is the NFS entry
IFLAGS=-I$(HOME)/foo/public/python3.4/include
LFLAGS=-L$(HOME)/foo/public/python3.4/lib
...
```

### Use pip Packages
You may also want to use pip packages in your embedded python application, note that python interpreter is triggerred barely in your C program (means pip package path is no longer automatically set as you run python in bash),  you need to call `PySys_SetPath()` to specify all the paths of python modules you want to access.
``` c
#define  PY_PACKAGE_PATH L"/usr/local/lib/python3.4/dist-packages"


wchar_t* wc_default_path = Py_GetPath();
size_t full_path_len = wcslen(wc_default_path) + 1 + wcslen(PY_PACKAGE_PATH) + 1;
wchar_t* wc_whole_path = (wchar_t*)malloc(sizeof(wchar_t) * full_path_len);
wcscpy(wc_whole_path, wc_default_path);
wcscat(wc_whole_path, L":");
wcscat(wc_whole_path, PY_PACKAGE_PATH);

PySys_SetPath(wc_whole_path)

```

### Be Aware of GIL
Most of the python implementation has a GIL. It also exists in embedded python, sometimes it quite annoying especially when you are using multi-threads. If you encounter it, here is a [thread](https://stackoverflow.com/questions/15470367/pyeval-initthreads-in-python-3-how-when-to-call-it-the-saga-continues-ad-naus/15471525#15471525) you may be interested in.

#### Reference
[1]https://wiki.python.org/moin/EmbeddedPython
[2]https://stackoverflow.com/questions/48703423/cython-compile-a-standalone-static-executable
[3]https://stackoverflow.com/questions/34732/how-do-i-list-the-symbols-in-a-so-file
[4]https://stackoverflow.com/questions/15470367/pyeval-initthreads-in-python-3-how-when-to-call-it-the-saga-continues-ad-naus/15471525#15471525
