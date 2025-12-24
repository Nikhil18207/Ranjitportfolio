# 🎬 How to Add Your Own Videos to Your Portfolio

## 📁 Step 1: Organize Your Video Files

Create this folder structure in your project:

```
F:\Work Terminal\Ranjit Bro\
└── public/
    └── videos/
        ├── hero-background.mp4          # Main hero section video
        ├── hero-poster.jpg              # Poster image for hero video
        ├── thumbnails/                  # Folder for project thumbnails
        │   ├── project1.jpg
        │   ├── project2.jpg
        │   └── ...
        └── projects/                    # Folder for full project videos
            ├── project1.mp4
            ├── project2.mp4
            └── ...
```

---

## 🎥 Step 2: Add Hero Background Video

### Option A: Use Local Video File

1. **Put your video** in: `public/videos/hero-background.mp4`
2. **Put poster image** in: `public/videos/hero-poster.jpg`
3. **Edit** `src/components/sections/hero.tsx`:

```tsx
// Find these lines (around line 20-21):
const backgroundAsset = "https://slelguoygbfzlpylpxfs...";
const videoAsset = "https://cdn.pixabay.com/video...";

// Replace with:
const backgroundAsset = "/videos/hero-poster.jpg";
const videoAsset = "/videos/hero-background.mp4";
```

### Option B: Use YouTube/Vimeo Video

Upload your video to YouTube or Vimeo and use the embed URL.

---

## 📽️ Step 3: Add Portfolio Videos to Grid

Edit `src/components/sections/video-grid.tsx`:

### Replace the `videos` array (starting at line 10) with your own projects:

```tsx
const videos: VideoItem[] = [
  {
    title: "MNR MOTION SHOWREEL 2024",
    category: "SHOWREEL",
    image: "/videos/thumbnails/showreel-2024.jpg",
  },
  {
    title: "AI ADVERTISING CAMPAIGN",
    category: "COMMERCIAL",
    image: "/videos/thumbnails/ai-campaign.jpg",
  },
  {
    title: "BRAND FILM - TECH STARTUP",
    category: "CINEMATIC",
    image: "/videos/thumbnails/tech-startup.jpg",
  },
  {
    title: "PRODUCT LAUNCH VIDEO",
    category: "COMMERCIAL",
    image: "/videos/thumbnails/product-launch.jpg",
  },
  {
    title: "CORPORATE DOCUMENTARY",
    category: "NARRATIVE",
    image: "/videos/thumbnails/documentary.jpg",
  },
  {
    title: "SOCIAL MEDIA CAMPAIGN",
    category: "COMMERCIAL",
    image: "/videos/thumbnails/social-campaign.jpg",
  },
];
```

---

## 🎨 Step 4: Customize Categories

You can use any category names you want:
- `"SHOWREEL"`
- `"COMMERCIAL"`
- `"CINEMATIC"`
- `"NARRATIVE"`
- `"BRAND FILM"`
- `"AI ADVERTISING"`
- `"MUSIC VIDEO"`
- `"DOCUMENTARY"`

---

## 📸 Step 5: Create Video Thumbnails

### Recommended Thumbnail Specs:
- **Resolution**: 1920x1080 (16:9 aspect ratio)
- **Format**: JPG or PNG
- **File size**: Under 500KB for fast loading
- **Quality**: High quality but compressed

### How to Create Thumbnails:
1. **From Video**: Export a frame from your video editing software
2. **Custom Design**: Create in Photoshop/Figma
3. **Screenshot**: Take a screenshot of the best frame

---

## 🔗 Step 6: Add Video Links (Optional)

If you want videos to be clickable and play:

### Update the interface in `video-grid.tsx`:

```tsx
interface VideoItem {
  title: string;
  category: string;
  image: string;
  videoUrl?: string;    // Add this line
}
```

### Then add video URLs to your projects:

```tsx
const videos: VideoItem[] = [
  {
    title: "MNR MOTION SHOWREEL 2024",
    category: "SHOWREEL",
    image: "/videos/thumbnails/showreel-2024.jpg",
    videoUrl: "/videos/projects/showreel-2024.mp4",  // Add this
  },
  // ... more videos
];
```

---

## 🌐 Step 7: Using External URLs (YouTube, Vimeo, etc.)

You can also use external image and video URLs:

```tsx
const videos: VideoItem[] = [
  {
    title: "MY YOUTUBE VIDEO",
    category: "COMMERCIAL",
    image: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  },
];
```

---

## ⚡ Step 8: Optimize Your Videos

### For Best Performance:

1. **Compress videos** before uploading
   - Use HandBrake or Adobe Media Encoder
   - Target: H.264 codec, 1080p, 5-10 Mbps bitrate

2. **Recommended video specs**:
   - **Hero video**: 1920x1080, 10-20 seconds loop, under 10MB
   - **Project videos**: 1920x1080, any length, under 50MB

3. **Use poster images** to show before video loads

---

## 📝 Quick Example: Complete Setup

### 1. Create folders:
```
public/
  videos/
    hero-background.mp4
    hero-poster.jpg
    thumbnails/
      showreel.jpg
      commercial1.jpg
    projects/
      showreel.mp4
      commercial1.mp4
```

### 2. Update `hero.tsx`:
```tsx
const backgroundAsset = "/videos/hero-poster.jpg";
const videoAsset = "/videos/hero-background.mp4";
```

### 3. Update `video-grid.tsx`:
```tsx
const videos: VideoItem[] = [
  {
    title: "SHOWREEL 2024",
    category: "SHOWREEL",
    image: "/videos/thumbnails/showreel.jpg",
  },
  {
    title: "COMMERCIAL PROJECT",
    category: "COMMERCIAL",
    image: "/videos/thumbnails/commercial1.jpg",
  },
];
```

### 4. Save files and refresh browser!

---

## 🎯 Tips for Success

✅ **Keep file names simple**: Use lowercase, no spaces (use hyphens)
✅ **Optimize images**: Compress thumbnails for faster loading
✅ **Test locally**: Make sure videos play before deploying
✅ **Use consistent naming**: Makes it easier to manage files
✅ **Backup originals**: Keep high-quality originals separate

---

## 🚀 After Adding Videos

The changes will appear **instantly** in your browser (hot reload is enabled).

If videos don't show:
1. Check file paths are correct
2. Make sure files are in the `public` folder
3. Refresh the browser (Ctrl + R)
4. Check browser console for errors (F12)

---

## 📞 Need Help?

If you encounter issues:
1. Check the browser console (F12) for errors
2. Verify file paths match exactly
3. Make sure video formats are supported (MP4 recommended)
4. Ensure files are in the correct folders

---

**Happy video editing! 🎬✨**
