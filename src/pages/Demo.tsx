import { useState, useTransition } from 'react';

import AboutTab from './AboutTab';
import ContactTab from './ContactTab';
import PostsTab from './PostsTab';
import TabButton from './TabButton';
import React from 'react';

type Tab = 'about' | 'posts' | 'contact';

const Demo = () => {
  const [tab, setTab] = useState<Tab>('about');

  const selectTab = (tab: Tab) => {
    setTab(tab);
  };

  return (
    <div className='tutorial'>
      <div style={{
        marginBottom: '4px',
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'center',
        gap: '4px'
      }}>
        <TabButton
          title='About'
          onClick={() => selectTab('about')}
          variant={
            tab === 'about' ? '#0080FF' : '#347C98'
          }
        />
        <TabButton
          title='Posts'
          onClick={() => selectTab('posts')}
          variant={
            tab === 'posts' ? '#0080FF' : '#347C98'
          }
        />
        <TabButton
          title='Contact'
          onClick={() => selectTab('contact')}
          variant={
            tab === 'contact' ? '#0080FF' : '#347C98'
          }
        />
      </div>

      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </div>
  );
};

export default Demo;