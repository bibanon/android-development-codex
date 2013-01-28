# Tutorial 1 - Hello World

This is a C programming tutorial for the PSP. In this tutorial, you will create your first program, one that will display "Hello World" on your PSP.

## Lesson Plan

1. Introduce the reader to some of the basic features of the C Programming Language.
2. Guide the reader through the required statements in a PSP C program.
3. Create a statement that prints "Hello World" on the PSP screen.
4. Show the reader the complete C program.
5. (NEW!) Explain the process of signing homebrew programs on the PSP.
6. Explain the process of a running the "Hello World" program on the PSP.

## Quick intro

This is a quick crash course in some of the features of the C Programming Language. 

### Comments

First in our code are comments. Comments are lines of code that ignored by the compiler, and they are used to explain what the code does.

    //Comments can go after two slashes, until the end of the line
    
    /*
    Or comments can take as many lines
    as you want, as long as they're between
    the star and asterisk.
    */

While some code might seem obvious to you today, it probably won't be in the future, or to other programmers. So always add a comment to explain what a code statement does. An important kind of comment is the title, which explains what the program does and who made it. 

### Directives

Next are directives, created with `#define`. These find certain sets of characters and replace them with others. 

Say you had a variable named `thisisareallylongvariablename`. But who wants to type all that out every time? Instead, this directive allows you to use a placeholder called `short`. Before the program is compiled, this code will replace `short` with `thisisareallylongvariablename`

    #define short thisisareallylongvariablename

Here, instead of typing `1000000000` in the code, we type `billion` as a placeholder.

    #define billion 1000000000



## Making the Program

Create a folder called `helloworld` . Inside that folder, create 2 files. `main.c` and `Makefile` . Note that `main.c` has a small m, and `Makefile` has no extension. 

Now, we're ready. Grab your text editor and open those files up. Let's start coding.

### Required for every PSP Program

These are statements that every PSP C program requires to run. Copy and paste or otherwise remember these statements.

Titles make it easy to identify what a file does and who made it. Open up your `main.c` file, and enter a title into `main.c` using comments:

    // <Title of Program>
    /*
      Created by <Your Name>
      On <Current Date>
    */

Next in our code are the header files. Header files contain code that is pre-written and abstracted into functions, so we don't have to put it in the main program. 

There are three header files that PSP programs need. Two are files for the PSP to use functions that we need for our program. The other is `pspcallbacks.h` , which will allow us to use the HOME button in our program. Enter this code.

    #include <pspkernel.h>
    #include <pspdebug.h>
    #include <pspcallbacks.h>

Now we enter this code to use `printf` as a placeholder for `pspDebugScreenPrintf`, a function that displays text on the PSP.

    #define printf pspDebugScreenPrintf

You will also need to use module info. Here we telling the PSP that the program is called "hello world" and to boot into user mode using the flag `0` .

    PSP_MODULE_INFO("hellowlord",0,1,1);

### The Main Function

