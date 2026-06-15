export default function TelegramButton() {
  return (
    <a
      href="https://t.me/+79263594748"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#229ED9] text-white px-4 py-3 shadow-lg hover:bg-[#1a8bbf] transition-colors duration-300 rounded-full"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.281c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.088 14.02l-2.95-.924c-.642-.2-.654-.642.136-.953l11.52-4.44c.537-.194 1.006.131.768.945z"/>
      </svg>
      <span className="text-sm font-medium">Написать в Telegram</span>
    </a>
  );
}
