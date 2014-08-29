## nLaunch

OSLauncher allows any firmware to run on some models of the Nspire. This opens the door for a native replacement firmware; a side effect is that it is possible to install a CAS version.

## PTTCopier

This is the forbidden fruit of TI-Nspire development. The holy grail of the thoughtless cheat and the bane of the dev community. So bad that it was nicknamed "Nspire Community Killer". It's name is PTTKiller.

**Push-to-Test** (PTT) is the TI-Nspire's equivalent of a memory clear on traditional graphing calculators. It also locks some advanced functions and makes documents inaccessible. An LED light tells educators that PTT is activated. It can only be turned off with another Nspire or a computer.

However, PTT is laughably insecure and extremely easy to beat. It still allows programs and files to be opened. With Ndless activated, all it takes is just moving a folder beforehand to defeat it.

To deter the knowledgeless cheat and stay on TI's good side, we only provide a description of such a tool, not a finished product. Like a guide to make a gun rather than the gun itself. You're going to have to be serious and learn Ndless programming before you can use PTTKiller.

### Method

Under PTT, it is still possible to run programs and documents; they just need to be transferred first. Under normal circumstances, a teacher would use a computer to send a useful document to the calculator. The document is therefore stored in the hidden `/exammode/` directory.

What a PTTKiller would do is copy a folder from normal documents to the exammode beforehand, without the use of a computer.

    // Moves the "ptt" folder to beat PTT
    rename("/documents/ptt", "/exammode/usr/ptt");

Oddly, functions in libraries don't work, whether PTTCopier is used or not. The first library will have functions working normally, but after that one is closed, no other library will have usable functions. However, all other programs and documents are unaffected.

### Extending

Of course, this is a bit basic. We do need some sort of GUI.
