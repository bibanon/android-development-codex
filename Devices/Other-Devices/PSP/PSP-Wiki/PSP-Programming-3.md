We've done some programming for the PSP by now, but it's a little boring. I mean, to make a GAME you need user interaction. So, let's add that. In this tutorials we'll cover button input, and two fundamental aspects of programming, loops and if statements. So let's get started. Add the stuff that you know already. But add one extra include.



[CODE]//Button Input Example
//December 3, 2007
 
#include <pspdebug.h>
#include <pspkernel.h>
#include <pspcallbacks.h>
#include <pspctrl.h>
#define printf pspDebugScreenPrintf
 
PSP_MODULE_INFO("Button Input",0,1,1);[/CODE]


Now, in case you couldn't guess, the extra include is for button input. Ctrl standing for control. Now, let's start our main loop.



[CODE]int main() {
	pspDebugScreenInit();
	pspDebugScreenClear();
	SetupCallbacks();
	SceCtrlData pad;[/CODE]

   
Understand all that? No, of course not. Let me explain. 'SceCtrlData' is no differe nt from 'int', 'float' or 'char'. They're ALL variable types. So we just created a variable named 'pad' with the type of 'SceCtrlData'. We didn't give it a value, because it will be assigned later. Now, let's put in a new concept, loops.
   


[CODE]	while(1) {[/CODE]

   
Now, one thing you should recognize is the starting curly bracket. Which means we're starting a new block of code. But, what exactly does a loop do. Well, a loop happens over and over again, just like a real loop (circle). So it starts at the starting curly bracket and executes all of the code until the ending curly bracket. When it hits the end, it goes back to the beginning and starts again. Now, let me explain the '1' now. Anything you put in the parentheses is compared to the number 1, and as long as it's equal to one, the loop continues. So, take this for example.

   int var = 1;
   while(var) {
   
The PSP would compare 1 to var. So if var is equal to 1, it'll continue, if it's not equal to 1, the loop will stop. Get it? Good. Now, some more new code.


[CODE]
		sceCtrlPeekBufferPositive(&pad, 1);[/CODE]

      
What this does, every time the loop starts again (a few hundred times per second) it will read the PSP buttons. And it stores the button pressed inside of 'pad' our variable that we made a little while ago. So if you press up, then 'pad' will be equal to 'up'. Now, some MORE new code.



[CODE]		if (pad.Buttons & PSP_CTRL_UP) {
			printf("You pressed Up\n");
		}[/CODE]

      
Now, this shouldn't be too hard to understand. Remember how every loop, the button we press gets stored into 'pad'? Well, now, we're using that variable. If the button we press is UP, then it will print that text. Notice how the 'if' statement has curly brackets too. This shouldn't too hard to understand. Let's do one more.



[CODE]		if (pad.Buttons & PSP_CTRL_DOWN) {
			printf("You pressed Down\n");
		}[/CODE]
 

Get it? Now, let's throw in some change.


[CODE]
		if (pad.Buttons & PSP_CTRL_RIGHT) {	printf("You pressed Right\n"); }
		if (pad.Buttons & PSP_CTRL_LEFT)  { printf("You pressed Left\n"); }[/CODE]
 

Ooh, tricky. You can put it all on the same line. But this is only for short ones. For long ones, use multiple lines.


[CODE]		if (pad.Buttons & PSP_CTRL_CROSS) {
			printf("You pressed ");
			printf("Cross\n");
		}[/CODE]

      
It may seem like I'm tricking you, but I'm just showing you the way.



[CODE]		if (pad.Buttons & PSP_CTRL_CIRCLE)
			printf("You pressed Circle\n");
		if (pad.Buttons & PSP_CTRL_TRIANGLE)
			printf("You pressed Triangle\n");
		if (pad.Buttons & PSP_CTRL_SQUARE)
			printf("You pressed Square\n");[/CODE]

         
Now do you see all the different ways we can use it? They may come in handy. Anyway, here's the rest of the buttons.

RTRIGGER
LTRIGGER
HOME
SELECT
NOTE

Now, we do one last thing. First we put a closing bracket FOR THE LOOP.
  

[CODE]	}[/CODE]

   
Now, we put one FOR OUR MAIN FUNCTION. There's a difference.



[CODE]	return 0;
}[/CODE]


Don't forget the return value.

Now, you can use the same Makefile as before, just edit the title. Hopefully everything I wrote works. Since I'm PSPless, I can't test it. Let me know of any errors.
