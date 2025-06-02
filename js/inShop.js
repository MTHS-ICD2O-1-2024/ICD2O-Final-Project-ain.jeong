// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: May 2025
// This file contains the JS functions for the shop

'use strict'

/**
 * This function manages the shop
 */
// eslint-disable-next-line no-unused-vars

// showing the number of cookies
window.onload = function () {
  // input
  const cookieClick = localStorage.getItem('cookieClick')

  // output
  document.getElementById('number-of-cookies').innerHTML = cookieClick + ' Cookies'
}
