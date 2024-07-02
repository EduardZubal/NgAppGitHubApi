import { RoutesConfig } from "../../../../shared/helpers/routes.config";

export interface MenuItem {
    routerLink: string;
    label: string;
}

export const MENU_ITEMS: () => MenuItem[] = () => {
    return [
        {
            routerLink: RoutesConfig.blocksPage,
            label: 'Blocks',
        },
        {
            routerLink: RoutesConfig.tablePage,
            label: 'Table',
        },
    ];
};
