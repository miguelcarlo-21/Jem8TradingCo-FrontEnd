import { useState } from "react";
import AdminNav from '../components/AdminNav'; 

const messagesData = [
  {
    id: 1,
    name: "Clark Raguhos",
    email: "Clarkkentraguhos@gmail.com",
    subject: "Order inquiry",
    message: "Good day! I would like to know the requirements for getting a product. Thank you.",
    date: "2025/10/04 - 10:35 AM",
    status: "New",
  },
  {
    id: 2,
    name: "Clark Raguhos",
    email: "Clarkkentraguhos@gmail.com",
    subject: "Order inquiry",
    message: "Good day! I would like to know the requirements for getting a product. Thank you.",
    date: "2025/10/04 - 10:35 AM",
    status: "New",
  },
  {
    id: 3,
    name: "Clark Raguhos",
    email: "Clarkkentraguhos@gmail.com",
    subject: "Order inquiry",
    message: "Good day! I would like to know the requirements for getting a product. Thank you.",
    date: "2025/10/04 - 10:35 AM",
    status: "Replied",
  },
  {
    id: 4,
    name: "Clark Raguhos",
    email: "Clarkkentraguhos@gmail.com",
    subject: "Order inquiry",
    message: "Good day! I would like to know the requirements for getting a product. Thank you.",
    date: "2025/10/04 - 10:35 AM",
    status: "Resolved",
  },
  {
    id: 5,
    name: "Clark Raguhos",
    email: "Clarkkentraguhos@gmail.com",
    subject: "Order inquiry",
    message: "Good day! I would like to know the requirements for getting a product. Thank you.",
    date: "2025/10/04 - 10:35 AM",
    status: "Resolved",
  },
  {
    id: 6,
    name: "Clark Raguhos",
    email: "Clarkkentraguhos@gmail.com",
    subject: "Order inquiry",
    message: "Good day! I would like to know the requirements for getting a product. Thank you.",
    date: "2025/10/04 - 10:35 AM",
    status: "Resolved",
  },
];

const statusConfig = {
  New: {
    bg: "#DAF5FF",
    border: "#B9CFF8",
    color: "#2563EB",
    icon: "✉️",
  },
  Replied: {
    bg: "#FAF1E3",
    border: "#F8E1BC",
    color: "#D97706",
    icon: "↩️",
  },
  Resolved: {
    bg: "#E4F6F0",
    border: "#BAEADA",
    color: "#059669",
    icon: "✔️",
  },
};

const tabs = [
  { label: "All", count: 10, key: "All" },
  { label: "New", count: 3, key: "New" },
  { label: "Replied", count: 8, key: "Replied" },
  { label: "Resolved", count: 12, key: "Resolved" },
  { label: "Live chat", count: null, key: "Live" },
];

export default function AdminContactMessages() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All" || activeTab === "Live"
      ? messagesData
      : messagesData.filter((m) => m.status === activeTab);

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .acm-burger { display: none !important; }
        }
        @media (max-width: 767px) {
          .acm-burger { display: inline !important; }
        }
      `}</style>

      <div style={{ display: "flex", minHeight: "100vh", background: "#EAF2ED", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

        <AdminNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main style={{ flex: 1, padding: "28px 24px", overflowX: "hidden", minWidth: 0 }}>

          {/* Top bar */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <button
              className="acm-burger"
              onClick={() => setSidebarOpen(true)}
              style={{ display: "none", background: "none", border: "none", fontSize: "22px", cursor: "pointer", color: "#374151", padding: "4px 8px", borderRadius: "6px" }}
            >☰</button>
            <div>
              <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", margin: 0 }}>
                Contact Messages
              </h1>
              <p style={{ fontSize: "13px", color: "#6B6A6A", margin: "4px 0 0" }}>
                View and respond to messages from customers
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "20px",
                    border: isActive ? "1px solid #155DFC" : "1px solid #D1D5DB",
                    background: isActive ? "#155DFC" : "rgba(0,0,0,0.05)",
                    color: isActive ? "#fff" : "#374151",
                    fontSize: "13px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tab.label}{tab.count !== null ? ` (${tab.count})` : ""}
                </button>
              );
            })}
          </div>

          {/* Message Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {filtered.map((msg) => {
              const cfg = statusConfig[msg.status];
              return (
                <div
                  key={msg.id}
                  style={{
                    background: "#fff",
                    borderRadius: "14px",
                    padding: "16px 20px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    position: "relative",
                  }}
                >
                  {/* Avatar */}
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: "#E8E8E8",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "20px", flexShrink: 0,
                  }}>✉️</div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Name + email + status badge row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                      <span style={{ fontWeight: 600, fontSize: "14px", color: "#111827" }}>
                        {msg.name}
                      </span>
                      <span style={{ fontSize: "13px", color: "#787878" }}>
                        ({msg.email})
                      </span>
                      {/* Status badge */}
                      <span style={{
                        padding: "3px 10px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: 600,
                        background: cfg.bg,
                        border: `1px solid ${cfg.border}`,
                        color: cfg.color,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        whiteSpace: "nowrap",
                      }}>
                        {msg.status}
                      </span>
                    </div>

                    {/* Subject */}
                    <div style={{ fontSize: "13px", fontWeight: 500, color: "#374151", marginBottom: "4px" }}>
                      {msg.subject}
                    </div>

                    {/* Message preview */}
                    <div style={{
                      fontSize: "13px", color: "#666565",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      maxWidth: "600px",
                    }}>
                      {msg.message}
                    </div>
                  </div>

                  {/* Date + Actions (right side) */}
                  <div style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "flex-end", gap: "10px", flexShrink: 0,
                  }}>
                    <span style={{ fontSize: "12px", color: "#9CA3AF", whiteSpace: "nowrap" }}>
                      {msg.date}
                    </span>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button style={{
                        padding: "5px 14px", borderRadius: "6px",
                        border: "1px solid #D1D5DB", background: "#fff",
                        color: "#374151", fontSize: "12px", fontWeight: 500, cursor: "pointer",
                      }}>Reply</button>
                      <button style={{
                        padding: "5px 10px", borderRadius: "6px",
                        border: "1px solid #FCA5A5", background: "#FEF2F2",
                        color: "#DC2626", fontSize: "13px", cursor: "pointer",
                      }}>🗑</button>
                    </div>
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div style={{
                background: "#fff", borderRadius: "14px", padding: "40px",
                textAlign: "center", color: "#9CA3AF", fontSize: "14px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}>
                No messages found.
              </div>
            )}
          </div>

          {/* Pagination */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", fontSize: "12px", color: "#9CA3AF" }}>
            <span>Showing {filtered.length} message{filtered.length !== 1 ? "s" : ""}</span>
            <div style={{ display: "flex", gap: "6px" }}>
              {[1, 2, 3].map((p) => (
                <button key={p} style={{
                  width: "28px", height: "28px", borderRadius: "6px",
                  border: p === 1 ? "none" : "1px solid #E5E7EB",
                  background: p === 1 ? "#155DFC" : "#fff",
                  color: p === 1 ? "#fff" : "#374151",
                  fontSize: "12px", cursor: "pointer", fontWeight: 500,
                }}>{p}</button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}