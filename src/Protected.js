import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Auth } from "aws-amplify";
import { Container } from "./Container";

export const Protected = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(() => {
                setIsAuthorized(true);
            })
            .catch(() => {
                setIsAuthorized(false);
            });
    }, [isAuthorized]);

    console.log(isAuthorized);
    return isAuthorized
        ? (
            <Container>
                <h1>Protected route</h1>
            </Container>
        )
        : (
            <Redirect to="/profile" />
        )
}