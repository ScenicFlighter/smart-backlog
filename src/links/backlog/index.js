/**
 * Backlog OAuth2
 */
import {
    urls
} from './config';
import BacklogClient from '../../config/backlog.config';

const BacklogApis = {
    // Authorize
    requestOAuthCode: () => {
        document.location = `${urls.oauth}?client_id=${BacklogClient.client_id}&redirect_url=${BacklogClient.redirect_uri}&response_type=code`;
    },
    // Request AccessToken
    requestAccessToken: async (code) => {
        const result = await fetch(urls.request_access_token, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                 grant_type: "authorization_code",
                 code,
                 redirect_url: BacklogClient.redirect_uri,
                 client_id: BacklogClient.client_id,
                 client_secret: BacklogClient.client_secret
            })
        });

        return await result.json();
    }
}

export default BacklogApis;
