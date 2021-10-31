import React, { useState } from 'react';
import { generateMBI } from '../../API';

export default function GenerateMBIButton() {
    const [mbi, setMBI] = useState("");
    const [displayResults, setDisplayResults] = useState(false);

    async function displayMBI() {
        await generateMBI()
            .then((response) => {
                setMBI(response.mbi);
                setDisplayResults(true)
            })
            .catch(error => {
                alert(`Failed to Generate MBI: ${error.toString()}`);
            });
    }

    return (
        <div>
            <div>
                {displayResults ? mbi : null}
            </div>
            <div>
                <button onClick={displayMBI}>
                    Generate MBI
                </button>
            </div>
        </div>
    );
};
