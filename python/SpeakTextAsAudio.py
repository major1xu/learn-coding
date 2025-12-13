import pyttsx3
# https://x.com/clcoding/status/1991003892428255539 
# source code: clcoding.com
engine = pyttsx3.init()
msg = input("Enter text to speak: ")
speed = int(input("speed (100-300): "))

engine.setProperty("rate", speed)
enging.say(msg)
engine.runAndWait()
