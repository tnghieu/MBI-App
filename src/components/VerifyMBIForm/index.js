import React, { useState } from "react";
import { verifyMBI } from "../../API";

export default function VerifyMBIForm() {
    const [mbi, setMBI] = useState("");
    const [displayResults, setDisplayResults] = useState(false);
    const [validMBI, setValidMBI] = useState(false);
    const [prevMBI, setPrevMBI] = useState("");

    async function displayMBIVerification(event) {
        event.preventDefault();

        if (mbi.length === 0) {
            alert('MBI Verification Field cannot be empty');
            return;
        }

        if (prevMBI === mbi) {
            return;
        }

        await verifyMBI(mbi)
            .then((response) => {
                setValidMBI(response.isValidMBI);
                setDisplayResults(true);
                setPrevMBI(mbi);
            })
            .catch(error => {
                setDisplayResults(false);
                alert(`Failed to verify MBI: ${error.toString()}`)
            });
    }

    return (
        <div>
            <form onSubmit={displayMBIVerification}>
                <input placeholder="Enter a MBI to Validate" type="text" value={mbi} onChange={(text) => setMBI(text.target.value.toUpperCase())} />

                <button type="submit">
                    Verify
                </button>
            </form>

            {displayResults ? <p>{validMBI ? "Valid" : "Invalid"}</p> : null}
        </div>
    );
};