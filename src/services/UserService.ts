import http from "@/http-common"

class UserService
{
    get(username: string): Promise<any> {
        return http.get("/users/" + username)
    }
}

export default new UserService()
