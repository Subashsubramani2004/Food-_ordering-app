import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
      }}
    >
      <h1>🎉 Order Placed Successfully!</h1>

      <p>Thank you for your order.</p>

      <p>Your food is being prepared.</p>

      <Link to="/">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Back to Menu
        </button>
      </Link>
    </div>
  );
}

export default OrderSuccess;