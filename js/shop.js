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
function buyHeartItem () {
  let cookieClick = Number(localStorage.getItem('cookieClick')) || 0
  const heartItemPrice = 5

  if (cookieClick >= heartItemPrice) {
    cookieClick -= heartItemPrice
    localStorage.setItem('cookieClick', cookieClick)
    localStorage.setItem('boughtHeart', 'boughtItem')
    localStorage.setItem('cookieClickWithItem', '2')

    // save the bought item
    localStorage.setItem('boughtItem', 'heart-cookie')

    // update the number of cookies left
    document.getElementById('number-of-cookies').innerHTML = cookieClick + ' Cookies'

    alert('You bought the Heart Cookie!')
    location.reload()
  } else {
    alert('Not enough cookies to buy this item.')
  }
}

// eslint-disable-next-line no-unused-vars
function buyStarItem () {
  let cookieClick = Number(localStorage.getItem('cookieClick')) || 0
  const starItemPrice = 10

  if (cookieClick >= starItemPrice) {
    cookieClick -= starItemPrice
    localStorage.setItem('cookieClick', cookieClick)
    localStorage.setItem('boughtStar', 'boughtItem')
    localStorage.setItem('cookieClickWithItem', '5')

    // save the bought item
    localStorage.setItem('boughtItem', 'star-cookie')

    // update the number of cookies left
    document.getElementById('number-of-cookies').innerHTML = cookieClick + ' Cookies'

    alert('You bought the Star Cookie!')
    location.reload()
  } else {
    alert('Not enough cookies to buy this item.')
  }
}

// eslint-disable-next-line no-unused-vars
function buySunglassesItem () {
  let cookieClick = Number(localStorage.getItem('cookieClick')) || 0
  const sunglassesItemPrice = 15

  if (cookieClick >= sunglassesItemPrice) {
    cookieClick -= sunglassesItemPrice
    localStorage.setItem('cookieClick', cookieClick)
    localStorage.setItem('boughtSunglasses', 'boughtItem')
    localStorage.setItem('cookieClickWithItem', '10')

    // save the bought item
    localStorage.setItem('boughtItem', 'sunglasses-cookie')

    // update the number of cookies left
    document.getElementById('number-of-cookies').innerHTML = cookieClick + ' Cookies'

    alert('You bought the Sunglasses Cookie!')
    location.reload()
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

  if (heartItemBought === 'boughtItem') {
    heartItemImage.src = './images/bought-item.png'
  }
  if (starItemBought === 'boughtItem') {
    starItemImage.src = './images/bought-item.png'
  }
  if (sunglassesItemBought === 'boughtItem') {
    sunglassesItemImage.src = './images/bought-item.png'
  }
}
