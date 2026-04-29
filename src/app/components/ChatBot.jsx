"use client";

import { forwardRef, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

// ─── Constantes ───────────────────────────────────────────────────────────────
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
const WHATSAPP_PHONE = "5493541560518";
const ease = [0.16, 1, 0.3, 1];

function createInitialMessage(content) {
  return {
  role: "assistant",
    content,
  id: "init",
  ts: new Date(),
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmtTime(date, locale) {
  return (
    date?.toLocaleTimeString(locale, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }) ?? ""
  );
}

function buildWhatsAppUrl(message = "") {
  const encodedMessage = encodeURIComponent(message.trim());
  return encodedMessage
    ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`
    : `https://wa.me/${WHATSAPP_PHONE}`;
}

function parseSSEBlock(block) {
  const lines = block
    .trim()
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  let eventName = null;
  const dataLines = [];

  for (const line of lines) {
    if (line.startsWith("event:")) {
      eventName = line.slice(6).trim();
    }

    if (line.startsWith("data:")) {
      dataLines.push(line.slice(5).trim());
    }
  }

  if (!eventName || dataLines.length === 0) {
    return null;
  }

  try {
    return {
      eventName,
      payload: JSON.parse(dataLines.join("\n")),
    };
  } catch {
    return null;
  }
}

function stripInternalTags(text = "") {
  return text
    .replace(/<\/?(?:system-reminder|lead_update)\b[^>]*>/gi, " ")
    .replace(/<[^>]+>/g, " ");
}

function stripUnsafeArtifacts(text = "") {
  return text
    .replace(/(?:https?:\/\/|www\.)\S+/gi, " ")
    .replace(/\+?\d[\d\s()-]{7,}\d/g, " ");
}

function normalizeAssistantText(text = "") {
  return text.replace(/\s+/g, " ").trim();
}

function isHandoffLikeMessage(text = "") {
  return /(seguimos por whatsapp|let'?s continue on whatsapp|ya tengo contexto suficiente|ya tengo suficiente info|i already have enough info|equipo comercial|talk to the team|boton de abajo|button below)/i.test(
    text,
  );
}

function sanitizeAssistantText(text = "") {
  const withoutInternalTags = stripInternalTags(text);
  const withoutUnsafeArtifacts = stripUnsafeArtifacts(withoutInternalTags);
  return normalizeAssistantText(withoutUnsafeArtifacts);
}

function hasAssistantHandoffMessage(messages = []) {
  return messages
    .slice(-4)
    .filter((message) => message.role === "assistant")
    .some((message) => isHandoffLikeMessage(sanitizeAssistantText(message.content)));
}

// ─── Icono de chat ────────────────────────────────────────────────────────────
function ChatIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 12h.01M12 12h.01M16 12h.01M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3l3 3 3-3h4a2 2 0 0 0 2-2V8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WAIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Typing dots mejorado ──────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-[2px]">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1, 0.8] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
          className="block w-[5px] h-[5px] rounded-full"
          style={{ background: "#A1E233" }}
        />
      ))}
    </div>
  );
}

// ─── Noise texture SVG inline ────────────────────────────────────────────────
const NoiseFilter = () => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.65"
        numOctaves="3"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
      <feBlend in="SourceGraphic" mode="overlay" result="blend" />
      <feComposite in="blend" in2="SourceGraphic" operator="in" />
    </filter>
  </svg>
);

// ─── Header ───────────────────────────────────────────────────────────────────
function ChatHeader({ onClose, strings, timeLocale }) {
  const [tick, setTick] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTick(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative flex items-center gap-3 px-4 py-3 select-none"
      style={{
        background:
          "linear-gradient(135deg, rgba(161,226,51,0.06) 0%, transparent 60%)",
        borderBottom: "1px solid rgba(255,255,255,0.055)",
      }}
    >
      {/* Avatar con anillos concéntricos */}
      <div className="relative flex-shrink-0">
        <div
          className="relative flex size-9 items-center justify-center rounded-full z-10"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(161,226,51,0.25) 0%, rgba(161,226,51,0.05) 100%)",
            border: "1px solid rgba(161,226,51,0.35)",
            boxShadow:
              "0 0 12px rgba(161,226,51,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* S de Synttek */}
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "15px",
              fontWeight: 700,
              color: "#A1E233",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            S
          </span>
        </div>

        {/* Pulso exterior */}

      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.01em",
              lineHeight: 1,
              marginBottom: "3px",
            }}
          >
            {strings.headerTitle}
          </p>

        </div>
        <div className="flex items-center gap-1.5">
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block size-[5px] rounded-full flex-shrink-0"
            style={{ background: "#A1E233" }}
          />
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "9px",
              color: "rgba(161,226,51,0.55)",
              letterSpacing: "0.1em",
            }}
          >
            {strings.online}
          </span>
        </div>
      </div>

      {/* Reloj */}
      <span
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "10px",
          color: "rgba(255,255,255,0.18)",
          letterSpacing: "0.05em",
          marginRight: "6px",
        }}
      >
        {fmtTime(tick, timeLocale)}
      </span>

      {/* Cerrar */}
      <button
        onClick={onClose}
        aria-label={strings.close}
        className="flex size-[26px] items-center justify-center rounded-md transition-colors hover:bg-white/[0.06]"
        style={{
          border: "0.5px solid rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.3)",
        }}
      >
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path
            d="M1 8L8 1M1 1L8 8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

