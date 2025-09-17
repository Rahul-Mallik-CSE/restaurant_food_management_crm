/** @format */

export interface HeaderProps {
  title: string;
  description: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
}
