import icon from "../images/cryptocurrency.png";
export const options = {
    key: 'rzp_test_PuIvwrP2D7FLip',
    amount: 1000*100,
    currency: 'INR',
    name: 'Cryptoverse',
    description: 'Add balance to your Wallet',
    handler: function(response) {
        console.log('payment done',response)
        return;
    },
    prefill: {
      email: 'k@admin.com',
    },
    notes: {
      address: '1234, NY,US'
    },
    theme: {
      color: '#0060bb'
    }
  };