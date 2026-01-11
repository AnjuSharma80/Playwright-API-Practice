export async function getAuthToken(request){
    const response = await request.post('https://reqres.in/api/login',{
        data:{
            email:'eve.holt@reqres.in',
            password:'citylicka'
        }
    });

    if(![200,201].includes(response.status())) {
        const errorBody = await response.text();
        throw new Error(`Login Failed: ${response.status()} - ${errorBody}`);
    }
    
    const responseBody = await response.json();
    return responseBody.token;



};

/*The API was blocked by Cloudflare bot protection.
Playwright APIRequestContext cannot solve JS challenges, so auth endpoints on ReqRes return 403.*/