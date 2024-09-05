import React, { useState } from 'react';

const ScreenshotApi = ({ toggleComponent }) => {
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [screenshotUrl, setScreenshotUrl] = useState(null); // To store the screenshot URL

    const handleInputChange = (event) => setWebsiteUrl(event.target.value);

    const onHitUrl = async () => {
        if (!websiteUrl) {
            alert("Please enter a valid website URL!");
            return;
        }

        const encodedUrl = encodeURIComponent(websiteUrl);
        const apiUrl = `https://shot.screenshotapi.net/screenshot?token=CZFWT3W-HFJ4PSS-M2B50VF-7RKZV9T&url=${encodedUrl}&output=image&file_type=png&wait_for_event=load`;

        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                setScreenshotUrl(apiUrl);
            } else {
                console.error("Failed to capture screenshot");
            }
        } catch (error) {
            console.error("Error while fetching the screenshot:", error);
        }
    };

    return (
        <div className='ScreenshotWrapper'>
            <div className='inputWrapper'>
                <input
                    type="text"
                    placeholder="Enter website URL"
                    value={websiteUrl}
                    onChange={handleInputChange}
                />
                <button onClick={onHitUrl}>SCREENSHOT</button>
            </div>

            <div className='screenshotDisplay'>
                {screenshotUrl && (
                    <img src={screenshotUrl} alt="Website Screenshot" style={{ maxWidth: '70%' }} />
                )}
            </div>
        </div>
    );
};

export default ScreenshotApi;
