import Register 
const swRegister = async () => {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('.js');
        console.log('Service worker registration successful');
      } catch (e) {
        console.log('Service worker registration failed', e);
      }
    } else {
      console.log('Service worker not supported in this browser');
    }
  };
  
  export default swRegister;