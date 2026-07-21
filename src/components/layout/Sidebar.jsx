/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";
import { FiPhone, FiPhoneCall, FiSettings, FiUser, FiUsers } from "react-icons/fi";
import { HiOutlineBookOpen, HiOutlineSpeakerphone } from "react-icons/hi";
import { LuWorkflow } from "react-icons/lu";
import { RiDashboardLine } from "react-icons/ri";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: RiDashboardLine },
  { label: "Campaigns", path: "/campaigns", icon: HiOutlineSpeakerphone },
  { label: "Deals", path: "/deals", icon: FiUsers },
  { label: "Call Log", path: "/call-log", icon: FiPhoneCall },
  { label: "Knowledge Base", path: "/knowledge-base", icon: HiOutlineBookOpen },
  { label: "contact", path: "/contact", icon: FiUser },
  { label: "integration", path: "/integration", icon: LuWorkflow },
  { label: "settings", path: "/settings", icon: FiSettings },
];

const defaultUser = {
  initials: "HS",
  name: "Himanshu S.",
  role: "Workspace Admin",
};

function Sidebar({ user = defaultUser }) {
  const location = useLocation();
  const currentUser = { ...defaultUser, ...user };

  return (
    <aside
      className="sticky top-0 flex h-screen w-[280px] shrink-0 flex-col justify-between overflow-hidden border-l border-r border-l-[var(--sidebar-border-blue)] border-r-[var(--sidebar-border-dark)] bg-[var(--sidebar-background)] px-3 py-4 font-[Inter,system-ui,sans-serif]"
    >
      <div>
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--sidebar-logo-purple)] text-white"
          >
            <FiPhone size={17} />
          </div>

          <div className="min-w-0">
            <div className="truncate text-[16px] font-semibold leading-5 text-white">
              VoiceIQ
            </div>
            <div
              className="truncate text-[11px] font-normal leading-4 text-[var(--sidebar-muted)]"
            >
              Real Estate
            </div>
          </div>
        </div>

        <div
          className="mt-[18px] flex h-[30px] items-center gap-2 rounded-lg border border-[var(--success-600)] bg-[var(--sidebar-status-bg)] px-2.5 text-[12px] font-medium leading-5 text-[var(--success-500)]"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-[var(--success-500)]"
            aria-hidden="true"
          />
          <span className="whitespace-nowrap">2 Active Campaigns</span>
        </div>

        <nav className="mt-3 flex flex-col gap-1" aria-label="Primary">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                className="flex h-[34px] w-full items-center gap-2.5 rounded-lg px-2.5 text-left text-[12px] font-medium leading-5 transition-colors hover:bg-[#111827]"
                key={item.path}
                to={item.path}
                style={{
                  backgroundColor: isActive ? "var(--sidebar-purple)" : "transparent",
                  color: isActive ? "#FFFFFF" : "var(--sidebar-muted)",
                }}
              >
                <Icon size={14} className="shrink-0" aria-hidden="true" />
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
            className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[var(--sidebar-purple)] text-[11px] font-bold leading-none text-white"
          >
            {currentUser.initials}
          </div>

          <div className="min-w-0">
            <div className="truncate text-[12px] font-semibold leading-4 text-white">
              {currentUser.name}
            </div>
            <div
              className="truncate text-[10px] font-normal leading-3 text-[var(--sidebar-muted)]"
            >
              {currentUser.role}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
