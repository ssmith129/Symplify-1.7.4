import { all_routes } from "../../../feature-module/routes/all_routes";

export const sidebarMenus = [
  {
    label: "Account Settings",
    icon: "ti ti-user-cog me-2",
    submenus: [
      { to: all_routes.profilesettings, label: "Profile" },
      { to: all_routes.securitysettings, label: "Security" },
      { to: all_routes.notificationssettings, label: "Notifications" },
      { to: all_routes.integrationssettings, label: "Integrations" },
    ],
  },
  {
    label: "Website Settings",
    icon: "ti ti-world-cog me-2",
    submenus: [
      { to: all_routes.organizationsettings, label: "Organization" },
      { to: all_routes.localizationsettings, label: "Localization" },
      { to: all_routes.prefixessettings, label: "Prefixes" },
      { to: all_routes.seosetupsettings, label: "SEO Setup" },
      { to: all_routes.languagesettings, label: "Language" },
      { to: all_routes.maintenancemodesettings, label: "Maintenance Mode" },
      { to: all_routes.loginandregistersettings, label: "Login & Register" },
      { to: all_routes.preferencessettings, label: "Preferences" },
    ],
  },
  {
    label: "Clinic Settings",
    icon: "ti ti-building-hospital me-2",
    submenus: [
      { to: all_routes.appointmentsettings, label: "Appointment" },
      { to: all_routes.workinghourssettings, label: "Working Hours" },
      { to: all_routes.cancellationreasonsettings, label: "Cancellation Reason" },
    ],
  },
  {
    label: "App Settings",
    icon: "ti ti-device-mobile-cog me-2",
    submenus: [
      { to: all_routes.invoicesettings, label: "Invoice Settings" },
      { to: all_routes.invoicetemplatessettings, label: "Invoice Templates" },
      { to: all_routes.signaturessettings, label: "Signatures" },
      { to: all_routes.customfieldssettings, label: "Custom Fields" },
    ],
  },
  {
    label: "System Settings",
    icon: "ti ti-device-desktop-cog me-2",
    submenus: [
      { to: all_routes.emailsettings, label: "Email Settings" },
      { to: all_routes.emailtemplatessettings, label: "Email Templates" },
      { to: all_routes.smsgatewayssettings, label: "SMS Gateways" },
      { to: all_routes.smstemplatessettings, label: "SMS Templates" },
      { to: all_routes.gdprcookiessettings, label: "GDPR Cookies" },
    ],
  },
  {
    label: "Finance & Accounts",
    icon: "ti ti-settings-dollar me-2",
    submenus: [
      { to: all_routes.paymentmethodssettings, label: "Payment Methods" },
      { to: all_routes.bankaccountssettings, label: "Bank Accounts" },
      { to: all_routes.taxratessettings, label: "Tax Rates" },
      { to: all_routes.currenciessettings, label: "Currencies" },
    ],
  },
  {
    label: "Other Settings",
    icon: "ti ti-settings-2 me-2",
    submenus: [
      { to: all_routes.sitemapsettings, label: "Sitemap" },
      { to: all_routes.clearcachesettings, label: "Clear Cache" },
      { to: all_routes.storagesettings, label: "Storage" },
      { to: all_routes.cronjobsettings, label: "Cronjob" },
      { to: all_routes.banipaddresssettings, label: "Ban IP Address" },
      { to: all_routes.systembackupsettings, label: "System Backup" },
      { to: all_routes.databasebackupsettings, label: "Database Backup" },
      { to: all_routes.systemupdate, label: "System Update" },
    ],
  },
];