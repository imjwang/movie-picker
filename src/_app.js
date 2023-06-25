import Sidebar from './src/components/Sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;