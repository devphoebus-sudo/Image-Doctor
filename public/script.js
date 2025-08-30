// Global variables
let currentImage = null;
let originalImage = null;
let currentLanguage = 'en';
let currentTheme = 'light';
let adModal = document.getElementById('ad-modal');
let countdownElement = document.getElementById('countdown');
let skipAdBtn = document.getElementById('skip-ad-btn');
let adCountdown = null;

// Language translations
const translations = {
  en: {
    siteTitle: "Image Doctor",
    heroTitle: "Compress Images Online",
    heroDescription: "Reduce image file size without compromising quality. Free, fast, and secure browser-based tool.",
    uploadText: "Drag & drop your image here or click to browse",
    uploadSubtext: "Supports JPG, PNG, WEBP, GIF",
    browseBtn: "Browse Files",
    settingsTitle: "Compression Settings",
    compressionTypeLabel: "Compression Type",
    bothOption: "Both (Size & Resolution)",
    sizeOption: "By Size",
    resolutionOption: "By Resolution",
    targetSizeLabel: "Target Size (KB)",
    resolutionLabel: "Target Resolution",
    customResolutionOption: "Custom",
    widthLabel: "Width",
    heightLabel: "Height",
    qualityLabel: "Quality",
    compressText: "Compress Image",
    compressingText: "Compressing...",
    resultTitle: "Compressed Result",
    downloadBtn: "Download",
    resetBtn: "Compress Another",
    featuresTitle: "Features",
    featureSpeed: "Lightning Fast",
    featureSpeedDesc: "Compress images in milliseconds with our optimized algorithms.",
    featurePrivacy: "Privacy First",
    featurePrivacyDesc: "All processing happens in your browser. No uploads to servers.",
    featureMultilingual: "Multilingual",
    featureMultilingualDesc: "Available in multiple languages for global accessibility.",
    featureThemes: "Dark/Light Mode",
    featureThemesDesc: "Switch between themes based on your preference or system settings.",
    footerText: "© 2025 Image Doctor. All rights reserved.",
    privacyLink: "Privacy Policy",
    termsLink: "Terms of Service",
    originalSize: "Original:",
    dimensions: "Dimensions:",
    compressedSize: "Compressed:",
    savings: "Savings:"
  },
  es: {
    siteTitle: "Image Doctor",
    heroTitle: "Comprime Imágenes Online",
    heroDescription: "Reduce el tamaño del archivo de imagen sin comprometer la calidad. Herramienta gratuita, rápida y segura basada en navegador.",
    uploadText: "Arrastra y suelta tu imagen aquí o haz clic para buscar",
    uploadSubtext: "Compatible con JPG, PNG, WEBP, GIF",
    browseBtn: "Buscar Archivos",
    settingsTitle: "Configuración de Compresión",
    compressionTypeLabel: "Tipo de Compresión",
    bothOption: "Ambos (Tamaño y Resolución)",
    sizeOption: "Por Tamaño",
    resolutionOption: "Por Resolución",
    targetSizeLabel: "Tamaño Objetivo (KB)",
    resolutionLabel: "Resolución Objetivo",
    customResolutionOption: "Personalizado",
    widthLabel: "Ancho",
    heightLabel: "Alto",
    qualityLabel: "Calidad",
    compressText: "Comprimir Imagen",
    compressingText: "Comprimiendo...",
    resultTitle: "Resultado Comprimido",
    downloadBtn: "Descargar",
    resetBtn: "Comprimir Otra",
    featuresTitle: "Características",
    featureSpeed: "Ultra Rápido",
    featureSpeedDesc: "Comprime imágenes en milisegundos con nuestros algoritmos optimizados.",
    featurePrivacy: "Privacidad Primero",
    featurePrivacyDesc: "Todo el procesamiento ocurre en tu navegador. Sin cargas a servidores.",
    featureMultilingual: "Multilingüe",
    featureMultilingualDesc: "Disponible en múltiples idiomas para accesibilidad global.",
    featureThemes: "Modo Oscuro/Claro",
    featureThemesDesc: "Cambia entre temas según tu preferencia o configuración del sistema.",
    footerText: "© 2025 Image Doctor. Todos los derechos reservados.",
    privacyLink: "Política de Privacidad",
    termsLink: "Términos de Servicio",
    originalSize: "Original:",
    dimensions: "Dimensiones:",
    compressedSize: "Comprimido:",
    savings: "Ahorro:"
  },
  fr: {
    siteTitle: "Image Doctor",
    heroTitle: "Compressez des Images en Ligne",
    heroDescription: "Réduisez la taille des fichiers image sans compromettre la qualité. Outil gratuit, rapide et sécurisé basé sur le navigateur.",
    uploadText: "Glissez et déposez votre image ici ou cliquez pour parcourir",
    uploadSubtext: "Prend en charge JPG, PNG, WEBP, GIF",
    browseBtn: "Parcourir les Fichiers",
    settingsTitle: "Paramètres de Compression",
    compressionTypeLabel: "Type de Compression",
    bothOption: "Les Deux (Taille & Résolution)",
    sizeOption: "Par Taille",
    resolutionOption: "Par Résolution",
    targetSizeLabel: "Taille Cible (KB)",
    resolutionLabel: "Résolution Cible",
    customResolutionOption: "Personnalisé",
    widthLabel: "Largeur",
    heightLabel: "Hauteur",
    qualityLabel: "Qualité",
    compressText: "Compresser l'Image",
    compressingText: "Compression...",
    resultTitle: "Résultat Compressé",
    downloadBtn: "Télécharger",
    resetBtn: "Compresser une Autre",
    featuresTitle: "Fonctionnalités",
    featureSpeed: "Ultra Rapide",
    featureSpeedDesc: "Compressez des images en millisecondes avec nos algorithmes optimisés.",
    featurePrivacy: "Confidentialité d'Abord",
    featurePrivacyDesc: "Tout le traitement se fait dans votre navigateur. Aucun téléchargement vers les serveurs.",
    featureMultilingual: "Multilingue",
    featureMultilingualDesc: "Disponible en plusieurs langues pour un accès mondial.",
    featureThemes: "Mode Sombre/Clair",
    featureThemesDesc: "Basculez entre les thèmes selon vos préférences ou les paramètres du système.",
    footerText: "© 2025 Image Doctor. Tous droits réservés.",
    privacyLink: "Politique de Confidentialité",
    termsLink: "Conditions d'Utilisation",
    originalSize: "Original:",
    dimensions: "Dimensions:",
    compressedSize: "Compressé:",
    savings: "Économie:"
  },
  de: {
    siteTitle: "Image Doctor",
    heroTitle: "Bilder Online Komprimieren",
    heroDescription: "Reduzieren Sie die Bildgröße ohne Qualitätsverlust. Kostenlose, schnelle und sichere browserbasierte Lösung.",
    uploadText: "Ziehen Sie Ihr Bild hierher oder klicken Sie zum Durchsuchen",
    uploadSubtext: "Unterstützt JPG, PNG, WEBP, GIF",
    browseBtn: "Dateien Durchsuchen",
    settingsTitle: "Kompressionseinstellungen",
    compressionTypeLabel: "Kompressionstyp",
    bothOption: "Beides (Größe & Auflösung)",
    sizeOption: "Nach Größe",
    resolutionOption: "Nach Auflösung",
    targetSizeLabel: "Zielgröße (KB)",
    resolutionLabel: "Zielauflösung",
    customResolutionOption: "Benutzerdefiniert",
    widthLabel: "Breite",
    heightLabel: "Höhe",
    qualityLabel: "Qualität",
    compressText: "Bild Komprimieren",
    compressingText: "Komprimiere...",
    resultTitle: "Komprimiertes Ergebnis",
    downloadBtn: "Herunterladen",
    resetBtn: "Weiteres Komprimieren",
    featuresTitle: "Funktionen",
    featureSpeed: "Blitzschnell",
    featureSpeedDesc: "Komprimieren Sie Bilder in Millisekunden mit unseren optimierten Algorithmen.",
    featurePrivacy: "Datenschutz Zuerst",
    featurePrivacyDesc: "Die gesamte Verarbeitung erfolgt in Ihrem Browser. Kein Hochladen auf Server.",
    featureMultilingual: "Mehrsprachig",
    featureMultilingualDesc: "Verfügbar in mehreren Sprachen für globale Zugänglichkeit.",
    featureThemes: "Dunkel/Hell Modus",
    featureThemesDesc: "Wechseln Sie zwischen Themen basierend auf Ihren Vorlieben oder Systemeinstellungen.",
    footerText: "© 2025 Image Doctor. Alle Rechte vorbehalten.",
    privacyLink: "Datenschutzbestimmungen",
    termsLink: "Nutzungsbedingungen",
    originalSize: "Original:",
    dimensions: "Abmessungen:",
    compressedSize: "Komprimiert:",
    savings: "Ersparnis:"
  },
  hi: {
    siteTitle: "Image Doctor",
    heroTitle: "ऑनलाइन छवियाँ संपीड़ित करें",
    heroDescription: "गुणवत्ता को समझौता किए बिना छवि फ़ाइल का आकार कम करें। मुफ्त, तेज़ और सुरक्षित ब्राउज़र-आधारित उपकरण।",
    uploadText: "अपनी छवि को यहाँ खींचें और छोड़ें या ब्राउज़ करने के लिए क्लिक करें",
    uploadSubtext: "JPG, PNG, WEBP, GIF का समर्थन करता है",
    browseBtn: "फ़ाइलें ब्राउज़ करें",
    settingsTitle: "संपीड़न सेटिंग्स",
    compressionTypeLabel: "संपीड़न प्रकार",
    bothOption: "दोनों (आकार और रिज़ॉल्यूशन)",
    sizeOption: "आकार द्वारा",
    resolutionOption: "रिज़ॉल्यूशन द्वारा",
    targetSizeLabel: "लक्ष्य आकार (KB)",
    resolutionLabel: "लक्ष्य रिज़ॉल्यूशन",
    customResolutionOption: "कस्टम",
    widthLabel: "चौड़ाई",
    heightLabel: "ऊँचाई",
    qualityLabel: "गुणवत्ता",
    compressText: "छवि संपीड़ित करें",
    compressingText: "संपीड़न हो रहा है...",
    resultTitle: "संपीड़ित परिणाम",
    downloadBtn: "डाउनलोड करें",
    resetBtn: "एक और संपीड़ित करें",
    featuresTitle: "विशेषताएँ",
    featureSpeed: "तेज़ गति",
    featureSpeedDesc: "हमारे अनुकूलित एल्गोरिदम के साथ मिलीसेकंड में छवियाँ संपीड़ित करें।",
    featurePrivacy: "गोपनीयता पहले",
    featurePrivacyDesc: "सभी प्रसंस्करण आपके ब्राउज़र में होता है। सर्वर पर कोई अपलोड नहीं।",
    featureMultilingual: "बहुभाषी",
    featureMultilingualDesc: "वैश्विक पहुँच के लिए कई भाषाओं में उपलब्ध।",
    featureThemes: "डार्क/लाइट मोड",
    featureThemesDesc: "अपनी पसंद या सिस्टम सेटिंग्स के आधार पर थीम्स के बीच स्विच करें।",
    footerText: "© 2025 Image Doctor. सर्वाधिकार सुरक्षित।",
    privacyLink: "गोपनीयता नीति",
    termsLink: "सेवा की शर्तें",
    originalSize: "मूल:",
    dimensions: "आयाम:",
    compressedSize: "संपीड़ित:",
    savings: "बचत:"
  }
};

