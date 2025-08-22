import { useEffect, useRef, useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);

  // Get API key from environment variable
  const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  async function handleSend(e) {
    e.preventDefault();
    const content = input.trim();
    if (!content) return;

    if (!OPENROUTER_API_KEY) {
      setError(
        "Missing API key. Please check your .env file and restart the dev server or conatct Akshay!"
      );
      return;
    }

    setError("");

    const nextMessages = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");

    setIsLoading(true);
    try {
      const requestBody = {
        model: "anthropic/claude-3.7-sonnet",
        max_tokens: 512,
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          ...nextMessages.map((m) => ({ role: m.role, content: m.content })),
        ],
      };

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": window.location.origin,
          "X-Title": "Akshay LLM Chat Box",
        },
        body: JSON.stringify(requestBody),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        let errorMessage = `Request failed with status ${res.status}`;

        if (errorData.error?.code === 401) {
          errorMessage =
            "Invalid API key. Please check your OpenRouter API key.";
        } else if (errorData.error?.code === 402) {
          errorMessage =
            "Insufficient credits. Please add credits to your OpenRouter account.";
        } else if (errorData.error?.message) {
          errorMessage = errorData.error.message;
        }

        throw new Error(errorMessage);
      }

      const data = await res.json();
      const contentResp = data?.choices?.[0]?.message?.content;
      const assistantMessage =
        typeof contentResp === "string"
          ? contentResp
          : JSON.stringify(contentResp);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantMessage },
      ]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setError(msg);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${msg}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col">
      {/* <header className="border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-black border border-white" />
          <h1 className="text-sm font-semibold">AM 🚀</h1>
        </div>
        <div className="text-xs text-gray-400">via OpenRouter</div>
      </header> */}

      <main ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
        <div className="mx-auto max-w-3xl space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-300 py-16">
              <div className="text-4xl font-bold mb-2">AKSHAY' AI CHAT</div>
              <div className="text-sm text-gray-400 font-semibold italic mb-4">
                powered by Claude Sonnet 3.7
              </div>
              {/* {!OPENROUTER_API_KEY ? (
                <div className="text-xs text-red-400 max-w-md mx-auto">
                  ⚠️ API key not found. Please create a .env file with
                  VITE_OPENROUTER_API_KEY and restart the dev server.
                </div>
              ) : (
                <div className="text-xs text-gray-500 max-w-md mx-auto">
                  Ready to chat! If you encounter issues, check the browser
                  console for debugging info.
                </div>
              )} */}
            </div>
          )}

          {messages.map((m, idx) => {
            const isUser = m.role === "user";
            return (
              <div
                key={idx}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex items-start gap-3 max-w-[85%]`}>
                  {!isUser && (
                    <div className="h-8 w-8 rounded-full bg-black border border-white flex items-center justify-center text-xs font-semibold">
                      A
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-wrap ${
                      isUser
                        ? "bg-black border border-white text-white"
                        : "bg-black border border-gray-700 text-white"
                    }`}
                  >
                    {m.content}
                  </div>
                  {isUser && (
                    <div className="h-8 w-8 rounded-full bg-black border border-white flex items-center justify-center text-xs font-semibold">
                      U
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulse" />
                Thinking...
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-800 p-4">
        <form onSubmit={handleSend} className="mx-auto max-w-3xl">
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message Claude..."
              rows={1}
              className="flex-1 resize-none rounded-xl bg-black border border-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent px-4 py-3 text-sm"
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                isLoading
                  ? "bg-gray-800 text-gray-400 cursor-not-allowed border border-gray-700"
                  : "bg-black hover:bg-gray-900 text-white border border-white"
              }`}
            >
              Send
            </button>
          </div>
          {error && <div className="text-xs text-red-400 mt-2">{error}</div>}
          <div className="text-[10px] text-gray-500 mt-2">
            Powered by Claude & OpenRouter.
          </div>
        </form>
      </footer>
    </div>
  );
}
// 9
