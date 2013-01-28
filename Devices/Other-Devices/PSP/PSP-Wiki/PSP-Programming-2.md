# Tutorial 2 - Variables

Welcome to the second C tutorial. In this tutorial, I'll be focusing on variables, which is the most important topic in programming, no matter what langugage. In this tutorial, I'll be introducing you to three types of variables that are common in C and C++ for all platforms, not just the PSP. 

So, start out by making a new folder in your cygwin directory and make your main.c and Makefile. Now, let's get going.

## The Required Statements

First, add your comments, includes, defines, and module info just like in the last tutorial.

    //Variable Example
    //(Date Here)
    
    #include <pspkernel.h>
    #include <pspdebug.h>
    #include <pspcallbacks.h>
    
    #define printf pspDebugScreenPrintf
    
    PSP_MODULE_INFO("Variables",0,1,1);

## Define our Variables

Now is the point where we define our variables. So, add this, even though you may not recognize anything.

    int number = 397;
    float decimal = 3.1415;
    char string[13] = "Hello World!";

OK, do you remember from the last tutorial that `int` stands for integer? Good, well, that's the type of variable we created. We created an integer with the name `number`. Note that you could have named these anything, not just what I put. An `int` variable type can hold numbers from `-32,768` to `32,768` or `2^15`. (In programming everything is based off of 2 because of binary code.) 

The next line, we created a `float` variable. A `float` is just like an `int` except that it can hold decimals. Our `float` variable is named `decimal` and is roughly equal to pi. 

And finally is our `char` variable or character. As the name suggests, it hold characters. Our `char` is name `string` and has the value of "Hello World!". The reason for the 13 is that we have to specify how many characters we are going to use. But you say, "Hey that string is only 12 characters long!". Well, yeah, it is. But you have to leave an extra space for a terminator. (You don't have to understand it, just always leave an extra space.) 

Now, do you understand all the stuff we just wrote? I hope so, because we're moving on.

### Initiate Debug Screen

Do you remember what we do next? That's OK, you won't remember until the 50th time. For now, put this.

    int main() {
	    pspDebugScreenInit();
	    pspDebugScreenClear()
	    SetupCallbacks();

### Display our Variables

Got all that? Now, we want to display our variables on the screen. If you put the variable name inside parentheses, it just prints the name, not the value. We use what's called a conversion character. So, let's print our variable `number`.

	printf("%i",number);

You're probably in your seat like, WHAT?!? OK, you know printf right? OK, good. The `%i` is our conversion character. 

It basically says this, "Hey, here I want to print a variable instead of a word". But, then the computer is like, "What variable do you want to print, there's so many of them?" Then, that's why you put the variable name after the comma. 

Do you understand now? Now, let's try the others.

	printf("\n %f",decimal);

We put an `f` instead of an `i` for `float`. `f` for `float` and `i` for `int`. See? But, you're wondering why we put the `\n` there. Well, that's what's called an escape sequence. The `\n` stands for a new line. If we didn't put that in there, it would print both variables on the same line, but instead, we told it to start a new line first. Now, the last one, no tricks this time. (Or is there?)

	printf("\n %s",string);

Now, why didn't we put `c` for `char`? Well, `%c` is for ONE character, while %s is for a sting, or many characters. Now I'm going to throw this in as an example to you.

	printf("\n %i %f %s Look I can add words in combination with the conversion characters!",number,decimal,string);

That time, we did the same thing as before, only all on the same line. Make sure to put the variables in the correct order after the comma. Now that I'm done confusing the hell out of you, let's finish.

### Finish up

	    sceKernelSleepThread();
	    return 0;
    }

Yeah! We're done. 

Now, compile the code using the makefile we created last tutorial. Just make sure to change the `TARGET` and `PSP_EBOOT_TITLE` lines to something that tickles your fancy. (Don't hesitate to go back if you've forgotten what to do.)

Once run on the PSP, you should see your beautiful variables printed on the screen. 

See you all next time. Happy Coding!