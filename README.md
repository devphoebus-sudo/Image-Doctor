# Image Doctor - Browser-Based Image Compression Tool

![Image Doctor Screenshot](./screenshot.png)

Image Doctor is a modern, browser-based image compression tool that allows users to reduce image file size without compromising quality. The tool features multilingual support, dark/light mode, and ad monetization integration.

## Features

- **Multiple Compression Methods**:
  - Compress by target file size
  - Compress by target resolution
  - Combined compression (size + resolution)
- **Multilingual Support**:
  - English, Spanish, French, German, Hindi
- **Theme Options**:
  - Light/dark mode with system preference detection
- **Privacy Focused**:
  - All processing happens in the browser
  - No image uploads to external servers
- **Ad Monetization**:
  - Vertical ad placements
  - Full-screen ad during compression
- **Responsive Design**:
  - Works on desktop, tablet, and mobile devices

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection (for AdSense)

### Installation
No installation required! Simply open `index.html` in your browser.

### Usage
1. Open `index.html` in your browser
2. Drag & drop an image or click to browse
3. Select compression settings:
   - Choose compression type (size, resolution, or both)
   - Adjust quality slider
   - Set target size/resolution as needed
4. Click "Compress Image"
5. View results and download compressed image

### Development
To modify or extend the project:

1. Clone the repository
2. Open files in any code editor
3. Modify HTML, CSS, or JavaScript as needed
4. Test changes by opening `index.html`

File structure:
```
├── index.html        # Main application
├── styles.css        # All styling
├── script.js         # Application logic
├── README.md         # This documentation
```

## Technologies Used
- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (ES6)
- Google AdSense for monetization

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Hosting

To host this website, you only need to:

1. **Replace AdSense IDs**:
   - Replace `ca-pub-XXXXXXXXXXXXXXXX` in `index.html` with your own AdSense publisher ID
   - Replace ad slot IDs (`1234567890`, `0987654321`, `1122334455`) with your own ad slot IDs

2. **Upload Files**:
   - Upload all files to any static web hosting service:
     - Netlify
     - Vercel
     - GitHub Pages
     - Firebase Hosting
     - AWS S3
   - No server-side processing required

3. **Verify AdSense** (if using):
   - Ensure your hosting domain is approved in your AdSense account
   - Verify ad code implementation through AdSense dashboard

## Contact
For support or inquiries, please contact [your-email@example.com]
