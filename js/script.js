// Copyright (c) 2024 Mohammed EL-hayek All rights reserved
//
// Created by: Mohammed
// Created on: Apr 2024
// This file contains the JS functions for index.html

const randomNumberPos = Math.floor(Math.random() * 6) + 1
const randomNumberNeg = Math.floor(Math.random() * -6) + 1

/**
 * This function displays positive and negative number
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById("positive.").checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "Your number is: " + randomNumberPos + "."
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "Your number is: " + randomNumberNeg + "."
  }
}