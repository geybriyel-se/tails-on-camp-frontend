import {
  HourglassEmptyOutlined,
  CheckCircleOutlined,
  CancelOutlined,
  DoNotDisturbOutlined,
  PauseCircleOutlined,
  TaskAltOutlined,
  LockOutlined
} from "@mui/icons-material";



const STATUS = {
  PENDING: {
    name: "Pending",
    bgColor: "#FFF5CC",
    fontColor: "#997A00",
    icon: HourglassEmptyOutlined,
  },
  APPROVED: {
    name: "Approved",
    bgColor: "#DFFFD6",
    fontColor: "#2E7D32",
    icon: CheckCircleOutlined,
  },
  REJECTED: {
    name: "Rejected",
    bgColor: "#FFE0E0",
    fontColor: "#C62828",
    icon: CancelOutlined,
  },
  CANCELLED: {
    name: "Cancelled",
    bgColor: "#F0F0F0",
    fontColor: "#616161",
    icon: DoNotDisturbOutlined,
  },
  ON_HOLD: {
    name: "On hold",
    bgColor: "#FFF0E0",
    fontColor: "#BF360C",
    icon: PauseCircleOutlined,
  },
  COMPLETED: {
    name: "Completed",
    bgColor: "#E0F7FA",
    fontColor: "#006064",
    icon: TaskAltOutlined,
  },
  CLOSED: {
    name: "Closed",
    bgColor: "#F3E5F5",
    fontColor: "#6A1B9A",
    icon: LockOutlined,
  },
};

export default STATUS;