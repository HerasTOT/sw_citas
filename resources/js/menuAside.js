import {
    mdiAccountCircle,
    mdiMonitor,
    mdiDomain,
    mdiShieldCrown,
    mdiViewList,
    mdiViewModule,
    mdiLockCheckOutline,
    mdiAccountSupervisor,
    mdiAccount,
    mdiLightbulbOutline,
    mdiBook,
    mdiMap,
    mdiShieldCar,
    mdiPackageVariantClosed,
    mdiCardAccountDetailsStarOutline,
    mdiShieldLock,
    mdiAccountMultipleCheck,
    mdiTicket,
    mdiTicketOutline,
    mdiAccountCreditCard,
    mdiSourceBranch,
} from "@mdi/js";
// import Icon from '@mdi/react';

export default [
    {
        route: "dashboard",
        icon: mdiMonitor,
        label: "Inicio",
        to: "/dashboard",
    },
    {
        route: "profile.edit",
        label: "Perfil",
        icon: mdiAccountCircle,
    },
    {
        label: "Seguridad",
        icon: mdiShieldLock,
        role: "Admin",
        permission: "modulo.seguridad",
        menu: [
            {
                label: "Modulos",
                route: "module.index",
                icon: mdiViewModule,
                permission: "module.index",
            },
            {
                label: "Permisos",
                route: "permissions.index",
                icon: mdiLockCheckOutline,
                permission: "permissions.index",
            },
            {
                label: "Roles",
                route: "perfiles.index",
                icon: mdiAccountSupervisor,
                permission: "perfiles.index",
            },
            {
                label: "Usuarios",
                route: "user.index",
                icon: mdiAccount,
                permission: "user.index",
            },
        ],
    },
    {
        isDivider: true,
    },
];
