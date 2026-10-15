import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918530658864"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group sm:bottom-6 sm:right-6 sm:p-4"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp-floating"
    >
      <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
