export class RoutesConfig {
    static root = '';
    static auth = 'auth';
    static login = 'login';
    // pages
    static blocksPage = 'blocks';
    static tablePage = 'table';
    static detailPage = 'detail';

    static loginNavigate = `/${RoutesConfig.auth}/${RoutesConfig.login}`;
}
