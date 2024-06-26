# rn-assignment5-1135857
# My-app

## Description
MyReactNativeApp is a mobile application built with React Native that facilitates financial management. It provides users with tools to view cards, perform money transactions, manage loans, and track transaction history. The app supports both light and dark themes for enhanced user experience.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screens](#screens)
  - [HomeScreen](#homescreen)
  - [MyCardsScreen](#mycardsscreen)
  - [SettingsScreen](#settingsscreen)
  - [StatisticsScreen](#statisticsscreen)
- [Components](#components)
  - [TransactionHistory](#transactionhistory)
  - [Header](#header)
  -   [ThemeContext](#themecontext)
- [Assets](#assets)

## Installation
1. Clone the repository:
    ```bash
   git clone https://github.com/schooltech1/rn-assignment5-1135857.git
    ```
2. Navigate to the project directory:
    ```bash
    cd my-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the React Native development server:
    ```bash
    npm start
    ```
2. Run on iOS:
    ```bash
    npx react-native run-ios
    ```
3. Run on Android:
    ```bash
    npx react-native run-android
    ```

## Features
- **Theming**: Supports light and dark themes.
- **Financial Actions**: Send, receive, loan, and top-up money.
- **Transaction History**: View past transactions with details.
- **Navigation**: Bottom tab navigation for easy access to different screens.

## Screens

### HomeScreen
Displays an overview of the user's financial activities, including a card image, action buttons (Send, Receive, Loan, Topup), and a transaction history.

### MyCardsScreen
Shows the user's cards with support for theme-based styling.

### SettingsScreen
Allows the user to toggle the theme, change language settings, and access other options like profile and contact information.

### StatisticsScreen
Presents various financial statistics and supports theme-based styling.

## Components

### TransactionHistory
Displays a list of transactions with details such as date, description, amount, and an icon indicating the type of transaction.

### Header
Displays the app's header with the title and other relevant information.


## ThemeContext
The `ThemeContext` provides the current theme (light or dark) to all components in the app, allowing for consistent theming throughout.

## Assets
The `assets` directory contains images used in the app, including icons for actions and navigation, and images for cards.

## Screenshots

![Screenshot (20)](https://github.com/schooltech1/rn-assignment5-1135857/assets/170237696/9e78ffca-d255-4f6e-b16c-65ba39ebcb8f)
![Screenshot (21)](https://github.com/schooltech1/rn-assignment5-1135857/assets/170237696/4e921af1-77de-40ce-b925-e5083dc7ba73)
![Screenshot (22)](https://github.com/schooltech1/rn-assignment5-1135857/assets/170237696/f4f01afc-8330-4b84-ae64-0c9321a35ae9)
![Screenshot (23)](https://github.com/schooltech1/rn-assignment5-1135857/assets/170237696/c8175044-45c6-4b63-bd0a-25839a8835c0)
