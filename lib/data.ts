export const popularTools = [
  {
    name: "ChatGPT",
    description: "Advanced language model for natural conversations and content generation",
    image: "https://images.unsplash.com/photo-1676299081847-c0326a0333d5?q=80&w=2070&auto=format&fit=crop",
    category: "Language AI",
    rating: 4.9,
    pricing: "Freemium"
  },
  {
    name: "Midjourney",
    description: "AI-powered image generation tool for creating stunning artwork",
    image: "https://images.unsplash.com/photo-1686191128892-3e72b544f6d0?q=80&w=2070&auto=format&fit=crop",
    category: "Image Generation",
    rating: 4.8,
    pricing: "Paid"
  },
  {
    name: "Copy.ai",
    description: "AI copywriting assistant for marketing and content creation",
    image: "https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=2070&auto=format&fit=crop",
    category: "Writing",
    rating: 4.7,
    pricing: "Free Trial"
  },
  {
    name: "Jasper",
    description: "AI content platform for creating blog posts, social media, and more",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    category: "Content Creation",
    rating: 4.8,
    pricing: "Premium"
  },
  {
    name: "Stable Diffusion",
    description: "Open-source image generation model for creating artistic visuals",
    image: "https://images.unsplash.com/photo-1684163761859-4b82e7c05f0e?q=80&w=2070&auto=format&fit=crop",
    category: "Image Generation",
    rating: 4.6,
    pricing: "Free"
  },
  {
    name: "Synthesia",
    description: "AI video creation platform for professional video content",
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2070&auto=format&fit=crop",
    category: "Video Creation",
    rating: 4.7,
    pricing: "Enterprise"
  }
];

export const featuredTools = [
  {
    name: "Claude 2",
    description: "Advanced AI assistant for research, analysis, and complex problem-solving",
    image: "https://images.unsplash.com/photo-1685094488371-a121f68f5322?q=80&w=2070&auto=format&fit=crop",
    category: "AI Assistant",
    rating: 4.9,
    pricing: "Premium"
  },
  {
    name: "Runway",
    description: "Professional AI video editing and generation platform",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop",
    category: "Video AI",
    rating: 4.8,
    pricing: "Pro"
  },
  {
    name: "Notion AI",
    description: "AI-powered workspace for notes, docs, and project management",
    image: "https://images.unsplash.com/photo-1686191128892-3e72b544f6d0?q=80&w=2070&auto=format&fit=crop",
    category: "Productivity",
    rating: 4.7,
    pricing: "Business"
  },
  {
    name: "Anthropic",
    description: "Constitutional AI for safe and ethical artificial intelligence",
    image: "https://images.unsplash.com/photo-1684163761859-4b82e7c05f0e?q=80&w=2070&auto=format&fit=crop",
    category: "AI Research",
    rating: 4.9,
    pricing: "Enterprise"
  },
  {
    name: "Hugging Face",
    description: "Open-source platform for machine learning models and datasets",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    category: "ML Platform",
    rating: 4.8,
    pricing: "Free/Pro"
  },
  {
    name: "Replicate",
    description: "Cloud platform for running machine learning models",
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2070&auto=format&fit=crop",
    category: "ML Infrastructure",
    rating: 4.7,
    pricing: "Usage-based"
  }
];

// Additional tools for the explore section
export const allTools = [
  ...popularTools,
  ...featuredTools,
  {
    name: "Dall-E 3",
    description: "Latest version of OpenAI's image generation model with enhanced capabilities",
    image: "https://images.unsplash.com/photo-1686191128892-3e72b544f6d0?q=80&w=2070&auto=format&fit=crop",
    category: "Image Generation",
    rating: 4.9,
    pricing: "Paid"
  },
  {
    name: "Whisper",
    description: "Advanced speech recognition model for accurate transcription",
    image: "https://images.unsplash.com/photo-1684163761859-4b82e7c05f0e?q=80&w=2070&auto=format&fit=crop",
    category: "Speech AI",
    rating: 4.7,
    pricing: "Free"
  },
  {
    name: "AutoGPT",
    description: "Autonomous AI agent for completing complex tasks",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    category: "AI Agent",
    rating: 4.6,
    pricing: "Open Source"
  }
];

export const categories = [
  "Language AI",
  "Image Generation",
  "Writing",
  "Content Creation",
  "Video Creation",
  "AI Assistant",
  "Video AI",
  "Productivity",
  "AI Research",
  "ML Platform",
  "ML Infrastructure",
  "Speech AI",
  "AI Agent"
];

export const pricingOptions = [
  "Free",
  "Freemium",
  "Paid",
  "Premium",
  "Enterprise",
  "Open Source",
  "Free Trial",
  "Usage-based"
];