// ─── Burbuja de mensaje ───────────────────────────────────────────────────────
function MessageBubble({ msg, index, timeLocale }) {
  const isUser = msg.role === "user";
  const content = isUser ? msg.content : sanitizeAssistantText(msg.content);

  if (!isUser && !content) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease, delay: index === 0 ? 0 : 0 }}
      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
    >
      {/* Label tipo "terminal" */}
      <span
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "8.5px",
          letterSpacing: "0.12em",
          color: isUser ? "rgba(161,226,51,0.35)" : "rgba(255,255,255,0.2)",
          marginBottom: "4px",
          paddingLeft: isUser ? 0 : "2px",
          paddingRight: isUser ? "2px" : 0,
        }}
      >
        {isUser ? "YOU" : "SYN"} · {fmtTime(msg.ts ?? new Date(), timeLocale)}
      </span>

      <div
        className="relative max-w-[85%] text-[12.5px] leading-relaxed"
        style={{
          padding: "10px 14px",
          borderRadius: isUser ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
          ...(isUser
            ? {
                background:
                  "linear-gradient(135deg, rgba(161,226,51,0.13) 0%, rgba(161,226,51,0.07) 100%)",
                border: "0.5px solid rgba(161,226,51,0.25)",
                color: "rgba(255,255,255,0.82)",
              }
            : {
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.68)",
              }),
        }}
      >
        {/* Línea lateral para mensajes del bot */}
        {!isUser && (
          <span
            className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(161,226,51,0.5), rgba(161,226,51,0.1))",
            }}
          />
        )}
        {content}
      </div>
    </motion.div>
  );
}

// ─── Input area ───────────────────────────────────────────────────────────────
const ChatInput = forwardRef(function ChatInput(
  { value, onChange, onKeyDown, onSubmit, disabled, strings },
  ref,
) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-3"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Prompt symbol */}
      <span
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "11px",
          color: "rgba(161,226,51,0.4)",
          flexShrink: 0,
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        &gt;
      </span>

      <input
        ref={ref}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={strings.inputPlaceholder}
        disabled={disabled}
        className="flex-1 bg-transparent text-[12.5px] outline-none disabled:opacity-40"
        style={{
          color: "rgba(255,255,255,0.72)",
          caretColor: "#A1E233",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.01em",
        }}
      />

      <motion.button
        onClick={onSubmit}
        disabled={!value.trim() || disabled}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg disabled:opacity-25 transition-all"
        style={{
          background:
            value.trim() && !disabled ? "#A1E233" : "rgba(161,226,51,0.08)",
          border: "0.5px solid rgba(161,226,51,0.3)",
          color: value.trim() && !disabled ? "#000" : "rgba(161,226,51,0.4)",
          transition: "background 0.2s, color 0.2s",
        }}
        aria-label={strings.send}
      >
        <SendIcon />
      </motion.button>
    </div>
  );
});