// DOM Elements
const elements = {
  // Header elements
  siteTitle: document.getElementById('site-title'),
  themeToggle: document.getElementById('theme-toggle'),
  languageSelector: document.getElementById('language-selector'),
  themeIcon: document.querySelector('.theme-icon'),
  
  // Hero elements
  heroTitle: document.getElementById('hero-title'),
  heroDescription: document.getElementById('hero-description'),
  
  // Upload area elements
  uploadArea: document.getElementById('upload-area'),
  fileInput: document.getElementById('file-input'),
  browseBtn: document.getElementById('browse-btn'),
  uploadText: document.getElementById('upload-text'),
  uploadSubtext: document.getElementById('upload-subtext'),
  
  // Compression controls
  compressionControls: document.getElementById('compression-controls'),
  imagePreview: document.getElementById('image-preview'),
  originalSizeValue: document.getElementById('original-size-value'),
  dimensionsValue: document.getElementById('dimensions-value'),
  
  // Settings elements
  settingsTitle: document.getElementById('settings-title'),
  compressionTypeLabel: document.getElementById('compression-type-label'),
  compressionType: document.getElementById('compression-type'),
  bothOption: document.getElementById('both-option'),
  sizeOption: document.getElementById('size-option'),
  resolutionOption: document.getElementById('resolution-option'),
  sizeSetting: document.getElementById('size-setting'),
  targetSizeLabel: document.getElementById('target-size-label'),
  targetSize: document.getElementById('target-size'),
  resolutionSetting: document.getElementById('resolution-setting'),
  resolutionLabel: document.getElementById('resolution-label'),
  targetResolution: document.getElementById('target-resolution'),
  customResolutionOption: document.getElementById('custom-resolution-option'),
  customResolutionSetting: document.getElementById('custom-resolution-setting'),
  widthLabel: document.getElementById('width-label'),
  heightLabel: document.getElementById('height-label'),
  customWidth: document.getElementById('custom-width'),
  customHeight: document.getElementById('custom-height'),
  qualityLabel: document.getElementById('quality-label'),
  quality: document.getElementById('quality'),
  qualityValue: document.getElementById('quality-value'),
  compressBtn: document.getElementById('compress-btn'),
  compressText: document.getElementById('compress-text'),
  compressingText: document.getElementById('compressing-text'),
  
  // Result elements
  resultContainer: document.getElementById('result-container'),
  resultTitle: document.getElementById('result-title'),
  resultPreview: document.getElementById('result-preview'),
  compressedSizeValue: document.getElementById('compressed-size-value'),
  savingsValue: document.getElementById('savings-value'),
  downloadBtn: document.getElementById('download-btn'),
  resetBtn: document.getElementById('reset-btn'),
  
  // Features elements
  featuresTitle: document.getElementById('features-title'),
  featureSpeed: document.getElementById('feature-speed'),
  featureSpeedDesc: document.getElementById('feature-speed-desc'),
  featurePrivacy: document.getElementById('feature-privacy'),
  featurePrivacyDesc: document.getElementById('feature-privacy-desc'),
  featureMultilingual: document.getElementById('feature-multilingual'),
  featureMultilingualDesc: document.getElementById('feature-multilingual-desc'),
  featureThemes: document.getElementById('feature-themes'),
  featureThemesDesc: document.getElementById('feature-themes-desc'),
  
  // Footer elements
  footerText: document.getElementById('footer-text'),
  privacyLink: document.getElementById('privacy-link'),
  termsLink: document.getElementById('terms-link')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  loadPreferences();
  updateLanguage();
  updateTheme();
  setupCompressionTypeListener();
}

