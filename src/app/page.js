"use client";

import {useState, useEffect} from "react";

async function fetchRandomCard() {
  const response = await
  fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
  
}