// ─── WhatsApp CTA ─────────────────────────────────────────────────────────────
function WhatsAppCTA({ url, strings }) {
  return (
    <AnimatePresence>
      {url && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden px-3 pb-2"
        >
          {/* Separador */}
          <div className="flex items-center gap-2 mb-2.5">
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <span
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "8px",
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "0.12em",
              }}
            >
              {strings.nextStep}
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>

          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 w-full rounded-xl px-3.5 py-3 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,211,102,0.1) 0%, rgba(37,211,102,0.05) 100%)",
              border: "0.5px solid rgba(37,211,102,0.3)",
            }}
          >
            {/* Shimmer on hover */}
            <motion.span
              className="pointer-events-none absolute inset-0"
              initial={false}
              whileHover={{ opacity: 1 }}
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(37,211,102,0.06), transparent)",
                opacity: 0,
              }}
            />

            <div
              className="flex size-8 items-center justify-center rounded-lg flex-shrink-0"
              style={{
                background: "rgba(37,211,102,0.15)",
                border: "0.5px solid rgba(37,211,102,0.25)",
                color: "#25D366",
              }}
            >
              <WAIcon size={15} />
            </div>

            <div className="flex-1 min-w-0">
              <p
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "8.5px",
                  color: "rgba(37,211,102,0.5)",
                  letterSpacing: "0.14em",
                  marginBottom: "2px",
                }}
              >
                {strings.enoughInfo}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                {strings.talkToTeam} →
              </p>
            </div>

            <div
              className="flex size-6 items-center justify-center rounded-md flex-shrink-0"
              style={{
                background: "rgba(37,211,102,0.1)",
                border: "0.5px solid rgba(37,211,102,0.2)",
              }}
            >
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path
                  d="M1 8L8 1M8 1H3M8 1V6"
                  stroke="#25D366"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── FAB con diseño elevado ───────────────────────────────────────────────────
