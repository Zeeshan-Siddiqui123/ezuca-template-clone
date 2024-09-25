import React from 'react';
import { Button , Drawer} from 'antd';
import { useState } from 'react';
import {IoMdMenu } from 'react-icons/io';

const Toggle= () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showLoading}
        style={{ backgroundColor: 'transparent', color: 'white' }}
      >
       <IoMdMenu size={50} color='white' />

      </Button>
      <Drawer
        closable
        destroyOnClose
        title={<p>Loading Drawer</p>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        <Button
          style={{
            marginBottom: 16,
            backgroundColor: '#19c880',
            color: 'white',
          }}
          onClick={showLoading}
        >
          Reload
        </Button>
        <p>Home</p>
        <p>About</p>
        <p>Courses</p>
        <p>Blog</p>
        <p>Contact</p>
      </Drawer>
    </>
  );
};

export default Toggle;
