import { useRef, useState } from "react";
import { useShoppingContext } from "../Store/Context";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  let { totalPrice, setCartItems } = useShoppingContext();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const landRef = useRef();
  const streetRef = useRef();
  const houseRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Your Order Of Rs: ${totalPrice} Has been successfully Placed At Street: ${streetRef.current.value}, House: ${houseRef.current.value}, Landmark: ${landRef.current.value}`
    );
    streetRef.current.value = "";
    houseRef.current.value = "";
    landRef.current.value = "";
    setCartItems([]);
    navigate("/order-success");
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            value="COD"
            checked={paymentMethod === "COD"}
            onChange={handlePaymentMethodChange}
            className="mr-2"
          />
          COD
        </label>
        <label>
          <input
            type="radio"
            value="Credit Card"
            checked={paymentMethod === "Credit Card"}
            onChange={handlePaymentMethodChange}
            className="mr-2"
          />
          Credit Card
        </label>
      </div>

      {paymentMethod === "COD" && (
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Enter your street</label>
            <input
              type="text"
              ref={streetRef}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Enter your house number</label>
            <input
              type="text"
              ref={houseRef}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Enter nearby landmark</label>
            <input
              type="text"
              ref={landRef}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      )}

      {paymentMethod === "Credit Card" && (
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Enter your card number</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Enter your card's expiry date</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Enter your CVV number</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      )}

      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Confirm Payment
      </button>
    </div>
  );
};

export default PaymentForm;