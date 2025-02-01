import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons"; // Example Radix UI icon
import "./MobileMenu.css"; // Ensure styles are linked

export default function MobileMenu() {
  return (
    <DropdownMenu.Root>
      {/* Floating Menu Button */}
      <DropdownMenu.Trigger asChild>
        <button className="menu-button">
          <HamburgerMenuIcon width={24} height={24} />
        </button>
      </DropdownMenu.Trigger>

      {/* Dropdown Menu */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="dropdown-menu-content" sideOffset={8}>
          <DropdownMenu.Item className="dropdown-menu-item">Home</DropdownMenu.Item>
          <DropdownMenu.Item className="dropdown-menu-item">Settings</DropdownMenu.Item>
          <DropdownMenu.Item className="dropdown-menu-item">Logout</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
