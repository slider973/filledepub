
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useAuthContext} from "../core/auth/AuthContext";

export const withAuth = (WrappedComponent) => {
    return (props) => {
        const {user} = useAuthContext();
        const router = useRouter();

        useEffect(() => {
            if (user == null) {
                router.push("/login");
            }
        }, [user]);

        return <WrappedComponent uid={user.uid}  {...props} />;
    };
};
