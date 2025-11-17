interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const menuItems = [
    'Home',
    'Services',
    'Portfolio',
    'About',
    'Contact'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
      <nav className="text-center">
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white text-2xl hover:text-[#c5e5d8] transition-colors"
                onClick={onClose}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
