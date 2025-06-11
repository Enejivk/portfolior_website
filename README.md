# Text Collector Chrome Extension

A Chrome extension that helps you collect, organize, and study text content from websites.

## Features

- Automatically detects when you highlight text with more than 500 words
- Provides a popup to easily save the highlighted text
- Organizes saved text by subject (AI categorization)
- Displays saved content in a beautiful card interface
- Expandable cards with summary, AI-generated questions, and answer sections
- Subject-based filtering and organization

## Development

This project uses:
- React for the UI components
- TypeScript for type safety
- Tailwind CSS for styling
- Vite for building

### Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Build the extension with `npm run build`

### Loading the Extension in Chrome

1. Build the extension with `npm run build`
2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the `dist` directory from this project
5. The extension should now be installed and ready to use

## Project Structure

- `src/` - React components and utilities
  - `components/` - UI components
  - `utils/` - Helper functions
  - `types.ts` - TypeScript type definitions
- `contentScript.js` - Script that runs on webpages to detect text selections
- `background.js` - Background script for the extension
- `public/` - Static assets like icons

## License

MIT