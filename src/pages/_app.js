import {useEffect} from "react";

import "../styles/main.css";
import {AuthContextProvider} from "../core/auth/AuthContext";

function MyApp({Component, pageProps}) {
    useEffect(() => {
        import("../../public/assets/js/bootstrap.bundle.min.js");
    });
    return (
        <AuthContextProvider>
            <Component {...pageProps} />;
        </AuthContextProvider>
    )
}

export default MyApp;
