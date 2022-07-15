/*
 * Created by ArduinoGetStarted.com
 *
 * This example code is in the public domain
 *
 * Tutorial page: https://arduinogetstarted.com/tutorials/arduino-button-piezo-buzzer
 *
 * The wire diagram refers to https://mrscrewdriver-blog.blogspot.com/2019/12/how-to-make-piano-with-buzzer-arduino.html
 * as we have 5 buttons.
 * 
 */

const int BUTTON_PIN8 = 8; // Arduino pin connected to button's pin
const int BUTTON_PIN7 = 7; // Arduino pin connected to button's pin
const int BUTTON_PIN6 = 6; // Arduino pin connected to button's pin
const int BUTTON_PIN5 = 5; // Arduino pin connected to button's pin
const int BUTTON_PIN4 = 4; // Arduino pin connected to button's pin
const int BUZZER_PIN = 13; // Arduino pin connected to Buzzer's pin

void setup() {
  Serial.begin(9600);                // initialize serial
  pinMode(BUTTON_PIN8, INPUT_PULLUP); // set arduino pin to input pull-up mode
  pinMode(BUTTON_PIN7, INPUT_PULLUP);
  pinMode(BUTTON_PIN6, INPUT_PULLUP);
  pinMode(BUTTON_PIN5, INPUT_PULLUP);
  pinMode(BUTTON_PIN4, INPUT_PULLUP);
  pinMode(BUZZER_PIN, OUTPUT);       // set arduino pin to output mode
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN8); // read new state
  if (buttonState == LOW) {
    Serial.println("The button 8 is being pressed");
    tone(BUZZER_PIN, 100.000, 100);  // sends a frequency of 500Hz
  }

  buttonState = digitalRead(BUTTON_PIN7); // read new state
  if (buttonState == LOW) {
    Serial.println("The button 7 is being pressed");
    tone(BUZZER_PIN, 293.000, 100);  // sends a frequency of 500Hz
  }
  
   buttonState = digitalRead(BUTTON_PIN6); // read new state
  if (buttonState == LOW) {
    Serial.println("The button 6 is being pressed");
    tone(BUZZER_PIN, 685.000, 100);  // sends a frequency of 500Hz
  }
  
   buttonState = digitalRead(BUTTON_PIN5); // read new state
  if (buttonState == LOW) {
    Serial.println("The button 5 is being pressed");
    tone(BUZZER_PIN, 1396.000, 100);  // sends a frequency of 500Hz
  }
   buttonState = digitalRead(BUTTON_PIN4); // read new state
  if (buttonState == LOW) {
    Serial.println("The button 4 is being pressed");
    tone(BUZZER_PIN, 3135.000, 100);  // sends a frequency of 500Hz
  }
}