// Set up event listeners
function setupEventListeners() {
  // Theme toggle
  elements.themeToggle.addEventListener('click', toggleTheme);
  
  // Skip ad button
  skipAdBtn.addEventListener('click', skipAd);
  
  // Language selector
  elements.languageSelector.addEventListener('change', function() {
    currentLanguage = this.value;
    localStorage.setItem('language', currentLanguage);
    updateLanguage();
  });
  
  // File upload
  elements.uploadArea.addEventListener('click', () => elements.fileInput.click());
  elements.browseBtn.addEventListener('click', () => elements.fileInput.click());
  elements.fileInput.addEventListener('change', handleFileSelect);
  
  // Drag and drop
  elements.uploadArea.addEventListener('dragover', handleDragOver);
  elements.uploadArea.addEventListener('drop', handleDrop);
  
  // Compression settings
  elements.compressionType.addEventListener('change', handleCompressionTypeChange);
  elements.targetResolution.addEventListener('change', handleResolutionChange);
  elements.quality.addEventListener('input', updateQualityValue);
  
  // Compression button
  elements.compressBtn.addEventListener('click', compressImage);
  
  // Result actions
  elements.downloadBtn.addEventListener('click', downloadCompressedImage);
  elements.resetBtn.addEventListener('click', resetCompressor);
  
  // Input validation
  elements.targetSize.addEventListener('input', validateInputs);
  elements.customWidth.addEventListener('input', validateInputs);
  elements.customHeight.addEventListener('input', validateInputs);
}

