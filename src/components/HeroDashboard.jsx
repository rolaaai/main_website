import React, { useState, useEffect, useRef } from "react";
import "./HeroDashboard.css";

const CONVERSATION_SCRIPT = [
  {
    speaker: "Harsh",
    text: "So, looking at the Q3 metrics, we're seeing a 20% uptake in API usage.",
    duration: 3000,
  },
  {
    speaker: "Vishal",
    text: "That's great. Is that driven by the new integration features?",
    duration: 3000,
  },
  {
    speaker: "Harsh",
    text: "Exactly. The new webhooks are really popular with enterprise clients.",
    duration: 3500,
  },
  {
    speaker: "Vishal",
    text: "Perfect. Let's double down on that for the next sprint.",
    duration: 3000,
  },
];

const HeroDashboard = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(null);
  const [transcript, setTranscript] = useState([]);
  const [scriptIndex, setScriptIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    const playScript = () => {
      const currentLine = CONVERSATION_SCRIPT[scriptIndex];

      // Set active speaker
      setActiveSpeaker(currentLine.speaker);

      // Add to transcript
      setTranscript((prev) => [
        ...prev,
        {
          id: Date.now(),
          speaker: currentLine.speaker,
          text: currentLine.text,
        },
      ]);

      // Schedule next line
      timeoutId = setTimeout(() => {
        setScriptIndex((prevIndex) => {
          if (prevIndex + 1 < CONVERSATION_SCRIPT.length) {
            return prevIndex + 1;
          } else {
            // Loop back to start after a pause
            setTimeout(() => {
              setTranscript([]);
              setScriptIndex(0);
            }, 2000);
            return prevIndex; // Hold on last index until reset
          }
        });
      }, currentLine.duration);
    };

    playScript();

    return () => clearTimeout(timeoutId);
  }, [scriptIndex]);

  // Auto-scroll to bottom of transcript
  useEffect(() => {
    const container = document.querySelector(".transcript-feed");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [transcript]);

  return (
    <div className="bot-broadcast-dashboard">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div className="sidebar-logo">
          <span className="sidebar-logo-text">Rolaa.ai</span>
        </div>

        <div className="sidebar-subtitle">Platform</div>
        <nav className="sidebar-nav">
          <button className="sidebar-item">
            <span className="sidebar-item-icon">🔍</span>
            <span>API Explorer</span>
          </button>
          <button className="sidebar-item active">
            <span className="sidebar-item-icon">📋</span>
            <span>Logs</span>
          </button>
          <button className="sidebar-item">
            <span className="sidebar-item-icon">🔗</span>
            <span>Webhooks</span>
          </button>
        </nav>

        <div className="sidebar-section-title">Setup & Integrations</div>
        <nav className="sidebar-nav">
          <button className="sidebar-item">
            <span className="sidebar-item-icon">🤖</span>
            <span>Meeting Bot Setup</span>
          </button>
          <button className="sidebar-item">
            <span className="sidebar-item-icon">📅</span>
            <span>Calendar Integration</span>
          </button>
          <button className="sidebar-item">
            <span className="sidebar-item-icon">📝</span>
            <span>Transcription</span>
          </button>
          <button className="sidebar-item">
            <span className="sidebar-item-icon">🖥️</span>
            <span>Desktop Recording</span>
            <span className="sidebar-badge">New</span>
          </button>
          <button className="sidebar-item">
            <span className="sidebar-item-icon">📖</span>
            <span>Read the Docs</span>
          </button>
          <button className="sidebar-item">
            <span className="sidebar-item-icon">💰</span>
            <span>Pricing</span>
          </button>
          <button className="sidebar-item">
            <span className="sidebar-item-icon">⬆️</span>
            <span>Upgrade Plan</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-user-icon">HS</div>
            <div className="sidebar-user-info">
              <div className="sidebar-user-name">harsh srivastav</div>
              <div className="sidebar-user-email">@rolaa.ai:4:93</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content-wrapper">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <div className="dashboard-breadcrumb">
              <span className="breadcrumb-item">Home</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-item">Explorer</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-item active">Bot</span>
            </div>
          </div>

          <div className="dashboard-tabs">
            <button className="dashboard-tab active">Meeting URL</button>
            <button className="dashboard-tab">Status</button>
            <button className="dashboard-tab">Platform</button>
            <button className="dashboard-tab">Join At</button>
            <button className="dashboard-tab">Custom Metadata</button>
          </div>

          <div className="dashboard-table">
            <div className="table-header">
              <div className="table-col col-id">ID</div>
              <div className="table-col col-platform">Platform</div>
              <div className="table-col col-recording">Recording Length</div>
              <div className="table-col col-status">Status</div>
              <div className="table-col col-date">Date</div>
              <div className="table-col col-action">Action</div>
            </div>

            <div className="table-row">
              <div className="table-cell col-id">
                b1e2eac8-cfae-4d29-b1fe-1e43b6170c05
              </div>
              <div className="table-cell col-platform">
                <span className="platform-badge">📹 Meet</span>
              </div>
              <div className="table-cell col-recording">00:01:06</div>
              <div className="table-cell col-status">
                <span className="status-badge status-done">Done</span>
              </div>
              <div className="table-cell col-date">July 10 at 12:46 AM</div>
              <div className="table-cell col-action">
                <button className="action-btn">View ›</button>
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell col-id">
                ab6032c7-0cc6-4090-933e-b7e70ab33997
              </div>
              <div className="table-cell col-platform">
                <span className="platform-badge">📹 Meet</span>
              </div>
              <div className="table-cell col-recording">00:03:31</div>
              <div className="table-cell col-status">
                <span className="status-badge status-done">Done</span>
              </div>
              <div className="table-cell col-date">July 10 at 12:37 AM</div>
              <div className="table-cell col-action">
                <button className="action-btn">View ›</button>
              </div>
            </div>
          </div>
          {/* 
          <div className="dashboard-footer">
            <span className="results-count">1-2 of 2 results</span>
            <div className="pagination">
              <button className="pagination-btn" disabled>
                ‹
              </button>
              <button className="pagination-btn">›</button>
            </div>
          </div> */}
        </div>
        {/* video streaming section */}
        <div className="dashboard-video-stream">
          <div className="stream-section">
            <div className="video-grid">
              <div className="video-tile video-shared-screen">
                <div className="shared-screen-content">
                  {/* Placeholder for shared screen content */}
                  <div className="shared-screen-placeholder">
                    <div className="loading-spinner"></div>
                  </div>
                </div>
                <div className="video-label">Shared Screen</div>
              </div>

              <div
                className={`video-tile ${
                  activeSpeaker === "Vishal" ? "active-speaker" : ""
                }`}
              >
                <div className="video-placeholder">
                  <div className="avatar-large">👤</div>
                </div>
                <div className="video-label">Vishal</div>
              </div>
              <div
                className={`video-tile ${
                  activeSpeaker === "Harsh" ? "active-speaker" : ""
                }`}
              >
                <div className="video-placeholder">
                  <div className="avatar-large">👤</div>
                </div>
                <div className="video-label">Harsh</div>
              </div>
              <div className="video-tile">
                <div className="video-placeholder">
                  <div className="avatar-large">👤</div>
                </div>
                <div className="video-label">Mayank</div>
              </div>
            </div>
          </div>
          {/* transcript section */}
          <div className="transcript-section">
            <div className="transcript-header">
              <span className="transcript-icon">📝</span>
            </div>
            <div className="transcript-feed">
              {transcript.map((msg) => (
                <div key={msg.id} className="transcript-message">
                  <div className="message-speaker">{msg.speaker}</div>
                  <div className="message-text">{msg.text}</div>
                </div>
              ))}
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;
