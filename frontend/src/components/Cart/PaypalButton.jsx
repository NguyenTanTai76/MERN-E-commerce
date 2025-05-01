import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AfYcaWMi72B2iBabV6rEi1CDQ_znbUXQJ-7Fpp_gx8MKrlDjBgUMVz-Ehf4h14W7vTsmOAHlS3UaDFQa",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
