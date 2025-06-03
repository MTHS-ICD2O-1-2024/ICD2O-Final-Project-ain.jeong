// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: May 2025
// This file contains the JS functions for the shop

'use strict'

/**
 * This function manages all the functions happening in the shop
 */
// eslint-disable-next-line no-unused-vars

// buy the heart item
function buyHeartItem () {
  let cookieClick = Number(localStorage.getItem('cookieClick'))
  const heartItemPrice = 5

  if (cookieClick >= heartItemPrice) {
    cookieClick -= heartItemPrice
    localStorage.setItem('cookieClick', cookieClick)
    localStorage.setItem('boughtHeart', 'bought')

    // save the bought item
    localStorage.setItem('boughtItem', 'heart-cookie')

    // update the number of cookies left
    document.getElementById('number-of-cookies').innerHTML = cookieClick + ' Cookies'

    alert('You bought the Heart Cookie!')
  } else {
    alert('Not enough cookies to buy this item.')
  }
}

// buy the star items
function buyStarItem () {
  let cookieClick = Number(localStorage.getItem('cookieClick'))
  const starItemPrice = 10

  if (cookieClick >= starItemPrice) {
    cookieClick -= starItemPrice
    localStorage.setItem('cookieClick', cookieClick)
    localStorage.setItem('boughtStar', 'bought')

    // save the bought item
    localStorage.setItem('boughtItem', 'star-cookie')

    // update the number of cookies left
    document.getElementById('number-of-cookies').innerHTML = cookieClick + ' Cookies'

    alert('You bought the Star Cookie!')
  } else {
    alert('Not enough cookies to buy this item.')
  }
}

// buy the sunglasses items
function buySunglassesItem () {
  let cookieClick = Number(localStorage.getItem('cookieClick'))
  const sunglassesItemPrice = 15

  if (cookieClick >= sunglassesItemPrice) {
    cookieClick -= sunglassesItemPrice
    localStorage.setItem('cookieClick', cookieClick)
    localStorage.setItem('boughtSunglasses', 'bought')

    // save the bought item
    localStorage.setItem('boughtItem', 'sunglasses-cookie')

    // update the number of cookies left
    document.getElementById('number-of-cookies').innerHTML = cookieClick + ' Cookies'

    alert('You bought the Sunglasses Cookie!')
  } else {
    alert('Not enough cookies to buy this item.')
  }
}

window.onload = function () {
  // showing the number of cookies
  const cookieClick = localStorage.getItem('cookieClick')
  document.getElementById('number-of-cookies').innerHTML = cookieClick + ' Cookies'

  // update bought items images
  const heartItemImage = document.getElementById('item-heart-image')
  const starItemImage = document.getElementById('item-star-image')
  const sunglassesItemImage = document.getElementById('item-sunglasses-image')

  const heartItemBought = localStorage.getItem('boughtHeart')
  const starItemBought = localStorage.getItem('boughtStar')
  const sunglassesItemBought = localStorage.getItem('boughtSunglasses')

  if (heartItemBought === 'bought') {
    heartItemImage.src = './images/bought-item.png'
  }
  if (starItemBought === 'bought') {
    starItemImage.src = './images/bought-item.png'
  }
  if (sunglassesItemBought === 'bought') {
    sunglassesItemImage.src = './images/bought-item.png'
  }
}