// Load user preferences
function loadPreferences() {
  // Load language preference
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
    elements.languageSelector.value = currentLanguage;
  }
  
  // Load theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    currentTheme = savedTheme;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    currentTheme = 'dark';
  }
}

// Update language translations
function updateLanguage() {
  const t = translations[currentLanguage];
  
  // Update all text elements
  elements.siteTitle.textContent = t.siteTitle;
  elements.heroTitle.textContent = t.heroTitle;
  elements.heroDescription.textContent = t.heroDescription;
  elements.uploadText.textContent = t.uploadText;
  elements.uploadSubtext.textContent = t.uploadSubtext;
  elements.browseBtn.textContent = t.browseBtn;
  elements.settingsTitle.textContent = t.settingsTitle;
  elements.compressionTypeLabel.textContent = t.compressionTypeLabel;
  elements.bothOption.textContent = t.bothOption;
  elements.sizeOption.textContent = t.sizeOption;
  elements.resolutionOption.textContent = t.resolutionOption;
  elements.targetSizeLabel.textContent = t.targetSizeLabel;
  elements.resolutionLabel.textContent = t.resolutionLabel;
  elements.customResolutionOption.textContent = t.customResolutionOption;
  elements.widthLabel.textContent = t.widthLabel;
  elements.heightLabel.textContent = t.heightLabel;
  elements.qualityLabel.textContent = t.qualityLabel;
  elements.compressText.textContent = t.compressText;
  elements.resultTitle.textContent = t.resultTitle;
  elements.downloadBtn.textContent = t.downloadBtn;
  elements.resetBtn.textContent = t.resetBtn;
  elements.featuresTitle.textContent = t.featuresTitle;
  elements.featureSpeed.textContent = t.featureSpeed;
  elements.featureSpeedDesc.textContent = t.featureSpeedDesc;
  elements.featurePrivacy.textContent = t.featurePrivacy;
  elements.featurePrivacyDesc.textContent = t.featurePrivacyDesc;
  elements.featureMultilingual.textContent = t.featureMultilingual;
  elements.featureMultilingualDesc.textContent = t.featureMultilingualDesc;
  elements.featureThemes.textContent = t.featureThemes;
  elements.featureThemesDesc.textContent = t.featureThemesDesc;
  elements.footerText.textContent = t.footerText;
  elements.privacyLink.textContent = t.privacyLink;
  elements.termsLink.textContent = t.termsLink;
  
  // Update placeholders
  elements.targetSize.placeholder = currentLanguage === 'hi' ? 'उदाहरण, 500' : 'e.g., 500';
  elements.customWidth.placeholder = currentLanguage === 'hi' ? 'चौड़ाई' : 'Width';
  elements.customHeight.placeholder = currentLanguage === 'hi' ? 'ऊँचाई' : 'Height';
}

