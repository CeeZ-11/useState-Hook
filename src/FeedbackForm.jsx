import { useState } from "react";

export default function FeedBackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  if (isSent) {
    return <h1>Thank You!</h1>;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
          alert(`Sending: "${message}"`);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
