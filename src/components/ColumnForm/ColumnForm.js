import styles from './ColumnForm.module.scss';
import Button from './../Button/Button.js';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';

const ColumnForm = props => {
    const [value, setValue] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: value, icon: icon });
        setValue('');
        setIcon('');
    };

	return (
        <form className={styles.ColumnForm} onSubmit={handleSubmit} >
           <span className={styles.spanTitle}>Title:</span><TextInput value={value} onChange={e => setValue(e.target.value)} />
           <span className={styles.spanTitle}>Icon:</span> <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
</form>
	);
};

export default ColumnForm;