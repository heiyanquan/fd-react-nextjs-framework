import { memo } from 'react';
import { Input } from 'antd';

const HsAdminInput = (props: any) => {
  const { TextArea, Search, Password, ...rest } = props;
  if (TextArea) {
    return <Input.TextArea allowClear {...rest}></Input.TextArea>;
  } else if (Search) {
    return <Input.Search allowClear {...rest}></Input.Search>;
  } else if (Password) {
    return (
      <Input.Password
        allowClear
        show-password-on='mousedown'
        {...rest}
      ></Input.Password>
    );
  } else {
    return <Input allowClear {...rest}></Input>;
  }
};

export default memo(HsAdminInput);
