import React from 'react';
import {
  Typography,
  Link,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: '0 16px',
  },

}));

export default function () {
  const styles = useStyles();
  console.log('custom events styles', styles);
  return (
    <div className={styles.root}>
      <Typography variant='h6'>
        自定义事件
      </Typography>
      <span>自定义事件的应用场景是什么呢？</span>
      <Link
        href='https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events'
        target='_blank'
        rel='noreferer'
      >
        [参考：MDN-创建和触发事件]
      </Link>
    </div>
  )
}