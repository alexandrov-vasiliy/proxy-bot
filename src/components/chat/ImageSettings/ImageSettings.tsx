import { NumberInput, Select } from '@mantine/core';
import { IMAGE_QUALITY, IMAGE_SIZES, IMAGE_STYLES } from '@/constants';

export default function ImageSettings() {
    return (
        <>
            <Select
              maw={150}
              label="sizes"
              allowDeselect={false}
              comboboxProps={{ position: 'top' }}
              data={IMAGE_SIZES}
              name="size"
            />
            <Select
              maw={150}
              label="quality"
              allowDeselect={false}
              comboboxProps={{ position: 'top' }}
              data={IMAGE_QUALITY}
              name="quality"
            />
            <Select
              maw={150}
              label="style"
              allowDeselect={false}
              comboboxProps={{ position: 'top' }}
              data={IMAGE_STYLES}
              name="style"
            />
            <NumberInput maw={60} label="quantity" name="quantity" />
        </>

    );
}
