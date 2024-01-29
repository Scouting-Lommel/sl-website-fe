import type { Meta, StoryObj } from '@storybook/react';
import { Icon as IconProps } from './types';
import Icon from '.';
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconCalendar,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconClose,
  IconEdit,
  IconFacebook,
  IconInstagram,
  IconLock,
  IconMail,
  IconMenu,
  IconTikTok,
  IconJPG,
  IconPDF,
  IconPNG,
  IconPowerpoint,
  IconWord,
  IconUnknownFile,
} from '@/assets/icons';

const IconList = () => {
  return (
    <>
      <div className="sb-section">
        <h2 className="sb-heading__2">Icons</h2>

        <h3 className="sb-heading__3">Arrows</h3>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconArrowDown} title="Arrow down" size={'lg'} />
            <div className="sb-list__item__title">Arrow down</div>
          </div>
          <div className="sb-code--styled">IconArrowDown</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconArrowLeft} title="Arrow left" size={'lg'} />
            <div className="sb-list__item__title">Arrow left</div>
          </div>
          <div className="sb-code--styled">IconArrowLeft</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconArrowRight} title="Arrow right" size={'lg'} />
            <div className="sb-list__item__title">Arrow right</div>
          </div>
          <div className="sb-code--styled">IconArrowRight</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconArrowUp} title="Arrow up" size={'lg'} />
            <div className="sb-list__item__title">Arrow up</div>
          </div>
          <div className="sb-code--styled">IconArrowUp</div>
        </div>

        <h3 className="sb-heading__3">Chevrons</h3>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconChevronDown} title="Chevron down" size={'lg'} />
            <div className="sb-list__item__title">Chevron down</div>
          </div>
          <div className="sb-code--styled">IconChevronDown</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconChevronLeft} title="Chevron left" size={'lg'} />
            <div className="sb-list__item__title">Chevron left</div>
          </div>
          <div className="sb-code--styled">IconChevronLeft</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconChevronRight} title="Chevron right" size={'lg'} />
            <div className="sb-list__item__title">Chevron right</div>
          </div>
          <div className="sb-code--styled">IconChevronRight</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconChevronUp} title="Chevron up" size={'lg'} />
            <div className="sb-list__item__title">Chevron up</div>
          </div>
          <div className="sb-code--styled">IconChevronUp</div>
        </div>

        <h3 className="sb-heading__3">UI</h3>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconCalendar} title="Calendar" size={'lg'} />
            <div className="sb-list__item__title">Calendar</div>
          </div>
          <div className="sb-code--styled">IconCalendar</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconCheck} title="Check" size={'lg'} />
            <div className="sb-list__item__title">Check</div>
          </div>
          <div className="sb-code--styled">IconCheck</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconClose} title="Close" size={'lg'} />
            <div className="sb-list__item__title">Close</div>
          </div>
          <div className="sb-code--styled">IconClose</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconEdit} title="Edit" size={'lg'} />
            <div className="sb-list__item__title">Edit</div>
          </div>
          <div className="sb-code--styled">IconEdit</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconLock} title="Lock" size={'lg'} />
            <div className="sb-list__item__title">Lock</div>
          </div>
          <div className="sb-code--styled">IconLock</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconMenu} title="Menu" size={'lg'} />
            <div className="sb-list__item__title">Menu</div>
          </div>
          <div className="sb-code--styled">IconMenu</div>
        </div>

        <h3 className="sb-heading__3">Socials</h3>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconFacebook} title="Facebook" size={'lg'} />
            <div className="sb-list__item__title">Facebook</div>
          </div>
          <div className="sb-code--styled">IconFacebook</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconInstagram} title="Instagram" size={'lg'} />
            <div className="sb-list__item__title">Instagram</div>
          </div>
          <div className="sb-code--styled">IconInstagram</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconMail} title="Mail" size={'lg'} />
            <div className="sb-list__item__title">Mail</div>
          </div>
          <div className="sb-code--styled">IconMail</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconTikTok} title="TikTok" size={'lg'} />
            <div className="sb-list__item__title">TikTok</div>
          </div>
          <div className="sb-code--styled">IconTikTok</div>
        </div>

        <h3 className="sb-heading__3">Files</h3>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconJPG} title="JPG" size={'lg'} />
            <div className="sb-list__item__title">JPG files</div>
          </div>
          <div className="sb-code--styled">IconJPG</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconPDF} title="JPG" size={'lg'} />
            <div className="sb-list__item__title">PDF files</div>
          </div>
          <div className="sb-code--styled">IconPDF</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconPNG} title="JPG" size={'lg'} />
            <div className="sb-list__item__title">PNG files</div>
          </div>
          <div className="sb-code--styled">IconPNG</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconPowerpoint} title="JPG" size={'lg'} />
            <div className="sb-list__item__title">Powerpoint files</div>
          </div>
          <div className="sb-code--styled">IconPowerpoint</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconWord} title="JPG" size={'lg'} />
            <div className="sb-list__item__title">Word files</div>
          </div>
          <div className="sb-code--styled">IconWord</div>
        </div>

        <div className="sb-list__item">
          <div className="sb-list__item__cell">
            <Icon icon={IconUnknownFile} title="JPG" size={'lg'} />
            <div className="sb-list__item__title">Unknown files</div>
          </div>
          <div className="sb-code--styled">IconUnknownFile</div>
        </div>
      </div>
    </>
  );
};

const IconStory = {
  title: '3 Components / Atoms / Icons',
  component: IconList,
  subcomponents: { Icon },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'The title on the input',
      control: { type: 'text' },
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the icon',
    },
    icon: {
      description: 'The icon to display',
      control: { type: 'text' },
    },
  },
};

export default IconStory;

const Template = ({ size = 'md', title = 'Arrow down' }: IconProps) => (
  <Icon icon={IconArrowDown} title={title} size={size} />
);
const AllIconsTemplate = () => <IconList />;

export const Default = Template.bind({});

export const AllIcons = AllIconsTemplate.bind({});
