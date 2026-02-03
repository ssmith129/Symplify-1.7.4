import EmailVerificationBasic from "../components/auth/email-verification/emailVerificationBasic";
import EmailVerificationCover from "../components/auth/email-verification/emailVerificationCover";
import EmailVerificationIllustration from "../components/auth/email-verification/emailVerificationIllustration";
import Error404 from "../components/auth/error-modules/error404";
import Error500 from "../components/auth/error-modules/error500";
import ForgotPasswordBasic from "../components/auth/forgot-password/forgotPasswordBasic";
import ForgotPasswordCover from "../components/auth/forgot-password/forgotPasswordCover";
import ForgotPasswordIllustration from "../components/auth/forgot-password/forgotPasswordIllustration";
import LockScreen from "../components/auth/lock-screen/lockScreen";
import Login from "../components/auth/login/login";
import LoginBasic from "../components/auth/login/loginBasic";
import LoginCover from "../components/auth/login/loginCover";
import LoginIllustration from "../components/auth/login/loginIllustration";
import RegisterBasic from "../components/auth/register/registerBasic";
import RegisterCover from "../components/auth/register/registerCover";
import RegisterIllustration from "../components/auth/register/registerIllustration";
import ResetPasswordBasic from "../components/auth/reset-password/resetPasswordBasic";
import ResetPasswordCover from "../components/auth/reset-password/resetPasswordCover";
import ResetPasswordIllustration from "../components/auth/reset-password/resetPasswordIllustration";
import TwoStepVerificationBasic from "../components/auth/two-step-verification/twoStepVerificationBasic";
import ShiftHandoff from "../components/pages/ai-modules/shift-handoff/shiftHandoff";
import TwoStepVerificationCover from "../components/auth/two-step-verification/twoStepVerificationCover";
import TwoStepVerificationIllustration from "../components/auth/two-step-verification/twoStepVerificationIllustration";
import AppointmentReport from "../components/pages/administration-modules/reports/appointment-report/appointmentReport";
import ExpenseReport from "../components/pages/administration-modules/reports/expense-report/expenseReport";
import IncomeReport from "../components/pages/administration-modules/reports/income-report/incomeReport";
import PatientReport from "../components/pages/administration-modules/reports/patient-report/patientReport";
import ProfitAndLoss from "../components/pages/administration-modules/reports/profit-and-loss/profitAndLoss";
import DeleteAccountRequest from "../components/pages/administration-modules/users/delete-account-request/deleteAccountRequest";
import Permissions from "../components/pages/administration-modules/users/permissions/permissions";
import RolesAndPermissions from "../components/pages/administration-modules/users/roles-and-permissions/rolesAndPermissions";
import Calendars from "../components/pages/application-modules/application/calendar/calendar";
import CallHistory from "../components/pages/application-modules/application/calls/callHistory";
import IncomingCall from "../components/pages/application-modules/application/calls/incomingCall";
import OutGoingCall from "../components/pages/application-modules/application/calls/outGoingCall";
import VideoCall from "../components/pages/application-modules/application/calls/videoCall";
import VoiceCalls from "../components/pages/application-modules/application/calls/voiceCall";
import Chat from "../components/pages/application-modules/application/chat/chat";
import Contacts from "../components/pages/application-modules/application/contacts/contacts";
import Email from "../components/pages/application-modules/application/email/email";
import FileManager from "../components/pages/application-modules/application/file-manager/fileManager";
import AddInoivce from "../components/pages/application-modules/application/invoice/add-invoice/addInoivce";
import Invoice from "../components/pages/application-modules/application/invoice/invoice";
import KanbanView from "../components/pages/application-modules/application/kanban-view/kanbanView";
import Notes from "../components/pages/application-modules/application/notes/notes";
import Notifications from "../components/pages/application-modules/application/notifications/notifications";
import { NotificationPageAI } from "../components/ai";
import SearchList from "../components/pages/application-modules/application/search-list/searchList";
import SocialFeed from "../components/pages/application-modules/application/social-feed/socialFeed";
import Todo from "../components/pages/application-modules/application/todo/todo";
import TodoList from "../components/pages/application-modules/application/todo/todoList";
import InvoiceDetails from "../components/pages/application-modules/invoice-details/invoiceDetails";
import Activities from "../components/pages/clinic-modules/activities/activities";
import AddDoctor from "../components/pages/clinic-modules/add-doctor/addDoctor";
import AppointmentCalendar from "../components/pages/clinic-modules/appointment-calendar/appointmentCalendar";
import AppointmentConsultations from "../components/pages/clinic-modules/appointment-consultations/appointmentConsultations";
import Appointments from "../components/pages/clinic-modules/appointments/appointments";
import Assets from "../components/pages/clinic-modules/assets/assets";
import CreatePatient from "../components/pages/clinic-modules/create-patient/createPatient";
import DoctorDetails from "../components/pages/clinic-modules/doctor-details/doctorDetails";
import DoctorsList from "../components/pages/clinic-modules/doctors-list/doctorsList";
import Doctors from "../components/pages/clinic-modules/doctors/doctors";
import EditDoctor from "../components/pages/clinic-modules/edit-doctor/editDoctor";
import EditPatient from "../components/pages/clinic-modules/edit-patient/editPatient";
import Locations from "../components/pages/clinic-modules/locations/locations";
import Messages from "../components/pages/clinic-modules/messages/messages";
import NewAppointment from "../components/pages/clinic-modules/new-appointment/newAppointment";
import PatientDetails from "../components/pages/clinic-modules/patient-details/patientDetails";
import PatientsGrid from "../components/pages/clinic-modules/patients-grid/patientsGrid";
import Patients from "../components/pages/clinic-modules/patients/patients";
import Services from "../components/pages/clinic-modules/services/services";
import Specializations from "../components/pages/clinic-modules/specializations/specializations";
import AddBlog from "../components/pages/content-modules/add-blog/addBlog";
import AddPages from "../components/pages/content-modules/add-page/addPages";
import BlogCategories from "../components/pages/content-modules/blog-categories/blogCategories";
import BlogComments from "../components/pages/content-modules/blog-comments/blogComments";
import Blogs from "../components/pages/content-modules/blogs/blogs";
import Cities from "../components/pages/content-modules/cities/cities";
import Countries from "../components/pages/content-modules/countries/countries";
import EditBlog from "../components/pages/content-modules/edit-blog/editBlog";
import EditPage from "../components/pages/content-modules/edit-page/editPage";
import Faq from "../components/pages/content-modules/faq/faq";
import Pages from "../components/pages/content-modules/page/pages";
import States from "../components/pages/content-modules/states/states";
import Testimonials from "../components/pages/content-modules/testimonials/testimonials";
import Dashboard from "../components/pages/dashboard/dashboard";
import DoctorDahboard from "../components/pages/dashboard/doctor-dashboard/doctorDahboard";
import PatientDashboard from "../components/pages/dashboard/patient-dashboard/patientDashboard";
import DoctorAppointments from "../components/pages/doctor-modules/doctor-appointments/doctorAppointments";
import DoctorsAppointmentDetails from "../components/pages/doctor-modules/doctors-appointment-details/doctorsAppointmentDetails";
import DoctorsLeaves from "../components/pages/doctor-modules/doctors-leaves/doctorsLeaves";
import DoctorsNotificationSettings from "../components/pages/doctor-modules/doctors-notification-settings/doctorsNotificationSettings";
import DoctorsPasswordSettings from "../components/pages/doctor-modules/doctors-password-settings/doctorsPasswordSettings";
import DoctorsPrescriptionDetails from "../components/pages/doctor-modules/doctors-prescription-details/doctorsPrescriptionDetails";
import DoctorsPrescriptions from "../components/pages/doctor-modules/doctors-prescriptions/doctorsPrescriptions";
import DoctorsProfileSettings from "../components/pages/doctor-modules/doctors-profile-settings/doctorsProfileSettings";
import DoctorsReviews from "../components/pages/doctor-modules/doctors-reviews/doctorsReviews";
import DoctorSchedules from "../components/pages/doctor-modules/doctors-schedules/doctorSchedules";
import OnlineConsultations from "../components/pages/doctor-modules/online-consultations/onlineConsultations";
import ExpenseCategory from "../components/pages/finance-accounts-module/expenses/expenseCategory";
import ExpensesList from "../components/pages/finance-accounts-module/expenses/expenses";
import IncomeList from "../components/pages/finance-accounts-module/income";
import AddInvoices from "../components/pages/finance-accounts-module/invoices/addInvoices";
import EditInvoices from "../components/pages/finance-accounts-module/invoices/editInvoices";
import InvoicesList from "../components/pages/finance-accounts-module/invoices/invoices";
import InvoicesDetails from "../components/pages/finance-accounts-module/invoices/invoicesDetails";
import PaymentsList from "../components/pages/finance-accounts-module/payments";
import TransactionsList from "../components/pages/finance-accounts-module/transactions";
import AttendanceList from "../components/pages/hrm-modules/attendance";
import DesignationList from "../components/pages/hrm-modules/designation";
import HolidaysList from "../components/pages/hrm-modules/holidays";
import HrmDepartments from "../components/pages/hrm-modules/hrmDepartments";
import LeavesList from "../components/pages/hrm-modules/leaves/leavesList";
import LeaveType from "../components/pages/hrm-modules/leaves/leaveType";
import PayrollList from "../components/pages/hrm-modules/payroll";
import PayrollTwo from "../components/pages/hrm-modules/payrollTwo";
import StaffsList from "../components/pages/hrm-modules/staffs";
import Gallery from "../components/pages/pages-module/gallery";
import Profile from "../components/pages/pages-module/profile";
import Starter from "../components/pages/pages-module/starter";
import Timeline from "../components/pages/pages-module/timeline";
import ComingSoon from "../components/pages/pages-modules/coming-soon/comingSoon";
import Pricing from "../components/pages/pages-modules/pricing/pricing";
import PrivacyPolicy from "../components/pages/pages-modules/privacy-policy/privacyPolicy";
import UnderMaintenance from "../components/pages/pages-modules/under-maintenance/underMaintenance";
import PatientAppointmentDetails from "../components/pages/patient-modules/patient-appointment-details/patientAppointmentDetails";
import PatientAppointments from "../components/pages/patient-modules/patient-appointments/patientAppointments";
import PatientDoctors from "../components/pages/patient-modules/patient-doctors/patientDoctors";
import PatientInvoiceDetails from "../components/pages/patient-modules/patient-invoice-details/patientInvoiceDetails";
import PatientInvoices from "../components/pages/patient-modules/patient-invoices/patientInvoices";
import PatientNotificationsSettings from "../components/pages/patient-modules/patient-notifications-settings/patientNotificationsSettings";
import PatientPasswordSettings from "../components/pages/patient-modules/patient-password-settings/patientPasswordSettings";
import PatientPrescriptionDetails from "../components/pages/patient-modules/patient-prescription-details/patientPrescriptionDetails";
import PatientPrescriptions from "../components/pages/patient-modules/patient-prescriptions/patientPrescriptions";
import PatientProfileSettings from "../components/pages/patient-modules/patient-profile-settings/patientProfileSettings";
import IntegrationsSettings from "../components/pages/settings-modules/account-settings/integrations-settings/integrationsSettings";
import NotificationsSettings from "../components/pages/settings-modules/account-settings/notifications-settings/notificationsSettings";
import ProfileSettings from "../components/pages/settings-modules/account-settings/profile-settings/profileSettings";
import SecuritySettings from "../components/pages/settings-modules/account-settings/security-settings/securitySettings";
import SignaturesSettings from "../components/pages/settings-modules/app-settings/signaturesSettings";
import AppointmentSettings from "../components/pages/settings-modules/clinic-settings/appointment-settings/appointmentSettings";
import CancellationReasonSettings from "../components/pages/settings-modules/clinic-settings/cancellation-reason-settings/cancellationReasonSettings";
import CustomFieldsSettings from "../components/pages/settings-modules/clinic-settings/custom-fields-settings/customFieldsSettings";
import InvoiceSettings from "../components/pages/settings-modules/clinic-settings/invoice-settings/invoiceSettings";
import InvoiceTemplatesSettings from "../components/pages/settings-modules/clinic-settings/invoice-templates-settings/invoiceTemplatesSettings";
import WorkingHoursSettings from "../components/pages/settings-modules/clinic-settings/working-hours-settings/workingHoursSettings";
import BankAccountsSettings from "../components/pages/settings-modules/finance-settings/bank-accounts-settings/bankAccountsSettings";
import CurrenciesSettings from "../components/pages/settings-modules/finance-settings/currencies-settings/currenciesSettings";
import PaymentMethodsSettings from "../components/pages/settings-modules/finance-settings/payment-methods-settings/paymentMethodsSettings";
import TaxRatesSettings from "../components/pages/settings-modules/finance-settings/tax-rates-settings/taxRatesSettings";
import BanIpAddressSettings from "../components/pages/settings-modules/other-settings/ban-ip-address-settings/banIpAddressSettings";
import ClearCacheSettings from "../components/pages/settings-modules/other-settings/clear-cache-settings/clearCacheSettings";
import CronjobSettings from "../components/pages/settings-modules/other-settings/cronjob-settings/cronjobSettings";
import DatabaseBackupSettings from "../components/pages/settings-modules/other-settings/database-backup-settings/databaseBackupSettings";
import SitemapSettings from "../components/pages/settings-modules/other-settings/sitemap-settings/sitemapSettings";
import StorageSettings from "../components/pages/settings-modules/other-settings/storage-settings/storageSettings";
import SystemBackupSettings from "../components/pages/settings-modules/other-settings/system-backup-settings/systemBackupSettings";
import SystemUpdate from "../components/pages/settings-modules/other-settings/system-update/systemUpdate";
import EmailSettings from "../components/pages/settings-modules/system-settings/email-settings/emailSettings";
import EmailTemplatesSettings from "../components/pages/settings-modules/system-settings/email-templates-settings/emailTemplatesSettings";
import GdprCookiesSettings from "../components/pages/settings-modules/system-settings/gdpr-cookies-settings/gdprCookiesSettings";
import SmsGatewaysSettings from "../components/pages/settings-modules/system-settings/sms-gateways-settings/smsGatewaysSettings";
import SmsTemplatesSettings from "../components/pages/settings-modules/system-settings/sms-templates-settings/smsTemplatesSettings";
import LanguageSettings from "../components/pages/settings-modules/website-settings/language-settings/languageSettings";
import LanguageSettings2 from "../components/pages/settings-modules/website-settings/language-settings2/languageSettings2";
import LanguageSettings3 from "../components/pages/settings-modules/website-settings/language-settings3/languageSettings3";
import LocalizationSettings from "../components/pages/settings-modules/website-settings/localization-settings/localizationSettings";
import LoginAndRegisterSettings from "../components/pages/settings-modules/website-settings/login-and-register-settings/loginAndRegisterSettings";
import MaintenanceModeSettings from "../components/pages/settings-modules/website-settings/maintenance-mode-settings/maintenanceModeSettings";
import OrganizationSettings from "../components/pages/settings-modules/website-settings/organization-settings/organizationSettings";
import PreferencesSettings from "../components/pages/settings-modules/website-settings/preferences-settings/preferencesSettings";
import PrefixesSettings from "../components/pages/settings-modules/website-settings/prefixes-settings/prefixesSettings";
import SeoSetupSettings from "../components/pages/settings-modules/website-settings/seo-setup-settings/seoSetupSettings";
import AnnouncementsList from "../components/pages/support-modules/announcements";
import ContactMessages from "../components/pages/support-modules/contactMessages";
import Newsletters from "../components/pages/support-modules/newsletters";
import TicketDetails from "../components/pages/support-modules/ticketDetails";
import TicketsList from "../components/pages/support-modules/tickets";
import UiAccordion from "../components/pages/ui-modules/ui-interface/base-ui/uiAccordion";
import UiAlerts from "../components/pages/ui-modules/ui-interface/base-ui/uiAlerts";
import UiAvatar from "../components/pages/ui-modules/ui-interface/base-ui/uiAvatar";
import UiBadges from "../components/pages/ui-modules/ui-interface/base-ui/uiBadges";
import UiBreadcrumb from "../components/pages/ui-modules/ui-interface/base-ui/uiBreadcrumb";
import UiButtons from "../components/pages/ui-modules/ui-interface/base-ui/uiButtons";
import UiButtonsGroup from "../components/pages/ui-modules/ui-interface/base-ui/uiButtonsGroup";
import UiCards from "../components/pages/ui-modules/ui-interface/base-ui/uiCards";
import UiCarousel from "../components/pages/ui-modules/ui-interface/base-ui/uiCarousel";
import UiCollapse from "../components/pages/ui-modules/ui-interface/base-ui/uiCollapse";
import UiDropdowns from "../components/pages/ui-modules/ui-interface/base-ui/uiDropdowns";
import UiGrid from "../components/pages/ui-modules/ui-interface/base-ui/uiGrid";
import UiImages from "../components/pages/ui-modules/ui-interface/base-ui/uiImages";
import UiLinks from "../components/pages/ui-modules/ui-interface/base-ui/uiLinks";
import UiListGroup from "../components/pages/ui-modules/ui-interface/base-ui/uiListGroup";
import UiModals from "../components/pages/ui-modules/ui-interface/base-ui/uiModals";
import UiNavTabs from "../components/pages/ui-modules/ui-interface/base-ui/uiNavTabs";
import UiOffcanvas from "../components/pages/ui-modules/ui-interface/base-ui/uiOffcanvas";
import UiPagination from "../components/pages/ui-modules/ui-interface/base-ui/uiPagination";
import UiPlaceholders from "../components/pages/ui-modules/ui-interface/base-ui/uiPlaceholders";
import UiPopovers from "../components/pages/ui-modules/ui-interface/base-ui/uiPopovers";
import UiProgress from "../components/pages/ui-modules/ui-interface/base-ui/uiProgress";
import UiRatio from "../components/pages/ui-modules/ui-interface/base-ui/uiRatio";
import UiScrollspy from "../components/pages/ui-modules/ui-interface/base-ui/uiScrollspy";
import UiSpinner from "../components/pages/ui-modules/ui-interface/base-ui/uiSpinner";
import UiToasts from "../components/pages/ui-modules/ui-interface/base-ui/uiToasts";
import UiTooltips from "../components/pages/ui-modules/ui-interface/base-ui/uiTooltips";
import UiTypography from "../components/pages/ui-modules/ui-interface/base-ui/uiTypography";
import UiUtilities from "../components/pages/ui-modules/ui-interface/base-ui/uiUtilities";
import ChartApex from "../components/pages/ui-modules/ui-interface/charts/apexcharts";
import ChartJSExample from "../components/pages/ui-modules/ui-interface/charts/chartjs";
import FormBasicInputs from "../components/pages/ui-modules/ui-interface/forms/form-elements/formBasicInputs";
import FormCheckboxRadios from "../components/pages/ui-modules/ui-interface/forms/form-elements/formCheckboxRadios";
import FormFileupload from "../components/pages/ui-modules/ui-interface/forms/form-elements/formFileupload";
import FormGridGutters from "../components/pages/ui-modules/ui-interface/forms/form-elements/formGridGutters";
import FormInputGroups from "../components/pages/ui-modules/ui-interface/forms/form-elements/formInputGroups";
import FormFloatingLabels from "../components/pages/ui-modules/ui-interface/forms/form-layouts/formFloatingLabels";
import FormHorizontal from "../components/pages/ui-modules/ui-interface/forms/form-layouts/formHorizontal";
import FormVertical from "../components/pages/ui-modules/ui-interface/forms/form-layouts/formVertical";
import FormPickers from "../components/pages/ui-modules/ui-interface/forms/form-pickers/formPickers";
import FormSelect2 from "../components/pages/ui-modules/ui-interface/forms/form-select2/formSelect2";
import FormValidation from "../components/pages/ui-modules/ui-interface/forms/form-validation/formValidation";
import FormWizard from "../components/pages/ui-modules/ui-interface/forms/form-wizard/formWizard";
import FormMask from "../components/pages/ui-modules/ui-interface/forms/input-masks/inputMasks";
import IconBootstrap from "../components/pages/ui-modules/ui-interface/icons/iconBootstrap";
import IconFlag from "../components/pages/ui-modules/ui-interface/icons/iconFlag";
import IconFontawesome from "../components/pages/ui-modules/ui-interface/icons/iconFontawesome";
import IconIonic from "../components/pages/ui-modules/ui-interface/icons/iconIonic";
import IconMaterial from "../components/pages/ui-modules/ui-interface/icons/iconMaterial";
import IconPe7 from "../components/pages/ui-modules/ui-interface/icons/iconPe7";
import IconRemix from "../components/pages/ui-modules/ui-interface/icons/iconRemix";
import IconTabler from "../components/pages/ui-modules/ui-interface/icons/iconTabler";
import IconThemify from "../components/pages/ui-modules/ui-interface/icons/iconThemify";
import IconTypicon from "../components/pages/ui-modules/ui-interface/icons/iconTypicon";
import IconWeather from "../components/pages/ui-modules/ui-interface/icons/iconWeather";
import MapsLeaflet from "../components/pages/ui-modules/ui-interface/map/leaflet";
import DataTables from "../components/pages/ui-modules/ui-interface/table/data-tables";
import TablesBasic from "../components/pages/ui-modules/ui-interface/table/tables-basic";
import UiDragula from "../components/pages/ui-modules/ui-interface/ui-advance/dragula/dragula";
import UiClipBoard from "../components/pages/ui-modules/ui-interface/ui-advance/uiClipboard";
import UiCounter from "../components/pages/ui-modules/ui-interface/ui-advance/uiCounter";
import UiLightboxes from "../components/pages/ui-modules/ui-interface/ui-advance/uiLightbox";
import UiRangeSlides from "../components/pages/ui-modules/ui-interface/ui-advance/uiRangeslider";
import UiRating from "../components/pages/ui-modules/ui-interface/ui-advance/uiRating";
import UiScrollbar from "../components/pages/ui-modules/ui-interface/ui-advance/uiScrollbar";
import { all_routes } from "./all_routes";
import { Navigate, Route } from "react-router";

const routes = all_routes;

export const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to={routes.dashboard} />,
    route: Route,
  },
  {
    path: "*", // ✅ Catch-all route for 404s
    element: <Navigate to={routes.dashboard} />,
    route: Route,
  },
  {
    path: routes.dashboard,
    element: <Dashboard />,
    route: Route,
  },
  {
    path: routes.layoutDefault,
    element: <Dashboard />,
    route: Route,
  },
  {
    path: routes.layoutMini,
    element: <Dashboard />,
    route: Route,
  },
  {
    path: routes.layoutHoverView,
    element: <Dashboard />,
    route: Route,
  },
  {
    path: routes.layoutHidden,
    element: <Dashboard />,
    route: Route,
  },
  {
    path: routes.layoutFullWidth,
    element: <Dashboard />,
    route: Route,
  },
  {
    path: routes.layoutRTL,
    element: <Dashboard />,
    route: Route,
  },
  {
    path: routes.layoutDark,
    element: <Dashboard />,
    route: Route,
  },
  {
    path: routes.doctordashboard,
    element: <DoctorDahboard />,
    route: Route,
  },
  {
    path: routes.doctorsappointments,
    element: <DoctorAppointments />,
    route: Route,
  },
  {
    path: routes.doctorsappointmentdetails,
    element: <DoctorsAppointmentDetails />,
    route: Route,
  },
  {
    path: routes.onlineconsultations,
    element: <OnlineConsultations />,
    route: Route,
  },
  {
    path: routes.doctorschedule,
    element: <DoctorSchedules />,
    route: Route,
  },
  {
    path: routes.doctorsprescriptions,
    element: <DoctorsPrescriptions />,
    route: Route,
  },
  {
    path: routes.doctorsprescriptiondetails,
    element: <DoctorsPrescriptionDetails />,
    route: Route,
  },
  {
    path: routes.doctorleaves,
    element: <DoctorsLeaves />,
    route: Route,
  },
  {
    path: routes.doctorreviews,
    element: <DoctorsReviews />,
    route: Route,
  },
  {
    path: routes.doctorsprofilesettings,
    element: <DoctorsProfileSettings />,
    route: Route,
  },
  {
    path: routes.doctorspasswordsettings,
    element: <DoctorsPasswordSettings />,
    route: Route,
  },
  {
    path: routes.doctorsnotificationsettings,
    element: <DoctorsNotificationSettings />,
    route: Route,
  },
  {
    path: routes.patientdashboard,
    element: <PatientDashboard />,
    route: Route,
  },
  {
    path: routes.patientappointments,
    element: <PatientAppointments />,
    route: Route,
  },
  {
    path: routes.patientappointmentdetails,
    element: <PatientAppointmentDetails />,
    route: Route,
  },
  {
    path: routes.patientdoctors,
    element: <PatientDoctors />,
    route: Route,
  },
  {
    path: routes.patientPrescriptions,
    element: <PatientPrescriptions />,
    route: Route,
  },
  {
    path: routes.patientprescriptiondetails,
    element: <PatientPrescriptionDetails />,
    route: Route,
  },
  {
    path: routes.patientinvoices,
    element: <PatientInvoices />,
    route: Route,
  },
  {
    path: routes.patientinvoicedetails,
    element: <PatientInvoiceDetails />,
    route: Route,
  },
  {
    path: routes.patientprofilesettings,
    element: <PatientProfileSettings />,
    route: Route,
  },
  {
    path: routes.patientpasswordsettings,
    element: <PatientPasswordSettings />,
    route: Route,
  },
  {
    path: routes.patientnotificationssettings,
    element: <PatientNotificationsSettings />,
    route: Route,
  },
  {
    path: routes.chat,
    element: <Chat />,
    route: Route,
  },
  {
    path: routes.voiceCall,
    element: <VoiceCalls />,
    route: Route,
  },
  {
    path: routes.videoCall,
    element: <VideoCall />,
    route: Route,
  },
  {
    path: routes.outgoingCall,
    element: <OutGoingCall />,
    route: Route,
  },
  {
    path: routes.incomingCall,
    element: <IncomingCall />,
    route: Route,
  },
  {
    path: routes.callHistory,
    element: <CallHistory />,
    route: Route,
  },
  {
    path: routes.calendar,
    element: <Calendars />,
    route: Route,
  },
  {
    path: routes.email,
    element: <Email />,
    route: Route,
  },
  {
    path: routes.todo,
    element: <Todo />,
    route: Route,
  },
  {
    path: routes.todoList,
    element: <TodoList />,
    route: Route,
  },
  {
    path: routes.notes,
    element: <Notes />,
    route: Route,
  },
  {
    path: routes.socialFeed,
    element: <SocialFeed />,
    route: Route,
  },
  {
    path: routes.fileManager,
    element: <FileManager />,
    route: Route,
  },
  {
    path: routes.kanbanView,
    element: <KanbanView />,
    route: Route,
  },
  {
    path: routes.contacts,
    element: <Contacts />,
    route: Route,
  },
  {
    path: routes.invoice,
    element: <Invoice />,
    route: Route,
  },
  {
    path: routes.invoiceDetails,
    element: <InvoiceDetails />,
    route: Route,
  },
  {
    path: routes.searchList,
    element: <SearchList />,
    route: Route,
  },
  {
    path: routes.doctors,
    element: <Doctors />,
    route: Route,
  },
  {
    path: routes.doctorsList,
    element: <DoctorsList />,
    route: Route,
  },
  {
    path: routes.editDoctors,
    element: <EditDoctor />,
    route: Route,
  },
  {
    path: routes.addDoctors,
    element: <AddDoctor />,
    route: Route,
  },
  {
    path: routes.doctorsDetails,
    element: <DoctorDetails />,
    route: Route,
  },
  {
    path: routes.patients,
    element: <Patients />,
    route: Route,
  },
  {
    path: routes.patientsGrid,
    element: <PatientsGrid />,
    route: Route,
  },
  {
    path: routes.createPatient,
    element: <CreatePatient />,
    route: Route,
  },
  {
    path: routes.editPatient,
    element: <EditPatient />,
    route: Route,
  },
  {
    path: routes.patientDetails,
    element: <PatientDetails />,
    route: Route,
  },
  {
    path: routes.uiAccordion,
    element: <UiAccordion />,
    route: Route,
  },
  {
    path: routes.uiAlerts,
    element: <UiAlerts />,
    route: Route,
  },
  {
    path: routes.uiAvatar,
    element: <UiAvatar />,
    route: Route,
  },
  {
    path: routes.uiBadges,
    element: <UiBadges />,
    route: Route,
  },
  {
    path: routes.uiBreadcrumb,
    element: <UiBreadcrumb />,
    route: Route,
  },
  {
    path: routes.uiButtons,
    element: <UiButtons />,
    route: Route,
  },
  {
    path: routes.uiButtonsGroup,
    element: <UiButtonsGroup />,
    route: Route,
  },
  {
    path: routes.uiCards,
    element: <UiCards />,
    route: Route,
  },
  {
    path: routes.uiCarousel,
    element: <UiCarousel />,
    route: Route,
  },
  {
    path: routes.uiCollapse,
    element: <UiCollapse />,
    route: Route,
  },
  {
    path: routes.uiDropdowns,
    element: <UiDropdowns />,
    route: Route,
  },
  {
    path: routes.uiRatio,
    element: <UiRatio />,
    route: Route,
  },
  {
    path: routes.uiGrid,
    element: <UiGrid />,
    route: Route,
  },
  {
    path: routes.uiImages,
    element: <UiImages />,
    route: Route,
  },
  {
    path: routes.uiLinks,
    element: <UiLinks />,
    route: Route,
  },
  {
    path: routes.uiListGroup,
    element: <UiListGroup />,
    route: Route,
  },
  {
    path: routes.uiModals,
    element: <UiModals />,
    route: Route,
  },
  {
    path: routes.uiOffcanvas,
    element: <UiOffcanvas />,
    route: Route,
  },
  {
    path: routes.uiPagination,
    element: <UiPagination />,
    route: Route,
  },
  {
    path: routes.uiPlaceholders,
    element: <UiPlaceholders />,
    route: Route,
  },
  {
    path: routes.uiPopovers,
    element: <UiPopovers />,
    route: Route,
  },
  {
    path: routes.uiProgress,
    element: <UiProgress />,
    route: Route,
  },
  {
    path: routes.uiScrollspy,
    element: <UiScrollspy />,
    route: Route,
  },
  {
    path: routes.uiSpinner,
    element: <UiSpinner />,
    route: Route,
  },
  {
    path: routes.uiNavTabs,
    element: <UiNavTabs />,
    route: Route,
  },
  {
    path: routes.uiToasts,
    element: <UiToasts />,
    route: Route,
  },
  {
    path: routes.uiTooltips,
    element: <UiTooltips />,
    route: Route,
  },
  {
    path: routes.uiTypography,
    element: <UiTypography />,
    route: Route,
  },
  {
    path: routes.uiUtilities,
    element: <UiUtilities />,
    route: Route,
  },
  {
    path: routes.uiDraggble,
    element: <UiDragula />,
    route: Route,
  },
  {
    path: routes.uiClipboard,
    element: <UiClipBoard />,
    route: Route,
  },
  {
    path: routes.uiRangeslider,
    element: <UiRangeSlides />,
    route: Route,
  },
  {
    path: routes.uiLightbox,
    element: <UiLightboxes />,
    route: Route,
  },
  {
    path: routes.uiRating,
    element: <UiRating />,
    route: Route,
  },
  {
    path: routes.uiCounter,
    element: <UiCounter />,
    route: Route,
  },
  {
    path: routes.uiScrollbar,
    element: <UiScrollbar />,
    route: Route,
  },
  {
    path: routes.chartApex,
    element: <ChartApex />,
    route: Route,
  },
  {
    path: routes.chartJs,
    element: <ChartJSExample />,
    route: Route,
  },
  {
    path: routes.mapsLeaflet,
    element: <MapsLeaflet />,
    route: Route,
  },
  {
    path: routes.tablesBasic,
    element: <TablesBasic />,
    route: Route,
  },
  {
    path: routes.dataTables,
    element: <DataTables />,
    route: Route,
  },
  {
    path: routes.iconFontawesome,
    element: <IconFontawesome />,
    route: Route,
  },
  {
    path: routes.iconTabler,
    element: <IconTabler />,
    route: Route,
  },
  {
    path: routes.iconBootstrap,
    element: <IconBootstrap />,
    route: Route,
  },
  {
    path: routes.iconRemix,
    element: <IconRemix />,
    route: Route,
  },
  {
    path: routes.iconIonic,
    element: <IconIonic />,
    route: Route,
  },
  {
    path: routes.iconMaterial,
    element: <IconMaterial />,
    route: Route,
  },
  {
    path: routes.iconPe7,
    element: <IconPe7 />,
    route: Route,
  },
  {
    path: routes.iconThemify,
    element: <IconThemify />,
    route: Route,
  },
  {
    path: routes.iconWeather,
    element: <IconWeather />,
    route: Route,
  },
  {
    path: routes.iconTypicon,
    element: <IconTypicon />,
    route: Route,
  },
  {
    path: routes.iconFlag,
    element: <IconFlag />,
    route: Route,
  },
  {
    path: routes.formBasicInputs,
    element: <FormBasicInputs />,
    route: Route,
  },
  {
    path: routes.formCheckboxRadios,
    element: <FormCheckboxRadios />,
    route: Route,
  },
  {
    path: routes.formInputGroups,
    element: <FormInputGroups />,
    route: Route,
  },
  {
    path: routes.formGridGutters,
    element: <FormGridGutters />,
    route: Route,
  },
  {
    path: routes.formFileupload,
    element: <FormFileupload />,
    route: Route,
  },
  {
    path: routes.formHorizontal,
    element: <FormHorizontal />,
    route: Route,
  },
  {
    path: routes.formVertical,
    element: <FormVertical />,
    route: Route,
  },
  {
    path: routes.formFloatingLabels,
    element: <FormFloatingLabels />,
    route: Route,
  },
  {
    path: routes.formValidation,
    element: <FormValidation />,
    route: Route,
  },
  {
    path: routes.formSelect2,
    element: <FormSelect2 />,
    route: Route,
  },
  {
    path: routes.formPickers,
    element: <FormPickers />,
    route: Route,
  },
  {
    path: routes.formMask,
    element: <FormMask />,
    route: Route,
  },
  {
    path: routes.formWizard,
    element: <FormWizard />,
    route: Route,
  },
  {
    path: routes.profilesettings,
    element: <ProfileSettings />,
    route: Route,
  },
  {
    path: routes.securitysettings,
    element: <SecuritySettings />,
    route: Route,
  },
  {
    path: routes.notificationssettings,
    element: <NotificationsSettings />,
    route: Route,
  },
  {
    path: routes.integrationssettings,
    element: <IntegrationsSettings />,
    route: Route,
  },
  {
    path: routes.organizationsettings,
    element: <OrganizationSettings />,
    route: Route,
  },
  {
    path: routes.localizationsettings,
    element: <LocalizationSettings />,
    route: Route,
  },
  {
    path: routes.prefixessettings,
    element: <PrefixesSettings />,
    route: Route,
  },
  {
    path: routes.seosetupsettings,
    element: <SeoSetupSettings />,
    route: Route,
  },
  {
    path: routes.languagesettings,
    element: <LanguageSettings />,
    route: Route,
  },
  {
    path: routes.languagesettings2,
    element: <LanguageSettings2 />,
    route: Route,
  },
  {
    path: routes.languagesettings3,
    element: <LanguageSettings3 />,
    route: Route,
  },
  {
    path: routes.maintenancemodesettings,
    element: <MaintenanceModeSettings />,
    route: Route,
  },
  {
    path: routes.loginandregistersettings,
    element: <LoginAndRegisterSettings />,
    route: Route,
  },
  {
    path: routes.preferencessettings,
    element: <PreferencesSettings />,
    route: Route,
  },
  {
    path: routes.appointmentsettings,
    element: <AppointmentSettings />,
    route: Route,
  },
  {
    path: routes.workinghourssettings,
    element: <WorkingHoursSettings />,
    route: Route,
  },
  {
    path: routes.cancellationreasonsettings,
    element: <CancellationReasonSettings />,
    route: Route,
  },
  {
    path: routes.invoicesettings,
    element: <InvoiceSettings />,
    route: Route,
  },
  {
    path: routes.invoicetemplatessettings,
    element: <InvoiceTemplatesSettings />,
    route: Route,
  },
  {
    path: routes.emailsettings,
    element: <EmailSettings />,
    route: Route,
  },
  {
    path: routes.emailtemplatessettings,
    element: <EmailTemplatesSettings />,
    route: Route,
  },
  {
    path: routes.smsgatewayssettings,
    element: <SmsGatewaysSettings />,
    route: Route,
  },
  {
    path: routes.smstemplatessettings,
    element: <SmsTemplatesSettings />,
    route: Route,
  },
  {
    path: routes.gdprcookiessettings,
    element: <GdprCookiesSettings />,
    route: Route,
  },
  {
    path: routes.paymentmethodssettings,
    element: <PaymentMethodsSettings />,
    route: Route,
  },
  {
    path: routes.bankaccountssettings,
    element: <BankAccountsSettings />,
    route: Route,
  },
  {
    path: routes.taxratessettings,
    element: <TaxRatesSettings />,
    route: Route,
  },
  {
    path: routes.currenciessettings,
    element: <CurrenciesSettings />,
    route: Route,
  },
  {
    path: routes.sitemapsettings,
    element: <SitemapSettings />,
    route: Route,
  },
  {
    path: routes.clearcachesettings,
    element: <ClearCacheSettings />,
    route: Route,
  },
  {
    path: routes.storagesettings,
    element: <StorageSettings />,
    route: Route,
  },
  {
    path: routes.cronjobsettings,
    element: <CronjobSettings />,
    route: Route,
  },
  {
    path: routes.systembackupsettings,
    element: <SystemBackupSettings />,
    route: Route,
  },
  {
    path: routes.databasebackupsettings,
    element: <DatabaseBackupSettings />,
    route: Route,
  },
  {
    path: routes.systemupdate,
    element: <SystemUpdate />,
    route: Route,
  },
  {
    path: routes.rolesPermissions,
    element: <RolesAndPermissions />,
    route: Route,
  },
  {
    path: routes.permissions,
    element: <Permissions />,
    route: Route,
  },
  {
    path: routes.deleteaccountrequest,
    element: <DeleteAccountRequest />,
    route: Route,
  },
  {
    path: routes.incomeReport,
    element: <IncomeReport />,
    route: Route,
  },
  {
    path: routes.expenseReport,
    element: <ExpenseReport />,
    route: Route,
  },
  {
    path: routes.profitloss,
    element: <ProfitAndLoss />,
    route: Route,
  },
  {
    path: routes.appointmentReport,
    element: <AppointmentReport />,
    route: Route,
  },
  {
    path: routes.patientReport,
    element: <PatientReport />,
    route: Route,
  },
  {
    path: routes.doctorScheduleClini,
    element: <DoctorSchedules />,
    route: Route,
  },
  {
    path: routes.contactMessages,
    element: <ContactMessages />,
    route: Route,
  },
  {
    path: routes.tickets,
    element: <TicketsList />,
    route: Route,
  },
  {
    path: routes.ticketDetails,
    element: <TicketDetails />,
    route: Route,
  },
  {
    path: routes.announcements,
    element: <AnnouncementsList />,
    route: Route,
  },
  {
    path: routes.newsletters,
    element: <Newsletters />,
    route: Route,
  },
  {
    path: routes.starter,
    element: <Starter />,
    route: Route,
  },
  {
    path: routes.profile,
    element: <Profile />,
    route: Route,
  },
  {
    path: routes.timeline,
    element: <Timeline />,
    route: Route,
  },
  {
    path: routes.gallery,
    element: <Gallery />,
    route: Route,
  },
  {
    path: routes.staffs,
    element: <StaffsList />,
    route: Route,
  },
  {
    path: routes.hrmDepartments,
    element: <HrmDepartments />,
    route: Route,
  },
  {
    path: routes.designation,
    element: <DesignationList />,
    route: Route,
  },
  {
    path: routes.attendance,
    element: <AttendanceList />,
    route: Route,
  },
  {
    path: routes.leaves,
    element: <LeavesList />,
    route: Route,
  },
  {
    path: routes.leaves,
    element: <LeavesList />,
    route: Route,
  },
  {
    path: routes.leaveType,
    element: <LeaveType />,
    route: Route,
  },
  {
    path: routes.holidays,
    element: <HolidaysList />,
    route: Route,
  },
  {
    path: routes.payroll,
    element: <PayrollList />,
    route: Route,
  },
  {
    path: routes.payroll2,
    element: <PayrollTwo />,
    route: Route,
  },
  {
    path: routes.expenses,
    element: <ExpensesList />,
    route: Route,
  },
  {
    path: routes.expenseCategory,
    element: <ExpenseCategory />,
    route: Route,
  },
  {
    path: routes.income,
    element: <IncomeList />,
    route: Route,
  },
  {
    path: routes.invoices,
    element: <InvoicesList />,
    route: Route,
  },
  {
    path: routes.invoicesDetails,
    element: <InvoicesDetails />,
    route: Route,
  },
  {
    path: routes.addInvoices,
    element: <AddInvoices />,
    route: Route,
  },
  {
    path: routes.editInvoices,
    element: <EditInvoices />,
    route: Route,
  },
  {
    path: routes.payments,
    element: <PaymentsList />,
    route: Route,
  },
  {
    path: routes.transactions,
    element: <TransactionsList />,
    route: Route,
  },
  {
    path: routes.pages,
    element: <Pages />,
    route: Route,
  },
  {
    path: routes.addPage,
    element: <AddPages />,
    route: Route,
  },
  {
    path: routes.editPage,
    element: <EditPage />,
    route: Route,
  },
  {
    path: routes.addBlogs,
    element: <AddBlog />,
    route: Route,
  },
  {
    path: routes.blogs,
    element: <Blogs />,
    route: Route,
  },
  {
    path: routes.editBlogs,
    element: <EditBlog />,
    route: Route,
  },
  {
    path: routes.blogCategories,
    element: <BlogCategories />,
    route: Route,
  },
  {
    path: routes.blogComments,
    element: <BlogComments />,
    route: Route,
  },
  {
    path: routes.countries,
    element: <Countries />,
    route: Route,
  },
  {
    path: routes.states,
    element: <States />,
    route: Route,
  },
  {
    path: routes.cities,
    element: <Cities />,
    route: Route,
  },
  {
    path: routes.testimonials,
    element: <Testimonials />,
    route: Route,
  },
  {
    path: routes.faq,
    element: <Faq />,
    route: Route,
  },
  {
    path: routes.pricing,
    element: <Pricing />,
    route: Route,
  },
  {
    path: routes.appointments,
    element: <Appointments />,
    route: Route,
  },
  {
    path: routes.newAppointment,
    element: <NewAppointment />,
    route: Route,
  },
  {
    path: routes.appointmentCalendar,
    element: <AppointmentCalendar />,
    route: Route,
  },
  {
    path: routes.locations,
    element: <Locations />,
    route: Route,
  },
  {
    path: routes.services,
    element: <Services />,
    route: Route,
  },
  {
    path: routes.specializations,
    element: <Specializations />,
    route: Route,
  },

  {
    path: routes.assets,
    element: <Assets />,
    route: Route,
  },
  {
    path: routes.activities,
    element: <Activities />,
    route: Route,
  },
  {
    path: routes.messages,
    element: <Messages />,
    route: Route,
  },
  {
    path: routes.addInvoice,
    element: <AddInoivce />,
    route: Route,
  },
  {
    path: routes.notifications,
    element: <NotificationPageAI />,
    route: Route,
  },
  {
    path: routes.appointmentconsultations,
    element: <AppointmentConsultations />,
    route: Route,
  },
  {
    path: routes.privacyPolicy,
    element: <PrivacyPolicy />,
    route: Route,
  },
  {
    path: routes.signaturessettings,
    element: <SignaturesSettings />,
    route: Route,
  },
  {
    path: routes.customfieldssettings,
    element: <CustomFieldsSettings />,
    route: Route,
  },
  {
    path: routes.banipaddresssettings,
    element: <BanIpAddressSettings />,
    route: Route,
  },
  // AI Features
  {
    path: routes.shiftHandoff,
    element: <ShiftHandoff />,
    route: Route,
  },
];
export const authRoutes = [
  {
    path: routes.login,
    element: <Login />,
    route: Route,
  },
  {
    path: routes.loginCover,
    element: <LoginCover />,
    route: Route,
  },
  {
    path: routes.loginillustration,
    element: <LoginIllustration />,
    route: Route,
  },
  {
    path: routes.loginbasic,
    element: <LoginBasic />,
    route: Route,
  },
  {
    path: routes.registercover,
    element: <RegisterCover />,
    route: Route,
  },
  {
    path: routes.registerillustration,
    element: <RegisterIllustration />,
    route: Route,
  },
  {
    path: routes.registerbasic,
    element: <RegisterBasic />,
    route: Route,
  },
  {
    path: routes.forgotpasswordcover,
    element: <ForgotPasswordCover />,
    route: Route,
  },

  {
    path: routes.forgotpasswordillustration,
    element: <ForgotPasswordIllustration />,
    route: Route,
  },
  {
    path: routes.forgotpasswordbasic,
    element: <ForgotPasswordBasic />,
    route: Route,
  },
  {
    path: routes.resetpasswordcover,
    element: <ResetPasswordCover />,
    route: Route,
  },
  {
    path: routes.resetpasswordillustration,
    element: <ResetPasswordIllustration />,
    route: Route,
  },
  {
    path: routes.resetpasswordbasic,
    element: <ResetPasswordBasic />,
    route: Route,
  },
  {
    path: routes.emailverificationcover,
    element: <EmailVerificationCover />,
    route: Route,
  },
  {
    path: routes.emailverificationillustration,
    element: <EmailVerificationIllustration />,
    route: Route,
  },
  {
    path: routes.emailverificationbasic,
    element: <EmailVerificationBasic />,
    route: Route,
  },
  {
    path: routes.twostepverificationcover,
    element: <TwoStepVerificationCover />,
    route: Route,
  },
  {
    path: routes.twostepverificationillustration,
    element: <TwoStepVerificationIllustration />,
    route: Route,
  },
  {
    path: routes.twostepverificationbasic,
    element: <TwoStepVerificationBasic />,
    route: Route,
  },
  {
    path: routes.lockscreen,
    element: <LockScreen />,
    route: Route,
  },
  {
    path: routes.error404,
    element: <Error404 />,
    route: Route,
  },
  {
    path: routes.error500,
    element: <Error500 />,
    route: Route,
  },
  {
    path: routes.comingSoon,
    element: <ComingSoon />,
    route: Route,
  },
  {
    path: routes.underMaintenance,
    element: <UnderMaintenance />,
    route: Route,
  },
];
