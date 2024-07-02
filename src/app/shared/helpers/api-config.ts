import { environment } from "../../../environments/environment";

export class ApiConfig {
    public static apiV1 = environment.apiV1;

    public static searchUsers = `${ApiConfig.apiV1}/search/users`;
    public static user = `${ApiConfig.apiV1}/users`;
}
