import {
  AiFillHome,
  AiOutlineBorderlessTable,
  AiOutlineWechat,
  AiFillNotification,
  AiFillInteraction,
  AiOutlineSearch,
} from "react-icons/ai";

const MAIN_NAVIGATION = [
  {
    id: 1,
    label: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    label: "Lineup",
    icon: <AiOutlineBorderlessTable />,
  },
  {
    id: 3,
    label: "Pings",
    icon: <AiOutlineWechat />,
  },
  {
    id: 4,
    label: "Hey",
    icon: <AiFillNotification />,
  },
  {
    id: 5,
    label: "Activity",
    icon: <AiFillInteraction />,
  },
  {
    id: 6,
    label: "Find",
    icon: <AiOutlineSearch />,
  },
];

export default MAIN_NAVIGATION;