function ChatFAB({ isOpen, onClick, strings }) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={isOpen ? strings.close : strings.open}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.93 }}
      className="relative flex size-[54px] cursor-pointer items-center justify-center rounded-full"
      style={
        isOpen
          ? {
              background: "rgba(10,10,10,0.95)",
              border: "1px solid rgba(161,226,51,0.3)",
              boxShadow:
                "0 0 0 5px rgba(161,226,51,0.05), 0 8px 24px rgba(0,0,0,0.5)",
              color: "#A1E233",
            }
          : {
              background:
                "linear-gradient(135deg, #b8f040 0%, #A1E233 50%, #8acc1f 100%)",
              boxShadow:
                "0 6px 28px rgba(161,226,51,0.35), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)",
              color: "#000",
            }
      }
    >
      {/* Badge de notificación */}
      {!isOpen && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 1.5 }}
          className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full text-[8px] font-bold"
          style={{
            background: "#fff",
            color: "#A1E233",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          }}
        >
          1
        </motion.span>
      )}

      {/* Ícono */}
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 12L12 2M2 2L12 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </motion.span>
        ) : (
          <motion.span
            key="chat"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease }}
          >
            <ChatIcon size={21} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function ChatBot() {
  const t = useTranslations("ChatBot");
  const strings = {
    headerTitle: t("headerTitle"),
    online: t("online"),
    close: t("close"),
    open: t("open"),
    inputPlaceholder: t("inputPlaceholder"),
    send: t("send"),
    nextStep: t("nextStep"),
    enoughInfo: t("enoughInfo"),
    talkToTeam: t("talkToTeam"),
    processing: t("processing"),
    poweredBy: t("poweredBy"),
  };
  const timeLocale = t("timeLocale");
  const [heroGone, setHeroGone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("main > section:first-child");
    if (!hero) {
      setHeroGone(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => setHeroGone(!e.isIntersecting),
      { threshold: 0.05 },
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const sync = () =>
      setMenuOpen(document.body.dataset.mobileMenuOpen === "true");
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-mobile-menu-open"],
    });
    return () => mo.disconnect();
  }, []);

  const shouldShow = heroGone && !menuOpen;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    createInitialMessage(t("initialMessage")),
  ]);
  const [leadState, setLeadState] = useState({});
  const [readyForWhatsApp, setReadyForWhatsApp] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [whatsappUrl, setWhatsappUrl] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);
  const leadStateRef = useRef(leadState);
  const handoffMessageShownRef = useRef(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  useEffect(() => {
    document.body.dataset.chatOpen = isOpen ? "true" : "false";

    return () => {
      delete document.body.dataset.chatOpen;
    };
  }, [isOpen]);

  useEffect(() => {
    leadStateRef.current = leadState;
  }, [leadState]);

  useEffect(() => {
    if (!readyForWhatsApp) {
      handoffMessageShownRef.current = false;
    }
  }, [readyForWhatsApp]);

  const fetchWhatsAppSummary = useCallback(async (currentLeadState) => {
    try {
      const res = await fetch(`${API_BASE}/api/chat/whatsapp-summary`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadState: currentLeadState }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const { message } = await res.json();
      const normalizedMessage =
        typeof message === "string" ? message.trim() : "";

      setWhatsappUrl(buildWhatsAppUrl(normalizedMessage));
    } catch {
      setWhatsappUrl(buildWhatsAppUrl());
    }
  }, []);

  const pushFrontendHandoffMessage = useCallback(() => {
    if (handoffMessageShownRef.current) return;

    setMessages((prev) => {
      if (hasAssistantHandoffMessage(prev)) {
        handoffMessageShownRef.current = true;
        return prev;
      }

      handoffMessageShownRef.current = true;

      return [
        ...prev,
        {
          role: "assistant",
          content: t("handoffReply"),
          id: `handoff-${Date.now()}`,
          ts: new Date(),
        },
      ];
    });
  }, [t]);

  const sendMessage = useCallback(
    async (userContent) => {
      if (!userContent.trim() || isLoading) return;

      const userMsg = {
        role: "user",
        content: userContent.trim(),
        id: Date.now(),
        ts: new Date(),
      };
      const nextMessages = [...messages, userMsg];

      setMessages(nextMessages);
      setInputValue("");
      setIsLoading(true);
      setError(null);
      setReadyForWhatsApp(false);
      setWhatsappUrl(null);
      handoffMessageShownRef.current = false;

      if (abortRef.current) abortRef.current.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      let streamLeadState = leadStateRef.current;
      let activeAssistantMessageId = null;

      const apiMessages = nextMessages.map(({ role, content }) => ({
        role,
        content,
      }));

      try {
        const res = await fetch(`${API_BASE}/api/chat/stream`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "text/event-stream",
          },
          body: JSON.stringify({ messages: apiMessages, leadState: streamLeadState }),
          signal: controller.signal,
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || `HTTP ${res.status}`);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        const processBlocks = async (rawBlocks) => {
          for (const block of rawBlocks) {
            const parsedEvent = parseSSEBlock(block);

            if (!parsedEvent) continue;

            const { eventName, payload } = parsedEvent;

            switch (eventName) {
              case "text":
                if (!payload.chunk) break;

                const sanitizedChunk = sanitizeAssistantText(payload.chunk);

                if (!sanitizedChunk) break;

                setMessages((prev) => {
                  const lastMessage = prev.at(-1);

                  if (
                    activeAssistantMessageId &&
                    lastMessage?.role === "assistant" &&
                    lastMessage.id === activeAssistantMessageId
                  ) {
                    return [
                      ...prev.slice(0, -1),
                      {
                        ...lastMessage,
                        content: `${lastMessage.content}${sanitizedChunk}`,
                        ts: new Date(),
                      },
                    ];
                  }

                  activeAssistantMessageId = `assistant-${Date.now()}`;

                  return [
                    ...prev,
                    {
                      role: "assistant",
                      content: sanitizedChunk,
                      id: activeAssistantMessageId,
                      ts: new Date(),
                    },
                  ];
                });
                break;
              case "lead_update":
                streamLeadState = { ...streamLeadState, ...payload };
                leadStateRef.current = streamLeadState;
                setLeadState(streamLeadState);
                break;
              case "ready_for_whatsapp":
                setReadyForWhatsApp(Boolean(payload.value));

                if (payload.value) {
                  await fetchWhatsAppSummary(streamLeadState);
                  pushFrontendHandoffMessage();
                }
                break;
              case "error":
                setError(
                  payload.message || t("errorRetry"),
                );
                break;
              default:
                break;
            }
          }
        };

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            buffer += decoder.decode();
            break;
          }

          buffer += decoder.decode(value, { stream: true });
          const blocks = buffer.split(/\r?\n\r?\n/);
          buffer = blocks.pop();
          await processBlocks(blocks);
        }

        if (buffer.trim()) {
          await processBlocks([buffer]);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(t("errorConnection"));
        }
      } finally {
        setIsLoading(false);
      }
    },
    [fetchWhatsAppSummary, isLoading, messages, pushFrontendHandoffMessage, t],
  );

  const handleSubmit = useCallback(
    (e) => {
      e?.preventDefault();
      sendMessage(inputValue);
    },
    [inputValue, sendMessage],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  const toggleChat = useCallback(() => {
    setIsOpen((v) => !v);
    setError(null);
  }, []);

  return (
    <>
      <NoiseFilter />

      <AnimatePresence>
        {shouldShow && (
          <motion.div
            key="chatbot-root"
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            transition={{ duration: 0.5, ease }}
            className="fixed bottom-[calc(1.5rem+64px)] right-6 z-[10001] md:bottom-[calc(2rem+88px)] md:right-8"
          >
            {/* ── Panel de chat ─────────────────────────────────────────────── */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="chat-panel"
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.93,
                    transformOrigin: "bottom right",
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 14, scale: 0.94 }}
                  transition={{ duration: 0.45, ease }}
                  className="absolute bottom-[68px] right-0 w-[348px] sm:w-[375px] rounded-[22px] overflow-hidden"
                  style={{
                    background: "rgba(8,8,8,0.97)",
                    border: "0.5px solid rgba(255,255,255,0.09)",
                    backdropFilter: "blur(32px) saturate(180%)",
                    WebkitBackdropFilter: "blur(32px) saturate(180%)",
                    boxShadow:
                      "0 40px 100px rgba(0,0,0,0.8), 0 0 0 0.5px rgba(255,255,255,0.04), 0 0 60px rgba(161,226,51,0.04)",
                  }}
                >
                  {/* Corner accent lines — detalle de precision */}
                  <div
                    className="absolute top-0 left-0 w-8 h-8 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(161,226,51,0.12) 0%, transparent 60%)",
                      borderRadius: "22px 0 0 0",
                    }}
                  />
                  <div
                    className="absolute top-0 right-0 w-16 h-[1px] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, rgba(161,226,51,0.2))",
                    }}
                  />
                  <div
                    className="absolute top-0 right-0 h-16 w-[1px] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(161,226,51,0.2), transparent)",
                    }}
                  />

                  {/* Header */}
                  <ChatHeader onClose={toggleChat} strings={strings} timeLocale={timeLocale} />

                  {/* Messages area */}
                  <div
                    className="flex flex-col gap-3 px-4 pt-4 pb-3 overflow-y-auto"
                    style={{
                      maxHeight: "300px",
                      minHeight: "150px",
                      scrollbarWidth: "none",
                    }}
                  >
                    {/* Subtle grid background */}
                    <div
                      className="absolute inset-x-0 pointer-events-none"
                      style={{
                        top: "62px",
                        height: "300px",
                        backgroundImage:
                          "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                        maskImage:
                          "linear-gradient(to bottom, transparent, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.3) 70%, transparent)",
                      }}
                    />

                    {messages.map((msg, i) => (
                      <MessageBubble key={msg.id} msg={msg} index={i} timeLocale={timeLocale} />
                    ))}

                    {/* Typing */}
                    <AnimatePresence>
                      {isLoading && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          className="flex flex-col items-start"
                        >
                          <span
                            style={{
                              fontFamily: "'Courier New', monospace",
                              fontSize: "8.5px",
                              letterSpacing: "0.12em",
                              color: "rgba(255,255,255,0.2)",
                              marginBottom: "4px",
                              paddingLeft: "2px",
                            }}
                          >
                            {`SYN · ${strings.processing}`}
                          </span>
                          <div
                            className="rounded-[14px] rounded-tl-[4px] px-3.5 py-2.5"
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              border: "0.5px solid rgba(255,255,255,0.08)",
                              position: "relative",
                              paddingLeft: "18px",
                            }}
                          >
                            <span
                              className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full"
                              style={{
                                background:
                                  "linear-gradient(to bottom, rgba(161,226,51,0.5), rgba(161,226,51,0.1))",
                              }}
                            />
                            <TypingDots />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Error */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-[11px] text-center px-3 py-2 rounded-lg"
                          style={{
                            background: "rgba(239,68,68,0.08)",
                            border: "0.5px solid rgba(239,68,68,0.2)",
                            color: "rgba(255,120,120,0.8)",
                            fontFamily: "'Courier New', monospace",
                            letterSpacing: "0.03em",
                          }}
                        >
                          ⚠ {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div ref={messagesEndRef} />
                  </div>

                  {/* WhatsApp CTA */}
                  {readyForWhatsApp && whatsappUrl && (
                    <WhatsAppCTA url={whatsappUrl} strings={strings} />
                  )}

                  {/* Input */}
                  <ChatInput
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onSubmit={handleSubmit}
                    disabled={isLoading}
                    strings={strings}
                  />

                  {/* Footer branding */}
                  <div
                    className="flex items-center justify-center pb-2.5"
                    style={{ borderTop: "0.5px solid rgba(255,255,255,0.04)" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "8px",
                        color: "rgba(255,255,255,0.14)",
                        letterSpacing: "0.14em",
                      }}
                    >
                      {`${strings.poweredBy} Synttek · AI`}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* FAB */}
            <ChatFAB isOpen={isOpen} onClick={toggleChat} strings={strings} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