// Theme management
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  updateTheme();
}

function updateTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  elements.themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

// File handling
function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file && file.type.match('image.*')) {
    processImageFile(file);
  }
}

function handleDragOver(e) {
  e.preventDefault();
  e.stopPropagation();
  elements.uploadArea.style.borderColor = 'var(--accent-primary)';
  elements.uploadArea.style.backgroundColor = 'var(--bg-tertiary)';
}

function handleDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  
  elements.uploadArea.style.borderColor = 'var(--border-color)';
  elements.uploadArea.style.backgroundColor = 'var(--bg-secondary)';
  
  const file = e.dataTransfer.files[0];
  if (file && file.type.match('image.*')) {
    processImageFile(file);
  }
}

function processImageFile(file) {
  const reader = new FileReader();
  
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      originalImage = img;
      currentImage = img;
      
      // Display image preview
      elements.imagePreview.src = e.target.result;
      
      // Update image info
      const fileSize = formatFileSize(file.size);
      elements.originalSizeValue.textContent = fileSize;
      elements.dimensionsValue.textContent = `${img.width} × ${img.height}`;
      
      // Show compression controls
      elements.uploadArea.style.display = 'none';
      elements.compressionControls.style.display = 'grid';
      
      // Enable compress button
      validateInputs();
    };
    img.src = e.target.result;
  };
  
  reader.readAsDataURL(file);
}

// Compression settings logic
function setupCompressionTypeListener() {
  // Show/hide settings based on initial selection
  handleCompressionTypeChange();
}

function handleCompressionTypeChange() {
  const type = elements.compressionType.value;
  
  // Hide all settings first
  elements.sizeSetting.style.display = 'none';
  elements.resolutionSetting.style.display = 'none';
  elements.customResolutionSetting.style.display = 'none';
  
  // Show relevant settings
  switch(type) {
    case 'size':
      elements.sizeSetting.style.display = 'block';
      break;
    case 'resolution':
      elements.resolutionSetting.style.display = 'block';
      handleResolutionChange();
      break;
    case 'both':
      elements.sizeSetting.style.display = 'block';
      elements.resolutionSetting.style.display = 'block';
      handleResolutionChange();
      break;
  }
  
  validateInputs();
}

