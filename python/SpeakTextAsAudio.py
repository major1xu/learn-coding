import pyttsx3

engine = pyttsx3.init()
msg = input("Enter text to speak: ")
speed = int(input("speed (100-300): "))

engine.setProperty("rate", speed)
enging.say(msg)
engine.runAndWait()