Now, let's start coding. First, add this:

    int main()
    {

This statement marks the beginning of our main function. The `main` function is the very first function that the PSP runs.

{{Note|A function is a set of code that performs a task. The curly bracket '{' marks the start of the function.  Functions always have parentheses after them, but we'll get to that later.}}

`int` stands for integer. And an integer is a number. So, the type of function is an integer function. So, at the very end, we have to r	`eturn a number. Sounds difficult, but we'll get to it later. For now, add this.

	pspDebugScreenInit();
	pspDebugScreenClear();
	SetupCallbacks();

Now, what we just did was call three functions contained in the header files. The comments next to them explain what they do. The first will initiate the screen for displaying text in a "Debug Screen". The second will clear the screen. The third call comes from `pspcallbacks.h`, allowing us to use the HOME button.

{{Note|[On some other PSP tutorials](http://forums.pspslimhacks.com/threads/tutorial-helloworld-psp-programming.6345/), you would have to place the contents of the `pspcallbacks.h` header file inside the `main.c` file. We believe that it is better to keep them out of sight, especially for newcomers who can easily get confused and overwhelmed.}}

### Printing "Hello World"

Finally, we get to the true purpose of the program. We want to display the string (of text) "Hello World" on the PSP screen.

	printf("Hello World");

This statement passes the string (of text) `"Hello World"` to the function `printf` . The `printf` function then displays that string on the screen.

Next we make the program "sleep".

	sceKernelSleepThread();

Otherwise, the program would print the string, continue reading code, and when it ran out, it would exit. And this would all happen so fast, you wouldn't be able to see it. That's why we sleep the program. 

Now, let's finish.

	return 0;

Remember how the function type was integer, and that we were going to have to return a number? Well, we return `0`. C programs usually return `0` if they ran without problems.

Finally, place a curly bracket at the end:

    }
    

The curly bracket '}' marks the end of our main function. Just remember to put an empty line at the end, or the compiler will complain. 

Now our program should look like this. 

{{Note|Indentations are helpful, but are not explicitly necessary in C. This is because the semicolons seperate each statement.}}

    //Hello World Program
    /*
      Created by (Name)
      On (Date)
    */
 
    #include <pspkernel.h>
    #include <pspdebug.h>
    #include <pspcallbacks.h>
    
    #define printf pspDebugScreenPrintf
    
    PSP_MODULE_INFO("Name Of Program",0,1,1);
    
    int main()
    {
	pspDebugScreenInit();
	pspDebugScreenClear();
	SetupCallbacks();

	printf("Hello World");

	sceKernelSleepThread();
	return 0;
    }

You've just coded your first PSP program! Now we need to compile it.

### The Makefile

Now, you need one more thing. Your Makefile! This tells the compiler how to create the program. So, open up `Makefile` and edit it to say this. Read the comments, too:

{{Note|Makefiles use `#` to mark comments.}}

    TARGET = hello_world

    OBJS = main.o
    
    CFLAGS = -O2 -G0 -Wall
    CXXFLAGS = $(CFLAGS) -fno-exceptions -fno-rtti
    ASFLAGS = $(CFLAGS)
    
    EXTRA_TARGETS = EBOOT.PBP
    PSP_EBOOT_TITLE = Hello World
    
    PSPSDK=$(shell psp-config --pspsdk-path)
    include $(PSPSDK)/lib/build.mak

You can change the target to any name you want, but it CAN NOT have a space in it. We've used an underscore instead.

The `PSP_EBOOT_TITLE` is the name that appears in the XMB, so that can be anything. We'll explain the Makefile later. 

Now, let's compile.

So, open up the Cygwin batch file. Use the 'cd' function to change into your helloworld directory. 

Now, type `make`. (Or `make kxploit` if you're on 1.5, the oldest PSP version) That will compile your code into an EBOOT. 

{{Note|Although OFW 1.50 no longer used, you can also type `make kxploit` to create an EBOOT for OFW 1.50, the oldest PSP version.}}

If there's errors, check if there are typos in your code above. If there aren't any, Google the error and try to decipher them on your own.

### Signing Homebrew on a PSP

{{Note|With the release of Geohot's root signing keys, any PSP can run signed homebrew, so homebrew exploits are no longer necessary. All we need to do is sign it.}}

1. Download [PSCrypter Signed 2.0](http://filetrip.net/f25162-PSCrypter-2-0.html)
2. After downloading the compressed file, extract the 
`PSCRYPTER_v2.0_signed` folder to the `/PSP/Game/` Folder of your PSP.
3. Place the `EBOOT.PBP` file you want to sign in the `Sign` folder.
4. Disconnect your PSP from your computer, and on your PSP, go to Games, then open the Memory Card. Load "PSPCRYPTER", and wait until it goes back to the XMB Menu. 
5. Plug your PSP back into your computer, open up` /PSP/GAME/PSCRYPTER_v2.0_signed/sign` .
6. You will see your `EBOOT.PBP` file as `EBOOT_Signed.PBP` . 
7. Copy this file to a `hello_world` folder on your computer.
8. Rename `EBOOT_Signed.PBP` to `EBOOT.pbp`. Your program is now signed and ready for use.

### Starting the first program

Now that your homebrew is signed and ready to go, it's time to run it on the PSP.

1. Plug the PSP into your computer.
2. Move the entire folder `hello_world` folder containing your homebrew into `/PSP/GAME/` on the PSP.
3. Unplug the PSP and go the the "Games" section. Select "Memory Stick".
4. Find the "Hello World" program and run it.
5. If the PSP displays `Hello World` on the screen, you have succeeded in creating your first PSP program!

## Sources

* [Qj Forums - Access_Denied's Beginner C Programming Tutorials](http://forums.qj.net/psp-development-forum/158366-tut-beginner-c-programming-tutorials.html)
* [PSPSlimHacks - Hello World PSP Programmings](http://forums.pspslimhacks.com/threads/tutorial-helloworld-psp-programming.6345/)
* [GBATemp - How to run ISO/EBOOT.PBP without hacking](http://gbatemp.net/threads/how-to-run-iso-eboot-pbp-without-hacking.292817/)