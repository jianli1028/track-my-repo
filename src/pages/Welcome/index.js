import React from 'react';
import FrontPageLogo from "../../images/GitHub-Logo.png"

const Welcome = () => (
    <>
    <h1>Check your repositories here</h1>
    <h3>The bootleg GitHub at your service</h3>
    <img style={{ maxHeight: "70vh", maxWidth: "80vw" }} src={FrontPageLogo} alt="GitHubLogo" />
    <br></br>
    <p>Made with a lot of effort by Andrew and Jianli, with love, we want to sleep.</p>

    </>
)

export default Welcome;