'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useState, useRef, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { IconChevronDown } from '@/assets/icons';
import Icon from '@/components/atoms/Icon';
import Dropdown from '@/components/molecules/Dropdown';
import { NavItem as NavItemProps } from './types';
import styles from './NavItem.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = NavItemProps & React.HTMLAttributes<HTMLElement>;

const NavItem = ({
  label,
  href,
  dropdownItems,
  dropdownCta,
  dropdownTitle,
  dropdownButton,
  groups,
  rentalLocations,
  modButton,
  modDropdown,
  onClick,
}: Props) => {
  const modal = useRef<HTMLDialogElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const pathname = usePathname();

  const openDropdown = () => {
    modal.current?.showModal();
    document.body.setAttribute('style', 'overflow-y: hidden');
  };

  const closeDropdown = useCallback(() => {
    setToggle(false);
    modal.current?.close();
    document.body.removeAttribute('style');
  }, [modal]);

  useEffect(() => {
    const closeKeyDownHandler = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      closeDropdown();
      document.removeEventListener('keydown', closeKeyDownHandler);
    };

    const clickHandler = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!modal || !modal.current || !target) {
        return;
      }

      const inner = document.querySelector('#sub-navigation-inner');
      if (!inner || !(inner instanceof HTMLElement)) {
        return;
      }

      if (inner.contains(target)) {
        return;
      }

      const rect = inner.getBoundingClientRect();
      if (
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom &&
        event.clientX >= rect.left &&
        event.clientX <= rect.right
      ) {
        return;
      }

      closeDropdown();
      document.removeEventListener('click', clickHandler);
    };

    if (toggle) {
      document.addEventListener('keydown', closeKeyDownHandler);
      document.addEventListener('click', clickHandler);
    }

    return () => {
      document.removeEventListener('keydown', closeKeyDownHandler);
      document.removeEventListener('click', clickHandler);
    };
  });

  const openClickHandler = useCallback(() => {
    setToggle(!toggle);
    openDropdown();
  }, [toggle]);

  useEffect(() => {
    closeDropdown();
  }, [pathname, closeDropdown]);

  if (modDropdown) {
    return (
      <li className="nav-item nav-item__dropdown-trigger">
        <button
          className="nav-item__dropdown-trigger__link nav-item__dropdown-trigger__link--large"
          onClick={() => openClickHandler()}
        >
          {label}
          <Icon
            size="sm"
            icon={IconChevronDown}
            className="nav-item__dropdown-trigger__link__chevron"
            title="Chevron"
          />
        </button>
        {dropdownButton && dropdownTitle && dropdownCta && (
          <dialog className="nav-item__dropdown" ref={modal} role="none">
            <Dropdown
              path={href}
              dropdownItems={dropdownItems}
              dropdownTitle={dropdownTitle}
              dropdownCta={dropdownCta}
              dropdownButton={dropdownButton}
              groups={groups}
              rentalLocations={rentalLocations}
              toggleDropdown={closeDropdown}
            />
          </dialog>
        )}
      </li>
    );
  }

  if (modButton) {
    return (
      <button onClick={onClick} className="nav-item">
        {label}
      </button>
    );
  }

  return (
    <li className="nav-item">
      <Link href={href} className="nav-item__dropdown-trigger__link">
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
