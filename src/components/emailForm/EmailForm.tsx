import React, { useState } from "react";
import "./EmailForm.css";

const EmailForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setStatus("Please enter your email.");
            return;
        }

        // Placeholder for sending email via API
        console.log("Email submitted:", email, message);

        setStatus("Thank you! Your email has been submitted.");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="email-form-container">
            <h2 className="email-form-heading">Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubmit} className="email-form">
                <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    required
                />
                <input
                    placeholder="Optional message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="email-textarea"
                />
                <button type="submit" className="email-submit">
                    Submit
                </button>
            </form>
            {status && <p className="email-status">{status}</p>}
        </div>
    );
};

export default EmailForm;
