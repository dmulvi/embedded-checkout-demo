import logo from './logo.svg';
import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui";
import './App.css';

function App() {
  const onEvent = (event) => {
    console.log(event);
  }
  
  return (
    <div className="App">
      <CrossmintPaymentElement
        clientId="e92a2623-86ca-4e18-96b7-bd151d67f515"
        environment="staging"
        recipient={{
          email: "danny@crossmint.io",
        }}
        currency="USD"
        locale="en_us"
        paymentMethod="fiat"
        uiConfig={{
          colors: {
                background: '#000814',
                backgroundSecondary: '#001D3D',
                backgroundTertiary: '#EEEEEE',
                textPrimary: '#FFFFFF',
                textSecondary: '#EEEEEE',
                accent: '#FFC300',
                danger: '#FFC300',
                textLink: '#FFC300'
            },
                        fontSizeBase: '0.91rem',
            spacingUnit: '0.274rem',
            borderRadius: '4px',
            fontWeightPrimary: '400',
            fontWeightSecondary: '500'
        }}
        mintConfig={{
          type: "erc-721",
          _quantity: "1",
          totalPrice: "0.001",
          // your custom minting arguments...
        }}
        whPassThroughArgs={{"test": "test string"}}
        onEvent={onEvent}
      /> 

      {/* <CrossmintPaymentElement
        clientId='c2f335ee-b339-4db4-bf16-f350f528b499'
        mintConfig={{ 'type': 'erc-721', 'totalPrice': '.001', 'amount': '1' }}
        environment='production'
        recipient={{
          email: 'veniamin@paella.dev',
        }}
        uiConfig={{
          fontSizeBase: '0.91rem',
          borderRadius: '0',
          fontWeightPrimary: '500',
          fontWeightSecondary: '600',
        }}
        onEvent={onEvent}
      />  */}
    </div>
  );
}

export default App;
