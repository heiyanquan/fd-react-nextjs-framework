import { memo } from 'react';
import { Input } from 'antd';

const HsAdminInput = (props: any) => {
  const { TextArea, Search, Password, ...rest } = props;
  if (TextArea) {
    return <Input.TextArea allowClear showCount {...rest}></Input.TextArea>;
  } else if (Search) {
    return <Input.Search allowClear showCount {...rest}></Input.Search>;
  } else if (Password) {
    return (
      <Input.Password
        allowClear
        showCount
        show-password-on='mousedown'
        {...rest}
      ></Input.Password>
    );
  } else {
    return <Input allowClear showCount {...rest}></Input>;
  }
};

export default memo(HsAdminInput);
