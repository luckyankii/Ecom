import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

function ActivationPage() {
  const { activation_token } = useParams(); // this is we got params
  const [error, setError] = useState(false);
  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/user/activation`, {
            activation_token,
          });
          console.log("res", res.data.token);
        } catch (err) {
          console.log("err", err);
          setError(true);
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p style={{ color: "red", fontSize: "20px" }}>Your Token is expired</p>
      ) : (
        <p style={{ color: "green", fontSize: "20px" }}>
          Your Account has Been created SuccessFully
        </p>
      )}
    </div>
  );
}

export default ActivationPage;

/*

 path="/activation/:activation_token"
 This is dynamic route for activation of user 
 
 */
