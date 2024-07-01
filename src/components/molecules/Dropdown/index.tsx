import { IconChevronDown } from '@/assets/icons';
import DropdownItem from '@/components/atoms/DropdownItem';
import Icon from '@/components/atoms/Icon';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import { Dropdown as DropdownProps, DropdownNavItem } from './types';
import styles from './Dropdown.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = DropdownProps & React.HTMLAttributes<HTMLElement>;

const Dropdown = ({
  itemKey,
  path,
  dropdownTitle,
  dropdownButton,
  dropdownCta,
  dropdownItems,
  groups,
  rentalLocations,
  toggleDropdown,
}: Props) => {
  let navItem: DropdownNavItem[] = [];
  if (path === '/takken') {
    navItem = groups!;
  }
  if (path === '/verhuur') {
    navItem = rentalLocations!;
  }

  return (
    <span className="dropdown__wrapper" id={`sub-navigation-inner-${itemKey}`}>
      <div className="dropdown">
        <div className="dropdown__content sl-layout">
          <Button
            variant="link1"
            onClick={() => toggleDropdown()}
            className="dropdown__content__back-button"
          >
            <Icon
              icon={IconChevronDown}
              className="dropdown__content__back-button__chevron"
              size="xs"
              title="Collapse"
            />
            Terug
          </Button>
          <div className="dropdown__nav">
            <p className="dropdown__nav__title t-headline-2">{dropdownTitle}</p>
            <ul className="dropdown__nav__list">
              {dropdownItems!.map((item, i) => {
                const dropdownItem = navItem.find(
                  (el) => el.slug === item.page.replace(new RegExp('_', 'g'), '-'),
                );
                if (dropdownItem) {
                  return (
                    <DropdownItem
                      key={`dropdown-${path}-${i}`}
                      title={item.label}
                      description={dropdownItem.description}
                      href={`${path}/${dropdownItem.slug}`}
                    />
                  );
                }
              })}
            </ul>
            <Button
              label={dropdownButton.label}
              href={dropdownButton.href}
              modSmall
              className="dropdown__nav__button"
            />
          </div>
          <div className="dropdown__cta">
            <p className="dropdown__cta__title t-headline-2">{dropdownCta.title}</p>
            <Typography data={dropdownCta.intro} className="dropdown__cta__intro" modNoStyle />
            <Button
              label={dropdownCta.ctaLabel}
              href={dropdownCta.ctaLink}
              modSmall
              className="dropdown__cta__button"
            />
          </div>
        </div>
      </div>
    </span>
  );
};

export default Dropdown;
