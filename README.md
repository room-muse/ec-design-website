# Room Muse - B2B Landing Page

This is the landing page for Room Muse, an AI interior design company providing B2B services to furniture brands and retailers.

The original Figma design is available at https://www.figma.com/design/myUTA9W6ocOZHu7eqvpM6L/B2B-Furniture-Brand-Landing-Page.

## About Room Muse

Room Muse is an AI-powered interior design platform that helps furniture brands and retailers create shoppable room experiences. We enable customers to visualize furniture in their spaces before purchasing, increasing conversion rates and reducing returns.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS v4** for styling
- **Radix UI** components
- **Lucide React** for icons

## Getting Started

### Installation

Run `npm i` to install all dependencies.

### Development

Run `npm run dev` to start the development server. The site will be available at `http://localhost:3000`.

### Build

Run `npm run build` to create a production build in the `build` directory.

## Project Structure

- `/src/components` - React components
  - `/ui` - Reusable UI components (buttons, inputs, etc.)
  - Main page sections (Hero, Value, HowItWorks, Analytics, Integration, LeadForm, About, Footer)
- `/src/assets` - Image assets from Figma
- `/src/styles` - Global styles and Tailwind configuration

## Features

- Responsive design matching Figma specifications
- Lead capture form for B2B inquiries
- Smooth scrolling navigation
- Modern UI with gradient effects and animations

## Formspree Integration

The lead form is integrated with [Formspree](https://formspree.io/) to handle form submissions and store contact information.

### Setup Instructions

1. **Create a Formspree account** (free tier available):
   - Go to https://formspree.io/
   - Sign up for a free account
   - Create a new form

2. **Get your Formspree endpoint**:
   - After creating a form, you'll get an endpoint URL like: `https://formspree.io/f/YOUR_FORM_ID`
   - Copy this URL

3. **Configure the endpoint**:
   - Create a `.env` file in the root directory
   - Add your Formspree endpoint:
     ```
     VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
     ```
   - Replace `YOUR_FORM_ID` with your actual form ID

4. **Restart the dev server**:
   - Stop the current server (Ctrl+C)
   - Run `npm run dev` again to load the environment variable

### Formspree Features

- **Free tier**: 50 submissions/month
- **Email notifications**: Receive emails when forms are submitted
- **Spam protection**: Built-in spam filtering
- **Data storage**: View all submissions in your Formspree dashboard
- **Export data**: Download submissions as CSV

### Testing

1. Fill out the form on your site
2. Submit the form
3. Check your email for the notification
4. View the submission in your Formspree dashboard

## Notes

- The website is designed for demo and advertising purposes
- Form submissions are stored in your Formspree account
- All form data (name, email, company, website) is captured and saved