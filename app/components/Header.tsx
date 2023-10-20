import React from 'react';

interface HeaderProps {
  title: string;
  user: string;
}

const Header: React.FC<HeaderProps> = ({ title, user }) => {
  return (
    <div className="flex justify-between px-4 pt-4">
      <h2>{title}</h2>
      <h2>Welcome back, {user}</h2>
    </div>
  );
};

export default Header;
