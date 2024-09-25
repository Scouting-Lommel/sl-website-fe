'use client';

import React, { useState } from 'react';
import cx from 'classnames';
import Tab from './Tab';
import { Tabs as TabsProps, Tab as TabProps } from './types';
import styles from './Tabs.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = TabsProps & React.HTMLAttributes<HTMLElement>;

const Tabs = ({ children }: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="tabs">
      <div className="tabs__list">
        {React.Children.map(children, (child, index) => (
          <button
            className={cx(
              'tabs__list__btn',
              activeTab === index ? 'tabs__list__btn--active' : 'tabs__list__btn--inactive',
            )}
            onClick={() => setActiveTab(index)}
          >
            {(child as React.ReactElement<TabProps>).props.label}
          </button>
        ))}
      </div>
      <div className="tabs__tab">{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

export { Tab, Tabs };
export default Tabs;
