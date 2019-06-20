import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataShareService {
  productList = [
    {
      id: "1",
      Name: "Grand Prime",
      Brand: "Samsung",
      Price: "12533",
      Color: "silver",
      desc:
        "A phone that captures the world, just the way you see it - that’s how you will describe your tryst with the Samsung Galaxy A7 smartphone whose 8 MP 120-degree Ultra Wide Lens pave the way for gorgeous, unrestricted wide-angle pictures.",
      Avatar:
        "https://rukminim1.flixcart.com/image/832/832/jmgmmq80/mobile/r/z/z/samsung-galaxy-a7-sm-a750fzkhins-original-imaf9d35udmkv2rg.jpeg?q=70",
      Seller: "Capgemini Retailer",
      qty: 1
    },
    {
      id: "2",
      Name: "iPhone 7",
      Brand: "Apple",
      Price: "35984",
      Color: "Black",
      desc:
        "Take your iPhone experience to the next level with iPhone 7. Featuring new camera systems, a better battery-life, an efficient processor and powerful stereo speakers, this smartphone will drastically enhance your iPhone experience.",
      Avatar:
        "https://rukminim1.flixcart.com/image/832/832/mobile/7/e/e/apple-iphone-7-na-original-imaemzee435f9gpu.jpeg?q=70",
      Seller: "CloudTail Retailer",
      qty: 1
    },
    {
      id: "3",
      Name: "Redmi Note Pro 6",
      Brand: "Redmi",
      Price: "25042",
      Color: "Red",
      desc:
        "Say hello to Redmi Note 6 Pro - Xiaomi's first smartphone that boasts an AI-powered quad-camera. Now enjoy a smart camera experience with the AI Scene Detection feature. It helps your camera understand what it is looking at and enhances the picture automatically.",
      Avatar:
        "https://rukminim1.flixcart.com/image/832/832/jog2nbk0/mobile/d/j/d/mi-redmi-e7t-na-original-imafazxhztrw9gnr.jpeg?q=70",
      Seller: "MIStore Retailer",
      qty: 1
    },
    {
      id: "4",
      Name: "Grand Prime",
      Brand: "Samsung",
      Price: "12533",
      Color: "silver",
      desc:
        "A phone that captures the world, just the way you see it - that’s how you will describe your tryst with the Samsung Galaxy A7 smartphone whose 8 MP 120-degree Ultra Wide Lens pave the way for gorgeous, unrestricted wide-angle pictures.",
      Avatar:
        "https://rukminim1.flixcart.com/image/832/832/jmgmmq80/mobile/r/z/z/samsung-galaxy-a7-sm-a750fzkhins-original-imaf9d35udmkv2rg.jpeg?q=70",
      Seller: "Capgemini Retailer",
      qty: 1
    },
    {
      id: "5",
      Name: "iPhone 7",
      Brand: "Apple",
      Price: "35984",
      Color: "Black",
      desc:
        "Take your iPhone experience to the next level with iPhone 7. Featuring new camera systems, a better battery-life, an efficient processor and powerful stereo speakers, this smartphone will drastically enhance your iPhone experience.",
      Avatar:
        "https://rukminim1.flixcart.com/image/832/832/mobile/7/e/e/apple-iphone-7-na-original-imaemzee435f9gpu.jpeg?q=70",
      Seller: "CloudTail Retailer",
      qty: 1
    },
    {
      id: "6",
      Name: "Redmi Note Pro 6",
      Brand: "Redmi",
      Price: "25042",
      Color: "Red",
      desc:
        "Say hello to Redmi Note 6 Pro - Xiaomi's first smartphone that boasts an AI-powered quad-camera. Now enjoy a smart camera experience with the AI Scene Detection feature. It helps your camera understand what it is looking at and enhances the picture automatically.",
      Avatar:
        "https://rukminim1.flixcart.com/image/832/832/jog2nbk0/mobile/d/j/d/mi-redmi-e7t-na-original-imafazxhztrw9gnr.jpeg?q=70",
      Seller: "MIStore Retailer",
      qty: 1
    },
    {
      id: "7",
      Name: "Grand Prime",
      Brand: "Samsung",
      Price: "12533",
      Color: "silver",
      desc:
        "A phone that captures the world, just the way you see it - that’s how you will describe your tryst with the Samsung Galaxy A7 smartphone whose 8 MP 120-degree Ultra Wide Lens pave the way for gorgeous, unrestricted wide-angle pictures.",
      Avatar:
        "https://rukminim1.flixcart.com/image/832/832/jmgmmq80/mobile/r/z/z/samsung-galaxy-a7-sm-a750fzkhins-original-imaf9d35udmkv2rg.jpeg?q=70",
      Seller: "Capgemini Retailer",
      qty: 1
    },
    {
      id: "8",
      Name: "iPhone 7",
      Brand: "Apple",
      Price: "35984",
      Color: "Black",
      desc:
        "Take your iPhone experience to the next level with iPhone 7. Featuring new camera systems, a better battery-life, an efficient processor and powerful stereo speakers, this smartphone will drastically enhance your iPhone experience.",
      Avatar:
        "https://rukminim1.flixcart.com/image/832/832/mobile/7/e/e/apple-iphone-7-na-original-imaemzee435f9gpu.jpeg?q=70",
      Seller: "CloudTail Retailer",
      qty: 1
    },
    {
      id: "9",
      Name: "Redmi Note Pro 6",
      Brand: "Redmi",
      Price: "25042",
      Color: "Red",
      desc:
        "Say hello to Redmi Note 6 Pro - Xiaomi's first smartphone that boasts an AI-powered quad-camera. Now enjoy a smart camera experience with the AI Scene Detection feature. It helps your camera understand what it is looking at and enhances the picture automatically.",
      Avatar:
        "https://rukminim1.flixcart.com/image/832/832/jog2nbk0/mobile/d/j/d/mi-redmi-e7t-na-original-imafazxhztrw9gnr.jpeg?q=70",
      Seller: "MIStore Retailer",
      qty: 1
    }
  ];

  searchBar: string = "";
  constructor() {}
}
