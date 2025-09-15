import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Gvb3aKgmA9V45EsQf67vl6hLGzRavOOS0uX7ixvp8rr8oWBjKOJJyOGyeqXFIZUxUZw5Du7XiM1Q3ggmg4Ewa5u00RsOvuJVk';

    const onToken = token => {
        alert('Payment Succesful');
    }

    return (
        <StripCheckout
            label = 'Pay Now'
            name = 'Maximus Games Ltd'
            billingAddress
            shippingAddress
            image = ''
            description = {`Your total price is INR ${price}`}
            currency = 'INR'
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripCheckoutButton;