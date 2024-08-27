import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import DownloadIcon from "@mui/icons-material/Download";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ReceiptIcon from "@mui/icons-material/Receipt";
import GoogleIcon from "@mui/icons-material/Google";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MedicationIcon from "@mui/icons-material/Medication";
export const helperButtons = [
  {
    name: "Send Attachment",
    icon: <FilePresentOutlinedIcon />,
  },
  {
    name: "Print",
    icon: <LocalPrintshopIcon />,
  },
  {
    name: "Download",
    icon: <DownloadIcon />,
  },
  {
    name: "Send via own Whatsapp",
    icon: <WhatsAppIcon />,
  },
  {
    name: "Send Payment Link",
    icon: <CurrencyRupeeIcon />,
  },
  {
    name: "Bill Patient",
    icon: <ReceiptIcon />,
  },
  {
    name: "Send Google Review Link",
    icon: <GoogleIcon />,
  },
  {
    name: "Request Vitals",
    icon: <WaterDropIcon />,
  },
];
export const VitalPageIcons = [
  {
    fieldName: "Pulse rate",
    icon: FavoriteIcon,
    value: "",
  },
  {
    fieldName: "Peripheral oxygen saturation",
    icon: MedicationIcon,
    value: "",
  },
  {
    fieldName: "Blood pressure",
    icon: WaterDropIcon,
    value: "",
  },
  {
    fieldName: "Respiratory rate",
    icon: MedicationIcon,
    value: "",
  },
];
export const patientHistoryTitles = [
  "Diabete mellitus",
  "Hypertension",
  "Hypeothyroidism",
  "Alcohol",
  "Tabacco",
  "Smoke",
];
