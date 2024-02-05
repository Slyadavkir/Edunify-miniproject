// app/pages/_app.tsx
import React from 'react';
import App, { AppContext, AppProps } from 'next/app';
import '../global.css'; // Import your global styles

// Custom App component to override the default behavior
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // You can add any additional logic or data fetching here

  return (
    <>
      {/* You can include a common layout or header/footer here */}
      <Component {...pageProps} />
      {/* You can include a common footer or other elements here */}
    </>
  );
};

export default MyApp;