function handleResolutionChange() {
  const resolution = elements.targetResolution.value;
  
  if (resolution === 'custom') {
    elements.customResolutionSetting.style.display = 'block';
  } else {
    elements.customResolutionSetting.style.display = 'none';
  }
  
  validateInputs();
}

function updateQualityValue() {
  elements.qualityValue.textContent = `${elements.quality.value}%`;
}

function validateInputs() {
  const type = elements.compressionType.value;
  let isValid = true;
  
  // Check if an image is loaded
  if (!currentImage) {
    isValid = false;
  }
  
  // Validate based on compression type
  switch(type) {
    case 'size':
      if (!elements.targetSize.value || elements.targetSize.value <= 0) {
        isValid = false;
      }
      break;
    case 'resolution':
      if (elements.targetResolution.value === 'custom') {
        if (!elements.customWidth.value || !elements.customHeight.value || 
            elements.customWidth.value <= 0 || elements.customHeight.value <= 0) {
          isValid = false;
        }
      }
      break;
    case 'both':
      if (!elements.targetSize.value || elements.targetSize.value <= 0) {
        isValid = false;
      }
      if (elements.targetResolution.value === 'custom') {
        if (!elements.customWidth.value || !elements.customHeight.value || 
            elements.customWidth.value <= 0 || elements.customHeight.value <= 0) {
          isValid = false;
        }
      }
      break;
  }
  
  elements.compressBtn.disabled = !isValid;
}

// Ad Modal
function showAd() {
  adModal.style.display = 'flex';
  let seconds = 10;
  
  countdownElement.textContent = seconds;
  
  adCountdown = setInterval(() => {
    seconds--;
    countdownElement.textContent = seconds;
    
    if (seconds <= 0) {
      clearInterval(adCountdown);
      adModal.style.display = 'none';
      startCompression();
    }
  }, 1000);
}

function skipAd() {
  clearInterval(adCountdown);
  adModal.style.display = 'none';
  startCompression();
}

function startCompression() {
  // Simulate compression processing
  setTimeout(() => {
    // In a real implementation, we would compress the image here
    // For this demo, we'll just show the result UI
    
    // For demonstration purposes, let's calculate some fake compression results
    const originalSize = parseFloat(elements.originalSizeValue.textContent);
    const compressedSize = originalSize * (0.3 + Math.random() * 0.4); // 30-70% of original
    const savings = originalSize - compressedSize;
    
    // Update result display
    elements.resultPreview.src = elements.imagePreview.src;
    elements.compressedSizeValue.textContent = formatFileSize(compressedSize * 1024); // Convert back to bytes
    elements.savingsValue.textContent = `${((savings / originalSize) * 100).toFixed(1)}%`;
    
    // Show result container
    elements.resultContainer.style.display = 'block';
    
    // Reset button state
    elements.compressText.style.display = 'inline';
    elements.compressingText.style.display = 'none';
    elements.compressBtn.disabled = false;
    
    // Scroll to results
    elements.resultContainer.scrollIntoView({ behavior: 'smooth' });
  }, 1500);
}

// Image compression
function compressImage() {
  if (!currentImage) return;
  
  // Show loading state
  elements.compressText.style.display = 'none';
  elements.compressingText.style.display = 'inline';
  elements.compressBtn.disabled = true;
  
  // Show ad
  showAd();
}

// Helper functions
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Result actions
function downloadCompressedImage() {
  // In a real implementation, this would download the compressed image
  // For this demo, we'll just show an alert
  alert(translations[currentLanguage].downloadBtn + ' ' + translations[currentLanguage].featureSpeedDesc);
}

function resetCompressor() {
  // Reset all state
  currentImage = null;
  originalImage = null;
  
  // Reset UI
  elements.fileInput.value = '';
  elements.uploadArea.style.display = 'block';
  elements.compressionControls.style.display = 'none';
  elements.resultContainer.style.display = 'none';
  
  // Reset form values
  elements.compressionType.value = 'both';
  elements.targetSize.value = '';
  elements.targetResolution.value = '1920x1080';
  elements.customWidth.value = '';
  elements.customHeight.value = '';
  elements.quality.value = 80;
  elements.qualityValue.textContent = '80%';
  
  // Reset settings visibility
  handleCompressionTypeChange();
}

// Progressive settings implementation
// The settings are already implemented to show/hide based on user selections
// This is handled in the handleCompressionTypeChange and handleResolutionChange functions
