import { useEffect, useState } from "react";

const FB_APP_ID = "1394399355836590";
const FB_GRAPH_VERSION = "v23.0";

/**
 * Loads the Facebook JS SDK once and initializes it.
 * Returns true once window.FB is ready to use.
 */
export default function useFacebookSdk() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (window.FB) {
            setReady(true);
            return;
        }

        window.fbAsyncInit = function () {
            window.FB.init({
                appId: FB_APP_ID,
                cookie: true,
                xfbml: false,
                version: FB_GRAPH_VERSION,
            });
            setReady(true);
        };

        if (!document.getElementById("facebook-jssdk")) {
            const script = document.createElement("script");
            script.id = "facebook-jssdk";
            script.src = "https://connect.facebook.net/en_US/sdk.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }
    }, []);

    return ready;
}
