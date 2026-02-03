// breadcrumbConfig.ts
export const breadcrumbMap: Record<string, any[]> = {
    '/index': [
      { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
      { label: 'Dashboard', active: true },
    ],
    '/admin-dashboard': [
      { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
      { label: 'Dashboard', active: true },
    ],
    '/customer/customer-dashboard': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Dashboard', active: true },
    ],
    '/customer/customer-quotations': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Quotations', active: true },
    ],
    '/customer/customer-invoices': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Invoices', active: true },
    ],
    '/customer/customer-recurring-invoices': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reccuring Invoices', active: true },
    ],
    '/customer/customer-transactions': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Transactions', active: true },
    ],
    '/customer/customer-payment-summary': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Payment Summary Report', active: true },
    ],
    '/customer/customer-invoice-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Invoice Report', active: true },
    ],
    '/customer/customer-account-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/customer/customer-security-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/customer/customer-plans-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/customer/customer-notification-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/super-admin/super-admin-dashboard': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Super Admin',path: '/', active: false },
        { label: 'Dashboard', active: true },
    ],
    '/super-admin/companies': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Super Admin',path: '/', active: false },
        { label: 'Companies', active: true },
    ],
    '/super-admin/subscriptions': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Super Admin',path: '/', active: false },
        { label: 'subscriptions', active: true },
    ],
    '/super-admin/packages': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Super Admin',path: '/', active: false },
        { label: 'packages', active: true },
    ],
    '/super-admin/domain': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Super Admin',path: '/', active: false },
        { label: 'domain', active: true },
    ],
    '/super-admin/purchase-transaction': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Super Admin',path: '/', active: false },
        { label: 'Purchase Transaction', active: true },
    ],
    '/application/chat': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'Chat', active: true },
    ],
    '/application/voice-call': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'Voice Call', active: true },
    ],
    '/application/video-call': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'video Call', active: true },
    ],
    '/application/outgoing-call': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'outgoing Call', active: true },
    ],
    '/application/incoming-call': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'incoming Call', active: true },
    ],
    '/application/call-history': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'Call History', active: true },
    ],
    '/application/calendar': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'Calendar', active: true },
    ],
    '/application/email': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'Email', active: true },
    ],
    '/application/todo': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'Todo', active: true },
    ],
    '/application/notes': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'Notes', active: true },
    ],
    '/application/social-feed': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'Social Feed', active: true },
    ],
    '/application/file-manager': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'File Manager', active: true },
    ],
    '/application/kanban-view': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'Kanban View', active: true },
    ],
    '/application/contacts': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'Contacts', active: true },
    ],
    '/application/invoice': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'Invoices', active: true },
    ],
    '/application/search-list': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Applications',path: '/', active: false },
        { label: 'Search List', active: true },
    ],
    '/products': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Products', active: true },
    ],
    '/category': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Category', active: true },
    ],
    '/units': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Unit', active: true },
    ],
    '/inventory': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Inventory', active: true },
    ],
    '/invoices': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Invoices', active: true },
    ],
    '/add-invoice': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Invoices',path: '/', active: false },
        { label: 'Create New Invoice',path: '/', active: true },
    ],
    '/invoice-details': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Invoice Detail Admin', active: true },
    ],
    '/invoice-templates': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Invoice Templates', active: true },
    ],
    '/recurring-invoices': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Recurring Invoices', active: true },
    ],
    '/credit-notes': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Credit Notes', active: true },
    ],
    '/quotations': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Quotations', active: true },
    ],
    '/delivery-challans': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Delivery Challans', active: true },
    ],
    '/customer-details': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Customers', active: true },
    ],
    '/purchases': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Purchase', active: true },
    ],
    '/purchase-orders': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Purchases Orders', active: true },
    ],
    '/debit-notes': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Debit Notes', active: true },
    ],
    '/suppliers': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports',path: '/', active: false },
        { label: 'Supplier Report',path: '/', active: true },
    ],
    '/supplier-payments': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports',path: '/', active: false },
        { label: 'Supplier Payments',path: '/', active: true },
    ],
    '/expenses': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Expenses',path: '/', active: true },
    ],
    '/customer': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Customers', active: true },
    ],
    '/incomes': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Income', active: true },
    ],
    '/payments': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Payments', active: true },
    ],
    '/transactions': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Transactions', active: true },
    ],
    '/bank-accounts': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Bank Accounts', active: true },
    ],
    '/money-transfer': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Money Transfer', active: true },
    ],
    '/users': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Users', active: true },
    ],
    '/roles-permissions': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Roles & Permission', active: true },
    ],
    '/delete-account-request': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Delete Account Request', active: true },
    ],
    '/membership-plans': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Membership', active: true },
    ],
    '/membership-addons': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Membership', active: true },
    ],
    '/subscribers': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Membership',path: '/', active: false },
        { label: 'Subscribes', active: true },
    ],
    '/membership-transactions': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Membership',path: '/', active: false },
        { label: 'Transactions', active: true },
    ],
    '/contact-messages': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Contact Messages', active: true },
    ],
    '/tickets': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Tickets List', active: true },
    ],
    '/ticket-kanban': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Tickets Kanban View', active: true },
    ],
    '/ticket-details': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Ticket Overview', active: true },
    ],
    '/stock-summary': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Stock Summary Report', active: true },
    ],
    '/inventory-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Inventory Report', active: true },
    ],
    '/best-seller': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Best Seller Report', active: true },
    ],
    '/low-stock': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Low Stock Report', active: true },
    ],
    '/stock-history': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Stock History Report', active: true },
    ],
    '/sold-stock': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Sold Stock Report', active: true },
    ],
    '/sales-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Sales Report', active: true },
    ],
    '/sales-returns': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Sales Return Report', active: true },
    ],
    '/sales-orders': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Sales Orders Report', active: true },
    ],
    '/purchases-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Purchases Report', active: true },
    ],
    '/purchase-return-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Purchase Return Report', active: true },
    ],
    '/purchase-orders-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Purchase Orders Report', active: true },
    ],
    '/quotation-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Quotation Report', active: true },
    ],
    '/payment-summary': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Payment Summary Report', active: true },
    ],
    '/tax-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Tax Report', active: true },
    ],
    '/expense-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Expense Report', active: true },
    ],
    '/income-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Income Reports', active: true },
    ],
    '/profit-loss-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Profit & Loss Report', active: true },
    ],
    '/annual-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Annual Report', active: true },
    ],
    '/balance-sheet': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Balance Sheet Report', active: true },
    ],
    '/cash-flow': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Cash Flow Report', active: true },
    ],
    '/account-statement': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Cash Flow Report', active: true },
    ],
    '/customers-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Customers Report', active: true },
    ],
    '/customer-due-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Customers Due Report', active: true },
    ],
    '/supplier-report': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Reports', path: '/', active: false },
        { label: 'Supplier Report', active: true },
    ],
    '/general-settings/account-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/general-settings/security-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/general-settings/plans-billings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/general-settings/notifications-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/general-settings/integrations-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/website-settings/company-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/website-settings/localization-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/website-settings/prefixes-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/website-settings/preference-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/website-settings/seo-setup': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/website-settings/language-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/website-settings/maintenance-mode': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/website-settings/authentication-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/website-settings/ai-configuration': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/website-settings/appearance-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/website-settings/plugin-manager': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/app-settings/invoice-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/app-settings/invoice-templates-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/app-settings/esignatures': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/app-settings/barcode-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/app-settings/thermal-printer': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/app-settings/custom-fields': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/app-settings/sass-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/finance-settings/payment-methods': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/finance-settings/bank-accounts-settings': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/finance-settings/tax-rates': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/system-settings/currencies': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/system-settings/email-templates': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/system-settings/sms-gateways': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/system-settings/gdpr-cookies': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/other-settings/custom-css': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/other-settings/custom-js': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/other-settings/sitemap': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/other-settings/clear-cache': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/other-settings/cronjob': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/other-settings/system-backup': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/other-settings/database-backup': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/other-settings/system-update': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Settings', active: true },
    ],
    '/pages': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Pages', active: true },
    ],
    '/blogs': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Blogs',path: '/',active: false },
        { label: 'All Blogs',active: true },
    ],
    '/add-blogs': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Blogs',path: '/',active: false },
        { label: 'Add Blogs',active: true },
    ],
    '/edit-blogs': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Blogs',path: '/',active: false },
        { label: 'Edit Blogs',active: true },
    ],
    '/blog-details': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Blogs',path: '/',active: false },
        { label: 'All Blogs',active: true },
    ],
    '/blog-categories': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Blogs',path: '/',active: false },
        { label: 'Categories',active: true },
    ],
    '/blog-tags': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Blogs',path: '/',active: false },
        { label: 'Tags',active: true },
    ],
    '/blog-comments': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Blogs',path: '/',active: false },
        { label: 'Blog Comments',active: true },
    ],
    '/countries': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Locations',path: '/',active: false },
        { label: 'Countries',active: true },
    ],
    '/states': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Locations',path: '/',active: false },
        { label: 'States',active: true },
    ],
    '/cities': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Locations',path: '/',active: false },
        { label: 'Cities',active: true },
    ],
    '/testimonials': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Testimonials',active: true },
    ],
    '/faq': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Faq',active: true },
    ],
    '/profile': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Profile',active: true },
    ],
    '/starter': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Starter Page',active: true },
    ],
    '/gallery': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Gallery',active: true },
    ],
    '/pricing': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Pricing',active: true },
    ],
    '/timeline': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Timeline',active: true },
    ],
    '/api-keys': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'API Key',active: true },
    ],
    '/privacy-policy': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Privacy Policy',active: true },
    ],
    '/terms-condition': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Terms & Conditions',active: true },
    ],
    '/ui-accordion': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Accordions',active: true },
    ],
    '/ui-alerts': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Alerts',active: true },
    ],
    '/ui-avatar': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Avatars',active: true },
    ],
    '/ui-breadcrumb': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'BreadCrumb',active: true },
    ],
    '/ui-buttons': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Buttons',active: true },
    ],
    '/ui-buttons-group': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Buttons Group',active: true },
    ],
    '/ui-cards': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Cards',active: true },
    ],
    '/ui-carousel': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Carousel',active: true },
    ],
    '/ui-collapse': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Collapse',active: true },
    ],
    '/ui-dropdowns': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Dropdowns',active: true },
    ],
    '/ui-ratio': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Ratio Video',active: true },
    ],
    '/ui-grid': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Grid',active: true },
    ],
    '/ui-images': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Images',active: true },
    ],
    '/ui-links': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Links',active: true },
    ],
    
    '/ui-list-group': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'List Group',active: true },
    ],
    '/ui-modals': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Modals',active: true },
    ],
    '/ui-offcanvas': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Offcanvas',active: true },
    ],
    '/ui-pagination': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Pagination',active: true },
    ],
    '/ui-placeholders': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Placeholders',active: true },
    ],
    '/ui-popovers': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Popovers',active: true },
    ],
    '/ui-progress': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Progress',active: true },
    ],
    '/ui-scrollspy': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Scrollspy',active: true },
    ],
    '/ui-spinner': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Spinner',active: true },
    ],
    '/ui-nav-tabs': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Navs & Tabs',active: true },
    ],
    '/ui-toasts': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Toasts',active: true },
    ],
    '/ui-tooltips': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Tooltips',active: true },
    ],
    '/ui-typography': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Typography',active: true },
    ],
    '/ui-utilities': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Utilities',active: true },
    ],
    '/extended-dragula': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Dragula',active: true },
    ],
    '/ui-clipboard': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Clipboard',active: true },
    ],
    '/ui-rangeslider': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Range Slider',active: true },
    ],
    '/ui-sweetalerts': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Sweet Alerts',active: true },
    ],
    '/ui-lightbox': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Lightbox',active: true },
    ],
    '/ui-rating': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Ratings',active: true },
    ],
    '/ui-counter': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Counter',active: true },
    ],
    '/ui-scrollbar': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Scrollbar',active: true },
    ],
    '/form-basic-inputs': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Form Elements',active: true },
    ],
    '/form-checkbox-radios': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Checks & Radios',active: true },
    ],
    
    '/form-input-groups': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Input Groups',active: true },
    ],
    '/form-grid-gutters': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Grid Gutters',active: true },
    ],
    '/form-mask': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Mask',active: true },
    ],
    '/form-fileupload': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'File Upload',active: true },
    ],
    '/form-horizontal': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Form Horizontal',active: true },
    ],
    '/form-vertical': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Form Vertical',active: true },
    ],
    '/form-floating-labels': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Floating Labels',active: true },
    ],
    '/form-validation': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Form Validation',active: true },
    ],
    '/form-select2': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Form Select',active: true },
    ],
    '/form-wizard': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Form Wizard',active: true },
    ],
    '/form-pickers': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Form Picker',active: true },
    ],
    '/tables-basic': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Basic Tables',active: true },
    ],
    '/data-tables': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Data Tables',active: true },
    ],
    '/chart-apex': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Charts', path: '/', active: false },
        { label: 'Apex Charts', active: true },
    ],
    '/chart-c3': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Charts', path: '/', active: false },
        { label: 'Chart C3', active: true },
    ],
    '/chart-js': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Charts', path: '/', active: false },
        { label: 'Chart JS', active: true },
    ],
    '/chart-morris': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Charts', path: '/', active: false },
        { label: 'Morris Chart', active: true },
    ],
    '/chart-flot': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Charts', path: '/', active: false },
        { label: 'Flot Charts', active: true },
    ],
    '/chart-peity': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Charts', path: '/', active: false },
        { label: 'Peity Charts', active: true },
    ],
    '/icon-fontawesome': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Fontawesome Icons', active: true },
    ],
    '/icon-tabler': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Tabler Icons', active: true },
    ],
    '/icon-bootstrap': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Bootstrap Icons', active: true },
    ],
    '/icon-remix': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Remix Icons', active: true },
    ],
    '/icon-feather': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Feather icons', active: true },
    ],
    '/icon-ionic': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Ionic Icons', active: true },
    ],
    '/icon-material': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Material Icons', active: true },
    ],
    '/icon-pe7': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Pe7 Icons', active: true },
    ],
    '/icon-simpleline': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Simpleline Icons', active: true },
    ],
    '/icon-themify': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Themify Icons', active: true },
    ],
    '/icon-weather': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Weather Icons', active: true },
    ],
    '/icon-typicon': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Typicon Icons', active: true },
    ],
    '/icon-flag': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Flag Icons', active: true },
    ],
    '/maps-vector': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Maps',path: '/', active: false },
        { label: 'Vector Maps', active: true },
    ],
    '/maps-leaflet': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Maps',path: '/', active: false },
        { label: 'Leaflet Maps', active: true },
    ],
    '/layout-default': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Dashboard', active: true },
    ],
    '/layout-single': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Dashboard', active: true },
    ],
    '/layout-mini': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Dashboard', active: true },
    ],
    '/layout-transparent': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Dashboard', active: true },
    ],
    '/layout-without-header': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Dashboard', active: true },
    ],
    '/layout-rtl': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Dashboard', active: true },
    ],
    '/layout-dark': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Dashboard', active: true },
    ],
    '/add-customer': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Customer', path: '/', active: false },
        { label: 'Add New Customer',  active: true },
    ],
    '/edit-customer': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Customer', path: '/', active: false },
        { label: 'Edit Customer',  active: true },
    ],
    '/customers': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Customers',  active: true },
    ],
    
    '/add-product': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Products',  active: true },
    ],
    '/edit-product': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Edit Products',  active: true },
    ],
    
    '/add-credit-notes': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Credit Notes', path: '/',  active: false },
        { label: 'Add Credit Notes',  active: true },
    ],
    '/edit-credit-notes': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Credit Notes', path: '/',  active: false },
        { label: 'Edit Credit Notes',  active: true },
    ],
    '/add-quotation': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Quotations', path: '/',  active: false },
        { label: 'Add Quotations',  active: true },
    ],
    '/edit-quotation': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Quotations', path: '/',  active: false },
        { label: 'Edit Quotations',  active: true },
    ],
    '/add-delivery-challan': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Delivery Challan', path: '/',  active: false },
        { label: 'Create New Delivery Challan',  active: true },
    ],
    '/edit-delivery-challan': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'Delivery Challan', path: '/',  active: false },
        { label: 'Edit Delivery Challan',  active: true },
    ],
    '/notifications': [
        { label: 'Home', path: '/',icon: 'isax isax-home-2 me-1', active: false },
        { label: 'All Notification',  active: true },
    ],
    

    // add more routes as needed
  };
  