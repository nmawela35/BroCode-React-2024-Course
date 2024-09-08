import { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("Chris");
  const [quantity, setQuantity] = useState(30);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("Debit");
  const [shipping, SetShipping] = useState("");

  // const handleShipping = (e) => {
  //   SetShipping(e.target.value)
  // };

  return (
    <div>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Name: {name}</p>

      <input
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        type="number"
      />
      <p>Quantity: {quantity}</p>

      <textarea
        placeholder="Comment here"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={(e) => setPayment(e.target.value)}>
        <option>Select an option</option>
        <option value="visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>{payment}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          onChange={(e)=> SetShipping(e.target.value)}
          checked={shipping === "Pick Up"}
        />
        Pick Up
      </label>
      <br></br>
      <label>
        <input
          type="radio"
          value="Delivery"
          onChange={(e)=> SetShipping(e.target.value)}
          checked={shipping === "Delivery"}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}
