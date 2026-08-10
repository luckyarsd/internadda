"use client"

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918287742390?text=Hi%20InternAdda%20Team!%20I%20have%20a%20query%20about%20opportunities."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with InternAdda Helpdesk on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-200 group"
    >
      {/* Inline WhatsApp SVG Icon */}
      <svg
        className="w-5 h-5 fill-current flex-shrink-0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.594-1.03 3.76 3.774-.987 1.005 1.599zm10.741-6.726c-.287-.144-1.696-.837-1.958-.933-.262-.096-.453-.144-.644.144-.191.287-.741.933-.908 1.124-.167.191-.334.215-.621.072-1.652-.826-2.748-1.482-3.856-3.376-.293-.502.293-.466.838-1.554.096-.191.048-.359-.024-.502-.072-.144-.644-1.554-.883-2.127-.233-.559-.47-.483-.644-.492l-.55-.008c-.191 0-.502.072-.765.359s-1.004.981-1.004 2.394 1.027 2.776 1.171 2.967c.144.191 2.023 3.088 4.901 4.331.685.296 1.22.472 1.637.605.687.218 1.312.187 1.806.114.551-.082 1.696-.693 1.935-1.363.239-.67.239-1.244.167-1.363-.072-.119-.263-.191-.55-.335z" />
      </svg>
      <span className="text-xs font-bold tracking-wide pr-0.5 hidden sm:inline">Chat on WhatsApp</span>
    </a>
  )
}
