'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import Link from 'next/link';
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
  itemKey,
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
  const closeButton = useRef<HTMLButtonElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const pathname = usePathname();

  const openDropdown = useCallback(() => {
    modal.current?.showModal();
    document.body.setAttribute('style', 'overflow-y: hidden');
    closeButton.current?.focus();
  }, [modal]);

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

      const inner = document.querySelector(`#sub-navigation-inner-${itemKey}`);
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
  }, [toggle, openDropdown]);

  const closeClickHandler = useCallback(() => {
    setToggle(false);
    closeDropdown();
  }, [closeDropdown]);

  useEffect(() => {
    closeDropdown();
  }, [pathname, closeDropdown]);

  const navItemClassNames = classNames(
    'nav-item',
    toggle ? 'nav-item--toggled' : 'nav-item--untoggled',
    href && href === '/' && pathname === '/' ? 'nav-item--active' : '',
    href && href !== '/' && pathname?.includes(href.toLowerCase()) ? 'nav-item--active' : '',
  );

  if (modDropdown) {
    return (
      <li className={navItemClassNames}>
        <button
          className="nav-item__dropdown-trigger__link"
          onClick={() => openClickHandler()}
          type="button"
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
            <button
              ref={closeButton}
              onClick={() => closeClickHandler()}
              type="button"
              className="u-visually-hidden"
            >
              Close dropdown
            </button>
            <Dropdown
              itemKey={itemKey}
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
      <li className={navItemClassNames}>
        <button onClick={onClick} className="nav-item__dropdown-trigger__link">
          {label}
        </button>
      </li>
    );
  }

  return (
    <li className={navItemClassNames}>
      <Link href={href || ''} className="nav-item__dropdown-trigger__link">
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
