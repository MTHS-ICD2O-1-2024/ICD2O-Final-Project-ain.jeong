// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: May 2025
// This file contains the JS functions for cookie clicker

'use strict'

/**
 * This function counts the number of clicking of cookie & all the functions happening in index.html
 */
// eslint-disable-next-line no-unused-vars
function cookieClick () {
  // input
  let cookieClick = Number(localStorage.getItem('cookieClick')) || 0
  const cookieClickWithItem = Number(localStorage.getItem('cookieClickWithItem')) || 1

  // process
  if (cookieClick != null) {
    cookieClick += cookieClickWithItem
  } else {
    cookieClick = 1
  }

  // save in local storage
  localStorage.setItem('cookieClick', cookieClick)

  // output
  document.getElementById('number-of-cookies').innerHTML = cookieClick + ' Cookies'
}

// wearing the bought items
window.onload = function () {
  const cookieImage = document.getElementById('cookie-image')
  const heartBought = localStorage.getItem('boughtHeart')
  const starBought = localStorage.getItem('boughtStar')
  const sunglassesBought = localStorage.getItem('boughtSunglasses')

  if (sunglassesBought === 'boughtItem') {
    cookieImage.src = './images/item-sunglasses.png'
  } else if (starBought === 'boughtItem') {
    cookieImage.src = './images/item-star.png'
  } else if (heartBought === 'boughtItem') {
    cookieImage.src = './images/item-heart.png'
  } else {
    cookieImage.src = './images/cookie.png'
  }
}
