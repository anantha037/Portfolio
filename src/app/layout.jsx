import './globals.css';

export const metadata = {
  title: 'Anantha Krishnan K. | AI & ML Engineer',
  description: 'Portfolio of Anantha Krishnan K., an AI/ML Engineer specializing in LLMs, RAG, multi-agent orchestration, and production machine learning systems.',
  keywords: 'Anantha Krishnan K., Anantha Krishnan K, AI Engineer, ML Engineer, Machine Learning, Python, RAG, LangChain, Portfolio',
  authors: [{ name: 'Anantha Krishnan K.' }],
  creator: 'Anantha Krishnan K.',
  openGraph: {
    title: 'Anantha Krishnan K. | AI & ML Engineer',
    description: 'Portfolio of Anantha Krishnan K., an AI/ML Engineer specializing in LLMs, RAG, multi-agent orchestration, and production machine learning systems.',
    url: 'https://ananthakrishnan.com',
    siteName: 'Anantha Krishnan K. Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=JetBrains+Mono:wght@400&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#050510] min-h-screen text-[#F0F0FF] overflow-x-hidden selection:bg-[#6C63FF]/30">
        {children}
      </body>
    </html>
  );
}
