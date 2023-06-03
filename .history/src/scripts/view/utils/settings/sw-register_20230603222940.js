// import { register } from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
    if ('serviceWorker' in navigator) {
      await register();
      return;
    }
    console.log('Service worker not supported in this browser');
  };
  
  export default swRegister;