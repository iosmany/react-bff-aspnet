
import { useCallback, useState } from 'react';
import { Claims } from '../constants';
import useGetRequest from '@/hooks/useGetRequest';

/**
 * Custom hook to manage user data.
 *
 * @returns {[Claims[], boolean]} - Returns an array containing the user claims and the authentication status.
 *
 * @example
 * const [claims, isAuthenticated] = useUser();
 *
 * useEffect(() => {
 *   console.log(claims);
 * }, [claims]);
 *
 * @remarks
 * The `isAuthenticated` status can be one of the following:
 * - `true`: Indicates that the user is authenticated.
 * - `false`: Indicates that the user is not authenticated.
 */
const useUser = () => {

    const [get, loadingStatus] = useGetRequest<Claims>('/account/userr/slide=false');
    const [claims, setClaims] = useState<Claims[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useCallback(()=>{
        const requestClaims = async () => {
            const data = await get();
            if(data && data.length > 0){
                setClaims(data);
                setIsAuthenticated(true);
            }
        }
        requestClaims();
    }, [get])

    const userNameClaim = useCallback(()=> {
        return claims?.find(claim => claim.type === 'name')?.value;
    },[])

    const login = useCallback(() => {
        window.location.href = '/account/login';
    }, [])

    const logout = useCallback(() => {
        const logoutUrl: string | undefined = claims?.find(claim => claim.type === 'logout_url')?.value;
        if(logoutUrl) {
            /*
            changes the current URL to the new one without creating a new entry in the browser's history. 
            This means that the user cannot use the back button to navigate to the previous page after 
            the redirection. This is often desirable for logout functionality to prevent users from 
            navigating back to a page that requires authentication
            */
            window.location.replace(logoutUrl) 
        }
    }, [claims])

    return [loadingStatus ,claims, userNameClaim, isAuthenticated, login, logout];
}

export default useUser;