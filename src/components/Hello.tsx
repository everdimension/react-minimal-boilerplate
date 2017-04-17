import * as React from 'react';
import 'antd/dist/antd.css'
import { Button } from 'antd';

export interface HelloProps { name: string; }

console.log('hey, hello');

export default function Hello ({ name }: HelloProps) {
  return (
    <div>
      <p>App is working. Hi, {name}</p>
      <p>
        <Button ghost type="primary">anything...</Button>
      </p>
    </div>
  );
}
