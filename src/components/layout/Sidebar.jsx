/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";
import { FiPhone, FiPhoneCall, FiSettings, FiUser, FiUsers } from "react-icons/fi";
import { HiOutlineBookOpen, HiOutlineSpeakerphone } from "react-icons/hi";
import { LuWorkflow } from "react-icons/lu";
import { RiDashboardLine } from "react-icons/ri";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: RiDashboardLine },
  { label: "Deals", path: "/deals", icon: FiUsers },
  { label: "Contact", path: "/contact", icon: FiUser },
  { label: "Call Log", path: "/call-log", icon: FiPhoneCall },
  { label: "Campaigns", path: "/campaigns", icon: HiOutlineSpeakerphone },
  { label: "Knowledge Base", path: "/knowledge-base", icon: HiOutlineBookOpen },
  { label: "Integration", path: "/integration", icon: LuWorkflow },
  { label: "Settings", path: "/settings", icon: FiSettings },
];

const defaultUser = {
  initials: "HS",
  name: "Himanshu S.",
  role: "Workspace Admin",
};

function Sidebar({ user = defaultUser }) {
  const name = localStorage.getItem("first_name") || "Himanshu";
  const initials = (name && name.length > 0 ? name.slice(0, 1) : "H").toUpperCase();
  const role = localStorage.getItem("role") || "Workspace Admin";
  const location = useLocation();

  return (
    <aside
      className="sticky top-0 flex h-dvh w-[280px] shrink-0 flex-col justify-between overflow-hidden border-l border-r border-l-[var(--sidebar-border-blue)] border-r-[var(--sidebar-border-dark)] bg-[var(--sidebar-background)] px-3 py-4 font-[Inter,system-ui,sans-serif]"
    >
      <div>
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white overflow-hidden p-0.5">
            <img 
              src="/ai-removebg-preview.png" 
              alt="AI Chief" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <div className="truncate text-[16px] font-semibold leading-5 text-white">
              AI Chief
            </div>
            <div
              className="truncate text-[12px] font-normal leading-4 text-[var(--sidebar-muted)]"
            >
              Real Estate
            </div>
          </div>
        </div>

        <nav className="mt-6 flex flex-col gap-1" aria-label="Primary">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                className="flex h-[38px] w-full items-center gap-2.5 rounded-lg px-2.5 text-left text-[13px] font-medium leading-5 transition-colors hover:bg-[#111827]"
                key={item.path}
                to={item.path}
                aria-current={isActive ? "page" : undefined}
                style={{
                  backgroundColor: isActive ? "var(--sidebar-purple)" : "transparent",
                  color: isActive ? "#FFFFFF" : "var(--sidebar-muted)",
                }}
              >
                <Icon size={15} className="shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div
        className="border-t border-t-[var(--sidebar-border-dark)] pt-3"
      >
        <div className="flex items-center gap-2.5">
          <div
            className="flex size-[36px] shrink-0 items-center justify-center rounded-full bg-[var(--sidebar-purple)] text-[12px] font-bold leading-none text-white"
          >
            {initials}
          </div>

          <div className="min-w-0">
            <div className="truncate text-[13px] font-semibold leading-4 text-white">
              {name}
            </div>
            <div
              className="truncate text-[12px] font-normal leading-3 text-[var(--sidebar-muted)]"
            >
              {role}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
